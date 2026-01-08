"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SocialProfile, PLATFORMS, PlatformKey } from '@/lib/social-platforms';



interface SocialSetupModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialSocials: SocialProfile[];
    onSave: (socials: SocialProfile[]) => void;
}



export function SocialSetupModal({ isOpen, onClose, initialSocials, onSave }: SocialSetupModalProps) {
    const [socials, setSocials] = useState<SocialProfile[]>(initialSocials);

    useEffect(() => {
        setSocials(initialSocials);
    }, [initialSocials, isOpen]);

    const handleAddProfile = (platform: PlatformKey) => {
        const newProfile: SocialProfile = {
            id: crypto.randomUUID(),
            platform,
            url: '',
        };
        setSocials([...socials, newProfile]);
    };

    const handleRemoveProfile = (id: string) => {
        setSocials(socials.filter(s => s.id !== id));
    };

    const handleUrlChange = (id: string, newUrl: string) => {
        setSocials(socials.map(s => s.id === id ? { ...s, url: newUrl } : s));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(socials);
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
                        <div className="flex items-center justify-between">
                            <DialogTitle className="text-xl font-bold text-zinc-900 dark:text-white">
                                Social Links
                            </DialogTitle>
                        </div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            Build your social presence. Click a platform to add it.
                        </p>
                    </DialogHeader>

                    {/* Quick Add Bar */}
                    <div className="px-6 py-4 bg-zinc-50/50 dark:bg-zinc-900/50 border-b border-zinc-100 dark:border-zinc-800/50">
                        <div className="flex gap-3 items-center overflow-x-auto pb-4 pt-1 snap-x">
                            {(Object.entries(PLATFORMS) as [PlatformKey, typeof PLATFORMS[PlatformKey]][]).map(([key, config]) => (
                                <button
                                    key={key}
                                    onClick={() => handleAddProfile(key)}
                                    className={cn(
                                        "group flex flex-col items-center gap-1.5 min-w-[64px] flex-shrink-0 transition-all active:scale-95 snap-start",
                                    )}
                                    type="button"
                                >
                                    <div className={cn(
                                        "w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 shadow-sm flex items-center justify-center text-zinc-500 dark:text-zinc-200 transition-all duration-300",
                                        "group-hover:border-transparent group-hover:scale-110 group-hover:shadow-md",
                                        config.color
                                    )}>
                                        {config.icon}
                                    </div>
                                    <span className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {config.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Socials List */}
                    <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto min-h-0 p-6 flex flex-col gap-3">
                        {socials.length === 0 ? (
                            <div className="flex-1 flex flex-col items-center justify-center text-center py-10 opacity-50 space-y-3">
                                <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-3xl text-zinc-400">add_link</span>
                                </div>
                                <div>
                                    <p className="font-medium text-zinc-900 dark:text-white">No socials added</p>
                                    <p className="text-xs text-zinc-500">Tap the icons above to start</p>
                                </div>
                            </div>
                        ) : (
                            socials.map((profile, index) => {
                                const config = PLATFORMS[profile.platform] || PLATFORMS.instagram;
                                return (
                                    <div key={profile.id} className="group relative flex items-center gap-3 p-2 pr-3 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 transition-all animate-in fade-in slide-in-from-bottom-2 duration-300" style={{ animationDelay: `${index * 50}ms` }}>
                                        {/* Icon */}
                                        <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shrink-0 shadow-sm text-zinc-700 dark:text-white">
                                            {config.icon}
                                        </div>

                                        {/* Input */}
                                        <div className="flex-1 min-w-0">
                                            <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-0.5 ml-1">
                                                {config.label}
                                            </div>
                                            <Input
                                                value={profile.url}
                                                onChange={(e) => handleUrlChange(profile.id, e.target.value)}
                                                placeholder={`Paste ${config.label} URL...`}
                                                className="h-8 text-sm bg-transparent border-none shadow-none focus-visible:ring-0 px-1 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
                                            />
                                        </div>

                                        {/* Remove Action */}
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveProfile(profile.id)}
                                            className="w-8 h-8 flex items-center justify-center rounded-lg text-zinc-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors opacity-0 group-hover:opacity-100"
                                        >
                                            <span className="material-symbols-outlined text-[18px]">delete</span>
                                        </button>
                                    </div>
                                );
                            })
                        )}
                    </form>

                    {/* Footer */}
                    <div className="p-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-end gap-3 bg-zinc-50/50 dark:bg-zinc-900/50 shrink-0 z-10">
                        <Button
                            type="button"
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
