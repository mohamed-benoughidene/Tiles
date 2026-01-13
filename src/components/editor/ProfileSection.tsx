"use client";

import { useState } from "react";
import { HelpFeedbackModal } from "@/components/editor/HelpFeedbackModal";
import { SettingsModal } from "@/components/modals/SettingsModal";
import { ImageUpload } from "@/components/ui/image-upload";
import { InlineEdit } from "@/components/ui/inline-edit";

interface ProfileSectionProps {
    viewMode: "desktop" | "mobile";
    readOnly?: boolean;
}

export function ProfileSection({ viewMode, readOnly }: ProfileSectionProps) {
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
            {readOnly ? (
                // Read-only Avatar
                <div className={`mb-8 w-24 h-24 rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 ${viewMode === 'mobile' ? 'mx-auto' : 'mx-0'}`}>
                    {avatarUrl ? (
                        <img src={avatarUrl} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-300">
                            <span className="material-symbols-outlined text-4xl">person</span>
                        </div>
                    )}
                </div>
            ) : (
                <ImageUpload
                    variant="canvas"
                    value={avatarUrl}
                    onChange={(file) => setAvatarUrl(URL.createObjectURL(file))}
                    className="mb-8"
                />
            )}

            {readOnly ? (
                // Read-only Name
                <h1 className={`text-5xl font-bold text-zinc-900 dark:text-white tracking-tighter mb-2 block ${textCenterAlign}`}>
                    {name}
                </h1>
            ) : (
                <InlineEdit
                    value={name}
                    onSave={setName}
                    className={`text-5xl font-bold text-zinc-900 dark:text-white tracking-tighter mb-2 block ${textCenterAlign}`}
                    inputClassName={`text-5xl font-bold tracking-tighter h-auto py-2 mb-2 ${inputAlign}`}
                    placeholder="Your Name"
                />
            )}

            {readOnly ? (
                // Read-only Bio
                <p className={`text-xl text-zinc-400 font-medium tracking-tight mb-8 block ${textCenterAlign}`}>
                    {bio}
                </p>
            ) : (
                <InlineEdit
                    value={bio}
                    onSave={setBio}
                    className={`text-xl text-zinc-400 font-medium tracking-tight mb-8 block ${textCenterAlign}`}
                    inputClassName={`text-xl font-medium tracking-tight h-auto py-1 mb-8 ${inputAlign}`}
                    placeholder="Add a bio..."
                />
            )}

            {!readOnly && (
                <div className={`flex items-center gap-6 mt-4 ${viewMode === 'mobile' ? 'pb-4' : ''}`}>
                    <span
                        className="material-symbols-outlined text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer text-xl"
                        onClick={() => { /* TODO: Open Theme/Palette Modal */ }}
                    >
                        palette
                    </span>
                    <span
                        className="material-symbols-outlined text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer text-xl"
                        onClick={() => setIsSettingsOpen(true)}
                    >
                        tune
                    </span>
                    <div className="relative flex items-center group">
                        <label className="relative inline-flex items-center cursor-pointer" title="Toggle Page Visibility">
                            <input
                                type="checkbox"
                                className="sr-only"
                                checked={isLive}
                                onChange={(e) => setIsLive(e.target.checked)}
                            />

                            {/* Track */}
                            <div className={`w-14 h-8 rounded-full transition-colors relative shadow-inner border border-zinc-700 ${isLive ? 'bg-emerald-500 border-emerald-600' : 'bg-zinc-800'}`}>
                                {/* Thumb Container */}
                                <div className={`absolute top-0.5 left-0.5 bg-white rounded-full h-7 w-7 shadow-sm transition-transform duration-300 flex items-center justify-center ${isLive ? 'translate-x-6' : 'translate-x-0'}`}>
                                    {/* Icon: Visibility Off (Hidden) vs Globe (Public) */}
                                    <span className={`material-symbols-outlined text-[20px] text-zinc-500 absolute transition-opacity duration-300 ${isLive ? 'opacity-0' : 'opacity-100'}`}>visibility_off</span>
                                    <span className={`material-symbols-outlined text-[20px] text-emerald-600 absolute transition-opacity duration-300 ${isLive ? 'opacity-100' : 'opacity-0'}`}>public</span>
                                </div>
                            </div>
                        </label>
                    </div>
                    <span
                        className="material-symbols-outlined text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer text-xl"
                        onClick={() => setIsFeedbackOpen(true)}
                    >
                        chat
                    </span>
                </div>
            )}

            <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
            <HelpFeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
        </div>
    );
}
