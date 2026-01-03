import { GRID_CONFIG } from './gridConfig';
import { DragEndEvent } from '@dnd-kit/core';
import { TilePosition } from '@/types/tiles';

export const calculateGridPosition = (
    deltaX: number,
    deltaY: number,
    currentPosition: TilePosition,
    gridConfig: { cellWidth: number; cellHeight: number; gap: number }
): TilePosition => {
    const colDelta = Math.round(deltaX / (gridConfig.cellWidth + gridConfig.gap));
    const rowDelta = Math.round(deltaY / (gridConfig.cellHeight + gridConfig.gap));

    return {
        row: currentPosition.row + rowDelta,
        col: currentPosition.col + colDelta,
    };
};

export const snapToGrid = (
    x: number,
    y: number,
    gridConfig: { cellWidth: number; cellHeight: number; gap: number }
) => {
    // This might be needed if we were doing custom drag overlay positioning
    // For now, we rely on CSS grid for placement, and just need to calculate the target cell
    return { x, y };
}
