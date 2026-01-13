"use client";

import { InlineEdit } from "@/components/ui/inline-edit";

interface LinkTile2x2Props {
    title: string;
    onUpdate: (data: any) => void;
    readOnly?: boolean;
}

export function LinkTile2x2({ title, onUpdate, readOnly }: LinkTile2x2Props) {
    return (
        <div className="h-full w-full flex flex-col overflow-hidden rounded-[1.35rem] bg-zinc-850 dark:bg-[#202023] shadow-sm border border-zinc-200 dark:border-zinc-800/50 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg">
            {/* Arrow Icon (Top Right) */}
            <div className="absolute right-4 top-4 flex items-center justify-center text-zinc-400 transition-colors duration-300 group-hover:text-zinc-900 dark:group-hover:text-white">
                <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col items-center justify-center px-4 text-center h-full">
                <InlineEdit
                    value={title}
                    onSave={(val) => onUpdate({ title: val })}
                    className="text-xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white antialiased text-center"
                    inputClassName="text-xl font-bold text-center"
                    disabled={readOnly}
                />
            </div>
        </div>
    );
}
