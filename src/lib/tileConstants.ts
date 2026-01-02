import { TileSize, TileSizeName } from '@/types/tiles';

export const GRID_COLUMNS = 6;
export const GRID_ROWS = 6;

export const TILE_SIZES: Record<TileSizeName, TileSize> = {
    '1x1': { name: '1x1', width: 1, height: 1, label: 'Small' },
    '1x2': { name: '1x2', width: 1, height: 2, label: 'Vertical' },
    '2x1': { name: '2x1', width: 2, height: 1, label: 'Horizontal' },
    '2x2': { name: '2x2', width: 2, height: 2, label: 'Large' },
} as const;

export const DEFAULT_TILE_SIZE = TILE_SIZES['1x1'];
