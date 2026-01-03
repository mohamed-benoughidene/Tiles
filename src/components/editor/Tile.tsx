'use client';

import { Tile as TileType, TileSize } from '@/types/tiles';
import { useDraggable } from '@dnd-kit/core';
import { BentoTile } from './BentoTile';

interface TileProps {
    tile: TileType;
    isSelected: boolean;
    onSelect: (id: string) => void;
    onResize?: (id: string, size: TileSize) => void;
    onDelete?: (id: string) => void;
}

export function Tile({ tile, isSelected, onSelect, onResize, onDelete }: TileProps) {
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: tile.id,
        data: tile,
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        zIndex: isDragging ? 50 : undefined,
    } : undefined;

    return (
        <div
            ref={setNodeRef}
            style={{
                ...style,
                gridColumn: `${tile.position.col + 1} / span ${tile.size.width}`, // +1 because grid lines are 1-based
                gridRow: `${tile.position.row + 1} / span ${tile.size.height}`,
            }}
            className={`
        relative rounded-[2rem] transition-all duration-200 
        ${isSelected ? 'z-30' : 'z-10 hover:z-[60]'}
        ${isDragging ? 'opacity-50 shadow-2xl z-50' : ''}
      `}
            onClick={(e) => {
                if (!isDragging) {
                    onSelect(tile.id);
                }
            }}
            {...listeners}
            {...attributes}
        >
            <BentoTile
                tile={tile}
                isSelected={isSelected}
                onSelect={onSelect}
                onResize={onResize}
                onDelete={onDelete}
            />
        </div>
    );
}
