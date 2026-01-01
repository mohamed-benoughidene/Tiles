"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ImageUpload } from "@/components/ui/image-upload";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export function GeneralView() {
    const [pageTitle, setPageTitle] = useState("Sarah Creator");
    const [domain, setDomain] = useState("www.sarahcreator.com");
    const [isVisible, setIsVisible] = useState(true);
    const [isCustomDomainEnabled, setIsCustomDomainEnabled] = useState(false);

    return (
        <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-zinc-950 relative h-full">
            <div className="h-20 px-8 flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 shrink-0">
                <div>
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                        Page Settings
                    </h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Configure your main page details.
                    </p>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                <div className="max-w-2xl space-y-8">
                    {/* Page Title */}
                    <div className="space-y-4">
                        <label
                            className="block text-sm font-medium text-zinc-900 dark:text-white"
                            htmlFor="page-title"
                        >
                            Page Title
                        </label>
                        <div className="relative">
                            <Input
                                id="page-title"
                                value={pageTitle}
                                onChange={(e) => setPageTitle(e.target.value)}
                                placeholder="e.g. My Portfolio"
                                className="block w-full rounded-xl border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5 placeholder:text-zinc-400"
                            />
                        </div>
                        <p className="text-xs text-zinc-500">
                            The title displayed on your public page and browser tabs.
                        </p>
                    </div>

                    {/* Profile URL */}
                    <div className="space-y-4">
                        <label className="block text-sm font-medium text-zinc-900 dark:text-white">
                            Profile URL
                        </label>
                        <div className="flex rounded-xl shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                            <span className="flex select-none items-center pl-3 text-zinc-500 sm:text-sm">
                                linkin.bio/
                            </span>
                            <input
                                className="block flex-1 border-0 bg-transparent py-2.5 pl-1 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:ring-0 sm:text-sm outline-none"
                                readOnly
                                type="text"
                                value="sarah-creator"
                            />
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <button
                                            className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-xl px-3 py-2 text-sm font-semibold text-zinc-900 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:z-10 transition-colors"
                                            type="button"
                                            onClick={() => {
                                                navigator.clipboard.writeText("linkin.bio/sarah-creator");
                                                // Add toast here later
                                            }}
                                        >
                                            <span className="material-symbols-outlined text-[18px]">
                                                content_copy
                                            </span>
                                        </button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Copy Profile URL</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <p className="text-xs text-zinc-500">
                            Your unique profile link.{" "}
                            <a className="text-indigo-600 hover:underline cursor-pointer">
                                View live page
                            </a>
                        </p>
                    </div>

                    {/* Visiblity & Favicon Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                        <div className="flex flex-col gap-3 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-zinc-900 dark:text-white">
                                    Page Visibility
                                </span>
                                <button
                                    onClick={() => setIsVisible(!isVisible)}
                                    className={cn(
                                        "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2",
                                        isVisible ? "bg-indigo-600" : "bg-zinc-200 dark:bg-zinc-700"
                                    )}
                                >
                                    <span
                                        className={cn(
                                            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                                            isVisible ? "translate-x-5" : "translate-x-0"
                                        )}
                                    ></span>
                                </button>
                            </div>
                            <p className="text-xs text-zinc-500 leading-relaxed">
                                Your page is currently visible to the public and indexed by search
                                engines.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
                            <ImageUpload
                                variant="favicon"
                                accept=".png, .ico"
                                onChange={(file) => console.log(file)}
                            />
                        </div>
                    </div>

                    {/* DNS Section */}
                    <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <h3 className="text-sm font-medium text-zinc-900 dark:text-white">
                                        Custom Domain (DNS)
                                    </h3>
                                    <p className="text-xs text-zinc-500">
                                        Connect a custom domain to your page.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsCustomDomainEnabled(!isCustomDomainEnabled)}
                                    className={cn(
                                        "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2",
                                        isCustomDomainEnabled ? "bg-indigo-600" : "bg-zinc-200 dark:bg-zinc-700"
                                    )}
                                >
                                    <span
                                        className={cn(
                                            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                                            isCustomDomainEnabled ? "translate-x-5" : "translate-x-0"
                                        )}
                                    ></span>
                                </button>
                            </div>

                            <div
                                className={cn(
                                    "rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/30 p-5 space-y-6 transition-all duration-200",
                                    !isCustomDomainEnabled && "opacity-50 grayscale pointer-events-none select-none"
                                )}
                            >
                                <div className="space-y-3">
                                    <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300">
                                        Domain Name
                                    </label>
                                    <div className="flex gap-2">
                                        <Input
                                            value={domain}
                                            onChange={(e) => setDomain(e.target.value)}
                                            placeholder="e.g. www.example.com"
                                            className="block w-full rounded-xl border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2"
                                        />
                                        <button className="px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl text-xs font-medium text-zinc-700 dark:text-zinc-200 shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
                                            Verify
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-amber-600 dark:text-amber-500">
                                        <span className="material-symbols-outlined text-[14px]">
                                            pending
                                        </span>
                                        <span>
                                            Verification pending. Please add the DNS records below.
                                        </span>
                                    </div>
                                </div>

                                {/* DNS Records Table */}
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300">
                                            DNS Records
                                        </label>
                                        <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">
                                            Status: Checking...
                                        </span>
                                    </div>
                                    <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 shadow-sm">
                                        <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800">
                                            <thead className="bg-zinc-50 dark:bg-zinc-900">
                                                <tr>
                                                    <th
                                                        className="px-4 py-2 text-left text-[10px] font-semibold text-zinc-500 uppercase tracking-wider"
                                                        scope="col"
                                                    >
                                                        Type
                                                    </th>
                                                    <th
                                                        className="px-4 py-2 text-left text-[10px] font-semibold text-zinc-500 uppercase tracking-wider"
                                                        scope="col"
                                                    >
                                                        Name
                                                    </th>
                                                    <th
                                                        className="px-4 py-2 text-left text-[10px] font-semibold text-zinc-500 uppercase tracking-wider"
                                                        scope="col"
                                                    >
                                                        Value
                                                    </th>
                                                    <th className="relative px-4 py-2" scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                                                <tr>
                                                    <td className="whitespace-nowrap px-4 py-2.5 text-xs font-medium text-zinc-900 dark:text-zinc-200">
                                                        CNAME
                                                    </td>
                                                    <td className="whitespace-nowrap px-4 py-2.5 text-xs text-zinc-500">
                                                        www
                                                    </td>
                                                    <td className="whitespace-nowrap px-4 py-2.5 text-xs text-zinc-500 font-mono">
                                                        cname.linkin.bio
                                                    </td>
                                                    <td className="whitespace-nowrap px-4 py-2.5 text-right text-xs">
                                                        <span className="material-symbols-outlined text-[16px] text-zinc-400 hover:text-indigo-600 cursor-pointer transition-colors">
                                                            content_copy
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="whitespace-nowrap px-4 py-2.5 text-xs font-medium text-zinc-900 dark:text-zinc-200">
                                                        A
                                                    </td>
                                                    <td className="whitespace-nowrap px-4 py-2.5 text-xs text-zinc-500">
                                                        @
                                                    </td>
                                                    <td className="whitespace-nowrap px-4 py-2.5 text-xs text-zinc-500 font-mono">
                                                        76.76.21.21
                                                    </td>
                                                    <td className="whitespace-nowrap px-4 py-2.5 text-right text-xs">
                                                        <span className="material-symbols-outlined text-[16px] text-zinc-400 hover:text-indigo-600 cursor-pointer transition-colors">
                                                            content_copy
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-[11px] text-zinc-500">
                                        Note: DNS changes may take up to 24-48 hours to propagate
                                        globally.
                                    </p>
                                </div>
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
        </div>
    );
}
