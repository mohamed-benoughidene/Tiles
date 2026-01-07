"use client";

import { AnimatePresence, motion, useSpring } from "framer-motion";
import { Play, Plus } from "lucide-react";
import {
    MediaControlBar,
    MediaController,
    MediaMuteButton,
    MediaPlayButton,
    MediaSeekBackwardButton,
    MediaSeekForwardButton,
    MediaTimeDisplay,
    MediaTimeRange,
    MediaVolumeRange,
} from "media-chrome/react";
import type { ComponentProps } from "react";
import React, { useState } from "react";
import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";

export type VideoPlayerProps = ComponentProps<typeof MediaController>;

export const VideoPlayer = ({ style, ...props }: VideoPlayerProps) => (
    <MediaController
        style={{
            ...style,
        }}
        {...props}
    />
);

export type VideoPlayerControlBarProps = ComponentProps<typeof MediaControlBar>;

export const VideoPlayerControlBar = (props: VideoPlayerControlBarProps) => (
    <MediaControlBar {...props} />
);

export type VideoPlayerTimeRangeProps = ComponentProps<typeof MediaTimeRange>;

export const VideoPlayerTimeRange = ({
    className,
    ...props
}: VideoPlayerTimeRangeProps) => (
    <MediaTimeRange
        className={cn(
            "[--media-range-thumb-opacity:0] [--media-range-track-height:2px]",
            className,
        )}
        {...props}
    />
);

export type VideoPlayerTimeDisplayProps = ComponentProps<
    typeof MediaTimeDisplay
>;

export const VideoPlayerTimeDisplay = ({
    className,
    ...props
}: VideoPlayerTimeDisplayProps) => (
    <MediaTimeDisplay className={cn("p-2.5", className)} {...props} />
);

export type VideoPlayerVolumeRangeProps = ComponentProps<
    typeof MediaVolumeRange
>;

export const VideoPlayerVolumeRange = ({
    className,
    ...props
}: VideoPlayerVolumeRangeProps) => (
    <MediaVolumeRange className={cn("p-2.5", className)} {...props} />
);

export type VideoPlayerPlayButtonProps = ComponentProps<typeof MediaPlayButton>;

export const VideoPlayerPlayButton = ({
    className,
    ...props
}: VideoPlayerPlayButtonProps) => (
    <MediaPlayButton className={cn("", className)} {...props} />
);

export type VideoPlayerSeekBackwardButtonProps = ComponentProps<
    typeof MediaSeekBackwardButton
>;

export const VideoPlayerSeekBackwardButton = ({
    className,
    ...props
}: VideoPlayerSeekBackwardButtonProps) => (
    <MediaSeekBackwardButton className={cn("p-2.5", className)} {...props} />
);

export type VideoPlayerSeekForwardButtonProps = ComponentProps<
    typeof MediaSeekForwardButton
>;

export const VideoPlayerSeekForwardButton = ({
    className,
    ...props
}: VideoPlayerSeekForwardButtonProps) => (
    <MediaSeekForwardButton className={cn("p-2.5", className)} {...props} />
);

export type VideoPlayerMuteButtonProps = ComponentProps<typeof MediaMuteButton>;

export const VideoPlayerMuteButton = ({
    className,
    ...props
}: VideoPlayerMuteButtonProps) => (
    <MediaMuteButton className={cn("", className)} {...props} />
);

export type VideoPlayerContentProps = ComponentProps<"video">;

export const VideoPlayerContent = ({
    className,
    ...props
}: VideoPlayerContentProps) => (
    <video className={cn("mb-0 mt-0", className)} {...props} />
);

export interface VideoTileContentProps {
    src?: string;
    onUpdate?: (url: string) => void;
}

export function VideoTileContent({ src: initialSrc, onUpdate }: VideoTileContentProps) {
    const [showVideoPopOver, setShowVideoPopOver] = useState(false);
    const [videoSrc, setVideoSrc] = useState(initialSrc || "/showreel/skiper-ui-showreel.mp4");
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const SPRING = {
        mass: 0.1,
    };

    const x = useSpring(0, SPRING);
    const y = useSpring(0, SPRING);
    const opacity = useSpring(0, SPRING);

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        opacity.set(1);
        const bounds = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - bounds.left);
        y.set(e.clientY - bounds.top);
    };

    const handleFile = (file: File) => {
        // Validate video type
        if (!file.type.startsWith('video/')) {
            alert('Please upload a video file');
            return;
        }

        const objectUrl = URL.createObjectURL(file);
        setVideoSrc(objectUrl);
        onUpdate?.(objectUrl);
    };

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        if (e.dataTransfer.files?.[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const triggerSelect = () => {
        fileInputRef.current?.click();
    };

    return (
        <div
            className={cn(
                "relative flex h-full w-full items-center justify-center bg-[#f5f4f3] overflow-hidden rounded-[2rem] group/tile",
                isDragging && "ring-4 ring-indigo-500/50"
            )}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
        >
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="video/*"
                onChange={(e) => {
                    if (e.target.files?.[0]) handleFile(e.target.files[0]);
                }}
                onClick={(e) => e.stopPropagation()} // Prevent click from bubbling if input catches it
            />

            <div className="absolute top-1/4 grid content-start justify-items-center gap-6 text-center pointer-events-none z-10">
                <span className="after:to-foreground relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-transparent after:content-[''] mix-blend-difference text-white">
                    Click the video to play
                </span>
            </div>

            {showVideoPopOver && createPortal(
                <VideoPopOver src={videoSrc} setShowVideoPopOver={setShowVideoPopOver} />,
                document.body
            )}
            <div
                onMouseMove={handlePointerMove}
                onMouseLeave={() => {
                    opacity.set(0);
                }}
                onClick={(e) => {
                    e.stopPropagation();
                    setShowVideoPopOver(true);
                }}
                className="relative w-full h-full cursor-pointer"
            >
                <motion.div
                    style={{ x, y, opacity }}
                    className="absolute top-0 left-0 z-20 flex w-fit select-none items-center justify-center gap-2 p-2 text-sm text-white mix-blend-exclusion pointer-events-none"
                >
                    <Play className="size-4 fill-white" /> Play
                </motion.div>

                <video
                    key={videoSrc}
                    autoPlay
                    muted
                    playsInline
                    loop
                    className="h-full w-full object-cover"
                >
                    <source src={videoSrc} />
                </video>
            </div>

            {/* Edit Button */}
            <button
                onMouseDown={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    triggerSelect();
                }}
                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white opacity-0 group-hover/tile:opacity-100 transition-opacity cursor-pointer z-[100]"
                style={{ zIndex: 100, pointerEvents: 'auto' }}
                title="Change Video"
            >
                <span className="material-symbols-outlined text-[20px]">edit</span>
            </button>
        </div>
    );
};

const VideoPopOver = ({
    setShowVideoPopOver,
    src,
}: {
    setShowVideoPopOver: (showVideoPopOver: boolean) => void;
    src: string;
}) => {
    React.useEffect(() => {
        console.log("VideoPopOver MOUNTED");
        return () => console.log("VideoPopOver UNMOUNTED");
    }, []);

    return (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80">
            <div
                className="absolute inset-0"
                onClick={(e) => {
                    e.stopPropagation();
                    setShowVideoPopOver(false);
                }}
            ></div>
            <div className="relative aspect-video max-w-7xl w-full mx-4 shadow-2xl z-10 bg-black">
                <VideoPlayer style={{ width: "100%", height: "100%" }}>
                    <VideoPlayerContent
                        src={src}
                        autoPlay
                        slot="media"
                        className="w-full object-cover"
                        style={{ width: "100%", height: "100%" }}
                    />

                    <span
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowVideoPopOver(false);
                        }}
                        className="absolute right-2 top-2 z-10 cursor-pointer rounded-full p-1 transition-colors hover:bg-black/20"
                    >
                        <Plus className="size-8 rotate-45 text-white drop-shadow-md" />
                    </span>
                    <VideoPlayerControlBar className="absolute bottom-0 left-1/2 flex w-full max-w-7xl -translate-x-1/2 items-center justify-center px-5 mix-blend-exclusion md:px-10 md:py-5">
                        <VideoPlayerPlayButton className="h-4 bg-transparent" />
                        <VideoPlayerTimeRange className="bg-transparent" />
                        <VideoPlayerMuteButton className="size-4 bg-transparent" />
                    </VideoPlayerControlBar>
                </VideoPlayer>
            </div>
        </div>
    );
};
