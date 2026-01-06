import React from 'react';
import { TileSizeName, TileSize } from '@/types/tiles';
import { NoteTile6x4 } from './note/NoteTile6x4';
import { NoteTile4x4 } from './note/NoteTile4x4';
import { TileToolbar } from '@/components/editor/TileToolbar';

interface NoteTileProps {
    title?: string;
    size: TileSizeName;
    onResize?: (size: TileSizeName) => void;
    onRemove?: () => void;
}

const ALLOWED_SIZES: TileSizeName[] = ['4x4', '6x4'];

export function NoteTile({ title, size, onResize, onRemove }: NoteTileProps) {
    const renderContent = () => {
        switch (size) {
            case '6x4':
                return <NoteTile6x4 />;
            case '4x4':
                return <NoteTile4x4 />;
            default:
                // Fallback to closest size or default
                return <NoteTile4x4 />;
        }
    };

    return (
        <div className="group relative h-full w-full cursor-pointer">
            {renderContent()}

            {/* DELETE BUTTON */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-3 -left-3 z-30">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onRemove?.();
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
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                onPointerDown={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
            >
                <TileToolbar
                    currentSize={size}
                    onResize={onResize}
                    allowedSizes={ALLOWED_SIZES}
                />
            </div>
        </div>
    );
}
