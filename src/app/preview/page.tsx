"use client";

import { useState, useEffect } from "react";
import { BentoGrid } from "@/components/editor/BentoGrid";
import { useBentoGridState } from "@/hooks/useBentoGridState";
import { ProfileSection } from "@/components/editor/ProfileSection";

export default function PreviewPage() {
    const { tiles, layouts } = useBentoGridState();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black font-display text-zinc-900 dark:text-zinc-50 flex flex-col items-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.4] dark:opacity-[0.2] pointer-events-none fixed" style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>

            <main className="w-full max-w-[1200px] p-4 md:p-8 z-10">
                <ProfileSection viewMode="desktop" />

                <div className="mt-8">
                    <BentoGrid
                        tiles={tiles}
                        layouts={layouts}
                        onLayoutChange={() => { }} // No-op for preview
                        selectedTileId={null}
                        onSelectTile={() => { }}
                        onResize={() => { }}
                        onDelete={() => { }}
                        onReorder={() => { }} // No-op
                        onUpdateTile={() => { }} // No-op
                        readOnly={true}
                    />
                </div>
            </main>

            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => window.location.href = '/editor'}
                    className="bg-zinc-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-full font-medium shadow-lg hover:scale-105 transition-transform"
                >
                    Back to Editor
                </button>
            </div>
        </div>
    );
}
