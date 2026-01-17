'use client';

import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ImageLightbox } from '@/components/ui/ImageLightbox';
import { InlineEdit } from '@/components/ui/inline-edit';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

interface GalleryTile2x2Props {
    data: any;
    onUpdate: (data: any) => void;
    readOnly?: boolean;
    layout?: 'carousel' | 'grid';
    onTriggerUpload?: () => void;
}

export function GalleryTile2x2({ data, onUpdate, readOnly, layout, onTriggerUpload }: GalleryTile2x2Props) {
    const images = data.images || [];

    const handleRemoveImage = (id: string) => {
        const newImages = images.filter((img: any) => img.id !== id);
        onUpdate({ ...data, images: newImages });
    };

    const currentLayout = layout || 'carousel';

    const [activeIndex, setActiveIndex] = useState(0);
    const [lightboxImage, setLightboxImage] = useState<{ src: string, alt?: string } | null>(null);

    return (
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 shadow-sm group">
            {images.length > 0 ? (
                currentLayout === 'grid' ? (
                    <div className="h-full w-full p-2 overflow-y-auto custom-scrollbar">
                        <div className="grid grid-cols-2 gap-1.5 h-full content-start">
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
                                    <span className="material-symbols-outlined text-sm">add</span>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <>
                        <Swiper
                            modules={[Autoplay, EffectFade, Pagination]}
                            effect="fade"
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop={images.length > 1}
                            pagination={{ clickable: true, dynamicBullets: true }}
                            className="h-full w-full"
                            preventClicksPropagation={true}
                            touchMoveStopPropagation={true}
                            touchStartPreventDefault={false}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        >
                            {images.map((img: any) => (
                                <SwiperSlide key={img.id} onClick={() => setLightboxImage({ src: img.src })} className="group/slide relative">
                                    <div
                                        className="h-full w-full bg-cover bg-center cursor-pointer"
                                        style={{ backgroundImage: `url('${img.src}')` }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* External Delete Button for Carousel */}
                        {!readOnly && images[activeIndex] && (
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    handleRemoveImage(images[activeIndex].id);
                                }}
                                onMouseDown={(e) => e.stopPropagation()}
                                className="absolute top-5 right-5 w-8 h-8 bg-black/50 hover:bg-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all pointer-events-auto z-[60]"
                            >
                                <span className="material-symbols-outlined text-xs">close</span>
                            </button>
                        )}
                    </>
                )
            ) : (
                <div
                    className="h-full w-full flex flex-col items-center justify-center text-zinc-400 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                    onClick={onTriggerUpload}
                >
                    <span className="material-symbols-outlined text-4xl mb-2">add_photo_alternate</span>
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
