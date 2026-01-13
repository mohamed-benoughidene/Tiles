import React, { useRef } from 'react';
import { InlineEdit } from '@/components/ui/inline-edit';
import { cn } from '@/lib/utils';

interface ProductTile2x4Props {
    data: any;
    onUpdate: (data: any) => void;
    readOnly?: boolean;
    layout?: 'classic' | 'minimal' | 'showcase';
}

export function ProductTile2x4({ data, onUpdate, readOnly, layout = 'classic' }: ProductTile2x4Props) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { title = 'Product Name', price = '$0.00', image, description = 'Product description goes here.' } = data;

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

    // SHOWCASE: Full Image background, content at bottom
    if (layout === 'showcase') {
        return (
            <div className="relative w-full h-full bg-zinc-900 rounded-[1.75rem] overflow-hidden shadow-sm border border-zinc-200 dark:border-white/10 group cursor-pointer">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: image ? `url('${image}')` : undefined }}
                    onClick={triggerUpload}
                >
                    {!image && (
                        <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-zinc-600">
                            <span className="material-symbols-outlined text-4xl">inventory_2</span>
                        </div>
                    )}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                <div className="absolute bottom-5 inset-x-5 flex flex-col gap-2 z-10">
                    <div className="flex justify-between items-end">
                        <div className="flex flex-col gap-0.5 flex-1 min-w-0 pr-2">
                            <InlineEdit
                                value={title}
                                onSave={(val) => onUpdate({ title: val })}
                                disabled={readOnly}
                                className="text-xl font-bold text-white truncate text-shadow-sm"
                                inputClassName="text-xl font-bold bg-transparent text-white w-full"
                            />
                            <InlineEdit
                                value={price}
                                onSave={(val) => onUpdate({ price: val })}
                                disabled={readOnly}
                                className="text-lg font-medium text-zinc-200"
                                inputClassName="text-lg font-medium bg-transparent text-zinc-200 w-full"
                            />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shrink-0 hover:scale-110 transition-transform shadow-lg">
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </div>
                    </div>
                </div>
                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
            </div>
        );
    }

    // MINIMAL: Clean image top, simple text bottom
    if (layout === 'minimal') {
        return (
            <div className="relative w-full h-full bg-white dark:bg-[#1C1C1E] rounded-[1.75rem] overflow-hidden shadow-sm border border-zinc-200 dark:border-white/10 group flex flex-col">
                <div
                    className="flex-1 w-full relative bg-zinc-100 dark:bg-zinc-800 overflow-hidden"
                    onClick={triggerUpload}
                >
                    {image ? (
                        <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                            style={{ backgroundImage: `url('${image}')` }}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-400">
                            <span className="material-symbols-outlined text-3xl">image</span>
                        </div>
                    )}
                </div>
                <div className="p-5 flex flex-col gap-1 z-10 bg-white dark:bg-[#1C1C1E]">
                    <InlineEdit
                        value={title}
                        onSave={(val) => onUpdate({ title: val })}
                        disabled={readOnly}
                        className="text-lg font-bold text-zinc-900 dark:text-white truncate"
                        inputClassName="text-lg font-bold bg-transparent dark:text-white w-full"
                    />
                    <InlineEdit
                        value={price}
                        onSave={(val) => onUpdate({ price: val })}
                        disabled={readOnly}
                        className="text-base font-medium text-zinc-500 dark:text-zinc-400"
                        inputClassName="text-base font-medium bg-transparent dark:text-zinc-400 w-full"
                    />
                </div>
                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
            </div>
        );
    }

    // CLASSIC: Distinct "Product Card" with nested image (Vertical)
    return (
        <div className="relative w-full h-full flex flex-col group transition-all duration-500 hover:scale-[1.01] cursor-pointer">
            <div className="absolute inset-0 bg-white dark:bg-[#18181b] rounded-[1.75rem] shadow-sm ring-1 ring-zinc-200 dark:ring-white/10 flex flex-col p-2 gap-2 transition-all duration-500 group-hover:shadow-xl group-hover:ring-zinc-300 dark:group-hover:ring-white/20">
                {/* Image Container (Inset) */}
                <div
                    className="h-[55%] w-full relative bg-zinc-100 dark:bg-zinc-800 rounded-[1.25rem] overflow-hidden cursor-pointer group/image ring-1 ring-black/5 dark:ring-white/5"
                    onClick={triggerUpload}
                >
                    {image ? (
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover/image:scale-110"
                            style={{ backgroundImage: `url('${image}')` }}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-zinc-500">
                            <span className="material-symbols-outlined text-4xl">shopping_cart</span>
                        </div>
                    )}
                    {!readOnly && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                            <span className="material-symbols-outlined text-white text-2xl">edit</span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex-1 px-1 pb-1 flex flex-col justify-between">
                    <div className="flex flex-col gap-1">
                        <InlineEdit
                            value={title}
                            onSave={(val) => onUpdate({ title: val })}
                            disabled={readOnly}
                            className="text-lg font-bold text-zinc-900 dark:text-white leading-tight"
                            inputClassName="text-lg font-bold bg-transparent dark:text-white w-full"
                        />
                        <InlineEdit
                            value={description}
                            onSave={(val) => onUpdate({ description: val })}
                            disabled={readOnly}
                            className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2"
                            inputClassName="text-xs bg-transparent dark:text-zinc-400 w-full"
                        />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                        <InlineEdit
                            value={price}
                            onSave={(val) => onUpdate({ price: val })}
                            disabled={readOnly}
                            className="text-lg font-bold text-zinc-900 dark:text-white whitespace-nowrap"
                            inputClassName="text-lg font-bold bg-transparent dark:text-white w-24 whitespace-nowrap"
                        />
                        <div className="h-9 w-9 rounded-full bg-[#1313ec] hover:bg-[#0c0cb8] text-white flex items-center justify-center hover:scale-105 transition-all cursor-pointer shadow-md shadow-indigo-500/20">
                            <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                        </div>
                    </div>
                </div>
            </div>
            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
        </div>
    );
}
