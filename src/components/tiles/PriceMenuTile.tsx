import React, { useState } from 'react';
import { PriceMenuTile4x4 } from './PriceMenu/PriceMenuTile4x4';
import { PriceMenuTile6x4 } from './PriceMenu/PriceMenuTile6x4';
import { TileToolbar } from '@/components/editor/TileToolbar';
import { PriceMenuData, PriceMenuItem } from '@/types/tiles';
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

export function PriceMenuTile({ title: initialTitle, size, onResize, onRemove, data: initialData }: PriceMenuTileProps) {
    const [data, setData] = useState<PriceMenuData>(initialData || DEFAULT_DATA);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isIconPickerOpen, setIsIconPickerOpen] = useState(false);

    const handleUpdate = (newData: PriceMenuData) => {
        setData(newData);
    };

    const handleTitleChange = (newTitle: string) => {
        setData(prev => ({ ...prev, title: newTitle }));
    };

    const handleIconChange = (newIcon: string) => {
        setData(prev => ({ ...prev, iconName: newIcon }));
    };

    const renderContent = () => {
        switch (size) {
            case '4x4':
                return <PriceMenuTile4x4 data={data} onTitleChange={handleTitleChange} onIconClick={() => setIsIconPickerOpen(true)} />;
            case '6x4':
                return <PriceMenuTile6x4 data={data} onTitleChange={handleTitleChange} onIconClick={() => setIsIconPickerOpen(true)} onUpdate={handleUpdate} />;
            default:
                // Default to largest or safe fallback
                return <PriceMenuTile4x4 data={data} onTitleChange={handleTitleChange} onIconClick={() => setIsIconPickerOpen(true)} />;
        }
    };

    return (
        <div className="group relative h-full w-full cursor-pointer">
            {renderContent()}

            {/* Action Buttons (Top Left) */}
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
                    allowedSizes={['4x4', '6x4']}
                />
            </div>

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
