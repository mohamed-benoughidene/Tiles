"use client";

import { InlineEdit } from "@/components/ui/inline-edit";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface LinkTile4x4Props {
    title: string;
    subtext: string;
    image: string;
    onUpdate: (data: any) => void;
    readOnly?: boolean;
    layout?: 'classic' | 'cover' | 'minimal';
}

export function LinkTile4x4({ title, subtext, image, onUpdate, readOnly, layout = 'classic' }: LinkTile4x4Props) {
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
                        <span className="material-symbols-outlined text-white text-[32px]">edit</span>
                    </div>
                    <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} onClick={e => e.stopPropagation()} />
                </>
            )}
        </div>
    );

    // 1. COVER: Full bg
    if (layout === 'cover') {
        return (
            <div className="h-full w-full bg-zinc-900 rounded-[2.2rem] shadow-sm overflow-hidden flex flex-col group cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-out select-none relative border border-white/10">
                {renderImageArea("absolute inset-0 w-full h-full")}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end z-20">
                    <InlineEdit
                        value={title}
                        onSave={(val) => onUpdate({ title: val })}
                        className="text-white text-[24px] font-bold leading-tight tracking-[-0.02em] text-shadow-sm"
                        inputClassName="text-[24px] font-bold text-white bg-transparent"
                        disabled={readOnly}
                        placeholder="Title"
                    />
                    <InlineEdit
                        value={subtext}
                        onSave={(val) => onUpdate({ subtext: val })}
                        className="text-zinc-300 text-[15px] font-medium leading-normal mt-1"
                        inputClassName="text-[15px] font-medium text-zinc-300 bg-transparent"
                        disabled={readOnly}
                        placeholder="Subtitle"
                    />
                </div>
            </div>
        )
    }

    // 2. MINIMAL: Just Text favored
    if (layout === 'minimal') {
        return (
            <div className="h-full w-full bg-white dark:bg-[#1c1c1e] rounded-[2.2rem] shadow-sm border border-zinc-200 dark:border-white/10 overflow-hidden flex flex-col items-center justify-center p-8 text-center group cursor-pointer hover:scale-[1.02] transition-transform duration-300">
                <InlineEdit
                    value={title}
                    onSave={(val) => onUpdate({ title: val })}
                    className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white mb-2"
                    inputClassName="text-3xl font-bold text-center"
                    disabled={readOnly}
                    placeholder="Title"
                />
                <InlineEdit
                    value={subtext}
                    onSave={(val) => onUpdate({ subtext: val })}
                    className="text-lg text-zinc-500 dark:text-zinc-400 font-medium"
                    inputClassName="text-lg font-medium text-center"
                    disabled={readOnly}
                    placeholder="Subtitle"
                />
            </div>
        );
    }

    // 3. CLASSIC / HOVER (Split View for 4x4)
    return (
        <div className="h-full w-full bg-zinc-900 dark:bg-zinc-800 rounded-[2.2rem] shadow-sm overflow-hidden flex flex-col group cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-out select-none relative border border-white/10">
            <div className="h-[72%] w-full relative">
                {renderImageArea("w-full h-full")}
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/30 pointer-events-none"></div>
            </div>
            <div className="h-[28%] w-full bg-[#1f1f22] flex flex-col justify-center px-6 py-2 border-t border-white/5 relative">
                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-500 group-hover:text-indigo-500 transition-colors duration-300">
                    <span className="material-symbols-outlined">arrow_forward_ios</span>
                </div>
                <InlineEdit
                    value={title}
                    onSave={(val) => onUpdate({ title: val })}
                    className="text-white text-[20px] font-bold leading-tight tracking-[-0.02em] line-clamp-1"
                    inputClassName="text-[20px] font-bold text-white bg-transparent"
                    disabled={readOnly}
                    placeholder="Link Title"
                />
                <InlineEdit
                    value={subtext}
                    onSave={(val) => onUpdate({ subtext: val })}
                    className="text-zinc-400 text-[13px] font-medium leading-normal mt-0.5 line-clamp-1"
                    inputClassName="text-[13px] font-medium text-zinc-400 bg-transparent"
                    disabled={readOnly}
                    placeholder="Link Description"
                />
            </div>
        </div>
    );
}
