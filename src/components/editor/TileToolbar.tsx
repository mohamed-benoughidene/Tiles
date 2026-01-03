"use client";

interface TileToolbarProps {
    currentSize?: string;
    onResize?: (size: any) => void;
    allowedSizes?: string[];
}

export function TileToolbar({ currentSize = "1x1", onResize, allowedSizes }: TileToolbarProps) {
    // Default to basic sizes if not specified
    const sizes = allowedSizes || ["1x1", "2x1", "2x2"];

    const getSizeIcon = (size: string) => {
        switch (size) {
            case "1x1": return "crop_square";
            case "2x1": return "crop_3_2"; // or crop_7_5
            case "2x2": return "crop_portrait"; // or grid_view
            case "4x2": return "ad_units"; // Medium widget
            case "4x4": return "featured_video"; // Large Square
            case "6x2": return "calendar_view_week"; // Wide Strip
            case "6x4": return "newspaper"; // Large Wide
            default: return "crop_square";
        }
    };

    return (
        <div className="flex items-center bg-zinc-950 dark:bg-black border border-zinc-800 rounded-xl px-2 py-1.5 gap-1.5 shadow-xl">
            {sizes.map((size) => (
                <button
                    key={size}
                    onClick={(e) => {
                        e.stopPropagation();
                        console.log('TileToolbar: Button clicked for size:', size);
                        onResize?.(size);
                    }}
                    className={`w-7 h-7 rounded-md flex items-center justify-center transition-colors ${currentSize === size
                        ? "text-white bg-zinc-800"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                        }`}
                    title={`Resize to ${size}`}
                >
                    <span className="material-symbols-outlined text-[18px]">
                        {getSizeIcon(size)}
                    </span>
                </button>
            ))}
        </div>
    );
}
