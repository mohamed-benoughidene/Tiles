"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function SeoView() {
    const [metaTitle, setMetaTitle] = useState("Sarah Creator | Digital Artist & Content Creator");
    const [metaDesc, setMetaDesc] = useState("Discover Sarah's exclusive digital art collections, behind-the-scenes content, and upcoming workshops. Join the creative community today.");

    return (
        <>
            <div className="h-20 px-8 flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 shrink-0">
                <div>
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                        SEO Settings
                    </h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Optimize how your page appears in search results.
                    </p>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                <div className="max-w-2xl space-y-8">
                    <div className="grid gap-2">
                        <label
                            className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
                            htmlFor="meta-title"
                        >
                            Meta Title
                        </label>
                        <div className="relative">
                            <Input
                                id="meta-title"
                                name="meta-title"
                                placeholder="e.g. Sarah Creator | Digital Artist"
                                value={metaTitle}
                                onChange={(e) => setMetaTitle(e.target.value)}
                                className="block w-full rounded-xl border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5 placeholder:text-zinc-400"
                            />
                        </div>
                        <p className="text-xs text-zinc-500">
                            The title tag of your page. Recommended length: 50-60 characters.
                        </p>
                    </div>

                    <div className="grid gap-2">
                        <label
                            className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
                            htmlFor="meta-desc"
                        >
                            Meta Description
                        </label>
                        <Textarea
                            id="meta-desc"
                            name="meta-desc"
                            placeholder="A brief summary of your page..."
                            rows={3}
                            value={metaDesc}
                            onChange={(e) => setMetaDesc(e.target.value)}
                            className="block w-full rounded-xl border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5 placeholder:text-zinc-400 resize-none"
                        />
                        <p className="text-xs text-zinc-500">
                            A brief summary of your page content. Recommended length: 150-160
                            characters.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4">
                            Search Result Preview
                        </h3>
                        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 p-6">
                            <div className="bg-white dark:bg-[#202124] p-5 rounded-lg shadow-sm border border-zinc-100 dark:border-zinc-800 font-arial max-w-full overflow-hidden">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-7 h-7 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-600 dark:text-zinc-400">
                                        S
                                    </div>
                                    <div className="flex flex-col leading-tight">
                                        <span className="text-xs font-medium text-[#202124] dark:text-[#dadce0]">
                                            Link-in-Bio
                                        </span>
                                        <span className="text-xs text-[#5f6368] dark:text-[#bdc1c6] truncate">
                                            https://linkin.bio/sarah-creator
                                        </span>
                                    </div>
                                </div>
                                <h4 className="text-lg text-[#1a0dab] dark:text-[#8ab4f8] hover:underline cursor-pointer truncate font-normal leading-snug mb-1">
                                    {metaTitle || "Your Page Title"}
                                </h4>
                                <div className="text-sm text-[#4d5156] dark:text-[#bdc1c6] leading-snug line-clamp-2">
                                    <span className="text-[#5f6368] dark:text-[#9aa0a6]">
                                        May 24, 2024 —{" "}
                                    </span>
                                    {metaDesc || "Your page description will appear here..."}
                                </div>
                            </div>
                            <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-zinc-400">
                                <span className="material-symbols-outlined text-[14px]">
                                    info
                                </span>
                                <span>
                                    This is a simulation. Actual appearance on Google may vary.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-end gap-3 bg-zinc-50/50 dark:bg-zinc-900/50 shrink-0">
                <button className="px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                    Discard
                </button>
                <button className="px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm shadow-indigo-200 dark:shadow-none transition-all hover:translate-y-px active:translate-y-0">
                    Save Changes
                </button>
            </div>
        </>
    );
}
