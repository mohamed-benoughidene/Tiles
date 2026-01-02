"use client";

import { ReactNode } from "react";
import { ProfileSection } from "./ProfileSection";
import { TilesSection } from "./TilesSection";
import { BentoGrid } from "./BentoGrid";
import { Tile, TileSize } from "@/types/tiles";

import { Layout } from 'react-grid-layout';

interface CanvasProps {
    viewMode: "desktop" | "mobile";
    children?: ReactNode;
    tiles: Tile[];
    selectedTileId: string | null;
    onSelectTile: (id: string) => void;
    layouts: { lg: Layout[], md: Layout[], sm: Layout[] };
    onLayoutChange: (currentLayout: Layout[], allLayouts: { lg: Layout[], md: Layout[], sm: Layout[] }) => void;
    onReorder: (oldIndex: number, newIndex: number) => void;
    onResize: (id: string, size: TileSize) => void;
    onDelete: (id: string) => void;
}

export function Canvas({ viewMode, children, tiles, selectedTileId, onSelectTile, layouts, onLayoutChange, onReorder, onResize, onDelete }: CanvasProps) {
    return (
        <section className={`w-full h-[100vh] bg-zinc-50 dark:bg-black relative flex flex-col items-center overflow-hidden transition-all duration-300 ${viewMode === "mobile" ? "py-8" : ""}`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.4] dark:opacity-[0.2]" style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>

            <div className={`relative w-full h-full overflow-y-auto z-10 p-10 md:pt-28 md:px-16 md:pb-16 ${viewMode === "mobile" ? "flex justify-center items-start" : ""}`}>

                {/* Mobile Container Frame if needed, or just layout */}
                <div className={`${viewMode === "mobile"
                    ? "w-[375px] h-[667px] bg-white dark:bg-black border-[8px] border-zinc-900 rounded-[3rem] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative shadow-2xl scale-[0.75] origin-top"
                    : "w-full h-full flex flex-col lg:flex-row gap-6 justify-start lg:pl-[380px]"
                    }`}>

                    {/* Content Wrapper for Mobile Mode to ensure padding inside phone frame */}
                    <div className={`${viewMode === "mobile" ? "p-6 min-h-full bg-zinc-50 dark:bg-black flex flex-col" : "contents"}`}>
                        <ProfileSection viewMode={viewMode} />
                        <BentoGrid
                            tiles={tiles}
                            selectedTileId={selectedTileId}
                            onSelectTile={onSelectTile}
                            layouts={layouts}
                            onLayoutChange={onLayoutChange}
                            onReorder={onReorder}
                            onResize={onResize}
                            onDelete={onDelete}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
