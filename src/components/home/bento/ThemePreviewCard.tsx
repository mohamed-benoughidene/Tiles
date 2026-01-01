export function ThemePreviewCard() {
    return (
        <div className="col-span-1 bg-zinc-50 dark:bg-card-dark rounded-xl border border-zinc-100 dark:border-zinc-800 p-4 flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase text-zinc-500 tracking-wider">
                Themes
            </span>
            <div className="grid grid-cols-2 gap-2 h-full">
                <div className="bg-zinc-200 dark:bg-zinc-800 rounded-lg border-2 border-transparent hover:border-primary cursor-pointer transition-colors"></div>
                <div className="bg-zinc-800 dark:bg-black rounded-lg border-2 border-primary cursor-pointer"></div>
                <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg border-2 border-transparent hover:border-primary cursor-pointer opacity-80"></div>
                <div className="bg-white border border-zinc-300 rounded-lg cursor-pointer hover:border-primary transition-colors"></div>
            </div>
        </div>
    );
}
