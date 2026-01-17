import React from 'react';
import { TileSizeName } from '@/types/tiles';
import { TILE_SIZES } from '@/lib/tileConstants';
import { TileToolbar } from '@/components/editor/TileToolbar';

import { GalleryTile4x4 } from './gallery/GalleryTile4x4';
import { GalleryTile2x4 } from './gallery/GalleryTile2x4';
import { GalleryTile4x2 } from './gallery/GalleryTile4x2';
import { GalleryTile2x2 } from './gallery/GalleryTile2x2';


interface GalleryTileProps {
    id?: string;
    data: any;
    onUpdate: (data: any) => void;
    size: TileSizeName;
    onResize: (id: string, size: any) => void;
    onRemove: () => void;
    readOnly?: boolean;
}

export function GalleryTile({ id = '', data, onUpdate, size, onResize, onRemove, readOnly }: GalleryTileProps) {
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const triggerUpload = () => {
        fileInputRef.current?.click();
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const currentImages = data.images || [];
            const newImages = Array.from(files).map((file) => ({
                id: crypto.randomUUID(),
                src: URL.createObjectURL(file),
                file: file,
            }));
            onUpdate({ ...data, images: [...currentImages, ...newImages] });
        }
    };

    const renderContent = () => {
        // Default to 'carousel' (or 'stack' for 2x4) if no layout specified
        const currentLayout = data.layout || (size === '2x4' ? 'stack' : 'carousel');
        const props = {
            data,
            onUpdate,
            readOnly,
            layout: currentLayout,
            onTriggerUpload: triggerUpload
        };

        switch (size) {
            case '2x2':
                return <GalleryTile2x2 {...props} />;
            case '2x4':
                return <GalleryTile2x4 {...props} />;
            case '4x2':
                return <GalleryTile4x2 {...props} />;
            case '4x4':
                return <GalleryTile4x4 {...props} />;
            default:
                return <GalleryTile4x4 {...props} />;
        }
    };

    const allowedSizes: TileSizeName[] = ['2x2', '2x4', '4x2', '4x4'];

    const getLayoutOptions = () => {
        if (size === '2x4') {
            return [
                { id: 'stack', icon: 'view_agenda', label: 'Stack' },
                { id: 'grid', icon: 'grid_view', label: 'Grid' },
            ];
        }
        // Default for others (Carousel vs Grid)
        return [
            { id: 'carousel', icon: 'view_carousel', label: 'Carousel' },
            { id: 'grid', icon: 'grid_view', label: 'Grid' },
        ];
    };

    return (
        <div className="group relative h-full w-full cursor-pointer">
            {renderContent()}

            {/* TILE ACTIONS (Top Left) - Delete & Add Image */}
            {!readOnly && (
                <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-3 -left-3 z-50 flex gap-2">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onRemove();
                        }}
                        onPointerDown={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 rounded-lg p-1.5 shadow-sm transition-colors cursor-pointer"
                        title="Delete Tile"
                    >
                        <span className="material-symbols-outlined text-lg block">delete</span>
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            triggerUpload();
                        }}
                        onPointerDown={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 rounded-lg p-1.5 shadow-sm transition-colors cursor-pointer"
                        title="Add Images"
                    >
                        <span className="material-symbols-outlined text-lg block">add_photo_alternate</span>
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
                                label: 'Gallery',
                                icon: (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    </svg>
                                )
                            }
                        ]}
                        currentLayout={data.layout || (size === '2x4' ? 'stack' : 'carousel')}
                        onLayoutChange={size === '2x2' ? undefined : (newLayout) => onUpdate({ ...data, layout: newLayout })}
                        layoutOptions={getLayoutOptions()}
                    />
                </div>
            )}
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
                onClick={(e) => (e.target as HTMLInputElement).value = ''}
            />
        </div>
    );
}
