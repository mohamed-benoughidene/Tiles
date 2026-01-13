import { useState } from "react";
import { TileToolbar } from "@/components/editor/TileToolbar";
import { LinkSetupModal } from "@/components/modals/LinkSetupModal";

import { LinkTile2x2 } from "./link/LinkTile2x2";
import { LinkTile4x2 } from "./link/LinkTile4x2";
import { LinkTile4x4 } from "./link/LinkTile4x4";
import { LinkTile6x2 } from "./link/LinkTile6x2";
import { LinkTile6x4 } from "./link/LinkTile6x4";

interface LinkTileProps {
    title: string;
    size: "2x2" | "4x2" | "4x4" | "6x2" | "6x4" | string;
    onResize: (size: any) => void;
    onRemove: () => void;
    readOnly?: boolean;
    data?: {
        title?: string;
        description?: string;
        subtext?: string;
        image?: string;
        url?: string;
    };
}

export function LinkTile({ title: initialTitle, size, onResize, onRemove, readOnly, data }: LinkTileProps) {
    // Local state for the tile content
    const [content, setContent] = useState({
        title: data?.title || initialTitle || "Link Tile",
        description: data?.description || "Description goes here...",
        subtext: data?.subtext || "Design Matters",
        image: data?.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuBFAJalqElo677yC3IOxZHqHIaMZIRSr5-T6GODeiUwEyP54YefcG9Fz1MD_X1GapMitF7e_yAUo90BtUpnq0Vt1qVDVm0P1oMjMgNFAfFhfGx6pebRW-gY_q9uA2HvluYhwidx3Gl1LhI71UtuVTxEOdFmvcAM8PKI57IMCrrkcBxJC1XuNdO4d9BgFFA7n78roOZyg2TWqkyUaAQxG2kMmkZQfhqAdVQQCSTK27dhf9zVochEa5RvM8IteA4g4C5B2BFQPyXDUg",
        url: data?.url || ""
    });

    const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);

    const handleUpdate = (updates: Partial<typeof content>) => {
        setContent(prev => ({ ...prev, ...updates }));
    };

    // Determine which component to render
    const renderContent = () => {
        const props = { ...content, onUpdate: handleUpdate, readOnly };
        switch (size) {
            case "2x2": return <LinkTile2x2 {...props} />;
            case "4x2": return <LinkTile4x2 {...props} />;
            case "4x4": return <LinkTile4x4 {...props} />;
            case "6x2": return <LinkTile6x2 {...props} />;
            case "6x4": return <LinkTile6x4 {...props} />;
            default: return <LinkTile2x2 {...props} />; // Fallback
        }
    };

    return (
        <div
            className="group relative h-full w-full cursor-pointer"
            onClick={() => {
                if (readOnly && content.url && content.url !== '#') {
                    window.open(content.url, '_blank');
                }
            }}
        >
            {/* Main Content */}
            {renderContent()}

            {/* Action Buttons (Top Left) */}
            {!readOnly && (
                <div className="absolute -top-3 -left-3 flex gap-2 z-50 opacity-0 group-hover:opacity-100 transition-opacity scale-100 active:scale-95 duration-200">
                    {/* Delete Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            console.log('LinkTile: Delete button clicked');
                            onRemove();
                        }}
                        onPointerDown={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        className="w-8 h-8 rounded-lg bg-white dark:bg-zinc-950 text-zinc-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-center"
                        title="Delete Tile"
                    >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>

                    {/* Link Settings Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsLinkModalOpen(true);
                        }}
                        onPointerDown={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        className="w-8 h-8 rounded-lg bg-white dark:bg-zinc-950 text-zinc-400 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-center"
                        title="Edit Link URL"
                    >
                        <span className="material-symbols-outlined text-[18px]">link</span>
                    </button>
                </div>
            )}

            {/* Toolbar (Pop-out Bottom Center) */}
            {!readOnly && (
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
            )}

            <LinkSetupModal
                isOpen={isLinkModalOpen}
                onClose={() => setIsLinkModalOpen(false)}
                initialUrl={content.url}
                onSave={(url) => handleUpdate({ url })}
            />
        </div>
    );
}
