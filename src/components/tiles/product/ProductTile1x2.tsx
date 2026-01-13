import React from 'react';
import { InlineEdit } from '@/components/ui/inline-edit';
import { cn } from '@/lib/utils';
import { useRef } from 'react';

interface ProductTile1x2Props {
    data: any;
    onUpdate: (data: any) => void;
    readOnly?: boolean;
    layout?: 'classic' | 'minimal' | 'showcase';
}

export function ProductTile1x2({ data, onUpdate, readOnly, layout = 'classic' }: ProductTile1x2Props) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { title = 'Product', price = '$0.00', image } = data;

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

    // Minimal Layout: Just Image and Price Badge
    if (layout === 'minimal') {
        return (
            <div className="relative w-full h-full bg-zinc-100 dark:bg-zinc-900 overflow-hidden shadow-sm border border-zinc-200 dark:border-white/5 flex flex-col rounded-[1.5rem] group cursor-pointer">
                <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: image ? `url('${image}')` : undefined }}
                    onClick={triggerUpload}
                >
                    {!image && (
                        <div className="w-full h-full flex items-center justify-center bg-zinc-200 dark:bg-zinc-800 text-zinc-400">
                            <span className="material-symbols-outlined">image</span>
                        </div>
                    )}
                </div>
                <div className="absolute bottom-2 right-2 bg-white/90 dark:bg-black/80 backdrop-blur-md px-2 py-0.5 rounded-md shadow-sm">
                    <InlineEdit
                        value={price}
                        onSave={(val) => onUpdate({ price: val })}
                        disabled={readOnly}
                        className="text-[10px] font-bold text-zinc-900 dark:text-white"
                        inputClassName="text-[10px] font-bold bg-transparent border-none p-0 w-8 text-right"
                    />
                </div>
                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
            </div>
        );
    }

    // Classic/Showcase (Similar for tiny size)
    return (
        <div className="relative w-full h-full bg-white dark:bg-[#1C1C1E] overflow-hidden shadow-sm border border-zinc-200 dark:border-white/10 flex flex-col rounded-[1.5rem] group">
            <div
                className="flex-1 w-full relative bg-zinc-100 dark:bg-zinc-800"
                onClick={triggerUpload}
            >
                {image ? (
                    <div
                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: `url('${image}')` }}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-400">
                        <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                    </div>
                )}
                {!readOnly && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                        <span className="material-symbols-outlined text-white">edit</span>
                    </div>
                )}
            </div>

            <div className="px-2 py-2 flex flex-col gap-0.5 bg-white dark:bg-[#1C1C1E] z-10">
                <InlineEdit
                    value={title}
                    onSave={(val) => onUpdate({ title: val })}
                    disabled={readOnly}
                    className="text-[10px] font-medium text-zinc-900 dark:text-zinc-200 truncate leading-tight"
                    inputClassName="text-[10px] font-medium bg-transparent border-none p-0 w-full"
                />
                <InlineEdit
                    value={price}
                    onSave={(val) => onUpdate({ price: val })}
                    disabled={readOnly}
                    className="text-[10px] font-bold text-zinc-900 dark:text-white leading-tight"
                    inputClassName="text-[10px] font-bold bg-transparent border-none p-0 w-full"
                />
            </div>
            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
        </div>
    );
}
