import React from 'react';
import { MapTile2x2 } from './Map/MapTile2x2';
import { MapTile4x2 } from './Map/MapTile4x2';
import { TileToolbar } from '@/components/editor/TileToolbar';

interface MapTileProps {
    title?: string;
    size: string;
    onResize?: (sizeName: string) => void;
    onRemove?: () => void;
    readOnly?: boolean;
}

export function MapTile({ title, size, onResize, onRemove, readOnly }: MapTileProps) {
    const renderContent = () => {
        switch (size) {
            case '2x2':
                return <MapTile2x2 readOnly={readOnly} />;
            case '4x2':
                return <MapTile4x2 readOnly={readOnly} />;
            default:
                return <MapTile2x2 readOnly={readOnly} />;
        }
    };

    return (
        <div className="group relative h-full w-full cursor-pointer">
            {renderContent()}

            {/* DELETE BUTTON */}
            {!readOnly && (
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
            )}

            {/* TOOLBAR */}
            {!readOnly && (
                <div
                    className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0"
                    onPointerDown={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                >
                    <TileToolbar
                        currentSize={size}
                        onResize={(newSize) => onResize?.(newSize)}
                        sizeOptions={[
                            {
                                id: '2x2',
                                label: 'Square',
                                icon: (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    </svg>
                                )
                            },
                            {
                                id: '4x2',
                                label: 'Strip',
                                icon: (
                                    <svg width="18" height="14" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="1" width="20" height="12" rx="2" ry="2"></rect>
                                    </svg>
                                )
                            }
                        ]}
                    />
                </div>
            )}
        </div>
    );
}
