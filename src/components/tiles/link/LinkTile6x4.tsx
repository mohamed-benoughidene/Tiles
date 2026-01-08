"use client";

import { InlineEdit } from "@/components/ui/inline-edit";
import { useRef } from "react";

interface LinkTile6x4Props {
    title: string;
    subtext: string;
    image: string;
    onUpdate: (data: any) => void;
}

export function LinkTile6x4({ title, subtext, image, onUpdate }: LinkTile6x4Props) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            onUpdate({ image: objectUrl });
        }
    };

    return (
        <div className="group relative w-full h-full flex flex-col bg-white dark:bg-[#202023] rounded-[22px] shadow-sm ring-1 ring-black/5 dark:ring-white/10 overflow-hidden transition-all duration-300 hover:scale-[1.02]">
            <div className="flex h-full p-5 gap-4">
                {/* Left Column: Text Content */}
                <div className="flex flex-col flex-1 justify-center h-full min-w-0 pr-2">
                    <InlineEdit
                        value={title}
                        onSave={(val) => onUpdate({ title: val })}
                        className="text-zinc-900 dark:text-white text-lg font-bold leading-tight tracking-tight line-clamp-3"
                        inputClassName="text-lg font-bold"
                    />
                    <InlineEdit
                        value={subtext}
                        onSave={(val) => onUpdate({ subtext: val })}
                        className="mt-1 text-zinc-500 dark:text-zinc-400 text-[13px] font-medium leading-normal line-clamp-1"
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
        </div>
    );
}
