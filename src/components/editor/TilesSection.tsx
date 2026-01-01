"use client";
import { TileToolbar } from "@/components/editor/TileToolbar";
import { DeleteConfirmationModal } from "@/components/modals/DeleteConfirmationModal";
import { LinkTile } from "@/components/tiles/LinkTile";
import { useState } from "react";

interface TilesSectionProps {
    viewMode: "desktop" | "mobile";
}

export function TilesSection({ viewMode }: TilesSectionProps) {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    // State for the example tile size
    const [googleTileSize, setGoogleTileSize] = useState<"1x1" | "2x1" | "2x2">("1x1");

    // Helper to get classes based on size
    const getSizeClasses = (size: "1x1" | "2x1" | "2x2") => {
        if (viewMode === 'mobile') return ""; // Mobile is always 1 col
        switch (size) {
            case "2x1": return "sm:col-span-2";
            case "2x2": return "sm:col-span-2 sm:row-span-2";
            default: return "";
        }
    };

    return (
        <div className={`flex-1 w-full h-full pb-32 ${viewMode === 'mobile' ? 'pb-8' : ''}`}>
            <div className={`grid grid-cols-1 gap-6 auto-rows-[220px] ${viewMode === 'mobile' ? '' : 'sm:grid-cols-2 xl:grid-cols-3'}`}>
                {/* Google Tile (Now LinkTile) */}
                <div className={`${getSizeClasses(googleTileSize)}`}>
                    <LinkTile
                        title="Latest News"
                        size={googleTileSize}
                        onResize={setGoogleTileSize}
                        onRemove={() => setIsDeleteModalOpen(true)}
                    />
                </div>

                {/* Add Note Placeholder */}
                <div className="rounded-[2rem] border-2 border-dashed border-zinc-200 dark:border-zinc-800 p-8 flex flex-col hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-all cursor-pointer group relative">
                    <span className="material-symbols-outlined absolute top-6 right-6 text-zinc-300 group-hover:text-zinc-400">add</span>
                    <span className="text-xl font-medium text-zinc-300 group-hover:text-zinc-400 mt-2">Add note...</span>
                </div>

                {/* Add Map */}
                <div className="rounded-[2rem] border-2 border-dashed border-zinc-200 dark:border-zinc-800 p-6 flex flex-col items-center justify-center gap-3 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-all cursor-pointer group relative">
                    <span className="material-symbols-outlined absolute top-6 right-6 text-zinc-300 group-hover:text-zinc-400">add</span>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-2xl">map</span>
                    </div>
                    <span className="font-semibold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Add Map</span>
                </div>

                {/* Add Music */}
                <div className="rounded-[2rem] border-2 border-dashed border-zinc-200 dark:border-zinc-800 p-6 flex flex-col items-center justify-center gap-3 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-all cursor-pointer group relative">
                    <span className="material-symbols-outlined absolute top-6 right-6 text-zinc-300 group-hover:text-zinc-400">add</span>
                    <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-2xl">music_note</span>
                    </div>
                    <span className="font-semibold text-zinc-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Add Music</span>
                </div>

                {/* Add Photo */}
                <div className="rounded-[2rem] border-2 border-dashed border-zinc-200 dark:border-zinc-800 p-6 flex flex-col items-center justify-center gap-3 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-all cursor-pointer group relative">
                    <span className="material-symbols-outlined absolute top-6 right-6 text-zinc-300 group-hover:text-zinc-400">add</span>
                    <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-2xl">image</span>
                    </div>
                    <span className="font-semibold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Add Photo</span>
                </div>

                {/* Add Video */}
                <div className="rounded-[2rem] border-2 border-dashed border-zinc-200 dark:border-zinc-800 p-6 flex flex-col items-center justify-center gap-3 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-all cursor-pointer group relative">
                    <span className="material-symbols-outlined absolute top-6 right-6 text-zinc-300 group-hover:text-zinc-400">add</span>
                    <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-2xl">movie</span>
                    </div>
                    <span className="font-semibold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Add Video</span>
                </div>
            </div>

            <DeleteConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={() => {
                    // TODO: Implement actual delete logic
                    setIsDeleteModalOpen(false);
                }}
                title="Delete Tile?"
                description="Are you sure you want to delete this tile? This action cannot be undone."
            />
        </div>
    );
}
