import React, { useState, useRef } from 'react';
import { PriceMenuData } from '@/types/tiles';
import { cn } from '@/lib/utils';
import { icons } from 'lucide-react';
import { InlineEdit } from '@/components/ui/inline-edit';

interface PriceMenuTile6x4Props {
    data?: PriceMenuData;
    onTitleChange?: (newTitle: string) => void;

    onIconClick?: () => void;
    onUpdate?: (newData: PriceMenuData) => void;
}

export function PriceMenuTile6x4({ data, onTitleChange, onIconClick, onUpdate }: PriceMenuTile6x4Props) {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [isEditing, setIsEditing] = useState(false);
    const [editingItemId, setEditingItemId] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    if (!data) return null;

    const { title, iconName, categories, items } = data;

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && editingItemId && onUpdate) {
            const objectUrl = URL.createObjectURL(file);
            const newItems = items.map(item =>
                item.id === editingItemId ? { ...item, image: objectUrl } : item
            );
            onUpdate({ ...data, items: newItems });
            setEditingItemId(null);
            if (fileInputRef.current) fileInputRef.current.value = '';
        }
    };

    const triggerImageUpload = (itemId: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setEditingItemId(itemId);
        // Small timeout to ensure state is set before click (safeguard)
        setTimeout(() => fileInputRef.current?.click(), 0);
    };

    const visibleItems = selectedCategory === 'All'
        ? items
        : items.filter(item => item.category === selectedCategory);

    return (
        <div className="group relative flex flex-col w-full h-full bg-white dark:bg-[#1c1c1e] rounded-2xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 overflow-hidden font-display">
            {/* Widget Header */}
            <div className="flex items-center justify-between px-5 pt-5 pb-2">
                <div className="flex items-center gap-3">
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            onIconClick?.();
                        }}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1313ec]/10 text-[#1313ec] overflow-hidden cursor-pointer hover:bg-[#1313ec]/20 transition-colors"
                    >
                        {(() => {
                            const Icon = icons[iconName as keyof typeof icons] as React.ElementType;
                            return Icon ? <Icon className="w-6 h-6" /> : null;
                        })()}
                    </div>
                    <div className="flex flex-col flex-1">
                        <InlineEdit
                            value={title}
                            onSave={onTitleChange}
                            isEditing={isEditing}
                            onEditChange={setIsEditing}
                            className="text-zinc-900 dark:text-white text-base font-bold leading-none w-full hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 p-1 -ml-1 rounded"
                            inputClassName="text-base font-bold bg-transparent border-none p-0 focus-visible:ring-0 w-full"
                        />
                    </div>
                </div>

            </div>

            {/* Categories Chips */}
            <div className="px-5 py-2">
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setSelectedCategory('All');
                        }}
                        onPointerDown={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                        className={cn(
                            "flex shrink-0 h-7 items-center justify-center rounded-full px-3 transition-colors",
                            selectedCategory === 'All'
                                ? "bg-[#1313ec] text-white"
                                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                        )}
                    >
                        <span className="text-[11px] font-semibold">All</span>
                    </button>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setSelectedCategory(category);
                            }}
                            onPointerDown={(e) => e.stopPropagation()}
                            onMouseDown={(e) => e.stopPropagation()}
                            className={cn(
                                "flex shrink-0 h-7 items-center justify-center rounded-full px-3 transition-colors",
                                selectedCategory === category
                                    ? "bg-[#1313ec] text-white"
                                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                            )}
                        >
                            <span className="text-[11px] font-medium">
                                {category}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* List Content */}
            <div className="flex flex-col gap-1 px-3 py-1 flex-1 min-h-0 overflow-y-auto no-scrollbar">
                {visibleItems.map(item => (
                    <div key={item.id} className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors group/item cursor-pointer">
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center group/image">
                            {item.image ? (
                                <img
                                    className="h-full w-full object-cover"
                                    alt={item.name}
                                    src={item.image}
                                />
                            ) : (
                                <span className="material-symbols-outlined text-zinc-400">image</span>
                            )}

                            {/* Hover Overlay for Edit */}
                            <div
                                className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity cursor-pointer"
                                onClick={(e) => triggerImageUpload(item.id, e)}
                            >
                                <span className="material-symbols-outlined text-white text-[18px]">edit</span>
                            </div>
                        </div>
                        <div className="flex flex-col grow min-w-0">
                            <p className="text-zinc-900 dark:text-white text-sm font-semibold truncate">
                                {item.name}
                            </p>
                            {item.description && (
                                <p className="text-zinc-600 dark:text-zinc-400/80 text-[11px] truncate">
                                    {item.description}
                                </p>
                            )}
                        </div>
                        <div className="shrink-0">
                            <span className="inline-flex items-center rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-xs font-semibold text-zinc-900 dark:text-white ring-1 ring-inset ring-zinc-500/10 dark:ring-white/10 group-hover/item:bg-[#1313ec] group-hover/item:text-white transition-colors">
                                {item.price}
                            </span>
                        </div>
                    </div>
                ))}
            </div>


            {/* Hidden Input */}
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
}
