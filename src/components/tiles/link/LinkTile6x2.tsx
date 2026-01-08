"use client";

import { InlineEdit } from "@/components/ui/inline-edit";
import { useRef } from "react";

interface LinkTile6x2Props {
    title: string;
    subtext: string;
    image: string;
    onUpdate: (data: any) => void;
}

export function LinkTile6x2({ title, subtext, image, onUpdate }: LinkTile6x2Props) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            onUpdate({ image: objectUrl });
        }
    };

    return (
        <div className="relative w-full h-full bg-white dark:bg-[#202023] rounded-[1.75rem] shadow-sm ring-1 ring-black/5 dark:ring-white/10 flex items-center justify-between p-3 cursor-pointer transform transition-transform hover:scale-[1.02] active:scale-[0.98]">
            {/* Content Wrapper */}
            <div className="flex flex-col items-start justify-center flex-1 pl-3 pr-4">
                <InlineEdit
                    value={title}
                    onSave={(val) => onUpdate({ title: val })}
                    className="text-zinc-900 dark:text-white text-lg font-bold tracking-tight leading-snug line-clamp-1"
                    inputClassName="text-lg font-bold"
                />
                <InlineEdit
                    value={subtext}
                    onSave={(val) => onUpdate({ subtext: val })}
                    className="text-zinc-500 dark:text-zinc-400 text-[13px] font-medium leading-normal line-clamp-1"
                    inputClassName="text-[13px] font-medium"
                />
            </div>
            {/* Right Column: Visual */}
            <div className="w-[280px] shrink-0 h-full group/image relative">
                <div className="w-full h-full rounded-xl bg-cover bg-center bg-no-repeat shadow-inner ring-1 ring-black/5 dark:ring-white/5" style={{ backgroundImage: `url('${image}')` }}></div>
                {/* Image Edit Overlay */}
                <div
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity cursor-pointer z-10 rounded-xl"
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
        </div>
    );
}
