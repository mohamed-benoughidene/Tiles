"use client";

import { useState } from "react";
import { EditorHeader } from "@/components/editor/EditorHeader";
import { Canvas } from "@/components/editor/Canvas";
import { FloatingToolbar } from "@/components/editor/FloatingToolbar";
import { useBentoGridState } from "@/hooks/useBentoGridState";
import { DeleteConfirmationModal } from "@/components/modals/DeleteConfirmationModal";

export default function EditorPage() {
    const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
    const [isPreview, setIsPreview] = useState(false);
    const [isClearModalOpen, setIsClearModalOpen] = useState(false);
    const gridState = useBentoGridState();

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-zinc-900 dark:text-zinc-50 h-screen flex flex-col overflow-hidden antialiased selection:bg-indigo-100 selection:text-indigo-900 dark:selection:bg-indigo-900 dark:selection:text-indigo-100">
            <EditorHeader
                viewMode={viewMode}
                setViewMode={setViewMode}
                isPreview={isPreview}
                setIsPreview={setIsPreview}
            />

            <main className="flex-1 flex overflow-hidden relative">
                <Canvas
                    viewMode={viewMode}
                    tiles={gridState.tiles}
                    selectedTileId={gridState.selectedTileId}
                    onSelectTile={gridState.setSelectedTileId}
                    layouts={gridState.layouts}
                    onLayoutChange={gridState.onLayoutChange}
                    onReorder={gridState.reorderTiles}
                    onResize={gridState.updateTileSize}
                    onDelete={gridState.removeTile}
                    onUpdateTile={gridState.updateTileContent}
                    readOnly={isPreview}
                    onRemoveEmpty={gridState.removeEmptyTiles}
                    onClearAll={() => setIsClearModalOpen(true)}
                />
                {!isPreview && <FloatingToolbar onAddTile={gridState.addTile} />}

                <DeleteConfirmationModal
                    isOpen={isClearModalOpen}
                    onClose={() => setIsClearModalOpen(false)}
                    onConfirm={gridState.clearAllTiles}
                    title="Clear Canvas?"
                    description="Are you sure you want to remove ALL tiles? This action cannot be undone."
                />
            </main>
        </div>
    );
}
