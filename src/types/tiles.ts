export type TileSizeName = '1x1' | '1x2' | '2x1' | '2x2' | '4x1' | '4x2' | '4x4' | '6x1' | '6x2' | '6x4' | '6x2-gallery' | '6x4-var2';

export interface TileSize {
    name: TileSizeName;
    width: number;
    height: number;
    label: string;
}

export interface TilePosition {
    row: number;
    col: number;
}

export interface Tile {
    id: string;
    size: TileSize;
    position: TilePosition;
    type?: string;
    content?: {
        text?: string;
        icon?: string;
        color?: string;
        url?: string;
        [key: string]: any;
    };
}
