import React from 'react';
import { MapTile2x2 } from './Map/MapTile2x2';
import { MapTile4x2 } from './Map/MapTile4x2';
import { TileToolbar } from '@/components/editor/TileToolbar';

interface MapTileProps {
    title?: string;
    size: string;
    onResize?: (sizeName: string) => void;
    onRemove?: () => void;
}

export function MapTile({ title, size, onResize, onRemove }: MapTileProps) {
    const renderContent = () => {
        switch (size) {
            case '2x2':
                return <MapTile2x2 />;
            case '4x2':
                return <MapTile4x2 />;
            default:
                return <MapTile2x2 />;
        }
    };

    return (
        <div className="group relative h-full w-full cursor-pointer">
            {renderContent()}

            {/* DELETE BUTTON */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-3 -left-3 z-30">
                <button
                    className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 rounded-lg p-1.5 shadow-sm transition-colors cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation();
                        onRemove?.();
                    }}
                    onPointerDown={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                >
                    <span className="material-symbols-outlined text-lg block">delete</span>
                </button>
            </div>

            {/* TOOLBAR */}
            <div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0"
                onPointerDown={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
            >
                <TileToolbar
                    currentSize={size}
                    onResize={(newSize) => onResize?.(newSize)}
                    allowedSizes={['2x2', '4x2']}
                />
            </div>
        </div>
    );
}
