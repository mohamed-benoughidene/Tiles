"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface ImageLightboxProps {
    src: string;
    alt?: string;
    onClose: () => void;
}

export function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return createPortal(
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            >
                {/* Backdrop click to close */}
                <div className="absolute inset-0" onClick={onClose} />

                {/* Close Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                    className="absolute top-4 right-4 z-[10002] p-2 text-white/70 hover:text-white bg-black/50 hover:bg-white/20 rounded-full transition-all"
                >
                    <Plus className="rotate-45 w-8 h-8" />
                </button>

                {/* Image Container */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative z-[10001] max-w-[95vw] max-h-[95vh] pointer-events-none"
                >
                    <img
                        src={src}
                        alt={alt || ""}
                        className="w-full h-full object-contain max-h-[90vh] rounded-lg shadow-2xl pointer-events-auto"
                        onClick={(e) => e.stopPropagation()}
                    />
                </motion.div>
            </motion.div>
        </AnimatePresence>,
        document.body
    );
}
