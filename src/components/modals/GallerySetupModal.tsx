"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface GallerySetupModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialImages: string[];
    onSave: (images: string[]) => void;
}

export function GallerySetupModal({ isOpen, onClose, initialImages, onSave }: GallerySetupModalProps) {
    const [images, setImages] = useState<string[]>(initialImages);

    useEffect(() => {
        setImages(initialImages);
    }, [initialImages, isOpen]);

    const handleAddImage = () => {
        if (images.length >= 6) return; // Max 6 images
        setImages([...images, '']);
    };

    const handleRemoveImage = (index: number) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const handleUrlChange = (index: number, newUrl: string) => {
        const newImages = [...images];
        newImages[index] = newUrl;
        setImages(newImages);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Filter out empty strings
        onSave(images.filter(url => url.trim() !== ''));
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-[480px] w-full max-h-[85vh] p-0 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-3xl bg-white dark:bg-zinc-950 overflow-hidden flex flex-col [&>button]:hidden">
                <div className="flex flex-col h-full min-h-0 relative">
                    {/* Custom Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 z-50 w-9 h-9 flex items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                        <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>

                    {/* Header */}
                    <DialogHeader className="p-6 pb-4 border-b border-zinc-100 dark:border-zinc-800/50">
                        <DialogTitle className="text-xl font-bold text-zinc-900 dark:text-white">
                            Gallery Images
                        </DialogTitle>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            Add up to 6 images for your gallery.
                        </p>
                    </DialogHeader>

                    {/* Image List */}
                    <div className="flex-1 overflow-y-auto min-h-0 p-6 flex flex-col gap-3">
                        {images.map((url, index) => (
                            <div key={index} className="flex items-center gap-3 p-2 pr-3 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 transition-all">
                                <div className="w-10 h-10 rounded-xl bg-zinc-200 dark:bg-zinc-800 overflow-hidden shrink-0">
                                    {url && <img src={url} alt="" className="w-full h-full object-cover" />}
                                </div>
                                <Input
                                    value={url}
                                    onChange={(e) => handleUrlChange(index, e.target.value)}
                                    placeholder="Paste image URL..."
                                    className="flex-1 h-8 text-sm bg-transparent border-none shadow-none focus-visible:ring-0 px-1 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveImage(index)}
                                    className="w-8 h-8 flex items-center justify-center rounded-lg text-zinc-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
                                >
                                    <span className="material-symbols-outlined text-[18px]">delete</span>
                                </button>
                            </div>
                        ))}

                        {images.length < 6 && (
                            <Button
                                variant="outline"
                                onClick={handleAddImage}
                                className="w-full border-dashed border-zinc-300 dark:border-zinc-700 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
                            >
                                <span className="material-symbols-outlined mr-2">add</span>
                                Add Image
                            </Button>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="p-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-end gap-3 bg-zinc-50/50 dark:bg-zinc-900/50 shrink-0 z-10">
                        <Button
                            variant="ghost"
                            onClick={onClose}
                            className="px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors h-auto"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleSubmit}
                            className="px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm shadow-indigo-200 dark:shadow-none transition-all hover:translate-y-px active:translate-y-0 h-auto min-w-[100px]"
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
