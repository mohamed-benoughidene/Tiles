export function LayoutCustomizerCard() {
    return (
        <div className="col-span-2 bg-zinc-900 dark:bg-[#0f0f16] rounded-xl border border-zinc-800 dark:border-zinc-800 p-4 flex items-center justify-between relative overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/10 to-transparent"></div>
            <div className="flex items-center gap-4 z-10">
                <div className="size-10 rounded-lg bg-zinc-800 flex items-center justify-center border border-zinc-700 text-zinc-400">
                    <span className="material-symbols-outlined">grid_view</span>
                </div>
                <div>
                    <p className="text-white text-sm font-bold">Customize Layout</p>
                    <p className="text-zinc-500 text-xs">
                        Drag and drop blocks to rearrange
                    </p>
                </div>
            </div>
            <div className="h-8 px-3 rounded bg-primary text-white text-xs font-bold flex items-center">
                Edit
            </div>
        </div>
    );
}
