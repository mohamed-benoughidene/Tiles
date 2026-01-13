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

const images = [
    {
        src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop",
        alt: "Artistic Illustration 1",
    },
    {
        src: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop",
        alt: "Artistic Illustration 2",
    },
    {
        src: "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?q=80&w=1000&auto=format&fit=crop",
        alt: "Artistic Illustration 3",
    },
    {
        src: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?q=80&w=1000&auto=format&fit=crop",
        alt: "Artistic Illustration 4",
    },
];

interface GalleryTile4x4Props {
    readOnly?: boolean;
}

export function GalleryTile4x4({ readOnly }: GalleryTile4x4Props) {
    return (
        <div className="h-full w-full overflow-hidden rounded-[2rem]">
            <Carousel_002 className="h-full w-full max-w-none" images={images} loop readOnly={readOnly} />
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
}: {
    images: { src: string; alt: string }[];
    className?: string;
    showPagination?: boolean;
    showNavigation?: boolean;
    loop?: boolean;
    autoplay?: boolean;
    spaceBetween?: number;
    readOnly?: boolean;
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
                preventClicksPropagation={false}
                touchMoveStopPropagation={false}
                touchStartPreventDefault={false}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="rounded-3xl">
                        <img
                            className="h-full w-full object-cover"
                            src={image.src}
                            alt={image.alt}
                        />
                    </SwiperSlide>
                ))}
                {showNavigation && (
                    <div>
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
