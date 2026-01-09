import { PriceMenuData } from '@/types/tiles';
import { icons } from 'lucide-react';
import { InlineEdit } from '@/components/ui/inline-edit';
import { useState } from 'react';

interface PriceMenuTile4x4Props {
    data?: PriceMenuData;
    onTitleChange?: (newTitle: string) => void;
    onIconClick?: () => void;
}

export function PriceMenuTile4x4({ data, onTitleChange, onIconClick }: PriceMenuTile4x4Props) {
    const [isEditing, setIsEditing] = useState(false);

    if (!data) return null;

    const { title, iconName, categories, items } = data;

    // Group items by category, matching the design which shows sections
    // Filter to only categories that have items
    const visibleCategories = categories
        .filter(cat => items.some(item => item.category === cat));

    return (
        <div className="relative w-full h-full bg-[#ffffff] dark:bg-[#1c1c1e] rounded-[1.75rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4),0_0_10px_-2px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col border border-zinc-200/50 dark:border-white/10 group cursor-pointer duration-500">
            {/* Widget Header */}
            <div className="px-5 pt-5 pb-2 flex justify-between items-start shrink-0">
                <div className="flex flex-col gap-0.5 w-[calc(100%-40px)]">
                    <div className="flex items-center gap-2">
                        <InlineEdit
                            value={title}
                            onSave={onTitleChange}
                            isEditing={isEditing}
                            onEditChange={setIsEditing}
                            className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight w-full hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 p-1 -ml-1 rounded"
                            inputClassName="text-xl font-bold bg-transparent border-none p-0 focus-visible:ring-0 w-full"
                        />
                    </div>
                </div>
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                        onIconClick?.();
                    }}
                    className="w-8 h-8 rounded-full bg-[#1313ec]/10 dark:bg-[#1313ec]/20 flex items-center justify-center shrink-0 overflow-hidden cursor-pointer hover:bg-[#1313ec]/20 dark:hover:bg-[#1313ec]/30 transition-colors"
                >
                    {(() => {
                        const Icon = icons[iconName as keyof typeof icons] as React.ElementType;
                        return Icon ? <Icon className="w-5 h-5 text-[#1313ec]" /> : null;
                    })()}
                </div>
            </div>

            {/* Widget Content: Condensed Menu List */}
            <div className="flex-1 flex flex-col px-5 py-2 min-h-0 overflow-y-auto no-scrollbar gap-4">
                {visibleCategories.map((category) => {
                    const categoryItems = items.filter(item => item.category === category);
                    if (categoryItems.length === 0) return null;
                    return (
                        <div key={category} className="flex flex-col gap-0">
                            <h3 className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2">
                                {category}
                            </h3>
                            {categoryItems.map(item => (
                                <div key={item.id} className="flex items-center justify-between py-1.5 border-b border-zinc-100 dark:border-white/5 last:border-0 group/item">
                                    <div className="flex items-center gap-2 overflow-hidden">
                                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 group-hover/item:bg-[#1313ec] transition-colors shrink-0"></span>
                                        <span className="text-sm text-zinc-800 dark:text-zinc-100 font-medium truncate">
                                            {item.name}
                                        </span>
                                    </div>
                                    <span className="text-sm text-zinc-900 dark:text-white font-semibold whitespace-nowrap ml-2">
                                        {item.price}
                                    </span>
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>


        </div>
    );
}
