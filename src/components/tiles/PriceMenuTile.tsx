import React, { useState } from 'react';
import { PriceMenuTile2x4 } from './PriceMenu/PriceMenuTile2x4';
import { PriceMenuTile4x4 } from './PriceMenu/PriceMenuTile4x4';
import { TileToolbar } from '@/components/editor/TileToolbar';
import { PriceMenuData } from '@/types/tiles';
import { PriceMenuSetupModal } from '@/components/modals/PriceMenuSetupModal';
import { IconPickerModal } from '@/components/modals/IconPickerModal';

interface PriceMenuTileProps {
    title?: string;
    size: string;
    onResize?: (sizeName: string) => void;
    onRemove?: () => void;
    data?: any;
}

const DEFAULT_DATA: PriceMenuData = {
    title: "Full Menu",
    iconName: 'UtensilsCrossed',
    categories: ["Hot Drinks", "Bakery"],
    items: [
        { id: '1', name: 'Latte', price: '$4.50', category: 'Hot Drinks' },
        { id: '2', name: 'Cappuccino', price: '$4.00', category: 'Hot Drinks' },
        { id: '3', name: 'Espresso', price: '$3.00', category: 'Hot Drinks' },
        { id: '4', name: 'Croissant', price: '$3.50', category: 'Bakery' },
        { id: '5', name: 'Blueberry Muffin', price: '$3.00', category: 'Bakery' },
    ]
};

export function PriceMenuTile({ title: initialTitle, size, onResize, onRemove, data: initialData, readOnly }: PriceMenuTileProps & { readOnly?: boolean }) {
    const [data, setData] = useState<PriceMenuData>(initialData || DEFAULT_DATA);
    const [layout, setLayout] = useState<'classic' | 'minimal'>((initialData as any)?.layout || 'classic');
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isIconPickerOpen, setIsIconPickerOpen] = useState(false);

    const handleUpdate = (newData: PriceMenuData) => {
        setData(newData);
    };

    const handleLayoutChange = (newLayout: 'classic' | 'minimal') => {
        setLayout(newLayout);
        // Persist layout if data structure supports it, or just local for now
        // Assuming we might want to save it with data later
    };

    const handleTitleChange = (newTitle: string) => {
        setData(prev => ({ ...prev, title: newTitle }));
    };

    const handleIconChange = (newIcon: string) => {
        setData(prev => ({ ...prev, iconName: newIcon }));
    };

    const renderContent = () => {
        const props = {
            data,
            layout,
            onTitleChange: handleTitleChange,
            onIconClick: () => setIsIconPickerOpen(true),
            readOnly
        };

        switch (size) {
            case '2x4':
                return <PriceMenuTile2x4 {...props} />;
            case '4x4':
                return <PriceMenuTile4x4 {...props} />;
            default:
                // Default fallback
                return <PriceMenuTile4x4 {...props} />;
        }
    };

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
                            onRemove?.();
                        }}
                        onPointerDown={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        className="w-9 h-9 rounded-lg bg-white dark:bg-zinc-950 text-zinc-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-center"
                    >
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                    </button>

                    {/* Edit Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsEditModalOpen(true);
                        }}
                        onPointerDown={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        className="w-9 h-9 rounded-lg bg-white dark:bg-zinc-950 text-zinc-400 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-center"
                    >
                        <span className="material-symbols-outlined text-[20px]">edit</span>
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
                        allowedSizes={['2x4', '4x4']}
                        sizeOptions={[
                            {
                                id: '2x4',
                                label: 'Vertical Bar',
                                icon: (
                                    <svg width="14" height="18" viewBox="0 0 14 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="1" y="2" width="12" height="20" rx="2" ry="2"></rect>
                                    </svg>
                                )
                            },
                            {
                                id: '4x4',
                                label: 'Large Square',
                                icon: (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    </svg>
                                )
                            }
                        ]}
                        currentLayout={layout}
                        onLayoutChange={(l) => handleLayoutChange(l as any)}
                        layoutOptions={[
                            { id: 'classic', icon: 'splitscreen_left', label: 'Classic' },
                            { id: 'minimal', icon: 'crop_square', label: 'Minimal' },
                        ]}
                    />
                </div>
            )}

            <PriceMenuSetupModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                initialData={data}
                onSave={handleUpdate}
            />

            <IconPickerModal
                isOpen={isIconPickerOpen}
                onClose={() => setIsIconPickerOpen(false)}
                onSelect={handleIconChange}
            />
        </div>
    );
}
