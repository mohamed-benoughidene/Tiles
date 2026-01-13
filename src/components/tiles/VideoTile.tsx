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
                    className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity"
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
                        allowedSizes={[
                            TILE_SIZES['2x2'].name,
                            TILE_SIZES['4x4'].name,
                            TILE_SIZES['6x4'].name
                        ]}
                    />
                </div>
            )}
            {/* Delete Button (Top Left) */}
            {!readOnly && (
                <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-3 -left-3 z-30">
                    <button
                        className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 rounded-lg p-1.5 shadow-sm transition-colors cursor-pointer"
                        onClick={(e) => {
                            e.stopPropagation();
                            onRemove?.();
                        }}
                        onPointerDown={e => e.stopPropagation()}
                        onMouseDown={e => e.stopPropagation()}
                        onTouchStart={e => e.stopPropagation()}
                    >
                        <span className="material-symbols-outlined text-lg block">delete</span>
                    </button>
                </div>
            )}
        </div>
    );
}
