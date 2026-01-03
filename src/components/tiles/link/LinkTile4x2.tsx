"use client";

interface LinkTile4x2Props {
    title: string;
}

export function LinkTile4x2({ title }: LinkTile4x2Props) {
    return (
        <div className="group relative h-full w-full bg-white dark:bg-[#1c1c1e] rounded-[1.375rem] shadow-sm border border-zinc-200 dark:border-white/10 overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]">
            <div className="flex items-center h-full p-4 gap-4">
                {/* Thumbnail */}
                <div className="relative shrink-0 w-[84px] h-[84px] rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 shadow-sm ring-1 ring-black/5 dark:ring-white/5">
                    <div className="w-full h-full bg-cover bg-center transition-transform group-hover:scale-110 duration-700 ease-out" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFAJalqElo677yC3IOxZHqHIaMZIRSr5-T6GODeiUwEyP54YefcG9Fz1MD_X1GapMitF7e_yAUo90BtUpnq0Vt1qVDVm0P1oMjMgNFAfFhfGx6pebRW-gY_q9uA2HvluYhwidx3Gl1LhI71UtuVTxEOdFmvcAM8PKI57IMCrrkcBxJC1XuNdO4d9BgFFA7n78roOZyg2TWqkyUaAQxG2kMmkZQfhqAdVQQCSTK27dhf9zVochEa5RvM8IteA4g4C5B2BFQPyXDUg')" }}></div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
                        <span className="material-symbols-outlined text-white text-[28px] drop-shadow-md">play_circle</span>
                    </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center flex-1 min-w-0 py-1">
                    <div className="flex items-center gap-1.5 mb-1.5">
                        <span className="material-symbols-outlined text-[14px] text-indigo-600 dark:text-indigo-400">podcasts</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 opacity-90">New Episode</span>
                    </div>
                    <h3 className="text-[17px] font-bold leading-[1.3] text-zinc-900 dark:text-white line-clamp-2 mb-1">
                        {title}
                    </h3>
                    <p className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 line-clamp-1 flex items-center gap-1">
                        <span>Design Matters</span>
                        <span className="text-[10px] opacity-60">•</span>
                        <span>42m</span>
                    </p>
                </div>

                {/* Chevron */}
                <div className="flex items-center justify-center text-zinc-300 dark:text-zinc-600 pr-1">
                    <span className="material-symbols-outlined text-2xl font-light">chevron_right</span>
                </div>
            </div>
        </div>
    );
}
