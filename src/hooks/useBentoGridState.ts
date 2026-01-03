import { useState, useCallback } from 'react';
import { Tile, TileSize } from '@/types/tiles';
import { TILE_SIZES, DEFAULT_TILE_SIZE } from '@/lib/tileConstants';
import { Layout } from 'react-grid-layout';

// Helper to generate a new layout item
const createLayoutItem = (id: string, size: TileSize, x: number = 0, y: number = Infinity): any => ({
    i: id,
    x,
    y, // Put at bottom by default
    w: size.width, // Map TileSize width to grid units
    h: size.height, // Map TileSize height to grid units
});

// Starter tiles - Bento Layout
const STARTER_TILES: Tile[] = [
    // --- Top Section ---
    {
        id: 'placeholder-photo',
        type: 'placeholder',
        size: TILE_SIZES['2x2'],
        position: { row: 0, col: 0 },
        content: { text: 'Add Photo', icon: 'image', color: 'purple' }
    },
    {
        id: 'placeholder-socials',
        type: 'placeholder',
        size: TILE_SIZES['1x2'],
        position: { row: 0, col: 2 },
        content: { text: 'Add Socials', icon: 'grid_view', color: 'pink' }
    },
    {
        id: 'placeholder-link',
        type: 'placeholder',
        size: TILE_SIZES['2x1'],
        position: { row: 0, col: 3 },
        content: { text: 'Add Link', icon: 'link', color: 'indigo' }
    },
    {
        id: 'placeholder-music',
        type: 'placeholder',
        size: TILE_SIZES['1x1'],
        position: { row: 0, col: 5 },
        content: { text: 'Add Music', icon: 'music_note', color: 'green' }
    },
    // Row 1 (Partial, filling gaps)
    {
        id: 'placeholder-text',
        type: 'placeholder',
        size: TILE_SIZES['2x1'],
        position: { row: 1, col: 3 }, // Below Link
        content: { text: 'Add Text', icon: 'title', color: 'zinc' }
    },
    {
        id: 'placeholder-video',
        type: 'placeholder',
        size: TILE_SIZES['1x1'],
        position: { row: 1, col: 5 }, // Below Music
        content: { text: 'Add Video', icon: 'movie', color: 'red' }
    },

    // --- Bottom Section ---
    {
        id: 'placeholder-map',
        type: 'placeholder',
        size: TILE_SIZES['2x2'],
        position: { row: 2, col: 0 },
        content: { text: 'Add Map', icon: 'map', color: 'blue' }
    },
    {
        id: 'placeholder-note',
        type: 'placeholder',
        size: TILE_SIZES['2x1'],
        position: { row: 2, col: 2 },
        content: { text: 'Add note...' }
    },
    {
        id: 'placeholder-pricing',
        type: 'placeholder',
        size: TILE_SIZES['1x1'],
        position: { row: 2, col: 4 },
        content: { text: 'Add Pricing', icon: 'payments', color: 'emerald' }
    },
    {
        id: 'placeholder-product',
        type: 'placeholder',
        size: TILE_SIZES['1x1'],
        position: { row: 2, col: 5 },
        content: { text: 'Add Product', icon: 'shopping_bag', color: 'orange' }
    },
];

export function useBentoGridState(initialTiles: Tile[] = []) {
    // If no initial tiles passed, use starter tiles (only if truly empty, but usually we want starter if nothing persisted)
    // For now, let's just default to STARTER_TILES if initialTiles is empty
    const effectiveInitialTiles = initialTiles.length > 0 ? initialTiles : STARTER_TILES;
    const [tiles, setTiles] = useState<Tile[]>(effectiveInitialTiles);
    const [selectedTileId, setSelectedTileId] = useState<string | null>(null);
    const [layouts, setLayouts] = useState<{ lg: any[], md: any[], sm: any[] }>({
        lg: effectiveInitialTiles.map((t) => createLayoutItem(t.id, t.size, t.position.col, t.position.row)),
        md: effectiveInitialTiles.map((t) => createLayoutItem(t.id, t.size, t.position.col, t.position.row)),
        sm: effectiveInitialTiles.map((t) => createLayoutItem(t.id, t.size, t.position.col, t.position.row))
    });

    // Handle layout changes from RGL
    // Use any[] for currentLayout to avoid type conflicts, we cast to our internal type for state
    const onLayoutChange = useCallback((currentLayout: any[], allLayouts: { lg: any[], md: any[], sm: any[] }) => {
        setLayouts(allLayouts);
        // We could sync 'x' and 'y' back to tile data if needed for persistence
    }, []);

    const addTile = useCallback((size: TileSize = DEFAULT_TILE_SIZE) => {
        const newTile: Tile = {
            id: `tile-${Date.now()}`,
            type: 'link', // Default type
            size: size,
            position: { row: 0, col: 0 }, // Placeholder, RGL handles actual layout
            content: { text: 'New Tile' } // Default content
        };

        setTiles(prev => [...prev, newTile]);

        // Add to layouts
        setLayouts(prev => ({
            lg: [...prev.lg, createLayoutItem(newTile.id, size)],
            md: [...prev.md, createLayoutItem(newTile.id, size)],
            sm: [...prev.sm, createLayoutItem(newTile.id, size)],
        }));
    }, []);

    const removeTile = useCallback((id: string) => {
        setTiles(prev => prev.filter(t => t.id !== id));
        setLayouts(prev => ({
            lg: prev.lg.filter(l => l.i !== id),
            md: prev.md.filter(l => l.i !== id),
            sm: prev.sm.filter(l => l.i !== id),
        }));
        if (selectedTileId === id) setSelectedTileId(null);
    }, [selectedTileId]);

    const updateTileSize = useCallback((id: string, newSize: TileSize) => {
        setTiles(prev => prev.map(t => t.id === id ? { ...t, size: newSize } : t));

        setLayouts(prev => ({
            lg: prev.lg.map(l => l.i === id ? { ...l, w: newSize.width, h: newSize.height } : l),
            md: prev.md.map(l => l.i === id ? { ...l, w: newSize.width, h: newSize.height } : l),
            sm: prev.sm.map(l => l.i === id ? { ...l, w: newSize.width, h: newSize.height } : l),
        }));
    }, []);

    return {
        tiles,
        setTiles,
        layouts,
        onLayoutChange,
        selectedTileId,
        setSelectedTileId,
        addTile,
        removeTile,
        updateTileSize,
        // Deprecated/Mapped for compatibility if needed, but RGL handles "move" implicitly
        reorderTiles: (oldIndex: number, newIndex: number) => { },
    };
}
