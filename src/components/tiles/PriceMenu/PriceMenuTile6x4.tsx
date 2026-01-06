import React from 'react';

export function PriceMenuTile6x4() {
    return (
        <div className="group relative flex flex-col w-full h-full bg-white dark:bg-[#1c1c1e] rounded-2xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 overflow-hidden font-display transition-transform hover:scale-[1.01] duration-500">
            {/* Widget Header */}
            <div className="flex items-center justify-between px-5 pt-5 pb-2">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1313ec]/10 text-[#1313ec]">
                        <span className="material-symbols-outlined text-[22px]">restaurant_menu</span>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-zinc-900 dark:text-white text-base font-bold leading-none">
                            Summer Menu
                        </h3>
                        <span className="text-zinc-500 dark:text-zinc-400 text-[11px] font-medium mt-1">
                            Updated today
                        </span>
                    </div>
                </div>
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 transition-colors hover:text-[#1313ec] hover:bg-[#1313ec]/10">
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
            </div>

            {/* Categories Chips */}
            <div className="px-5 py-2">
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                    <button className="flex shrink-0 h-7 items-center justify-center rounded-full bg-[#1313ec] px-3 transition-colors">
                        <span className="text-white text-[11px] font-semibold">All</span>
                    </button>
                    <button className="flex shrink-0 h-7 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 border border-transparent dark:border-white/5 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                        <span className="text-zinc-600 dark:text-zinc-300 text-[11px] font-medium">
                            Coffee
                        </span>
                    </button>
                    <button className="flex shrink-0 h-7 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 border border-transparent dark:border-white/5 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                        <span className="text-zinc-600 dark:text-zinc-300 text-[11px] font-medium">
                            Breakfast
                        </span>
                    </button>
                    <button className="flex shrink-0 h-7 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 border border-transparent dark:border-white/5 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                        <span className="text-zinc-600 dark:text-zinc-300 text-[11px] font-medium">
                            Seasonal
                        </span>
                    </button>
                </div>
            </div>

            {/* List Content */}
            <div className="flex flex-col gap-1 px-3 py-1 flex-1 min-h-0 overflow-y-auto no-scrollbar">
                {/* List Item 1 */}
                <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors group/item cursor-pointer">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-800">
                        <img
                            className="h-full w-full object-cover"
                            alt="Glass of iced espresso tonic with lemon slice"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZWUpFK_g4SynozOUCGZCYWm-o9BOUgM6e3E723F-kjVvL1rZSJAOOB2EFJsEJ1eL3WMORt5skDEiyrXRhw3QMV9FB_bslOJFh1K4CDf_r5n7lLaFsdM5tlyK7v_y5nPGekTUa7s6k4YwmmrFIYtPdTkUSSgRCB1ZyoWtI0tZp9d4iCNQo3O3oKGQwCpthTIGODigBXpG_fV66cbWwJI6THYJWvBGXQ9zG4i-CrhE5WESp2ofd55_G-oeOHLOKAQC2Rga7Q_cNrQ"
                        />
                    </div>
                    <div className="flex flex-col grow min-w-0">
                        <p className="text-zinc-900 dark:text-white text-sm font-semibold truncate">
                            Espresso Tonic
                        </p>
                        <p className="text-zinc-500 dark:text-zinc-400 text-[11px] truncate">
                            Refreshing citrus blend
                        </p>
                    </div>
                    <div className="shrink-0">
                        <span className="inline-flex items-center rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-xs font-semibold text-zinc-900 dark:text-white ring-1 ring-inset ring-zinc-500/10 dark:ring-white/10 group-hover/item:bg-[#1313ec] group-hover/item:text-white transition-colors">
                            $6.50
                        </span>
                    </div>
                </div>
                {/* List Item 2 */}
                <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors group/item cursor-pointer">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-800">
                        <img
                            className="h-full w-full object-cover"
                            alt="Green matcha latte with latte art in white cup"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnlC6SquJzubDIJ30uo-29eYVXXuBUuPKkeI3Wdv4hC6XcRjPpPTiBtNy3J04DgRysbLFphboulGd2jqXalJlmvc20mAnDpxMOUpUOKBMXlWFSl_jwQOOLznxVD9PuAmvaUIseoVx7MFsBkwnGiGMntlGNVlgXitDuuA1SMwnQHIXdXV1jsQnqKS8C83enYMFf7Vm-SzgIACdpZaoqw6Jme9srxmGkxRs7U4TPuXZeREmxQt8hmAhmjgkmmKNyKfsB7JX_z73ftA"
                        />
                    </div>
                    <div className="flex flex-col grow min-w-0">
                        <p className="text-zinc-900 dark:text-white text-sm font-semibold truncate">
                            Matcha Latte
                        </p>
                        <p className="text-zinc-500 dark:text-zinc-400 text-[11px] truncate">
                            Ceremonial grade
                        </p>
                    </div>
                    <div className="shrink-0">
                        <span className="inline-flex items-center rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-xs font-semibold text-zinc-900 dark:text-white ring-1 ring-inset ring-zinc-500/10 dark:ring-white/10 group-hover/item:bg-[#1313ec] group-hover/item:text-white transition-colors">
                            $5.00
                        </span>
                    </div>
                </div>
                {/* List Item 3 */}
                <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors group/item cursor-pointer">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-800">
                        <img
                            className="h-full w-full object-cover"
                            alt="Avocado toast with seeds on dark plate"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEpktdQClwbpIg1_wZd_Ghck6GgxNqCDjDUb5nPwLWMRXB7QG4xVt8q4cqsP0hnPZxEpOTF25s7_IB5qkwjhFSQCpX07TE9cF2HTH-hHiKKE661gnn2OX-hTCayGLM4ZIx6RIKgp-k2N5ZLLBDnDk0JSoYNYgO-bBtTACoFB6H797Nt5qEoPc7Xf6vn7KL0hYkVGYpvKXIvr9ih3vmkYscTaPRsvM7NC63aTRsn803EMn1Rb1mSos-xSpwbyzmoogRzEOOn0ULBw"
                        />
                    </div>
                    <div className="flex flex-col grow min-w-0">
                        <p className="text-zinc-900 dark:text-white text-sm font-semibold truncate">
                            Avocado Toast
                        </p>
                        <p className="text-zinc-500 dark:text-zinc-400 text-[11px] truncate">
                            Sourdough & seeds
                        </p>
                    </div>
                    <div className="shrink-0">
                        <span className="inline-flex items-center rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-xs font-semibold text-zinc-900 dark:text-white ring-1 ring-inset ring-zinc-500/10 dark:ring-white/10 group-hover/item:bg-[#1313ec] group-hover/item:text-white transition-colors">
                            $12.00
                        </span>
                    </div>
                </div>
                {/* List Item 4 */}
                <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors group/item cursor-pointer">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-800">
                        <img
                            className="h-full w-full object-cover"
                            alt="Acai bowl with fresh berries and granola"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJYrhlfg1oEOPtYtnQMmlmnECIEO-TpIvyKyRZXCzIJ_UBss-krQOzFYr7EyTGsOypRDe0_9ByIKvMbRw8jrwjkEPR97c7XttEzVDY--6IE0xklJW85pxB8CsxD4ZuSqYL0V-Qlm9QgGyE8NYAB4Y6yLp5_ehVgPaZzwYWvxgTk_ryvbQlBPzaRgCc2SmxTFfGGLfr8RsdtX6man7gaTmknMz00Al5gior4vvrr9yNk5kTiOcNrP510XShO3cTsK1SSq0HQYS-Ug"
                        />
                    </div>
                    <div className="flex flex-col grow min-w-0">
                        <p className="text-zinc-900 dark:text-white text-sm font-semibold truncate">
                            Acai Bowl
                        </p>
                        <p className="text-zinc-500 dark:text-zinc-400 text-[11px] truncate">
                            Seasonal fruits
                        </p>
                    </div>
                    <div className="shrink-0">
                        <span className="inline-flex items-center rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-xs font-semibold text-zinc-900 dark:text-white ring-1 ring-inset ring-zinc-500/10 dark:ring-white/10 group-hover/item:bg-[#1313ec] group-hover/item:text-white transition-colors">
                            $14.50
                        </span>
                    </div>
                </div>
            </div>

            {/* Footer Action */}
            <div className="p-4 mt-auto shrink-0">
                <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#1313ec] hover:bg-blue-600 py-3 text-center text-sm font-bold text-white shadow-lg shadow-blue-900/20 active:scale-95 transition-all">
                    <span>Order for Pickup</span>
                    <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                </button>
            </div>
        </div>
    );
}
