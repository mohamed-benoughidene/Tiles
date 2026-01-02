export type TileSizeName = '1x1' | '1x2' | '2x1' | '2x2';

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
    content?: any;
}
