'use client';

import React, { useRef } from 'react';
import { cn } from '@/lib/utils';
import { ImageLightbox } from '@/components/ui/ImageLightbox';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

interface GalleryTile2x4Props {
    data: any;
    onUpdate: (data: any) => void;
    readOnly?: boolean;
    layout?: 'stack' | 'grid';
    onTriggerUpload?: () => void;
}

export function GalleryTile2x4({ data, onUpdate, readOnly, layout, onTriggerUpload }: GalleryTile2x4Props) {
    const images = data?.images || [];

    const handleRemoveImage = (id: string) => {
        const newImages = images.filter((img: any) => img.id !== id);
        onUpdate({ ...data, images: newImages });
    };

    const currentLayout = layout || 'stack';

    const [lightboxImage, setLightboxImage] = React.useState<{ src: string, alt?: string } | null>(null);

    return (
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 shadow-sm group">
            {images.length > 0 ? (
                currentLayout === 'grid' ? (
                    <div className="h-full w-full overflow-y-auto p-3 custom-scrollbar">
                        <div className="grid grid-cols-2 gap-2">
                            {images.map((img: any) => (
                                <div
                                    key={img.id}
                                    className="aspect-square relative rounded-lg overflow-hidden bg-zinc-200 dark:bg-zinc-700 cursor-pointer group/item"
                                    onClick={() => setLightboxImage({ src: img.src })}
                                >
                                    <img src={img.src} alt="" className="h-full w-full object-cover" />
                                    {!readOnly && (
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleRemoveImage(img.id);
                                            }}
                                            onMouseDown={(e) => e.stopPropagation()}
                                            className="absolute top-1 right-1 z-10 w-5 h-5 bg-black/50 hover:bg-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover/item:opacity-100 transition-all pointer-events-auto"
                                        >
                                            <span className="material-symbols-outlined text-[10px]">close</span>
                                        </button>
                                    )}
                                </div>
                            ))}
                            {!readOnly && (
                                <div
                                    onClick={onTriggerUpload}
                                    className="aspect-square rounded-lg border-2 border-dashed border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-zinc-400 hover:text-zinc-500 cursor-pointer bg-white/50 dark:bg-black/20"
                                >
                                    <span className="material-symbols-outlined text-lg">add</span>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="h-full w-full flex flex-col gap-2 p-2 overflow-y-auto no-scrollbar snap-y snap-mandatory">
                        {/* Stack Layout */}
                        {images.map((img: any) => (
                            <div
                                key={img.id}
                                className="w-full flex-shrink-0 aspect-[3/4] rounded-xl bg-cover bg-center snap-center shadow-sm border border-black/5 dark:border-white/5 cursor-pointer relative group/item"
                                style={{ backgroundImage: `url('${img.src}')` }}
                                onClick={() => setLightboxImage({ src: img.src })}
                            >
                                {!readOnly && (
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleRemoveImage(img.id);
                                        }}
                                        onMouseDown={(e) => e.stopPropagation()}
                                        className="absolute top-2 right-2 z-10 w-6 h-6 bg-black/50 hover:bg-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover/item:opacity-100 transition-all pointer-events-auto swiper-no-swiping"
                                    >
                                        <span className="material-symbols-outlined text-xs">close</span>
                                    </button>
                                )}
                            </div>
                        ))}
                        {!readOnly && (
                            <div
                                onClick={onTriggerUpload}
                                onMouseDown={(e) => e.stopPropagation()}
                                className="w-full aspect-square rounded-xl border-2 border-dashed border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-zinc-400 hover:text-zinc-500 cursor-pointer flex-shrink-0"
                            >
                                <span className="material-symbols-outlined">add</span>
                            </div>
                        )}
                    </div>
                )
            ) : (
                <div
                    className="h-full w-full flex flex-col items-center justify-center text-zinc-400 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                    onClick={onTriggerUpload}
                >
                    <span className="material-symbols-outlined text-4xl mb-2">collections_bookmark</span>
                    <span className="text-xs font-medium">Add Photos</span>
                </div>
            )}

            {lightboxImage && (
                <ImageLightbox
                    src={lightboxImage.src}
                    alt={lightboxImage.alt}
                    onClose={() => setLightboxImage(null)}
                />
            )}
        </div>
    );
}
