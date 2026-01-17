'use client';

import React, { useRef } from 'react';
import { cn } from '@/lib/utils';
import { ImageLightbox } from '@/components/ui/ImageLightbox';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

interface GalleryTile4x2Props {
    data: any;
    onUpdate: (data: any) => void;
    readOnly?: boolean;
    layout?: 'carousel' | 'grid';
    onTriggerUpload?: () => void;
}

export function GalleryTile4x2({ data, onUpdate, readOnly, layout, onTriggerUpload }: GalleryTile4x2Props) {
    const images = data.images || [];

    const handleRemoveImage = (id: string) => {
        const newImages = images.filter((img: any) => img.id !== id);
        onUpdate({ ...data, images: newImages });
    };

    const currentLayout = layout || 'carousel';

    const [lightboxImage, setLightboxImage] = React.useState<{ src: string, alt?: string } | null>(null);

    return (
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 shadow-sm group">
            {images.length > 0 ? (
                currentLayout === 'grid' ? (
                    <div className="h-full w-full overflow-y-auto p-4 custom-scrollbar">
                        <div className="grid grid-cols-4 gap-2">
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
                                    <span className="material-symbols-outlined text-xl">add</span>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="h-full w-full">
                        <Swiper
                            modules={[Autoplay, FreeMode]}
                            slidesPerView={2.2}
                            spaceBetween={12}
                            freeMode={true}
                            className="h-full w-full px-4 py-3"
                            wrapperClass="items-center h-full"
                            preventClicksPropagation={true}
                            touchMoveStopPropagation={true}
                            touchStartPreventDefault={false}
                        >
                            {images.map((img: any) => (
                                <SwiperSlide
                                    key={img.id}
                                    className="!h-[90%] rounded-xl overflow-hidden shadow-sm border border-black/5 dark:border-white/5 bg-zinc-200 dark:bg-zinc-700 cursor-pointer group/slide relative"
                                    onClick={() => setLightboxImage({ src: img.src })}
                                >
                                    <img src={img.src} alt="" className="h-full w-full object-cover" />
                                    {!readOnly && (
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                e.preventDefault();
                                                handleRemoveImage(img.id);
                                            }}
                                            onMouseDown={(e) => e.stopPropagation()}
                                            className="absolute top-2 right-2 w-6 h-6 bg-black/50 hover:bg-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover/slide:opacity-100 transition-all pointer-events-auto z-50 swiper-no-swiping"
                                        >
                                            <span className="material-symbols-outlined text-xs">close</span>
                                        </button>
                                    )}
                                </SwiperSlide>
                            ))}
                            {!readOnly && (
                                <SwiperSlide className="!h-[90%]">
                                    <div
                                        onClick={onTriggerUpload}
                                        onMouseDown={(e) => e.stopPropagation()}
                                        className="h-full w-full rounded-xl border-2 border-dashed border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-zinc-400 hover:text-zinc-500 cursor-pointer bg-white/50 dark:bg-black/20"
                                    >
                                        <span className="material-symbols-outlined">add</span>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                )
            ) : (
                <div
                    className="h-full w-full flex flex-col items-center justify-center text-zinc-400 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                    onClick={onTriggerUpload}
                >
                    <span className="material-symbols-outlined text-4xl mb-2">burst_mode</span>
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
