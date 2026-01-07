import { TileSize, TileSizeName } from '@/types/tiles';

export const GRID_COLUMNS = 6;
export const GRID_ROWS = 6;

export const TILE_SIZES: Record<TileSizeName, TileSize> = {
    '1x1': { name: '1x1', width: 1, height: 1, label: 'Small' },
    '1x2': { name: '1x2', width: 1, height: 2, label: 'Vertical' },
    '2x1': { name: '2x1', width: 2, height: 1, label: 'Horizontal' },
    '2x2': { name: '2x2', width: 2, height: 2, label: 'Large' },
    '4x1': { name: '4x1', width: 4, height: 1, label: 'Wide Header' },
    '4x2': { name: '4x2', width: 4, height: 2, label: 'Wide Medium' },
    '4x4': { name: '4x4', width: 4, height: 4, label: 'Large Square' },
    '6x1': { name: '6x1', width: 6, height: 1, label: 'Full Width Header' },
    '6x2': { name: '6x2', width: 6, height: 2, label: 'Full Width' },
    '6x2-gallery': { name: '6x2-gallery', width: 6, height: 2, label: 'Gallery' },
    '6x4': { name: '6x4', width: 6, height: 4, label: 'Hero Gallery' },
    '6x4-var2': { name: '6x4-var2', width: 6, height: 4, label: 'Hero Gallery V2' },
} as const;

export const DEFAULT_TILE_SIZE = TILE_SIZES['1x1'];
