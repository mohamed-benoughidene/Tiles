"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface LinkSetupModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialUrl: string;
    initialLayout?: string;
    initialCustomIcon?: string;
    onSave: (data: { url: string; layout: string; customIcon: string }) => void;
}

export function LinkSetupModal({ isOpen, onClose, initialUrl, initialLayout = 'classic', initialCustomIcon = '', onSave }: LinkSetupModalProps) {
    const [url, setUrl] = useState(initialUrl);
    const [layout, setLayout] = useState(initialLayout);
    const [customIcon, setCustomIcon] = useState(initialCustomIcon);

    useEffect(() => {
        setUrl(initialUrl);
        setLayout(initialLayout);
        setCustomIcon(initialCustomIcon);
    }, [initialUrl, initialLayout, initialCustomIcon, isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ url, layout, customIcon });
        onClose();
    };

    const layouts = [
        { id: 'classic', name: 'Classic', icon: 'splitscreen_left' },
        { id: 'cover', name: 'Cover', icon: 'rectangle' },
        { id: 'minimal', name: 'Minimal', icon: 'crop_square' },
    ];

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-[500px] p-0 gap-0 overflow-visible bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-3xl sm:rounded-3xl [&>button]:hidden">
                <div className="flex flex-col p-6 gap-2">
                    <DialogHeader className="p-0">
                        <DialogTitle className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                            Link Settings
                        </DialogTitle>
                    </DialogHeader>

                    {/* Custom Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                        <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>

                    <Tabs defaultValue="general" className="w-full mt-4">
                        <TabsList className="w-full grid w-full grid-cols-2 bg-zinc-100 dark:bg-zinc-900/50 p-1 mb-6 rounded-xl">
                            <TabsTrigger value="general" className="rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm">General</TabsTrigger>
                            <TabsTrigger value="appearance" className="rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm">Appearance</TabsTrigger>
                        </TabsList>

                        <form onSubmit={handleSubmit}>
                            <TabsContent value="general" className="mt-0 space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="url" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                                        Destination URL
                                    </label>
                                    <Input
                                        id="url"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                        placeholder="https://example.com"
                                        className="bg-zinc-50 dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder:text-zinc-500 dark:placeholder:text-zinc-400 focus:ring-indigo-500 rounded-xl px-4 py-2 h-11"
                                        autoFocus
                                    />
                                    <p className="text-xs text-zinc-500">Where should this tile link to?</p>
                                </div>
                            </TabsContent>

                            <TabsContent value="appearance" className="mt-0 space-y-6">
                                <div className="space-y-3">
                                    <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                                        Card Layout
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {layouts.map((l) => (
                                            <div
                                                key={l.id}
                                                onClick={() => setLayout(l.id)}
                                                className={cn(
                                                    "cursor-pointer rounded-xl border-2 p-3 flex flex-col items-center gap-2 transition-all duration-200",
                                                    layout === l.id
                                                        ? "border-indigo-500 bg-indigo-50/50 dark:bg-indigo-900/20"
                                                        : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-white dark:bg-zinc-900"
                                                )}
                                            >
                                                <span className={cn(
                                                    "material-symbols-outlined text-3xl",
                                                    layout === l.id ? "text-indigo-600 dark:text-indigo-400" : "text-zinc-400"
                                                )}>
                                                    {l.icon}
                                                </span>
                                                <span className={cn(
                                                    "text-sm font-medium",
                                                    layout === l.id ? "text-indigo-900 dark:text-indigo-100" : "text-zinc-600 dark:text-zinc-400"
                                                )}>
                                                    {l.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800">
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
                                    Save Changes
                                </Button>
                            </div>
                        </form>
                    </Tabs>
                </div>
            </DialogContent>
        </Dialog>
    );
}
