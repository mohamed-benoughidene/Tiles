import React, { useState, useRef, useEffect } from 'react';
import { Tile, TileSize, TileSizeName } from '@/types/tiles';
import { TILE_SIZES } from '@/lib/tileConstants';
import { LinkTile } from "@/components/tiles/LinkTile";

import { SocialGridTile } from "@/components/tiles/SocialGridTile";
import { ProductTile } from "@/components/tiles/ProductTile";
import { TextTile } from "@/components/tiles/TextTile";
import { PriceMenuTile } from "@/components/tiles/PriceMenuTile";
import { MapTile } from "@/components/tiles/MapTile";
import { VideoTile } from "@/components/tiles/VideoTile";
import { GalleryTile } from "@/components/tiles/GalleryTile";
import { DeleteConfirmationModal } from "@/components/modals/DeleteConfirmationModal";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BentoTileProps {
    tile: Tile;
    isSelected: boolean;
    onSelect: (id: string) => void;
    onResize?: (id: string, size: TileSize) => void;
    onDelete?: (id: string) => void;
    isOverlay?: boolean;
    readOnly?: boolean;
}

export function BentoTile({ tile, isSelected, onSelect, onResize, onDelete, isOverlay, readOnly }: BentoTileProps) {
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const dragTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isDraggingRef = useRef(false);

    // Clean up timeout on unmount
    useEffect(() => {
        return () => {
            if (dragTimeoutRef.current) clearTimeout(dragTimeoutRef.current);
        };
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (readOnly) return;

        // If clicking on a button or interactive element, let it function normally and don't drag
        if ((e.target as HTMLElement).closest('button, input, textarea, [contenteditable], .no-drag')) {
            return;
        }

        e.stopPropagation(); // Stop RGL from starting drag immediately
        isDraggingRef.current = false;

        const target = e.currentTarget.parentElement; // The RGL item div
        const clientX = e.clientX;
        const clientY = e.clientY;

        dragTimeoutRef.current = setTimeout(() => {
            if (target) {
                isDraggingRef.current = true;
                // Dispatch a new event to the parent to start RGL drag
                const newEvent = new MouseEvent('mousedown', {
                    bubbles: true,
                    cancelable: true,
                    view: window,
                    clientX: clientX,
                    clientY: clientY,
                    buttons: 1
                });
                target.dispatchEvent(newEvent);
            }
        }, 200);
    };

    const handleMouseUp = () => {
        if (readOnly) return;
        if (dragTimeoutRef.current) {
            clearTimeout(dragTimeoutRef.current);
            dragTimeoutRef.current = null;
        }
        isDraggingRef.current = false;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (readOnly) return;
        // If we move significantly before the timer fires, cancel the drag wait (it's a click/select)
        // But wait, if it's a drag intention, we must hold STILL for 0.5s?
        // Usually "hold to drag" allows small movement, but let's be strict to prevent accidental drags.
        // Actually, RGL handles the threshold. If we stop prop, RGL doesn't see move.
        // So we don't strictly need this unless we want to cancel the timer on large moves.
        if (dragTimeoutRef.current && !isDraggingRef.current) {
            // Optional: Check distance? For now, we rely on the timer.
            // If user moves mouse away, they likely aren't holding.
            // But 'mousedown' + 'mousemove' = selecting text?
            // If selecting text, we want to CANCEL the tile drag timer.
            // So yes, on move, invalidate timer?
            // But even 1px jitter triggers move. Interaction: "Press and Hold STILL".
            // Let's add a small threshold buffer if we wanted, but clearing on any move is safer for text selection.
            // However, slight shaky hand shouldn't fail functionality.
            // Let's rely on standard "Hold" behavior. Browser 'click' handles jitter.
            // If I clear timeout on move, it becomes "Press and Hold Perfectly Still".
            // That might be annoying.
            // Let's Leave it active, assuming user tries to hold.
            // But if user performs a "Swipe" (Selection), they move fast.
            // If they swipe, 500ms later the drag starts? That would interrupt selection.
            // So we SHOULD cancel if movement is detected?
            // Let's try canceling on move to prioritize text selection.
            // clearDragTimeout();
        }
    };

    // Map size to grid spans (handled by RGL container mostly, but good for internal ref if needed)
    // Actually RGL handles sizing via w/h props on the item, so this might be redundant for layout but maybe useful for content sizing

    // Helper to get icon for size
    const getSizeIcon = (name: TileSizeName) => {
        switch (name) {
            case '1x1': return 'crop_square';
            case '1x2': return 'crop_portrait';
            case '2x1': return 'crop_7_5'; // closest approx
            case '2x2': return 'grid_view';
            default: return 'crop_square';
        }
    };

    if (isOverlay) {
        return (
            <div
                className={cn(
                    "relative rounded-[2rem] h-full shadow-2xl cursor-grabbing bg-white dark:bg-zinc-900 border-2 border-indigo-500 z-50 pointer-events-none flex flex-col items-center justify-center p-6 gap-4"
                )}
            >
                <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-700 flex items-center justify-center">
                    <span className="material-symbols-outlined text-zinc-400">image</span>
                </div>
                <div className="text-center">
                    <h3 className="font-semibold text-zinc-900 dark:text-white text-lg leading-tight">
                        {tile.content?.text || "New Tile"}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        {tile.size.name}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <>
            <motion.div
                layoutId={tile.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className={cn(
                    "relative rounded-[2rem] h-full transition-colors duration-200 bento-tile-content",
                    readOnly ? "no-drag" : "cursor-grab active:cursor-grabbing group hover:z-[60]",
                    isSelected && !readOnly
                        ? cn(
                            "z-20",
                            tile.type === 'placeholder' ? "bg-transparent" : (tile.type === 'link' || tile.type === 'text' || tile.type === 'price-menu' || tile.type === 'map' || tile.type === 'gallery' ? "bg-transparent border-transparent" : "bg-white dark:bg-zinc-900")
                        )
                        : tile.type === 'placeholder'
                            ? "border-2 border-dashed border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 z-10 bg-transparent " + (readOnly ? "cursor-default hover:border-zinc-200 dark:hover:border-zinc-800 hover:bg-transparent dark:hover:bg-transparent" : "")
                            : (tile.type === 'link' || tile.type === 'text' || tile.type === 'price-menu' || tile.type === 'map' || tile.type === 'gallery'
                                ? "z-10 bg-transparent" // LinkTile AND TextTile AND PriceMenuTile AND MapTile AND GalleryTile handle their own bg/border
                                : "border border-zinc-200 dark:border-zinc-800 shadow-sm z-10 bg-white dark:bg-zinc-900 " + (readOnly ? "" : "hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700")),
                )}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onMouseMove={handleMouseMove}
                onClick={(e) => {
                    if (readOnly) return;
                    e.stopPropagation();
                    onSelect(tile.id);
                }}
            >
                {/* Delete Button (Top Left) - Hide for LinkTile, SocialGridTile using their own */}
                {tile.type !== 'link' && tile.type !== 'social' && tile.type !== 'product' && tile.type !== 'gallery' && tile.type !== 'text' && tile.type !== 'price-menu' && tile.type !== 'map' && tile.type !== 'video' && !readOnly && (
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-3 -left-3 z-30">
                        <button
                            className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 rounded-lg p-1.5 shadow-sm transition-colors cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsDeleteDialogOpen(true);
                            }}
                            onPointerDown={e => e.stopPropagation()}
                        >
                            <span className="material-symbols-outlined text-lg block">delete</span>
                        </button>
                    </div>
                )}

                {/* Content */}
                {tile.type === 'placeholder' ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
                        <span className="material-symbols-outlined absolute top-6 right-6 text-zinc-300 group-hover:text-zinc-400 transition-colors">add</span>

                        <div className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform",
                            tile.content?.color === 'green' && "bg-green-50 dark:bg-green-900/20 text-green-500",
                            tile.content?.color === 'purple' && "bg-purple-50 dark:bg-purple-900/20 text-purple-500",
                            tile.content?.color === 'red' && "bg-red-50 dark:bg-red-900/20 text-red-500",
                            tile.content?.color === 'blue' && "bg-blue-50 dark:bg-blue-900/20 text-blue-500",
                            tile.content?.color === 'indigo' && "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-500",
                            tile.content?.color === 'pink' && "bg-pink-50 dark:bg-pink-900/20 text-pink-500",
                            tile.content?.color === 'orange' && "bg-orange-50 dark:bg-orange-900/20 text-orange-500",
                            tile.content?.color === 'emerald' && "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500",
                            tile.content?.color === 'zinc' && "bg-zinc-100 dark:bg-zinc-800 text-zinc-500",
                            !tile.content?.color && "bg-zinc-100 dark:bg-zinc-800 text-zinc-500"
                        )}>
                            <span className="material-symbols-outlined text-2xl">{tile.content?.icon || 'add'}</span>
                        </div>

                        <span className={cn(
                            "font-semibold text-zinc-900 dark:text-white transition-colors",
                            tile.content?.color === 'green' && "group-hover:text-green-600 dark:group-hover:text-green-400",
                            tile.content?.color === 'purple' && "group-hover:text-purple-600 dark:group-hover:text-purple-400",
                            tile.content?.color === 'red' && "group-hover:text-red-600 dark:group-hover:text-red-400",
                            tile.content?.color === 'blue' && "group-hover:text-blue-600 dark:group-hover:text-blue-400",
                            tile.content?.color === 'indigo' && "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
                            tile.content?.color === 'pink' && "group-hover:text-pink-600 dark:group-hover:text-pink-400",
                            tile.content?.color === 'orange' && "group-hover:text-orange-600 dark:group-hover:text-orange-400",
                            tile.content?.color === 'emerald' && "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
                            tile.content?.color === 'zinc' && "group-hover:text-zinc-600 dark:group-hover:text-zinc-400"
                        )}>
                            {tile.content?.text || "Add Item"}
                        </span>
                    </div>
                ) : tile.type === 'link' ? (
                    <div className="w-full h-full">
                        <LinkTile
                            title={tile.content?.text || "New Link"}
                            size={tile.size.name}
                            readOnly={readOnly}
                            onResize={(newSizeName) => {
                                // Need to map size string back to TileSize object
                                // We can use TILE_SIZES from lib/tileConstants
                                // But onResize prop here expects (id, sizeObj).
                                // LinkTile passes string.
                                // We need to find the constant for the string.

                                // Ideally we import TILE_SIZES and find it. 
                                // But TILE_SIZES might not have 4x2 etc yet if we didn't add them to constants.
                                // I must check lib/tileConstants soon. Assuming they exist or I'll add them.
                                // Debug logging
                                console.log('BentoTile onResize called with:', newSizeName);
                                console.log('Available sizes:', Object.keys(TILE_SIZES));
                                const newSizeObj = Object.values(TILE_SIZES).find(s => s.name === newSizeName);
                                console.log('Found size obj:', newSizeObj);
                                if (newSizeObj && onResize) {
                                    onResize(tile.id, newSizeObj);
                                }
                            }}
                            onRemove={() => setIsDeleteDialogOpen(true)}
                        />
                    </div>

                ) : tile.type === 'social' ? (
                    <div className="w-full h-full">
                        <SocialGridTile
                            title={tile.content?.text}
                            size={tile.size.name}
                            onResize={(newSizeName) => {
                                const newSizeObj = Object.values(TILE_SIZES).find(s => s.name === newSizeName);
                                if (newSizeObj && onResize) onResize(tile.id, newSizeObj);
                            }}
                            onRemove={() => setIsDeleteDialogOpen(true)}
                            readOnly={readOnly}
                        />
                    </div>
                ) : tile.type === 'product' ? (
                    <div className="w-full h-full">
                        <ProductTile
                            id={tile.id}
                            size={tile.size.name}
                            onResize={(id, sizeObj) => {
                                if (onResize) onResize(id, sizeObj);
                            }}
                            onRemove={() => setIsDeleteDialogOpen(true)}
                            data={tile.content}
                            readOnly={readOnly}
                        />
                    </div>
                ) : tile.type === 'text' ? (
                    <div className="w-full h-full">
                        <TextTile
                            id={tile.id}
                            title={tile.content?.text}
                            size={tile.size.name}
                            onResize={(id, sizeObj) => {
                                if (onResize) onResize(id, sizeObj);
                            }}
                            onRemove={() => setIsDeleteDialogOpen(true)}
                            readOnly={readOnly}
                        />
                    </div>
                ) : tile.type === 'price-menu' ? (
                    <div className="w-full h-full">
                        <PriceMenuTile
                            title={tile.content?.text}
                            size={tile.size.name}
                            onResize={(newSizeName) => {
                                const newSizeObj = Object.values(TILE_SIZES).find(s => s.name === newSizeName);
                                if (newSizeObj && onResize) onResize(tile.id, newSizeObj);
                            }}
                            onRemove={() => setIsDeleteDialogOpen(true)}
                            readOnly={readOnly}
                        />
                    </div>
                ) : tile.type === 'map' ? (
                    <div className="w-full h-full">
                        <MapTile
                            title={tile.content?.text}
                            size={tile.size.name}
                            onResize={(newSizeName) => {
                                const newSizeObj = Object.values(TILE_SIZES).find(s => s.name === newSizeName);
                                if (newSizeObj && onResize) onResize(tile.id, newSizeObj);
                            }}
                            onRemove={() => setIsDeleteDialogOpen(true)}
                            readOnly={readOnly}
                        />
                    </div>
                ) : tile.type === 'video' ? (
                    <div className="w-full h-full">
                        <VideoTile
                            id={tile.id}
                            title={tile.content?.text}
                            url={tile.content?.url}
                            size={tile.size.name}
                            onResize={(id, sizeObj) => {
                                if (onResize) onResize(id, sizeObj);
                            }}
                            onRemove={() => setIsDeleteDialogOpen(true)}
                            readOnly={readOnly}
                        />
                    </div>
                ) : tile.type === 'gallery' ? (
                    <div className="w-full h-full">
                        <GalleryTile
                            id={tile.id}
                            size={tile.size.name}
                            onResize={(id, sizeObj) => {
                                if (onResize) onResize(id, sizeObj);
                            }}
                            onRemove={() => setIsDeleteDialogOpen(true)}
                            readOnly={readOnly}
                        />
                    </div>
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 gap-4">
                        {/* Icon Placeholder */}
                        <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-700 flex items-center justify-center">
                            {/* Default icon or tile specific content */}
                            <span className="material-symbols-outlined text-zinc-400">image</span>
                        </div>

                        <div className="text-center">
                            <h3 className="font-semibold text-zinc-900 dark:text-white text-lg leading-tight">
                                {tile.content?.text || "New Tile"}
                            </h3>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                {tile.size.name}
                            </p>
                        </div>
                    </div>
                )}

                {/* Resize/Action Menu (Bottom Center) - Visible on Hover - Hide for LinkTile, SocialGridTile using their own toolbar */}
                {tile.type !== 'link' && tile.type !== 'social' && tile.type !== 'product' && tile.type !== 'gallery' && tile.type !== 'text' && tile.type !== 'price-menu' && tile.type !== 'map' && tile.type !== 'video' && !readOnly && (
                    <div
                        className={cn(
                            "absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center bg-zinc-950 dark:bg-black border border-zinc-800 rounded-xl px-2 py-1.5 gap-1.5 shadow-xl z-30 transition-all duration-200",
                            "opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                        )}
                        onPointerDown={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                    >
                        {/* Size Options - Restricted to basic Bento sizes */}
                        {(Object.values(TILE_SIZES) as TileSize[])
                            .filter(s => ['1x1', '1x2', '2x1', '2x2'].includes(s.name))
                            .map((size) => (
                                <button
                                    key={size.name}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onResize?.(tile.id, size);
                                    }}
                                    className={cn(
                                        "w-7 h-7 rounded-md flex items-center justify-center transition-colors",
                                        tile.size.name === size.name
                                            ? "bg-zinc-800 text-white"
                                            : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                                    )}
                                    title={`Resize to ${size.name}`}
                                >
                                    <span className="material-symbols-outlined text-[18px]">
                                        {getSizeIcon(size.name)}
                                    </span>
                                </button>
                            ))}
                    </div>
                )}

            </motion.div>

            {/* Delete Confirmation Modal */}
            <DeleteConfirmationModal
                isOpen={isDeleteDialogOpen}
                onClose={() => setIsDeleteDialogOpen(false)}
                onConfirm={() => {
                    onDelete?.(tile.id);
                    setIsDeleteDialogOpen(false);
                }}
                title="Delete Tile"
                description="Are you sure you want to delete this tile? This action cannot be undone."
            />
        </>
    );
}
