"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import {
    Autoplay,
    EffectCoverflow,
    Navigation,
    Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

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
    {
        src: "https://images.unsplash.com/photo-1579783483458-83d02161294e?q=80&w=1000&auto=format&fit=crop",
        alt: "Artistic Illustration 5",
    },
];

export function GalleryTile6x4() {
    return (
        <div className="h-full w-full overflow-hidden rounded-[2rem]">
            <Carousel_001 className="h-full w-full" images={images} showPagination loop />
        </div>
    );
};

const Carousel_001 = ({
    images,
    className,
    showPagination = false,
    showNavigation = false,
    loop = true,
    autoplay = false,
    spaceBetween = 40,
}: {
    images: { src: string; alt: string }[];
    className?: string;
    showPagination?: boolean;
    showNavigation?: boolean;
    loop?: boolean;
    autoplay?: boolean;
    spaceBetween?: number;
}) => {
    const css = `
  .Carousal_001 {
    padding-bottom: 50px !important;
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
            className={cn("w-3xl relative h-full w-full flex items-center justify-center", className)}
        >
            <style>{css}</style>

            <Swiper
                spaceBetween={spaceBetween}
                autoplay={
                    autoplay
                        ? {
                            delay: 1500,
                            disableOnInteraction: false,
                        }
                        : false
                }
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={loop}
                slidesPerView={2.43}
                coverflowEffect={{
                    rotate: 0,
                    slideShadows: false,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
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
                className="Carousal_001 w-full"
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                preventClicksPropagation={false}
                touchMoveStopPropagation={false}
                touchStartPreventDefault={false}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="!h-[320px] w-full border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
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
