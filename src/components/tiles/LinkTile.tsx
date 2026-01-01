"use client";

import { TileToolbar } from "@/components/editor/TileToolbar";

interface LinkTileProps {
    title: string;
    size: "1x1" | "2x1" | "2x2";
    onResize: (size: "1x1" | "2x1" | "2x2") => void;
    onRemove: () => void;
}

export function LinkTile({ title, size, onResize, onRemove }: LinkTileProps) {
    return (

        <div className="group relative h-full w-full cursor-pointer">
            {/* Main Content Container (Scales and has styling) */}
            <div className="h-full w-full flex flex-col overflow-hidden rounded-[1.35rem] bg-white dark:bg-[#202023] shadow-sm border border-zinc-200 dark:border-zinc-800/50 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg">
                {/* Arrow Icon (Top Right) */}
                <div className="absolute right-4 top-4 flex items-center justify-center text-zinc-400 transition-colors duration-300 group-hover:text-zinc-900 dark:group-hover:text-white">
                    <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col items-center justify-center px-4 text-center h-full">
                    <h2 className="text-xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white antialiased">
                        {title}
                    </h2>
                </div>
            </div>

            {/* Delete Button (Pop-out Top Left) */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onRemove();
                }}
                className="absolute -top-3 -left-3 w-8 h-8 rounded-lg bg-white dark:bg-zinc-950 text-zinc-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-50 scale-100 active:scale-95"
                title="Delete Tile"
            >
                <span className="material-symbols-outlined text-[18px]">delete</span>
            </button>

            {/* Toolbar (Pop-out Bottom Center) */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none group-hover:pointer-events-auto">
                <TileToolbar
                    currentSize={size}
                    onResize={onResize}
                />
            </div>
        </div>
    );

}
