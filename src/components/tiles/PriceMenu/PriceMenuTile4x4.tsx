import React from 'react';

export function PriceMenuTile4x4() {
    return (
        <div className="relative w-full h-full bg-[#ffffff] dark:bg-[#1c1c1e] rounded-[1.75rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4),0_0_10px_-2px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col border border-zinc-200/50 dark:border-white/10 group cursor-pointer hover:scale-[1.02] transition-transform duration-500">
            {/* Widget Header */}
            <div className="px-5 pt-5 pb-2 flex justify-between items-start shrink-0">
                <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                        <h2 className="text-zinc-900 dark:text-white text-xl font-bold tracking-tight leading-tight">
                            Full Menu
                        </h2>
                    </div>
                    <span className="text-zinc-400 dark:text-zinc-500 text-xs font-medium">
                        Updated today 9:41 AM
                    </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#1313ec]/10 dark:bg-[#1313ec]/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#1313ec] text-[20px]">
                        restaurant_menu
                    </span>
                </div>
            </div>

            {/* Widget Content: Condensed Menu List */}
            <div className="flex-1 flex flex-col px-5 py-2 overflow-hidden gap-4">
                {/* Section 1: Drinks */}
                <div className="flex flex-col gap-0">
                    <h3 className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-2">
                        Hot Drinks
                    </h3>
                    {/* Condensed Item 1 */}
                    <div className="flex items-center justify-between py-1.5 border-b border-zinc-100 dark:border-white/5 last:border-0 group/item">
                        <div className="flex items-center gap-2 overflow-hidden">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover/item:bg-[#1313ec] transition-colors"></span>
                            <span className="text-sm text-zinc-700 dark:text-zinc-200 font-medium truncate">
                                Latte
                            </span>
                        </div>
                        <span className="text-sm text-zinc-900 dark:text-white font-semibold">
                            $4.50
                        </span>
                    </div>
                    {/* Condensed Item 2 */}
                    <div className="flex items-center justify-between py-1.5 border-b border-zinc-100 dark:border-white/5 last:border-0 group/item">
                        <div className="flex items-center gap-2 overflow-hidden">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover/item:bg-[#1313ec] transition-colors"></span>
                            <span className="text-sm text-zinc-700 dark:text-zinc-200 font-medium truncate">
                                Cappuccino
                            </span>
                        </div>
                        <span className="text-sm text-zinc-900 dark:text-white font-semibold">
                            $4.00
                        </span>
                    </div>
                    {/* Condensed Item 3 */}
                    <div className="flex items-center justify-between py-1.5 border-b border-zinc-100 dark:border-white/5 last:border-0 group/item">
                        <div className="flex items-center gap-2 overflow-hidden">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover/item:bg-[#1313ec] transition-colors"></span>
                            <span className="text-sm text-zinc-700 dark:text-zinc-200 font-medium truncate">
                                Espresso
                            </span>
                        </div>
                        <span className="text-sm text-zinc-900 dark:text-white font-semibold">
                            $3.00
                        </span>
                    </div>
                </div>

                {/* Section 2: Bakery */}
                <div className="flex flex-col gap-0">
                    <h3 className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-2">
                        Bakery
                    </h3>
                    {/* Condensed Item 4 */}
                    <div className="flex items-center justify-between py-1.5 border-b border-zinc-100 dark:border-white/5 last:border-0 group/item">
                        <div className="flex items-center gap-2 overflow-hidden">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover/item:bg-[#1313ec] transition-colors"></span>
                            <span className="text-sm text-zinc-700 dark:text-zinc-200 font-medium truncate">
                                Croissant
                            </span>
                        </div>
                        <span className="text-sm text-zinc-900 dark:text-white font-semibold">
                            $3.50
                        </span>
                    </div>
                    {/* Condensed Item 5 */}
                    <div className="flex items-center justify-between py-1.5 border-b border-zinc-100 dark:border-white/5 last:border-0 group/item">
                        <div className="flex items-center gap-2 overflow-hidden">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover/item:bg-[#1313ec] transition-colors"></span>
                            <span className="text-sm text-zinc-700 dark:text-zinc-200 font-medium truncate">
                                Blueberry Muffin
                            </span>
                        </div>
                        <span className="text-sm text-zinc-900 dark:text-white font-semibold">
                            $3.00
                        </span>
                    </div>
                </div>
            </div>

            {/* Footer / Interaction Hint */}
            <div className="relative mt-auto px-5 py-4 bg-gradient-to-t from-zinc-50 via-zinc-50 to-transparent dark:from-[#1c1c1e] dark:via-[#1c1c1e] dark:to-transparent pt-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1313ec] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1313ec]"></span>
                        </span>
                        <span className="text-[10px] font-semibold text-[#1313ec] uppercase tracking-wider">
                            Open Now
                        </span>
                    </div>
                    <span className="material-symbols-outlined text-zinc-400 dark:text-zinc-500 text-[18px]">
                        arrow_circle_right
                    </span>
                </div>
            </div>

            {/* Reflection Glare */}
            <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-20 opacity-50"></div>
        </div>
    );
}
