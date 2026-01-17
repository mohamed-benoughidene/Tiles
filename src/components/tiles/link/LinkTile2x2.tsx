"use client";

import { InlineEdit } from "@/components/ui/inline-edit";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface LinkTile2x2Props {
    title: string;
    image: string;
    onUpdate: (data: any) => void;
    readOnly?: boolean;
    layout?: 'classic' | 'cover' | 'minimal';
}

export function LinkTile2x2({ title, image, onUpdate, readOnly, layout = 'classic' }: LinkTile2x2Props) {
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

            {/* Hover Layout Base Icon for 2x2 */}


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

    // 1. COVER: Full bg
    if (layout === 'cover') {
        return (
            <div className="group relative h-full w-full bg-zinc-900 rounded-[1.35rem] shadow-sm border border-zinc-200 dark:border-zinc-800/50 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02]">
                {renderImageArea("absolute inset-0 w-full h-full")}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-center z-20">
                    <InlineEdit
                        value={title}
                        onSave={(val) => onUpdate({ title: val })}
                        className="text-lg font-bold text-white leading-tight text-center text-shadow-sm"
                        inputClassName="text-lg font-bold text-center text-white"
                        disabled={readOnly}
                        placeholder="Title"
                    />
                </div>
            </div>
        )
    }

    // 2. MINIMAL: Just Text
    if (layout === 'minimal') {
        return (
            <div className="group h-full w-full flex flex-col items-center justify-center p-4 overflow-hidden rounded-[1.35rem] bg-white dark:bg-[#202023] shadow-sm border border-zinc-200 dark:border-zinc-800/50 transition-all duration-300 hover:scale-[1.02]">
                <InlineEdit
                    value={title}
                    onSave={(val) => onUpdate({ title: val })}
                    className="text-xl font-bold leading-tight text-zinc-900 dark:text-white text-center"
                    inputClassName="text-xl font-bold text-center"
                    disabled={readOnly}
                    placeholder="Title"
                />
            </div>
        );
    }

    // 3. CLASSIC / HOVER (For 2x2, Classic usually means Icon Top/Text Bottom or small image top/text bottom - let's stick to simple text for 2x2 default or split)
    // Actually, existing 2x2 was just text. Let's make "Classic" 2x2 have an image on top half or icon? 
    // The previous implementation was just text. Let's Upgrade Classic 2x2 to have a visual element or keep it simple.
    // Bento 2x2 usually has an icon/image. Let's use the image.

    return (
        <div className="group h-full w-full flex flex-col overflow-hidden rounded-[1.35rem] bg-white dark:bg-[#202023] shadow-sm border border-zinc-200 dark:border-zinc-800/50 transition-all duration-300 hover:scale-[1.02]">
            {/* Top Half: Image */}
            <div className="h-1/2 w-full relative">
                {renderImageArea("w-full h-full")}
            </div>

            {/* Bottom Half: Content */}
            <div className="flex flex-1 flex-col items-center justify-center px-3 text-center h-1/2 bg-zinc-50 dark:bg-zinc-900/50">
                <InlineEdit
                    value={title}
                    onSave={(val) => onUpdate({ title: val })}
                    className="text-lg font-bold leading-tight tracking-tight text-zinc-900 dark:text-white antialiased text-center line-clamp-2"
                    inputClassName="text-lg font-bold text-center"
                    disabled={readOnly}
                    placeholder="Link Title"
                />
            </div>
            {/* Arrow Icon (Top Right Overly) */}
            <div className="absolute right-3 top-3 flex items-center justify-center text-white drop-shadow-md z-20 pointer-events-none">
                <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
            </div>
        </div>
    );
}
