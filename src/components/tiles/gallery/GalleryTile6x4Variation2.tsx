"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";

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

interface GalleryTile6x4Variation2Props {
    readOnly?: boolean;
}

export function GalleryTile6x4Variation2({ readOnly }: GalleryTile6x4Variation2Props) {
    return (
        <div className="h-full w-full overflow-hidden rounded-[2rem]">
            <Carousel_005 className="h-full w-full max-w-none px-0" images={images} autoplay={false} showPagination loop readOnly={readOnly} />
        </div>
    );
};

const Carousel_005 = ({
    images,
    className,
    showPagination = false,
    showNavigation = false,
    loop = true,
    autoplay = false,
    spaceBetween = 0,
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
    const css = `
  .Carousal_005 {
    width: 100%;
    height: 100%;
    padding-bottom: 50px !important;
    overflow: visible !important;
  }
  
  .Carousal_005 .swiper-slide {
    background-position: center;
    background-size: cover;
     border-radius: 25px;
  }

  .Carousal_005 .swiper-pagination-bullet {
    background-color: #000 !important;
  }
  .dark .Carousal_005 .swiper-pagination-bullet {
    background-color: #fff !important;
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
            className={cn("relative w-full max-w-4xl px-5", className)}
        >
            <style>{css}</style>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full"
            >
                <Swiper
                    spaceBetween={spaceBetween}
                    autoplay={
                        autoplay
                            ? {
                                delay: 1500,
                                disableOnInteraction: true,
                            }
                            : false
                    }
                    effect="creative"
                    grabCursor={true}
                    slidesPerView="auto"
                    centeredSlides={true}
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
                    className="Carousal_005"
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ["100%", 0, 0],
                        },
                    }}
                    modules={[EffectCreative, Pagination, Autoplay]}
                    preventClicksPropagation={false}
                    touchMoveStopPropagation={false}
                    touchStartPreventDefault={false}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className="">
                            <img
                                className="h-full w-full scale-105 rounded-3xl object-cover"
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
        </motion.div>
    );
};
