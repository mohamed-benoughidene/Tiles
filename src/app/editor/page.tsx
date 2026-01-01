"use client";

import { useState } from "react";
import { EditorHeader } from "@/components/editor/EditorHeader";
import { Canvas } from "@/components/editor/Canvas";
import { FloatingToolbar } from "@/components/editor/FloatingToolbar";

export default function EditorPage() {
    const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-zinc-900 dark:text-zinc-50 h-screen flex flex-col overflow-hidden antialiased selection:bg-indigo-100 selection:text-indigo-900 dark:selection:bg-indigo-900 dark:selection:text-indigo-100">
            <EditorHeader viewMode={viewMode} setViewMode={setViewMode} />

            <main className="flex-1 flex overflow-hidden relative">
                <Canvas viewMode={viewMode} />
                <FloatingToolbar />
            </main>
        </div>
    );
}
