"use client";

import { useState } from "react";
import { HelpFeedbackModal } from "@/components/editor/HelpFeedbackModal";
import { SettingsModal } from "@/components/modals/SettingsModal";
import { ImageUpload } from "@/components/ui/image-upload";
import { InlineEdit } from "@/components/ui/inline-edit";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProfileSectionProps {
    viewMode: "desktop" | "mobile";
    readOnly?: boolean;
    onRemoveEmpty?: () => void;
    onClearAll?: () => void;
}

export function ProfileSection({ viewMode, readOnly, onRemoveEmpty, onClearAll }: ProfileSectionProps) {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
    const [name, setName] = useState("Sarah Creator");
    const [bio, setBio] = useState("Your bio...");
    const [isLive, setIsLive] = useState(false);
    const desktopFixedClasses = viewMode === 'desktop'
        ? "lg:w-[350px] lg:fixed lg:left-0 lg:top-0 lg:h-full lg:z-40 lg:overflow-y-auto lg:pl-10"
        : "w-full";

    // Alignment logic: Force center if mobile view, otherwise use responsive desktop styles (start/left)
    const containerAlign = viewMode === 'mobile' ? "items-center lg:items-center" : "items-center lg:items-start";
    const textCenterAlign = viewMode === 'mobile' ? "text-center lg:text-center" : "text-center lg:text-left";
    const inputAlign = viewMode === 'mobile' ? "text-center lg:text-center" : "text-center lg:text-left";

    return (
        <div className={`shrink-0 flex flex-col pt-10 ${containerAlign} ${desktopFixedClasses} ${viewMode === 'mobile' ? 'pt-8 mb-8' : ''}`}>
            <ImageUpload
                variant="canvas"
                value={avatarUrl}
                onChange={(file) => setAvatarUrl(URL.createObjectURL(file))}
                className={`mb-8 ${readOnly ? "cursor-default" : ""}`}
                disabled={readOnly}
            />

            <InlineEdit
                value={name}
                onSave={setName}
                className={`text-5xl font-bold text-zinc-900 dark:text-white tracking-tighter mb-2 block ${textCenterAlign} ${readOnly ? "cursor-default opacity-100 hover:bg-transparent" : ""}`}
                inputClassName={`text-5xl font-bold tracking-tighter h-auto py-2 mb-2 ${inputAlign}`}
                placeholder="Your Name"
                disabled={readOnly}
            />

            <InlineEdit
                value={bio}
                onSave={setBio}
                className={`text-xl text-zinc-400 font-medium tracking-tight mb-8 block ${textCenterAlign} ${readOnly ? "cursor-default opacity-100 hover:bg-transparent" : ""}`}
                inputClassName={`text-xl font-medium tracking-tight h-auto py-1 mb-8 ${inputAlign}`}
                placeholder="Add a bio..."
                disabled={readOnly}
            />

            {!readOnly && (
                <div className={`flex flex-col gap-4 mt-4 w-full items-center`}>
                    {/* Tools Row */}
                    <div className="flex items-center gap-1 p-1.5 bg-zinc-100 dark:bg-zinc-800/50 rounded-full border border-zinc-200 dark:border-zinc-800">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button
                                        className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-white dark:hover:bg-zinc-700 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-all"
                                        onClick={() => { /* TODO: Open Theme/Palette Modal */ }}
                                    >
                                        <span className="material-symbols-outlined text-[20px]">palette</span>
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent>Theme Settings</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button
                                        className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-white dark:hover:bg-zinc-700 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-all"
                                        onClick={() => setIsSettingsOpen(true)}
                                    >
                                        <span className="material-symbols-outlined text-[20px]">tune</span>
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent>Settings</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <div className="w-px h-4 bg-zinc-300 dark:bg-zinc-700 mx-1"></div>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button
                                        className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-white dark:hover:bg-zinc-700 text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-all"
                                        onClick={onRemoveEmpty}
                                    >
                                        <span className="material-symbols-outlined text-[20px]">cleaning_services</span>
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent>Remove Empty Tiles</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button
                                        className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-white dark:hover:bg-zinc-700 text-zinc-500 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-400 transition-all"
                                        onClick={onClearAll}
                                    >
                                        <span className="material-symbols-outlined text-[20px]">delete_forever</span>
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent>Clear Canvas</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <div className="w-px h-4 bg-zinc-300 dark:bg-zinc-700 mx-1"></div>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button
                                        className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-white dark:hover:bg-zinc-700 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-all"
                                        onClick={() => setIsFeedbackOpen(true)}
                                    >
                                        <span className="material-symbols-outlined text-[20px]">chat</span>
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent>Feedback</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>

                    {/* Visibility Toggle */}
                    <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors w-max">
                        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                            {isLive ? 'Public' : 'Private'}
                        </span>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only"
                                            checked={isLive}
                                            onChange={(e) => setIsLive(e.target.checked)}
                                        />
                                        <div className={`w-10 h-6 rounded-full transition-colors relative shadow-inner ${isLive ? 'bg-emerald-500' : 'bg-zinc-300 dark:bg-zinc-700'}`}>
                                            <div className={`absolute top-1 left-1 bg-white rounded-full h-4 w-4 shadow-sm transition-transform duration-200 ${isLive ? 'translate-x-4' : 'translate-x-0'}`}></div>
                                        </div>
                                    </label>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{isLive ? "Unpublish Page" : "Publish Page"}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            )}

            <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
            <HelpFeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
        </div>
    );
}
