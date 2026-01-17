"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import { cn } from "@/lib/utils";
import { ImageLightbox } from "@/components/ui/ImageLightbox";

interface GalleryTile4x4Props {
    data: any;
    onUpdate: (data: any) => void;
    readOnly?: boolean;
    layout?: string;
    onTriggerUpload?: () => void;
}

export function GalleryTile4x4({ data, onUpdate, readOnly, layout, onTriggerUpload }: GalleryTile4x4Props) {
    const [lightboxImage, setLightboxImage] = React.useState<{ src: string, alt?: string } | null>(null);
    const images = data.images || [];


    const handleRemoveImage = (id: string) => {
        const newImages = images.filter((img: any) => img.id !== id);
        onUpdate({ ...data, images: newImages });
    };

    if (images.length === 0) {
        return (
            <div
                className="h-full w-full flex flex-col items-center justify-center rounded-[2.5rem] bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-400 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                onClick={onTriggerUpload}
            >
                <div className="h-20 w-20 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-4xl">photo_library</span>
                </div>
                <span className="text-sm font-medium">Create Gallery</span>
            </div>
        );
    }

    const currentLayout = layout || 'carousel';

    return (
        <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-black group">
            {currentLayout === 'grid' ? (
                <div className="h-full w-full overflow-y-auto p-4 custom-scrollbar">
                    <div className="grid grid-cols-2 gap-3">
                        {images.map((image: any) => (
                            <div
                                key={image.id}
                                className="aspect-square relative rounded-2xl overflow-hidden bg-zinc-800 cursor-pointer group/item"
                                onClick={() => setLightboxImage({ src: image.src, alt: image.alt })}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="h-full w-full object-cover transition-transform hover:scale-105"
                                />
                                {!readOnly && (
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleRemoveImage(image.id);
                                        }}
                                        onMouseDown={(e) => e.stopPropagation()}
                                        className="absolute top-2 right-2 z-10 w-7 h-7 bg-black/50 hover:bg-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover/item:opacity-100 transition-all pointer-events-auto"
                                    >
                                        <span className="material-symbols-outlined text-sm">close</span>
                                    </button>
                                )}
                            </div>
                        ))}
                        {!readOnly && (
                            <div
                                onClick={onTriggerUpload}
                                className="aspect-square rounded-2xl border-2 border-dashed border-zinc-700 flex items-center justify-center text-zinc-500 hover:text-zinc-300 hover:border-zinc-500 cursor-pointer transition-colors"
                            >
                                <span className="material-symbols-outlined text-3xl">add</span>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <Carousel_002
                    className="h-full w-full max-w-none"
                    images={images}
                    loop
                    readOnly={readOnly}
                    onImageClick={(img) => setLightboxImage({ src: img.src, alt: img.alt })}
                    onRemoveImage={handleRemoveImage}
                />
            )}

            {/* Lightbox */}
            {lightboxImage && (
                <ImageLightbox
                    src={lightboxImage.src}
                    alt={lightboxImage.alt}
                    onClose={() => setLightboxImage(null)}
                />
            )}
        </div>
    );
};

const Carousel_002 = ({
    images,
    className,
    showPagination = false,
    showNavigation = false,
    loop = true,
    autoplay = false,
    spaceBetween = 40,
    readOnly,
    onImageClick,
    onRemoveImage,
}: {
    images: any[];
    className?: string;
    showPagination?: boolean;
    showNavigation?: boolean;
    loop?: boolean;
    autoplay?: boolean;
    spaceBetween?: number;
    readOnly?: boolean;
    onImageClick?: (image: any) => void;
    onRemoveImage?: (id: string) => void;
}) => {
    // Moved css to global or styled component strategy if possible, but keep inline for now as per stitch
    // But scoped style tag is fine
    const css = `
  .Carousal_002 {
    padding-bottom: 0px !important;
  }
  `;
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
                duration: 0.3,
                delay: 0.5,
            }}
            className={cn("relative h-full w-full", className)}
        >
            <style>{css}</style>

            <Swiper
                spaceBetween={spaceBetween}
                autoplay={
                    autoplay
                        ? {
                            delay: 1000,
                            disableOnInteraction: false,
                        }
                        : false
                }
                effect="cards"
                grabCursor={true}
                loop={loop}
                pagination={
                    showPagination
                        ? {
                            clickable: true,
                        }
                        : false
                }
                navigation={
                    showNavigation
                        ? {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }
                        : false
                }
                className="Carousal_002 h-full w-full"
                modules={[EffectCards, Autoplay, Pagination, Navigation]}
                preventClicksPropagation={true}
                touchMoveStopPropagation={true}
                touchStartPreventDefault={false}
            >
                {images.map((image, index) => (
                    <SwiperSlide
                        key={index}
                        className="rounded-3xl cursor-pointer group/slide relative"
                        onClick={() => onImageClick?.(image)}
                    >
                        <img
                            className="h-full w-full object-cover"
                            src={image.src}
                            alt={image.alt}
                        />
                        {!readOnly && (
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    onRemoveImage?.(image.id);
                                }}
                                onMouseDown={(e) => e.stopPropagation()}
                                className="absolute top-3 right-3 w-8 h-8 bg-black/50 hover:bg-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover/slide:opacity-100 transition-all z-50 swiper-no-swiping"
                            >
                                <span className="material-symbols-outlined text-sm">close</span>
                            </button>
                        )}
                    </SwiperSlide>
                ))}
                {showNavigation && (
                    <div
                        onPointerDown={(e) => e.stopPropagation()}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="swiper-button-next after:hidden">
                            <ChevronRightIcon className="h-6 w-6 text-white" />
                        </div>
                        <div className="swiper-button-prev after:hidden">
                            <ChevronLeftIcon className="h-6 w-6 text-white" />
                        </div>
                    </div>
                )}
            </Swiper>
        </motion.div>
    );
};
