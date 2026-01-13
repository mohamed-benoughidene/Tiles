"use client";

import { InlineEdit } from "@/components/ui/inline-edit";
import { useRef } from "react";

interface LinkTile4x4Props {
    title: string;
    subtext: string;
    image: string;
    onUpdate: (data: any) => void;
    readOnly?: boolean;
}

export function LinkTile4x4({ title, subtext, image, onUpdate, readOnly }: LinkTile4x4Props) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            onUpdate({ image: objectUrl });
        }
    };

    return (
        <div className="h-full w-full bg-zinc-900 dark:bg-zinc-800 rounded-[2.2rem] shadow-sm overflow-hidden flex flex-col group cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-out select-none relative border border-white/10">
            <div className="h-[72%] w-full relative group/image">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }}></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/30"></div>

                {/* Image Edit Overlay */}
                {!readOnly && (
                    <>
                        <div
                            className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity cursor-pointer z-10"
                            onClick={(e) => {
                                e.stopPropagation();
                                fileInputRef.current?.click();
                            }}
                        >
                            <span className="material-symbols-outlined text-white text-[32px]">edit</span>
                        </div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageUpload}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </>
                )}
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
                />
                <InlineEdit
                    value={subtext}
                    onSave={(val) => onUpdate({ subtext: val })}
                    className="text-zinc-400 text-[13px] font-medium leading-normal mt-0.5 line-clamp-1"
                    inputClassName="text-[13px] font-medium text-zinc-400 bg-transparent"
                    disabled={readOnly}
                />
            </div>
        </div>
    );
}
