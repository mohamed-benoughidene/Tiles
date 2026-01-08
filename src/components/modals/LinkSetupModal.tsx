"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface LinkSetupModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialUrl: string;
    onSave: (url: string) => void;
}

export function LinkSetupModal({ isOpen, onClose, initialUrl, onSave }: LinkSetupModalProps) {
    const [url, setUrl] = useState(initialUrl);

    useEffect(() => {
        setUrl(initialUrl);
    }, [initialUrl, isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(url);
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-[425px] p-0 gap-0 overflow-visible bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-3xl sm:rounded-3xl [&>button]:hidden">
                <div className="flex flex-col p-6 gap-2">
                    <DialogHeader className="p-0">
                        <DialogTitle className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                            Link Settings
                        </DialogTitle>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                            Enter the destination URL for this tile.
                        </p>
                    </DialogHeader>

                    {/* Custom Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                        <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="url" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                                URL
                            </label>
                            <Input
                                id="url"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="https://example.com"
                                className="bg-zinc-50 dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder:text-zinc-500 dark:placeholder:text-zinc-400 focus:ring-indigo-500 rounded-xl px-4 py-2 h-11"
                                autoFocus
                            />
                        </div>
                        <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
                            <Button
                                type="button"
                                variant="ghost"
                                onClick={onClose}
                                className="rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 font-medium h-10 px-4"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                className="rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-sm shadow-indigo-200 dark:shadow-none h-10 px-4"
                            >
                                Save Link
                            </Button>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
}
