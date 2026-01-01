"use client";

interface TileToolbarProps {
    currentSize?: "1x1" | "2x1" | "2x2";
    onResize?: (size: "1x1" | "2x1" | "2x2") => void;
}

export function TileToolbar({ currentSize = "1x1", onResize }: TileToolbarProps) {
    return (
        <div className="flex items-center bg-zinc-950 dark:bg-black border border-zinc-800 rounded-xl px-2 py-1.5 gap-1.5 shadow-xl">
            {/* Resize: 3:2 (2x1) */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onResize?.("2x1");
                }}
                className={`w-7 h-7 rounded-md flex items-center justify-center transition-colors ${currentSize === "2x1"
                    ? "text-white bg-zinc-800"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                    }`}
                title="Wide"
            >
                <span className="material-symbols-outlined text-[18px]">crop_3_2</span>
            </button>

            {/* Resize: Portrait (1x2 - using 2x2 logic for now or adding new size?) 
               Plan said "Vert" but mapped to "crop_portrait". 
               Let's assume "2x2" maps to this button to keep state simple, or add "1x2".
               The design shows "crop_portrait", "crop_square".
               Let's map: 
               crop_3_2 -> 2x1
               crop_portrait -> 2x2 (or 1x2 if supported later, sticking to 2x2 for large for now as implemented)
               crop_square -> 1x1
            */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onResize?.("2x2");
                }}
                className={`w-7 h-7 rounded-md flex items-center justify-center transition-colors ${currentSize === "2x2"
                    ? "text-white bg-zinc-800"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                    }`}
                title="Large"
            >
                <span className="material-symbols-outlined text-[18px]">crop_portrait</span>
            </button>

            {/* Resize: Square (1x1) */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onResize?.("1x1");
                }}
                className={`w-7 h-7 rounded-md flex items-center justify-center transition-colors ${currentSize === "1x1"
                    ? "text-white bg-zinc-800"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                    }`}
                title="Square"
            >
                <span className="material-symbols-outlined text-[18px]">crop_square</span>
            </button>
        </div>
    );
}
