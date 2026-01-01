export function AnalyticsCard() {
    return (
        <div className="col-span-1 bg-zinc-50 dark:bg-card-dark rounded-xl border border-zinc-100 dark:border-zinc-800 p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase text-zinc-500 tracking-wider">
                    Total Views
                </span>
                <span className="text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded text-[10px] font-bold">
                    +24%
                </span>
            </div>
            <div className="flex items-end gap-1.5 h-16 mt-2">
                <div className="w-1/5 h-[40%] bg-primary/30 rounded-t-sm"></div>
                <div className="w-1/5 h-[65%] bg-primary/40 rounded-t-sm"></div>
                <div className="w-1/5 h-[45%] bg-primary/30 rounded-t-sm"></div>
                <div className="w-1/5 h-[85%] bg-primary/60 rounded-t-sm"></div>
                <div className="w-1/5 h-[100%] bg-primary rounded-t-sm"></div>
            </div>
        </div>
    );
}
