'use client';

import { Tile } from '@/types/tiles';
import { GRID_CONFIG } from '@/lib/gridConfig';
import { Tile as TileComponent } from './Tile';

import {
    DndContext,
    DragEndEvent,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors
} from '@dnd-kit/core';
import { useState, useRef, useEffect } from 'react';
import { calculateGridPosition } from '@/lib/dndHelpers';

interface GridProps {
    tiles: Tile[];
    selectedTileId: string | null;
    onSelectTile: (id: string) => void;
    onTileMove: (id: string, position: { row: number, col: number }) => void;
    onResize?: (id: string, size: any) => void;
    onDelete?: (id: string) => void;
}

export function Grid({ tiles, selectedTileId, onSelectTile, onTileMove, onResize, onDelete }: GridProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [cellSize, setCellSize] = useState({ width: 0, height: 0 });

    const sensors = useSensors(
        useSensor(MouseSensor, {
            activationConstraint: { distance: 10 },
        }),
        useSensor(TouchSensor, {
            activationConstraint: { delay: 250, tolerance: 5 },
        })
    );

    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current) {
                const width = containerRef.current.offsetWidth;
                // Calculate cell size based on grid width, 6 columns, and gaps
                // width = 6 * cellWidth + 5 * gap + 2 * padding
                // Actually gridConfig gap is used for padding too in the style
                const effectiveWidth = width - (GRID_CONFIG.gap * 2); // Remove padding
                const singleCellWidth = (effectiveWidth - (GRID_CONFIG.gap * (GRID_CONFIG.columns - 1))) / GRID_CONFIG.columns;

                setCellSize({
                    width: singleCellWidth,
                    height: singleCellWidth, // Square cells
                });
            }
        };

        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, delta } = event;
        const tileId = active.id as string;
        const tile = tiles.find(t => t.id === tileId);

        if (tile && cellSize.width > 0) {
            const newPosition = calculateGridPosition(
                delta.x,
                delta.y,
                tile.position,
                { cellWidth: cellSize.width, cellHeight: cellSize.height, gap: GRID_CONFIG.gap }
            );

            onTileMove(tileId, newPosition);
        }
    };

    // Create an array of 36 cells for the background grid
    const cells = Array.from({ length: GRID_CONFIG.rows * GRID_CONFIG.columns }, (_, i) => i);

    return (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
            <div
                ref={containerRef}
                className="relative w-full aspect-square max-w-2xl mx-auto"
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${GRID_CONFIG.columns}, 1fr)`,
                    gridTemplateRows: `repeat(${GRID_CONFIG.rows}, 1fr)`,
                    gap: `${GRID_CONFIG.gap}px`,
                    padding: `${GRID_CONFIG.gap}px`,
                }}
            >
                {/* Background Grid Cells */}
                {cells.map((i) => (
                    <div
                        key={`cell-${i}`}
                        className="w-full h-full rounded-2xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800/50 dashed-border"
                    />
                ))}

                {/* Tiles Layer */}
                {tiles.map((tile) => (
                    <TileComponent
                        key={tile.id}
                        tile={tile}
                        isSelected={selectedTileId === tile.id}
                        onSelect={onSelectTile}
                        onResize={onResize}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </DndContext>
    );
}
