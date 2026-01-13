import React, { useState } from 'react';
import { TileSizeName } from '@/types/tiles';
import { InlineEdit } from "@/components/ui/inline-edit";

interface TextTileProps {
    id?: string;
    title?: string;
    size: TileSizeName;
    onResize: (id: string, size: any) => void;
    onRemove: () => void;
    data?: any;
}

export function TextTile({ id = '', title = 'Header', onRemove, readOnly }: TextTileProps & { readOnly?: boolean }) {
    const [text, setText] = useState(title);
    const [isEditing, setIsEditing] = useState(false);

    // Gesture tracking state
    const [pointerStart, setPointerStart] = useState<{ x: number, y: number, time: number } | null>(null);

    const handlePointerDown = (e: React.PointerEvent) => {
        if (readOnly) return;
        // Do NOT stop propagation - allow RGL to receive the event for dragging
        setPointerStart({
            x: e.clientX,
            y: e.clientY,
            time: Date.now()
        });
    };

    const handlePointerUp = (e: React.PointerEvent) => {
        if (readOnly || !pointerStart) return;

        const deltaX = Math.abs(e.clientX - pointerStart.x);
        const deltaY = Math.abs(e.clientY - pointerStart.y);

        // "Click" threshold: moved less than 10px
        if (deltaX < 10 && deltaY < 10) {
            setIsEditing(true);
        }

        setPointerStart(null);
    };

    return (
        <div className="group relative h-full w-full flex items-center justify-center">
            {/* Main Content - Inline Edit */}
            <div
                className="w-full h-full flex items-center px-6"
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
            // Removed stopPropagation for Move/Touch to allow Drag
            >

                <InlineEdit
                    value={text}
                    onSave={setText}
                    isEditing={isEditing}
                    onEditChange={setIsEditing}
                    disabled={readOnly}
                    className="text-2xl font-bold text-zinc-900 dark:text-white text-left w-full block hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors py-1 px-2 -ml-2 tracking-tight border border-transparent focus:ring-0"
                    inputClassName="text-2xl font-bold text-left w-full tracking-tight px-2 -ml-2 py-1 border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 h-auto bg-transparent rounded-lg"
                    placeholder="Section Header"
                />
            </div>

            {/* DELETE BUTTON - Visible on hover, Right Aligned for Headers */}
            {!readOnly && (
                <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-1/2 -translate-y-1/2 right-4 z-50">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onRemove();
                        }}
                        onPointerDown={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        className="bg-white/50 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 text-zinc-400 hover:text-rose-500 dark:hover:text-rose-400 rounded-md p-1.5 shadow-sm backdrop-blur-sm transition-all cursor-pointer"
                        title="Delete Section"
                    >
                        <span className="material-symbols-outlined text-lg block">delete</span>
                    </button>
                </div>
            )}
        </div>
    );
}
