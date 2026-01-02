import { TileSize, TileSizeName } from "@/types/tiles";
import { TILE_SIZES } from "@/lib/tileConstants";

interface FloatingToolbarProps {
    onAddTile: (size: TileSize) => void;
}

export function FloatingToolbar({ onAddTile }: FloatingToolbarProps) {
    return (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-5 duration-500 max-w-[90%] md:max-w-none">
            <div className="flex items-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-2xl p-1.5 gap-2 ring-1 ring-black/5 dark:ring-white/10 overflow-x-auto no-scrollbar">

                {/* Share Button */}
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-lg w-8 h-8 transition-colors shadow-sm flex items-center justify-center shrink-0" title="Share my Tiles">
                    <span className="material-symbols-outlined text-[18px]">ios_share</span>
                </button>

                <div className="w-px h-5 bg-zinc-200 dark:bg-zinc-800 mx-1 shrink-0"></div>

                {/* Core Tools */}
                <button
                    onClick={() => onAddTile(TILE_SIZES['1x1'])}
                    className="group w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all shrink-0 relative"
                    title="Add Link Button"
                >
                    <span className="material-symbols-outlined text-[18px]">link</span>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Link</span>
                </button>
                <button
                    onClick={() => onAddTile(TILE_SIZES['2x2'])}
                    className="group w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all shrink-0 relative"
                    title="Add Social Grid"
                >
                    <span className="material-symbols-outlined text-[18px]">grid_view</span>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Socials</span>
                </button>
                <button
                    onClick={() => onAddTile(TILE_SIZES['2x1'])}
                    className="group w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all shrink-0 relative"
                    title="Add Text Header"
                >
                    <span className="material-symbols-outlined text-[18px]">title</span>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Text</span>
                </button>
                <button
                    onClick={() => onAddTile(TILE_SIZES['1x1'])}
                    className="group w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all shrink-0 relative"
                    title="Add Note"
                >
                    <span className="material-symbols-outlined text-[18px]">notes</span>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Note</span>
                </button>
                <button
                    onClick={() => onAddTile(TILE_SIZES['2x1'])}
                    className="group w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all shrink-0 relative"
                    title="Add Music"
                >
                    <span className="material-symbols-outlined text-[18px]">music_note</span>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Music</span>
                </button>

                <div className="w-px h-5 bg-zinc-200 dark:bg-zinc-800 mx-1 shrink-0"></div>

                {/* Commerce Tools */}
                <button
                    onClick={() => onAddTile(TILE_SIZES['1x1'])}
                    className="group w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all shrink-0 relative"
                    title="Add Pricing Table"
                >
                    <span className="material-symbols-outlined text-[18px]">payments</span>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Pricing</span>
                </button>
                <button
                    onClick={() => onAddTile(TILE_SIZES['1x2'])}
                    className="group w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all shrink-0 relative"
                    title="Add Product Card"
                >
                    <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Product</span>
                </button>

                <div className="w-px h-5 bg-zinc-200 dark:bg-zinc-800 mx-1 shrink-0"></div>

                {/* Media Tools */}
                <button
                    onClick={() => onAddTile(TILE_SIZES['2x2'])}
                    className="group w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all shrink-0 relative"
                    title="Add Image Gallery"
                >
                    <span className="material-symbols-outlined text-[18px]">image</span>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Gallery</span>
                </button>
                <button
                    onClick={() => onAddTile(TILE_SIZES['2x1'])}
                    className="group w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all shrink-0 relative"
                    title="Add Video Embed"
                >
                    <span className="material-symbols-outlined text-[18px]">play_circle</span>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Video</span>
                </button>
                <button
                    onClick={() => onAddTile(TILE_SIZES['2x2'])}
                    className="group w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all shrink-0 relative"
                    title="Add Map"
                >
                    <span className="material-symbols-outlined text-[18px]">map</span>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Map</span>
                </button>

            </div>
        </div>
    );
}
