"use client";

import { useState, useRef, ChangeEvent, DragEvent } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ImageUploadProps {
    value?: string | null;
    onChange?: (file: File) => void;
    variant?: "canvas" | "account" | "favicon";
    className?: string;
    accept?: string;
    maxSizeMB?: number; // Default 5MB
    disabled?: boolean;
}

export function ImageUpload({
    value,
    onChange,
    variant = "canvas",
    className,
    accept = "image/png, image/jpeg, image/gif, image/webp",
    maxSizeMB = 5,
    disabled = false,
}: ImageUploadProps) {
    const [preview, setPreview] = useState<string | null>(value || null);
    const [isDragging, setIsDragging] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFile = (file: File) => {
        if (disabled || isLoading) return;

        // Validation
        if (file.size > maxSizeMB * 1024 * 1024) {
            alert(`File too large. Max size is ${maxSizeMB}MB.`);
            return;
        }

        setIsLoading(true);

        // Create preview
        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);

        // Simulate upload delay (optional - remove in prod if direct)
        // In a real app, you might upload here or just pass the file up.
        // We'll pass the file up immediately.
        onChange?.(file);
        setIsLoading(false);
    };

    const onDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (!disabled) setIsDragging(true);
    };

    const onDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const onDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        if (disabled) return;

        if (e.dataTransfer.files?.[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const onFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const triggerSelect = () => {
        if (!disabled) fileInputRef.current?.click();
    };

    // --- Variants Renderers ---

    if (variant === "canvas") {
        return (
            <>
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept={accept}
                    onChange={onFileInputChange}
                    disabled={disabled}
                />
                <div
                    onClick={triggerSelect}
                    onDragOver={onDragOver}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                    className={cn(
                        "w-48 h-48 sm:w-64 sm:h-64 rounded-full flex items-center justify-center relative shrink-0 overflow-hidden transition-colors",
                        !disabled && "dashed-circle cursor-pointer group hover:bg-zinc-100/50 dark:hover:bg-zinc-800/20 border-2 border-dashed",
                        !disabled && isDragging
                            ? "border-indigo-500 bg-indigo-50/50 dark:bg-indigo-900/20"
                            : !disabled && "border-zinc-200 dark:border-zinc-800",
                        disabled && "bg-zinc-100 dark:bg-zinc-800",
                        className
                    )}
                >
                    {preview ? (
                        <div className="relative w-full h-full group">
                            <img
                                src={preview}
                                alt="Avatar"
                                className="w-full h-full object-cover"
                            />
                            {!disabled && (
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="material-symbols-outlined text-white text-3xl">
                                        edit
                                    </span>
                                </div>
                            )}
                        </div>
                    ) : (
                        !disabled ? (
                            <div className="flex flex-col items-center gap-2 group-hover:scale-105 transition-transform">
                                <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-indigo-600 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors">
                                    <span className="material-symbols-outlined text-xl">
                                        arrow_upward
                                    </span>
                                </div>
                                <span className="text-sm font-medium text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                                    Add Avatar
                                </span>
                            </div>
                        ) : (
                            <span className="material-symbols-outlined text-zinc-300 dark:text-zinc-600 text-6xl">
                                person
                            </span>
                        )
                    )}
                </div>
            </>
        );
    }

    if (variant === "account") {
        return (
            <>
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept={accept}
                    onChange={onFileInputChange}
                    disabled={disabled}
                />
                <div className={cn("flex items-center gap-5", className)}>
                    {/* Circle Preview with hover edit */}
                    <div
                        onClick={triggerSelect}
                        onDragOver={onDragOver}
                        onDragLeave={onDragLeave}
                        onDrop={onDrop}
                        className={cn(
                            "w-20 h-20 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden ring-4 ring-white dark:ring-zinc-950 shadow-sm relative group cursor-pointer shrink-0 transition-colors",
                            isDragging && "ring-indigo-500/50 opacity-80"
                        )}
                    >
                        {preview ? (
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url('${preview}')` }}
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-400">
                                <span className="material-symbols-outlined">person</span>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="material-symbols-outlined text-white text-lg">
                                edit
                            </span>
                        </div>
                    </div>

                    {/* Text & Button */}
                    <div className="flex flex-col gap-1">
                        <button
                            onClick={triggerSelect}
                            type="button"
                            className="text-sm font-medium text-zinc-900 dark:text-white hover:text-indigo-600 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-1.5 rounded-lg shadow-sm transition-colors self-start"
                        >
                            Change Avatar
                        </button>
                        <p className="text-xs text-zinc-500">
                            JPG, GIF or PNG. {maxSizeMB}MB max.
                        </p>
                    </div>
                </div>
            </>
        );
    }

    if (variant === "favicon") {
        return (
            <>
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept=".ico,.png"
                    onChange={onFileInputChange}
                    disabled={disabled}
                />
                <div className={cn("flex flex-col gap-3", className)}>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-zinc-900 dark:text-white">
                            Favicon
                        </span>
                        <button
                            onClick={triggerSelect}
                            type="button"
                            className="text-xs font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                        >
                            Update
                        </button>
                    </div>
                    <div className="flex items-center gap-3">
                        <div
                            onClick={triggerSelect}
                            className="h-10 w-10 cursor-pointer rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center p-2 shadow-sm relative overflow-hidden group"
                        >
                            {preview ? (
                                <img
                                    src={preview}
                                    alt="Favicon"
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <span className="material-symbols-outlined text-zinc-400">
                                    image
                                </span>
                            )}
                            <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-xs text-zinc-500 leading-tight">
                            Recommended 32x32px .png or .ico format.
                        </p>
                    </div>
                </div>
            </>
        );
    }

    return null;
}
