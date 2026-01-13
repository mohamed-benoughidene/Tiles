import React from 'react';
import { TileSizeName } from '@/types/tiles';
import { TILE_SIZES } from '@/lib/tileConstants';
import { TileToolbar } from '@/components/editor/TileToolbar';

import { GalleryTile4x4 } from './gallery/GalleryTile4x4';
import { GalleryTile6x4 } from './gallery/GalleryTile6x4';
import { GalleryTile6x4Variation2 } from './gallery/GalleryTile6x4Variation2';


interface GalleryTileProps {
    id?: string;
    size: TileSizeName;
    onResize: (id: string, size: any) => void;
    onRemove: () => void;
    readOnly?: boolean;
}

export function GalleryTile({ id = '', size, onResize, onRemove, readOnly }: GalleryTileProps) {
    const renderContent = () => {
        switch (size) {
            case '4x4':
                return <GalleryTile4x4 readOnly={readOnly} />;
            case '6x4':
                return <GalleryTile6x4 readOnly={readOnly} />;
            case '6x4-var2':
                return <GalleryTile6x4Variation2 readOnly={readOnly} />;
            default:
                return <GalleryTile4x4 readOnly={readOnly} />;
        }
    };

    const allowedSizes: TileSizeName[] = ['4x4', '6x4', '6x4-var2'];

    return (
        <div className="group relative h-full w-full cursor-pointer">
            {renderContent()}

            {/* DELETE BUTTON */}
            {!readOnly && (
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
            )}

            {/* TOOLBAR */}
            {!readOnly && (
                <div
                    className="absolute -bottom-10 left-1/2 z-50 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100"
                    onPointerDown={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                >
                    <TileToolbar
                        currentSize={size}
                        onResize={(newSizeName) => {
                            const newSizeObj = Object.values(TILE_SIZES).find((s) => s.name === newSizeName);
                            if (newSizeObj) {
                                onResize(id, newSizeObj);
                            }
                        }}
                        allowedSizes={allowedSizes}
                    />
                </div>
            )}
        </div>
    );
}
