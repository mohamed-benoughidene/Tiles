import { PriceMenuData } from '@/types/tiles';
import { icons } from 'lucide-react';
import { InlineEdit } from '@/components/ui/inline-edit';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface PriceMenuTile2x4Props {
    data?: PriceMenuData;
    onTitleChange?: (newTitle: string) => void;
    onIconClick?: () => void;
    readOnly?: boolean;
    layout?: 'classic' | 'minimal';
}

export function PriceMenuTile2x4({ data, onTitleChange, onIconClick, readOnly, layout = 'classic' }: PriceMenuTile2x4Props) {
    const [isEditing, setIsEditing] = useState(false);

    if (!data) return null;

    const { title, iconName, items } = data;

    // Group items by category to match 4x4 behavior
    const visibleCategories = data.categories.filter(cat => items.some(item => item.category === cat));

    if (layout === 'minimal') {
        return (
            <div className="relative w-full h-full bg-[#ffffff] dark:bg-[#1c1c1e] rounded-[1.75rem] shadow-sm border border-zinc-200/50 dark:border-white/10 overflow-hidden flex flex-col group cursor-pointer duration-500">
                <div className="flex-1 flex flex-col px-5 py-4 min-h-0 overflow-y-auto no-scrollbar gap-4">
                    {visibleCategories.map(category => {
                        const categoryItems = items.filter(item => item.category === category);
                        if (categoryItems.length === 0) return null;
                        return (
                            <div key={category} className="flex flex-col gap-1.5">
                                <h3 className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest pl-2">
                                    {category}
                                </h3>
                                <div className="flex flex-col gap-1">
                                    {categoryItems.map(item => (
                                        <div key={item.id} className="flex items-center justify-between group/item select-none py-1 hover:bg-zinc-50 dark:hover:bg-white/5 rounded-lg px-2 -mx-2 transition-colors">
                                            <div className="flex items-center gap-2 overflow-hidden">
                                                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover/item:bg-[#1313ec] transition-colors shrink-0"></span>
                                                <span className="text-[14px] text-zinc-700 dark:text-zinc-200 font-medium truncate group-hover/item:text-zinc-900 dark:group-hover/item:text-white transition-colors">
                                                    {item.name}
                                                </span>
                                            </div>
                                            <span className="text-[14px] text-zinc-900 dark:text-white font-semibold whitespace-nowrap">
                                                {item.price}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* Subtle gradient at bottom to indicate scrolling/end */}
                <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-white dark:from-[#1c1c1e] to-transparent pointer-events-none" />
            </div>
        );
    }

    // CLASSIC LAYOUT
    return (
        <div className="relative w-full h-full bg-[#ffffff] dark:bg-[#1c1c1e] rounded-[1.75rem] shadow-sm border border-zinc-200/50 dark:border-white/10 overflow-hidden flex flex-col group cursor-pointer duration-500">
            {/* Widget Header */}
            <div className="px-4 pt-5 pb-3 flex flex-col gap-3 shrink-0">
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                        if (!readOnly) onIconClick?.();
                    }}
                    className={`w-10 h-10 rounded-full bg-[#1313ec]/10 dark:bg-[#1313ec]/20 flex items-center justify-center shrink-0 overflow-hidden text-[#1313ec] ${readOnly ? '' : 'cursor-pointer hover:bg-[#1313ec]/20 dark:hover:bg-[#1313ec]/30 transition-colors'}`}
                >
                    {(() => {
                        const Icon = icons[iconName as keyof typeof icons] as React.ElementType;
                        return Icon ? <Icon className="w-5 h-5" /> : null;
                    })()}
                </div>

                <div className="flex flex-col gap-0.5 w-full">
                    <InlineEdit
                        value={title}
                        onSave={onTitleChange}
                        isEditing={isEditing}
                        onEditChange={setIsEditing}
                        disabled={readOnly}
                        className={cn(
                            "text-lg font-bold text-zinc-900 dark:text-white tracking-tight leading-tight w-full p-1 -ml-1 rounded",
                            !readOnly && "hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50"
                        )}
                        inputClassName="text-lg font-bold bg-transparent border-none p-0 focus-visible:ring-0 w-full"
                    />
                </div>
            </div>

            {/* Widget Content: Category List */}
            <div className="flex-1 flex flex-col px-4 py-1 min-h-0 overflow-y-auto no-scrollbar gap-4">
                {visibleCategories.map(category => {
                    const categoryItems = items.filter(item => item.category === category);
                    if (categoryItems.length === 0) return null;
                    return (
                        <div key={category} className="flex flex-col gap-0">
                            <h3 className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2">
                                {category}
                            </h3>
                            {categoryItems.map(item => (
                                <div key={item.id} className="flex items-center justify-between py-2 border-b border-zinc-100 dark:border-white/5 last:border-0 group/item">
                                    <div className="flex flex-col min-w-0 pr-2">
                                        <span className="text-sm text-zinc-800 dark:text-zinc-100 font-medium truncate">
                                            {item.name}
                                        </span>
                                    </div>
                                    <span className="text-sm text-zinc-900 dark:text-white font-semibold whitespace-nowrap bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded-md">
                                        {item.price}
                                    </span>
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>

            {/* Fade at bottom */}
            <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-white dark:from-[#1c1c1e] to-transparent pointer-events-none" />
        </div>
    );
}
