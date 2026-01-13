"use client";

import { InlineEdit } from "@/components/ui/inline-edit";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface LinkTile2x4Props {
    title: string;
    image: string;
    onUpdate: (data: any) => void;
    readOnly?: boolean;
    layout?: 'classic' | 'cover' | 'minimal';
}

export function LinkTile2x4({ title, image, onUpdate, readOnly, layout = 'classic' }: LinkTile2x4Props) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            onUpdate({ image: objectUrl });
        }
    };

    const triggerUpload = (e: React.MouseEvent) => {
        if (!readOnly) {
            e.stopPropagation();
            fileInputRef.current?.click();
        }
    };

    // Render Helpers
    const renderImageArea = (className?: string) => (
        <div
            className={cn("relative overflow-hidden bg-zinc-100 dark:bg-zinc-800 group/image", className)}
            onClick={triggerUpload}
        >
            <div
                className={cn(
                    "w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110",
                )}
                style={{ backgroundImage: `url('${image}')` }}
            />

            {!readOnly && (
                <>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity cursor-pointer z-10">
                        <span className="material-symbols-outlined text-white text-[24px]">edit</span>
                    </div>
                    <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} onClick={e => e.stopPropagation()} />
                </>
            )}
        </div>
    );

    // 1. COVER layout (Full background image with text at bottom)
    if (layout === 'cover') {
        return (
            <div className="group relative h-full w-full bg-zinc-900 rounded-[1.35rem] shadow-sm border border-zinc-200 dark:border-zinc-800/50 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02]">
                {renderImageArea("absolute inset-0 w-full h-full")}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-center z-20">
                    <InlineEdit
                        value={title}
                        onSave={(val) => onUpdate({ title: val })}
                        className="text-xl font-bold text-white leading-tight text-center text-shadow-sm"
                        inputClassName="text-xl font-bold text-center text-white"
                        disabled={readOnly}
                    />
                </div>
            </div>
        );
    }

    // 2. MINIMAL layout (Just text, no image)
    if (layout === 'minimal') {
        return (
            <div className="group h-full w-full flex flex-col items-center justify-center p-6 overflow-hidden rounded-[1.35rem] bg-white dark:bg-[#202023] shadow-sm border border-zinc-200 dark:border-zinc-800/50 transition-all duration-300 hover:scale-[1.02]">
                <InlineEdit
                    value={title}
                    onSave={(val) => onUpdate({ title: val })}
                    className="text-2xl font-bold leading-tight text-zinc-900 dark:text-white text-center"
                    inputClassName="text-2xl font-bold text-center"
                    disabled={readOnly}
                />
            </div>
        );
    }

    // 3. CLASSIC layout (Image top half, Text bottom half)
    return (
        <div className="group h-full w-full flex flex-col overflow-hidden rounded-[1.35rem] bg-white dark:bg-[#202023] shadow-sm border border-zinc-200 dark:border-zinc-800/50 transition-all duration-300 hover:scale-[1.02]">
            {/* Top Half: Image (Taking up more height in a tall tile) */}
            <div className="h-[60%] w-full relative">
                {renderImageArea("w-full h-full")}
            </div>

            {/* Bottom Half: Content */}
            <div className="flex flex-1 flex-col items-center justify-center p-4 text-center h-[40%] bg-zinc-50 dark:bg-zinc-900/50">
                <InlineEdit
                    value={title}
                    onSave={(val) => onUpdate({ title: val })}
                    className="text-xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white antialiased text-center"
                    inputClassName="text-xl font-bold text-center"
                    disabled={readOnly}
                />
            </div>
            {/* Arrow Icon */}
            <div className="absolute right-4 top-4 flex items-center justify-center text-white drop-shadow-md z-20 pointer-events-none">
                <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
            </div>
        </div>
    );
}
