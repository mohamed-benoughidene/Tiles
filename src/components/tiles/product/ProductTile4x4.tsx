import React, { useRef } from 'react';
import { InlineEdit } from '@/components/ui/inline-edit';

interface ProductTile4x4Props {
    data: any;
    onUpdate: (data: any) => void;
    readOnly?: boolean;
    layout?: 'classic' | 'minimal' | 'showcase';
}

export function ProductTile4x4({ data, onUpdate, readOnly, layout = 'classic' }: ProductTile4x4Props) {
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

    // SHOWCASE: Full background image, clean aesthetic
    if (layout === 'showcase') {
        return (
            <div className="relative w-full h-full bg-zinc-900 overflow-hidden rounded-[2.5rem] shadow-sm ring-1 ring-white/10 flex flex-col group cursor-pointer">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: image ? `url('${image}')` : undefined }}
                    onClick={triggerUpload}
                >
                    {!image && (
                        <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-zinc-600">
                            <span className="material-symbols-outlined text-6xl">inventory_2</span>
                        </div>
                    )}
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors pointer-events-none" />

                {/* Top Price Tag */}
                <div className="absolute top-5 right-5 z-20">
                    <div className="bg-white/90 dark:bg-black/80 backdrop-blur-xl px-4 py-2 rounded-full shadow-lg border border-white/10 min-w-[80px] flex justify-center">
                        <InlineEdit
                            value={price}
                            onSave={(val) => onUpdate({ price: val })}
                            disabled={readOnly}
                            className="text-base font-bold text-black dark:text-white whitespace-nowrap"
                            inputClassName="text-base font-bold bg-transparent border-none p-0 w-24 text-center text-black dark:text-white focus:ring-0"
                        />
                    </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 via-black/50 to-transparent pt-20">
                    <InlineEdit
                        value={title}
                        onSave={(val) => onUpdate({ title: val })}
                        disabled={readOnly}
                        className="text-3xl font-bold text-white mb-2 leading-tight text-shadow-sm"
                        inputClassName="text-3xl font-bold bg-transparent text-white w-full"
                    />
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mt-2 shadow-xl hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-2xl">arrow_forward</span>
                    </div>
                </div>
                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
            </div>
        );
    }

    // MINIMAL: Large image top, very simple text bottom
    if (layout === 'minimal') {
        return (
            <div className="relative w-full h-full bg-white dark:bg-[#1C1C1E] rounded-[2.5rem] overflow-hidden shadow-sm ring-1 ring-zinc-200 dark:ring-white/10 flex flex-col group">
                <div
                    className="flex-1 w-full bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden"
                    onClick={triggerUpload}
                >
                    {image ? (
                        <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: `url('${image}')` }}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-400">
                            <span className="material-symbols-outlined text-6xl">image</span>
                        </div>
                    )}
                </div>
                <div className="p-6 bg-white dark:bg-[#1C1C1E] flex flex-col gap-1">
                    <InlineEdit
                        value={title}
                        onSave={(val) => onUpdate({ title: val })}
                        disabled={readOnly}
                        className="text-2xl font-bold text-zinc-900 dark:text-white truncate"
                        inputClassName="text-2xl font-bold bg-transparent dark:text-white w-full"
                    />
                    <InlineEdit
                        value={price}
                        onSave={(val) => onUpdate({ price: val })}
                        disabled={readOnly}
                        className="text-lg font-medium text-zinc-500 dark:text-zinc-400"
                        inputClassName="text-lg font-medium bg-transparent dark:text-zinc-400 w-full"
                    />
                </div>
                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
            </div>
        );
    }

    // CLASSIC: Distinct "Product Card" with nested image container
    return (
        <div className="relative w-full h-full flex flex-col group transition-all duration-500 hover:scale-[1.01] cursor-pointer">
            <div className="absolute inset-0 bg-white dark:bg-[#18181b] rounded-[2.5rem] shadow-sm ring-1 ring-zinc-200 dark:ring-white/10 flex flex-col p-3 gap-3 transition-all duration-500 group-hover:shadow-2xl group-hover:ring-zinc-300 dark:group-hover:ring-white/20">
                {/* Image Container (Inset) */}
                <div
                    className="flex-1 w-full relative bg-zinc-100 dark:bg-zinc-800 rounded-[2rem] overflow-hidden cursor-pointer group/image ring-1 ring-black/5 dark:ring-white/5"
                    onClick={triggerUpload}
                >
                    {image ? (
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover/image:scale-110"
                            style={{ backgroundImage: `url('${image}')` }}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-300 dark:text-zinc-600">
                            <span className="material-symbols-outlined text-5xl">shopping_cart</span>
                        </div>
                    )}
                    {!readOnly && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                            <span className="material-symbols-outlined text-white text-3xl">edit</span>
                        </div>
                    )}
                </div>

                {/* Content Container */}
                <div className="h-auto w-full px-2 pb-2 flex flex-col">
                    <div className="flex justify-between items-start gap-2">
                        <InlineEdit
                            value={title}
                            onSave={(val) => onUpdate({ title: val })}
                            disabled={readOnly}
                            className="text-zinc-900 dark:text-white text-[22px] font-bold leading-tight tracking-tight line-clamp-1 w-full"
                            inputClassName="text-[22px] font-bold bg-transparent text-zinc-900 dark:text-white w-full"
                        />
                    </div>

                    <InlineEdit
                        value={description}
                        onSave={(val) => onUpdate({ description: val })}
                        disabled={readOnly}
                        className="text-zinc-500 dark:text-zinc-400 text-[13px] leading-snug line-clamp-2 mt-1"
                        inputClassName="text-[13px] bg-transparent text-zinc-500 dark:text-zinc-400 w-full"
                    />

                    <div className="flex items-center justify-between mt-4">
                        <div className="flex flex-col bg-zinc-100 dark:bg-white/5 py-1.5 px-3 rounded-xl">
                            <span className="text-zinc-400 text-[10px] uppercase tracking-wider font-semibold">Price</span>
                            <InlineEdit
                                value={price}
                                onSave={(val) => onUpdate({ price: val })}
                                disabled={readOnly}
                                className="text-zinc-900 dark:text-white text-xl font-bold whitespace-nowrap"
                                inputClassName="text-xl font-bold bg-transparent text-zinc-900 dark:text-white w-32 whitespace-nowrap"
                            />
                        </div>
                        <button className="bg-[#1313ec] hover:bg-[#0c0cb8] active:scale-95 transition-all text-white h-11 px-6 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg shadow-[#1313ec]/20 shrink-0">
                            <span>Add to Bag</span>
                            <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                        </button>
                    </div>
                </div>
            </div>
            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
        </div>
    );
}
