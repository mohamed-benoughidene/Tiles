"use client";

import { InlineEdit } from "@/components/ui/inline-edit";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface LinkTile4x2Props {
    title: string;
    subtext: string;
    image: string;
    onUpdate: (data: any) => void;
    readOnly?: boolean;
    layout?: 'classic' | 'cover' | 'minimal';
}

export function LinkTile4x2({ title, subtext, image, onUpdate, readOnly, layout = 'classic' }: LinkTile4x2Props) {
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
                    "w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
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

    // --- LAYOUTS ---

    // 1. COVER: Full bg image, text overlay bottom
    if (layout === 'cover') {
        return (
            <div className="group relative h-full w-full bg-zinc-900 rounded-[1.375rem] shadow-sm overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]">
                {renderImageArea("absolute inset-0 w-full h-full")}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col justify-end z-20">
                    <InlineEdit
                        value={title}
                        onSave={(val) => onUpdate({ title: val })}
                        className="text-[17px] font-bold text-white line-clamp-1 text-shadow-sm"
                        inputClassName="text-[17px] font-bold text-white"
                        disabled={readOnly}
                        placeholder="Title"
                    />
                    <InlineEdit
                        value={subtext}
                        onSave={(val) => onUpdate({ subtext: val })}
                        className="text-[13px] font-medium text-white/80 line-clamp-1"
                        inputClassName="text-[13px] font-medium text-white/80"
                        disabled={readOnly}
                        placeholder="Subtitle"
                    />
                </div>
            </div>
        );
    }

    // 2. MINIMAL: Just text, maybe small icon, clean bg
    if (layout === 'minimal') {
        return (
            <div className="group relative h-full w-full bg-white dark:bg-[#1c1c1e] rounded-[1.375rem] shadow-sm border border-zinc-200 dark:border-white/10 overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] flex items-center justify-center p-6 text-center">
                <div className="flex flex-col items-center gap-2">
                    <InlineEdit
                        value={title}
                        onSave={(val) => onUpdate({ title: val })}
                        className="text-xl font-bold text-zinc-900 dark:text-white"
                        inputClassName="text-xl font-bold text-center"
                        disabled={readOnly}
                        placeholder="Title"
                    />
                    <InlineEdit
                        value={subtext}
                        onSave={(val) => onUpdate({ subtext: val })}
                        className="text-sm font-medium text-zinc-500 dark:text-zinc-400"
                        inputClassName="text-sm font-medium text-center"
                        disabled={readOnly}
                        placeholder="Subtitle"
                    />
                </div>
                {/* Chevron */}
                <div className="absolute right-4 text-zinc-300 dark:text-zinc-600">
                    <span className="material-symbols-outlined text-2xl font-light">chevron_right</span>
                </div>
            </div>
        );
    }

    // 3. HOVER / CLASSIC (Default)
    // Hover uses standard layout but image behavior is handled in renderImageArea helper
    return (
        <div className="group relative h-full w-full bg-white dark:bg-[#1c1c1e] rounded-[1.375rem] shadow-sm border border-zinc-200 dark:border-white/10 overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]">
            <div className="flex items-center h-full p-3 gap-4">
                {/* Thumbnail */}
                <div className="relative shrink-0 w-1/2 sm:w-[50%] h-full rounded-xl overflow-hidden shadow-sm ring-1 ring-black/5 dark:ring-white/5">
                    {renderImageArea("w-full h-full")}
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center flex-1 min-w-0 py-1">
                    <InlineEdit
                        value={title}
                        onSave={(val) => onUpdate({ title: val })}
                        className="text-[17px] font-bold leading-[1.3] text-zinc-900 dark:text-white line-clamp-2 mb-1"
                        inputClassName="text-[17px] font-bold"
                        disabled={readOnly}
                        placeholder="Link Title"
                    />
                    <InlineEdit
                        value={subtext}
                        onSave={(val) => onUpdate({ subtext: val })}
                        className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 line-clamp-1 flex items-center gap-1"
                        inputClassName="text-[13px] font-medium"
                        disabled={readOnly}
                        placeholder="Link Description"
                    />
                </div>

                {/* Chevron */}
                <div className="flex items-center justify-center text-zinc-300 dark:text-zinc-600 pr-1">
                    <span className="material-symbols-outlined text-2xl font-light">chevron_right</span>
                </div>
            </div>
        </div>
    );
}
