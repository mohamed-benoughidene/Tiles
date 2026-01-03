"use client";

interface LinkTile6x4Props {
    title: string;
}

export function LinkTile6x4({ title }: LinkTile6x4Props) {
    return (
        <div className="group relative w-full h-full flex flex-col bg-white dark:bg-[#202023] rounded-[22px] shadow-sm ring-1 ring-black/5 dark:ring-white/10 overflow-hidden transition-all duration-300 hover:scale-[1.02]">
            <div className="flex h-full p-5 gap-4">
                {/* Left Column: Text Content */}
                <div className="flex flex-col flex-1 justify-between h-full min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-5 h-5 rounded-md bg-indigo-500 flex items-center justify-center text-white shrink-0">
                            <span className="material-symbols-outlined text-[12px]">article</span>
                        </div>
                        <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 truncate">
                            Design Weekly • 2h ago
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-zinc-900 dark:text-white text-lg font-bold leading-tight tracking-tight">
                            {title}
                        </h3>
                        <p className="text-zinc-500 dark:text-zinc-400 text-[13px] leading-snug line-clamp-3 font-normal">
                            Exploring how spatial design principles and depth are reshaping the way users interact with handheld devices in 2024.
                        </p>
                    </div>
                    <div className="mt-auto pt-2 flex items-center gap-1 text-indigo-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs font-medium">Read article</span>
                        <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                    </div>
                </div>
                {/* Right Column: Visual */}
                <div className="w-[100px] shrink-0 h-full">
                    <div className="w-full h-full rounded-xl bg-cover bg-center bg-no-repeat shadow-inner ring-1 ring-black/5 dark:ring-white/5" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8KXnF-Rgm4udfJUcTX9MR3ITDhrREELWPrzwGUnZUFUV7chOo2U79uo-NzNdKs7JTan_e4LP8CGDbZDeyGqG2jMaevcfAbW-lgLfp7s3ZvlmzKzRawJbIeblj6hf4bhilz21epRh091mWYgojBjXLk02rqguSCox9KcISVIMxc0agWWcF_h2kLLOl8ecjLGJ5FrjyCEE5pP7mUEC1LNaMO3XwVNOCj-lERvB2LujQUzcCALHxyyv--q82GLu6rgjoaEDM0q3s4w')" }}></div>
                </div>
            </div>
        </div>
    );
}
