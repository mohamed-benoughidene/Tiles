import React from 'react';
import { TileSizeName } from '@/types/tiles';
import { TILE_SIZES } from '@/lib/tileConstants';
import { TileToolbar } from '@/components/editor/TileToolbar';

import { ProductTile2x2 } from './product/ProductTile2x2';
import { ProductTile4x2 } from './product/ProductTile4x2';
import { ProductTile4x4 } from './product/ProductTile4x4';
import { ProductTile6x2 } from './product/ProductTile6x2';
import { ProductGalleryTile6x2 } from './product/ProductGalleryTile6x2';
import { ProductTile6x4 } from './product/ProductTile6x4';

interface ProductTileProps {
    id?: string;
    size: TileSizeName;
    onResize: (id: string, size: any) => void;
    onRemove: () => void;
    data?: {
        variant?: 'gallery' | string;
        [key: string]: any;
    };
}

export function ProductTile({ id = '', size, onResize, onRemove, data }: ProductTileProps) {
    const renderContent = () => {
        switch (size) {
            case '2x2':
                return <ProductTile2x2 />;
            case '4x2':
                return <ProductTile4x2 />;
            case '4x4':
                return <ProductTile4x4 />;
            case '6x2':
                if (data?.variant === 'gallery') {
                    return <ProductGalleryTile6x2 />;
                }
                return <ProductTile6x2 />;
            case '6x2-gallery':
                return <ProductGalleryTile6x2 />;
            case '6x4':
                return <ProductTile6x4 />;
            default:
                return <ProductTile2x2 />;
        }
    };

    const allowedSizes: TileSizeName[] = ['2x2', '4x2', '4x4', '6x2', '6x2-gallery', '6x4'];

    return (
        <div className="group relative h-full w-full cursor-pointer">
            {renderContent()}

            {/* DELETE BUTTON */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-3 -left-3 z-50">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onRemove();
                    }}
                    onPointerDown={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 rounded-lg p-1.5 shadow-sm transition-colors cursor-pointer"
                >
                    <span className="material-symbols-outlined text-lg block">delete</span>
                </button>
            </div>

            {/* TOOLBAR */}
            <div
                className="absolute -bottom-10 left-1/2 z-50 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100"
                onPointerDown={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
            >
                <TileToolbar
                    currentSize={size}
                    onResize={(newSizeName) => {
                        // Handle variant switching via size
                        if (newSizeName === '6x2-gallery') {
                            // If user selects gallery, we want size 6x2 but with variant='gallery'
                            // However, our system relies on size name match.
                            // If we pass '6x2-gallery' objects, does RGL handle it? 
                            // Yes, if we defined it in TILE_SIZES with same W/H.
                            const newSizeObj = TILE_SIZES['6x2-gallery']; // Direct access since we added it
                            if (newSizeObj) {
                                onResize(id, newSizeObj);
                            }
                        } else {
                            const newSizeObj = Object.values(TILE_SIZES).find((s) => s.name === newSizeName);
                            if (newSizeObj) {
                                onResize(id, newSizeObj);
                            }
                        }
                    }}
                    allowedSizes={allowedSizes}
                />
            </div>
        </div>
    );
}
