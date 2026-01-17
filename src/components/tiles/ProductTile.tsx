import React, { useState } from 'react';
import { TileSizeName } from '@/types/tiles';
import { TILE_SIZES } from '@/lib/tileConstants';
import { TileToolbar } from '@/components/editor/TileToolbar';

import { ProductTile1x2 } from './product/ProductTile1x2';
import { ProductTile2x2 } from './product/ProductTile2x2';
import { ProductTile4x2 } from './product/ProductTile4x2';
import { ProductTile2x4 } from './product/ProductTile2x4';
import { ProductTile4x4 } from './product/ProductTile4x4';

interface ProductTileProps {
    id?: string;
    size: TileSizeName;
    onResize: (id: string, size: any) => void;
    onRemove: () => void;
    data?: {
        title?: string;
        price?: string;
        image?: string;
        description?: string;
        layout?: 'classic' | 'minimal' | 'showcase';
        [key: string]: any;
    };
    readOnly?: boolean;
}

export function ProductTile({ id = '', size, onResize, onRemove, data, readOnly = false }: ProductTileProps) {
    // Local state for identifying layout and content changes
    const [content, setContent] = useState({
        title: data?.title || "",
        price: data?.price || "",
        image: data?.image || "",
        description: data?.description || "",
        layout: (data as any)?.layout || 'classic',
    });

    const handleUpdate = (updates: Partial<typeof content>) => {
        setContent(prev => ({ ...prev, ...updates }));
    };

    const renderContent = () => {
        const props = { data: content, onUpdate: handleUpdate, readOnly, layout: content.layout as any };
        switch (size) {
            case '1x2':
                return <ProductTile1x2 {...props} />;
            case '2x2':
                return <ProductTile2x2 {...props} />;
            case '2x4':
                return <ProductTile2x4 {...props} />;
            case '4x2':
                return <ProductTile4x2 {...props} />;
            case '4x4':
                return <ProductTile4x4 {...props} />;
            default:
                return <ProductTile2x2 {...props} />;
        }
    };

    const allowedSizes: TileSizeName[] = ['1x2', '2x2', '2x4', '4x2', '4x4'];

    return (
        <div className="group relative h-full w-full cursor-pointer">
            {renderContent()}

            {/* Action Buttons (Top Left) */}
            {!readOnly && (
                <div className="absolute -top-3 -left-3 flex gap-2 z-50 opacity-0 group-hover:opacity-100 transition-opacity scale-100 active:scale-95 duration-200">
                    {/* Delete Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onRemove();
                        }}
                        onPointerDown={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        className="w-8 h-8 rounded-lg bg-white dark:bg-zinc-950 text-zinc-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-center"
                        title="Delete Tile"
                    >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>

                    {/* Edit Button (Placeholder for future deep link/modal) */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            // Logic for opening detailed edit modal if needed
                        }}
                        className="w-8 h-8 rounded-lg bg-white dark:bg-zinc-950 text-zinc-400 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-center"
                        title="Edit Product Details"
                    >
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                    </button>
                </div>
            )}

            {/* TOOLBAR */}
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
                            const newSizeObj = Object.values(TILE_SIZES).find((s) => s.name === newSizeName);
                            if (newSizeObj) {
                                onResize(id, newSizeObj);
                            }
                        }}
                        sizeOptions={[
                            {
                                id: '1x2',
                                label: 'Tiny',
                                icon: (
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    </svg>
                                )
                            },
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
                        allowedSizes={allowedSizes}
                        currentLayout={content.layout}
                        onLayoutChange={(layout) => handleUpdate({ layout: layout as any })}
                        layoutOptions={[
                            { id: 'classic', icon: 'splitscreen_left', label: 'Classic' },
                            { id: 'minimal', icon: 'crop_square', label: 'Minimal' },
                            { id: 'showcase', icon: 'auto_awesome_mosaic', label: 'Showcase' },
                        ]}
                    />
                </div>
            )}
        </div>
    );
}
