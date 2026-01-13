"use client";

import { cn } from "@/lib/utils";

interface TileToolbarProps {
    currentSize?: string;
    onResize?: (size: any) => void;
    // Legacy support
    allowedSizes?: string[];
    // New generic support
    sizeOptions?: { id: string; icon: React.ReactNode; label: string }[];

    currentLayout?: string;
    onLayoutChange?: (layout: string) => void;
    layoutOptions?: { id: string; icon: string; label: string }[];
}

export function TileToolbar({ currentSize = "1x1", onResize, allowedSizes, sizeOptions, currentLayout, onLayoutChange, layoutOptions }: TileToolbarProps) {
    // Legacy size handling
    const getSizeIcon = (size: string) => {
        switch (size) {
            case "1x1": return "crop_square";
            case "2x1": return "crop_3_2";
            case "2x2": return "crop_portrait";
            case "4x2": return "ad_units";
            case "4x4": return "featured_video";
            case "6x2": return "calendar_view_week";
            case "6x2-gallery": return "collections_bookmark";
            case "6x4": return "newspaper";
            default: return "crop_square";
        }
    };

    const layouts = layoutOptions || [
        { id: 'classic', icon: 'splitscreen_left', label: 'Classic' },
        { id: 'cover', icon: 'rectangle', label: 'Cover' },
        { id: 'minimal', icon: 'crop_square', label: 'Minimal' },
    ];

    const hasCustomSizes = sizeOptions && sizeOptions.length > 0;

    return (
        <div className="flex items-center bg-zinc-950 dark:bg-black border border-zinc-800 rounded-xl px-2 py-1.5 gap-2 shadow-xl">
            {/* Size Options */}
            <div className="flex items-center gap-1.5">
                {hasCustomSizes ? (
                    sizeOptions.map((option) => (
                        <button
                            key={option.id}
                            onClick={(e) => {
                                e.stopPropagation();
                                onResize?.(option.id);
                            }}
                            className={cn(
                                "w-7 h-7 rounded-md flex items-center justify-center transition-colors",
                                currentSize === option.id
                                    ? "text-white bg-zinc-800"
                                    : "text-zinc-500 hover:text-white hover:bg-zinc-800"
                            )}
                            title={option.label}
                        >
                            {typeof option.icon === 'string' ? (
                                <span className="material-symbols-outlined text-[18px]">{option.icon}</span>
                            ) : (
                                option.icon
                            )}
                        </button>
                    ))
                ) : (
                    allowedSizes?.map((size) => (
                        <button
                            key={size}
                            onClick={(e) => {
                                e.stopPropagation();
                                onResize?.(size);
                            }}
                            className={cn(
                                "w-7 h-7 rounded-md flex items-center justify-center transition-colors",
                                currentSize === size
                                    ? "text-white bg-zinc-800"
                                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                            )}
                            title={`Resize to ${size}`}
                        >
                            <span className="material-symbols-outlined text-[18px]">
                                {getSizeIcon(size)}
                            </span>
                        </button>
                    ))
                )}
            </div>

            {/* Layout Options (if provided) */}
            {onLayoutChange && (
                <>
                    <div className="w-px h-4 bg-zinc-800 mx-1" />
                    <div className="flex items-center gap-1.5">
                        {layouts.map((layout) => (
                            <button
                                key={layout.id}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onLayoutChange(layout.id);
                                }}
                                className={cn(
                                    "w-7 h-7 rounded-md flex items-center justify-center transition-colors",
                                    currentLayout === layout.id
                                        ? "text-white bg-zinc-800"
                                        : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                                )}
                                title={`Layout: ${layout.label}`}
                            >
                                <span className="material-symbols-outlined text-[18px]">
                                    {layout.icon}
                                </span>
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
