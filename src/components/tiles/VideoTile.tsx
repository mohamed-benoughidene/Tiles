import React from 'react';
import { TileSize } from '@/types/tiles';
import { TILE_SIZES } from '@/lib/tileConstants';
import { TileToolbar } from '@/components/editor/TileToolbar';
import { VideoTileContent } from './video/VideoTileContent';

interface VideoTileProps {
    id: string;
    title?: string;
    url?: string;
    size: string;
    onResize?: (id: string, size: TileSize) => void;
    onRemove?: () => void;
}

export function VideoTile({ id, title, url, size, onResize, onRemove, readOnly }: VideoTileProps & { readOnly?: boolean }) {
    // We render the same content for all sizes as requested
    const renderContent = () => {
        return <VideoTileContent src={url} />;
    };

    return (
        <div className="group relative h-full w-full">
            {renderContent()}

            {/* Resize/Action Menu (Bottom Center) - Visible on Hover */}
            {!readOnly && (
                <div
                    className="absolute -bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none group-hover:pointer-events-auto"
                    onPointerDown={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                >
                    <TileToolbar
                        currentSize={size}
                        onResize={(newSizeName) => {
                            const newSizeObj = Object.values(TILE_SIZES).find(s => s.name === newSizeName);
                            if (newSizeObj && onResize) {
                                onResize(id, newSizeObj);
                            }
                        }}
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
                                id: '2x4',
                                label: 'Stack',
                                icon: (
                                    <svg width="14" height="18" viewBox="0 0 14 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="1" y="2" width="12" height="20" rx="2" ry="2"></rect>
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
                            },
                            {
                                id: '4x4',
                                label: 'Large',
                                icon: (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    </svg>
                                )
                            }
                        ]}
                    />
                </div>
            )}
            {/* Delete Button (Top Left) */}
            {!readOnly && (
                <div className="absolute -top-3 -left-3 flex gap-2 z-50 opacity-0 group-hover:opacity-100 transition-opacity scale-100 active:scale-95 duration-200">
                    <button
                        className="w-8 h-8 rounded-lg bg-white dark:bg-zinc-950 text-zinc-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-center"
                        onClick={(e) => {
                            e.stopPropagation();
                            onRemove?.();
                        }}
                        onPointerDown={e => e.stopPropagation()}
                        onMouseDown={e => e.stopPropagation()}
                        onTouchStart={e => e.stopPropagation()}
                        title="Delete Tile"
                    >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                </div>
            )}
        </div>
    );
}
