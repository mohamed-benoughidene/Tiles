import React, { useRef } from 'react';
import { InlineEdit } from '@/components/ui/inline-edit';

interface ProductTile4x2Props {
    data: any;
    onUpdate: (data: any) => void;
    readOnly?: boolean;
    layout?: 'classic' | 'minimal' | 'showcase';
}

export function ProductTile4x2({ data, onUpdate, readOnly, layout = 'classic' }: ProductTile4x2Props) {
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

    // SHOWCASE: Wide immersive banner
    if (layout === 'showcase') {
        return (
            <div className="relative w-full h-full bg-zinc-900 overflow-hidden shadow-sm border border-zinc-200 dark:border-white/10 flex flex-col rounded-[2rem] group cursor-pointer">
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
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />

                <div className="absolute inset-y-0 left-0 w-2/3 p-6 flex flex-col justify-center z-10">
                    <InlineEdit
                        value={title}
                        onSave={(val) => onUpdate({ title: val })}
                        disabled={readOnly}
                        className="text-2xl font-bold text-white tracking-tight text-shadow-sm mb-1"
                        inputClassName="text-2xl font-bold bg-transparent text-white w-full"
                    />
                    <InlineEdit
                        value={description}
                        onSave={(val) => onUpdate({ description: val })}
                        disabled={readOnly}
                        className="text-sm text-zinc-300 line-clamp-2 mb-4"
                        inputClassName="text-sm bg-transparent text-zinc-300 w-full"
                    />
                    <div className="flex items-center gap-3">
                        <InlineEdit
                            value={price}
                            onSave={(val) => onUpdate({ price: val })}
                            disabled={readOnly}
                            className="text-xl font-bold text-white"
                            inputClassName="text-xl font-bold bg-transparent text-white w-20"
                        />
                        <div className="px-4 py-1.5 rounded-full bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-colors shadow-lg">
                            Shop Now
                        </div>
                    </div>
                </div>
                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
            </div>
        );
    }

    // MINIMAL: Image left, simple text right
    if (layout === 'minimal') {
        return (
            <div className="relative w-full h-full bg-white dark:bg-[#1C1C1E] rounded-[2rem] shadow-sm ring-1 ring-zinc-200 dark:ring-white/10 flex overflow-hidden group">
                <div
                    className="w-[40%] h-full relative bg-zinc-100 dark:bg-zinc-800"
                    onClick={triggerUpload}
                >
                    {image ? (
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                            style={{ backgroundImage: `url('${image}')` }}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-400">
                            <span className="material-symbols-outlined text-3xl">image</span>
                        </div>
                    )}
                </div>

                <div className="flex-1 p-5 flex flex-col justify-center gap-1.5">
                    <InlineEdit
                        value={title}
                        onSave={(val) => onUpdate({ title: val })}
                        disabled={readOnly}
                        className="text-lg font-bold text-zinc-900 dark:text-white"
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


    return (
        <div className="relative w-full h-full bg-white dark:bg-[#18181b] rounded-[24px] shadow-sm ring-1 ring-zinc-200 dark:ring-white/10 flex items-center p-3 gap-4 overflow-hidden cursor-default select-none group transition-all duration-500 hover:shadow-xl hover:ring-zinc-300 dark:hover:ring-white/20">
            {/* Left: Product Image (Floating/Inset) */}
            <div
                className="h-full aspect-square relative rounded-[18px] bg-zinc-100 dark:bg-zinc-800 overflow-hidden cursor-pointer group/image shadow-inner ring-1 ring-black/5 dark:ring-white/5"
                onClick={triggerUpload}
            >
                {image ? (
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover/image:scale-110"
                        style={{ backgroundImage: `url('${image}')` }}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-300 dark:text-zinc-600">
                        <span className="material-symbols-outlined text-3xl">shopping_cart</span>
                    </div>
                )}
                {!readOnly && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                        <span className="material-symbols-outlined text-white">edit</span>
                    </div>
                )}
            </div>

            {/* Right: Content */}
            <div className="flex-1 flex flex-col justify-center gap-1 min-w-0 py-1">
                <InlineEdit
                    value={title}
                    onSave={(val) => onUpdate({ title: val })}
                    disabled={readOnly}
                    className="text-zinc-900 dark:text-white text-[17px] font-bold leading-tight line-clamp-1"
                    inputClassName="text-[17px] font-bold bg-transparent text-zinc-900 dark:text-white w-full"
                />
                <InlineEdit
                    value={description}
                    onSave={(val) => onUpdate({ description: val })}
                    disabled={readOnly}
                    className="text-zinc-500 dark:text-zinc-400 text-[12px] font-medium leading-normal line-clamp-2"
                    inputClassName="text-[12px] bg-transparent text-zinc-500 dark:text-zinc-400 w-full"
                />

                <div className="flex items-center justify-between mt-3">
                    <div className="flex flex-col bg-zinc-100 dark:bg-white/5 px-2.5 py-1 rounded-lg">
                        <span className="text-[9px] text-zinc-400 uppercase tracking-wider font-semibold">Price</span>
                        <InlineEdit
                            value={price}
                            onSave={(val) => onUpdate({ price: val })}
                            disabled={readOnly}
                            className="text-zinc-900 dark:text-white text-base font-bold tracking-tight whitespace-nowrap"
                            inputClassName="text-base font-bold bg-transparent text-zinc-900 dark:text-white w-20 whitespace-nowrap"
                        />
                    </div>
                    <button className="size-9 rounded-full bg-[#1313ec] hover:bg-[#0c0cb8] text-white flex items-center justify-center transition-all shadow-md shadow-indigo-500/20 active:scale-95 group/btn">
                        <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                    </button>
                </div>
            </div>
            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
        </div>
    );
}
