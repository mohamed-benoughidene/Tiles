import React, { useRef } from 'react';
import { InlineEdit } from '@/components/ui/inline-edit';
import { cn } from '@/lib/utils';

interface ProductTile2x2Props {
    data: any;
    onUpdate: (data: any) => void;
    readOnly?: boolean;
    layout?: 'classic' | 'minimal' | 'showcase';
}

export function ProductTile2x2({ data, onUpdate, readOnly, layout = 'classic' }: ProductTile2x2Props) {
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

    // SHOWCASE: Immersive image, text overlay
    if (layout === 'showcase') {
        return (
            <div className="relative w-full h-full bg-zinc-900 overflow-hidden shadow-sm border border-zinc-200 dark:border-white/10 flex flex-col rounded-[2rem] group cursor-pointer">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: image ? `url('${image}')` : undefined }}
                    onClick={triggerUpload}
                >
                    {!image && (
                        <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-zinc-600">
                            <span className="material-symbols-outlined text-3xl">image</span>
                        </div>
                    )}
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors pointer-events-none" />
                <div className="absolute top-0 right-0 p-4 z-10">
                    <div className="bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg min-w-[60px] flex justify-center">
                        <InlineEdit
                            value={price}
                            onSave={(val) => onUpdate({ price: val })}
                            disabled={readOnly}
                            className="text-xs font-bold text-zinc-900 dark:text-white whitespace-nowrap"
                            inputClassName="text-xs font-bold bg-transparent border-none p-0 w-16 text-center focus:ring-0"
                        />
                    </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent pt-10">
                    <InlineEdit
                        value={title}
                        onSave={(val) => onUpdate({ title: val })}
                        disabled={readOnly}
                        className="text-base font-bold text-white leading-tight"
                        inputClassName="text-base font-bold bg-transparent text-white w-full"
                    />
                </div>
                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
            </div>
        );
    }

    // MINIMAL: Clean standard look
    if (layout === 'minimal') {
        return (
            <div className="relative w-full h-full bg-white dark:bg-[#1C1C1E] overflow-hidden shadow-sm border border-zinc-200 dark:border-white/10 flex flex-col rounded-[2rem] group cursor-pointer">
                <div
                    className="flex-1 w-full bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden"
                    onClick={triggerUpload}
                >
                    {image ? (
                        <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                            style={{ backgroundImage: `url('${image}')` }}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-400">
                            <span className="material-symbols-outlined text-3xl">shopping_bag</span>
                        </div>
                    )}
                </div>
                <div className="p-4 bg-white dark:bg-[#1C1C1E] flex flex-col gap-0.5">
                    <InlineEdit
                        value={title}
                        onSave={(val) => onUpdate({ title: val })}
                        disabled={readOnly}
                        className="text-sm font-bold text-zinc-900 dark:text-white truncate"
                        inputClassName="text-sm font-bold bg-transparent dark:text-white w-full"
                    />
                    <InlineEdit
                        value={price}
                        onSave={(val) => onUpdate({ price: val })}
                        disabled={readOnly}
                        className="text-xs font-medium text-zinc-500 dark:text-zinc-400"
                        inputClassName="text-xs font-medium bg-transparent dark:text-zinc-400 w-full"
                    />
                </div>
                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
            </div>
        );
    }

    // CLASSIC: Distinct "Product Card" with nested image (Small Wide)
    return (
        <div className="relative w-full h-full flex flex-col group transition-all duration-500 hover:scale-[1.02] cursor-pointer">
            <div className="absolute inset-0 bg-white dark:bg-[#18181b] rounded-[1.75rem] shadow-sm ring-1 ring-zinc-200 dark:ring-white/10 flex flex-col p-2 gap-2 transition-all duration-500 group-hover:shadow-xl group-hover:ring-zinc-300 dark:group-hover:ring-white/20">
                {/* Image Container (Inset) */}
                <div
                    className="flex-1 w-full relative bg-zinc-100 dark:bg-zinc-800 rounded-[1.25rem] overflow-hidden cursor-pointer group/image ring-1 ring-black/5 dark:ring-white/5"
                    onClick={triggerUpload}
                >
                    {image ? (
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover/image:scale-110"
                            style={{ backgroundImage: `url('${image}')` }}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-zinc-500">
                            <span className="material-symbols-outlined text-3xl">shopping_cart</span>
                        </div>
                    )}
                    {!readOnly && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                            <span className="material-symbols-outlined text-white text-2xl">edit</span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="h-[45%] w-full px-1 flex flex-col justify-center gap-1">
                    <InlineEdit
                        value={title}
                        onSave={(val) => onUpdate({ title: val })}
                        disabled={readOnly}
                        className="text-[17px] font-bold text-zinc-900 dark:text-white leading-tight truncate w-full"
                        inputClassName="text-[17px] font-bold bg-transparent dark:text-white w-full"
                    />

                    <div className="flex items-center justify-between mt-1">
                        <div className="flex flex-col bg-zinc-100 dark:bg-white/5 px-2.5 py-1 rounded-lg">
                            <span className="text-[9px] text-zinc-400 uppercase tracking-wider font-semibold">Price</span>
                            <InlineEdit
                                value={price}
                                onSave={(val) => onUpdate({ price: val })}
                                disabled={readOnly}
                                className="text-zinc-900 dark:text-white text-base font-bold tracking-tight whitespace-nowrap"
                                inputClassName="text-base font-bold bg-transparent dark:text-white w-20 whitespace-nowrap"
                            />
                        </div>
                        <div className="h-9 w-9 rounded-full bg-[#1313ec] hover:bg-[#0c0cb8] text-white flex items-center justify-center transition-all shadow-md active:scale-95 group/btn">
                            <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                        </div>
                    </div>
                </div>
            </div>
            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
        </div>
    );
}
