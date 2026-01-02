import { useState, useCallback } from 'react';
import { Tile, TilePosition, TileSize } from '@/types/tiles';
import { GRID_CONFIG } from '@/lib/gridConfig';
import { DEFAULT_TILE_SIZE } from '@/lib/tileConstants';

export function useGridState() {
    const [tiles, setTiles] = useState<Tile[]>([
        // Initial sample tiles
        {
            id: 'sample-1',
            size: DEFAULT_TILE_SIZE,
            position: { row: 1, col: 1 },
            content: { type: 'text', text: 'Hello' }
        },
        {
            id: 'sample-2',
            size: DEFAULT_TILE_SIZE,
            position: { row: 1, col: 3 },
            content: {}
        },
        {
            id: 'sample-3',
            size: { ...DEFAULT_TILE_SIZE, width: 2 },
            position: { row: 3, col: 2 },
            content: {}
        }
    ]);
    const [selectedTileId, setSelectedTileId] = useState<string | null>(null);

    const isPositionOccupied = useCallback((position: TilePosition, size: TileSize, excludeTileId?: string) => {
        return tiles.some(tile => {
            if (tile.id === excludeTileId) return false;

            const tileRight = tile.position.col + tile.size.width;
            const tileBottom = tile.position.row + tile.size.height;
            const newRight = position.col + size.width;
            const newBottom = position.row + size.height;

            const isOverlapping = !(
                position.col >= tileRight ||
                newRight <= tile.position.col ||
                position.row >= tileBottom ||
                newBottom <= tile.position.row
            );

            return isOverlapping;
        });
    }, [tiles]);

    const addTile = useCallback((size: TileSize, position?: TilePosition) => {
        // If no position provided, find first available spot
        let targetPos = position;
        if (!targetPos) {
            for (let r = 1; r <= GRID_CONFIG.rows; r++) {
                for (let c = 1; c <= GRID_CONFIG.columns; c++) {
                    const potentialPos = { row: r, col: c };
                    // Check if fits within bounds
                    if (c + size.width - 1 > GRID_CONFIG.columns || r + size.height - 1 > GRID_CONFIG.rows) continue;

                    if (!isPositionOccupied(potentialPos, size)) {
                        targetPos = potentialPos;
                        break;
                    }
                }
                if (targetPos) break;
            }
        }

        if (!targetPos) {
            console.warn('No space available for new tile');
            return; // Could not find space
        }

        const newTile: Tile = {
            id: crypto.randomUUID(),
            size,
            position: targetPos,
        };

        setTiles(prev => [...prev, newTile]);
        setSelectedTileId(newTile.id);
    }, [tiles, isPositionOccupied]);

    const removeTile = useCallback((id: string) => {
        setTiles(prev => prev.filter(t => t.id !== id));
        if (selectedTileId === id) setSelectedTileId(null);
    }, [selectedTileId]);

    const moveTile = useCallback((id: string, newPosition: TilePosition) => {
        setTiles(prev => {
            const tile = prev.find(t => t.id === id);
            if (!tile) return prev;

            // Basic bound check
            if (newPosition.col < 1 || newPosition.row < 1 ||
                newPosition.col + tile.size.width - 1 > GRID_CONFIG.columns ||
                newPosition.row + tile.size.height - 1 > GRID_CONFIG.rows) {
                return prev;
            }

            // Overlap check
            if (isPositionOccupied(newPosition, tile.size, id)) {
                return prev;
            }

            return prev.map(t => t.id === id ? { ...t, position: newPosition } : t);
        });
    }, [isPositionOccupied]);

    const resizeTile = useCallback((id: string, newSize: TileSize) => {
        setTiles(prev => {
            const tile = prev.find(t => t.id === id);
            if (!tile) return prev;

            // Check bounds
            if (tile.position.col + newSize.width - 1 > GRID_CONFIG.columns ||
                tile.position.row + newSize.height - 1 > GRID_CONFIG.rows) {
                console.warn('Resize exceeds grid bounds');
                return prev;
            }

            // Check overlap
            if (isPositionOccupied(tile.position, newSize, id)) {
                console.warn('Resize causes overlap');
                return prev;
            }

            return prev.map(t => t.id === id ? { ...t, size: newSize } : t);
        });
    }, [isPositionOccupied]);

    return {
        tiles,
        selectedTileId,
        setSelectedTileId,
        addTile,
        removeTile,
        moveTile,
        resizeTile
    };
}
