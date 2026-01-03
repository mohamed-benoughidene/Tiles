"use client";

import { TileToolbar } from "@/components/editor/TileToolbar";

import { LinkTile2x2 } from "./link/LinkTile2x2";
import { LinkTile4x2 } from "./link/LinkTile4x2";
import { LinkTile4x4 } from "./link/LinkTile4x4";
import { LinkTile6x2 } from "./link/LinkTile6x2";
import { LinkTile6x4 } from "./link/LinkTile6x4";

interface LinkTileProps {
    title: string;
    size: "2x2" | "4x2" | "4x4" | "6x2" | "6x4" | string; // loose type to allow strings from toolbar
    onResize: (size: any) => void;
    onRemove: () => void;
}

export function LinkTile({ title, size, onResize, onRemove }: LinkTileProps) {
    // Determine which component to render
    const renderContent = () => {
        switch (size) {
            case "2x2": return <LinkTile2x2 title={title} />;
            case "4x2": return <LinkTile4x2 title={title} />;
            case "4x4": return <LinkTile4x4 title={title} />;
            case "6x2": return <LinkTile6x2 title={title} />;
            case "6x4": return <LinkTile6x4 title={title} />;
            default: return <LinkTile2x2 title={title} />; // Fallback
        }
    };

    return (
        <div className="group relative h-full w-full cursor-pointer">
            {/* Main Content */}
            {renderContent()}

            {/* Delete Button (Pop-out Top Left) */}
            {/* Delete Button (Pop-out Top Left) */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    console.log('LinkTile: Delete button clicked');
                    onRemove();
                }}
                onPointerDown={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                className="absolute -top-3 -left-3 w-8 h-8 rounded-lg bg-white dark:bg-zinc-950 text-zinc-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-50 scale-100 active:scale-95"
                title="Delete Tile"
            >
                <span className="material-symbols-outlined text-[18px]">delete</span>
            </button>

            {/* Toolbar (Pop-out Bottom Center) */}
            <div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none group-hover:pointer-events-auto"
                onPointerDown={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
            >
                <TileToolbar
                    currentSize={size}
                    onResize={(s) => {
                        console.log('LinkTile: Toolbar resize triggered with:', s);
                        onResize(s);
                    }}
                    allowedSizes={["2x2", "4x2", "4x4", "6x2", "6x4"]}
                />
            </div>
        </div>
    );
}
