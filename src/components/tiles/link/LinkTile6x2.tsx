"use client";

interface LinkTile6x2Props {
    title: string;
}

export function LinkTile6x2({ title }: LinkTile6x2Props) {
    return (
        <div className="relative w-full h-full bg-indigo-600 rounded-[1.75rem] shadow-md flex items-center justify-between px-6 cursor-pointer transform transition-transform hover:scale-[1.02] active:scale-[0.98]">
            {/* Content Wrapper */}
            <div className="flex flex-col items-start justify-center flex-1 pr-4">
                <span className="text-white text-xl font-bold tracking-tight leading-snug">{title}</span>
            </div>
            {/* Icon / Action Indicator */}
            <div className="flex-shrink-0 bg-white/20 rounded-full p-1.5 backdrop-blur-sm">
                <span className="material-symbols-outlined text-white text-[20px] leading-none">arrow_forward</span>
            </div>
        </div>
    );
}
