"use client";

import { InlineEdit } from "@/components/ui/inline-edit";
import { useRef } from "react";

interface LinkTile4x2Props {
    title: string;
    subtext: string;
    image: string;
    onUpdate: (data: any) => void;
}

export function LinkTile4x2({ title, subtext, image, onUpdate }: LinkTile4x2Props) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            onUpdate({ image: objectUrl });
        }
    };

    return (
        <div className="group relative h-full w-full bg-white dark:bg-[#1c1c1e] rounded-[1.375rem] shadow-sm border border-zinc-200 dark:border-white/10 overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]">
            <div className="flex items-center h-full p-3 gap-4">
                {/* Thumbnail */}
                <div className="relative shrink-0 w-[220px] h-full rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 shadow-sm ring-1 ring-black/5 dark:ring-white/5 group/image">
                    <div className="w-full h-full bg-cover bg-center transition-transform group-hover:scale-110 duration-700 ease-out" style={{ backgroundImage: `url('${image}')` }}></div>

                    {/* Image Edit Overlay */}
                    <div
                        className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity cursor-pointer z-10"
                        onClick={(e) => {
                            e.stopPropagation();
                            fileInputRef.current?.click();
                        }}
                    >
                        <span className="material-symbols-outlined text-white text-[24px]">edit</span>
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center flex-1 min-w-0 py-1">
                    <InlineEdit
                        value={title}
                        onSave={(val) => onUpdate({ title: val })}
                        className="text-[17px] font-bold leading-[1.3] text-zinc-900 dark:text-white line-clamp-2 mb-1"
                        inputClassName="text-[17px] font-bold"
                    />
                    <InlineEdit
                        value={subtext}
                        onSave={(val) => onUpdate({ subtext: val })}
                        className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 line-clamp-1 flex items-center gap-1"
                        inputClassName="text-[13px] font-medium"
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
