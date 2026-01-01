"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { SettingsSidebar } from "@/components/settings/SettingsSidebar";
import { GeneralView } from "@/components/settings/views/GeneralView";
import { AccountView } from "@/components/settings/views/AccountView";
import { IntegrationsView } from "@/components/settings/views/IntegrationsView";
import { BillingView } from "@/components/settings/views/BillingView";
import { SeoView } from "@/components/settings/views/SeoView";
import { DangerZoneView } from "@/components/settings/views/DangerZoneView";
import { cn } from "@/lib/utils";

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultTab?: string;
}

export function SettingsModal({ isOpen, onClose, defaultTab = "general" }: SettingsModalProps) {
    const [activeTab, setActiveTab] = useState(defaultTab);
    const [isDetailView, setIsDetailView] = useState(false);

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        setIsDetailView(true);
    };

    const handleBack = () => {
        setIsDetailView(false);
    };

    const renderContent = () => {
        switch (activeTab) {
            case "general":
                return <GeneralView />;
            case "account":
                return <AccountView />;
            case "integrations":
                return <IntegrationsView />;
            case "seo":
                return <SeoView />;
            case "billing":
                return <BillingView />;
            case "danger-zone":
                return <DangerZoneView />;
            default:
                return <GeneralView />;
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="w-screen h-[100dvh] sm:w-full sm:h-[550px] sm:max-w-4xl p-0 gap-0 overflow-hidden bg-white dark:bg-zinc-950 border-0 sm:border border-zinc-200 dark:border-zinc-800 shadow-none sm:shadow-2xl rounded-none sm:rounded-3xl flex flex-col sm:flex-row [&>button]:hidden duration-200">
                <DialogTitle className="sr-only">Settings</DialogTitle>

                {/* sidebar wrapper: hidden on mobile if detail view is active */}
                <div className={cn(
                    "w-full sm:w-auto h-full sm:h-auto flex flex-col",
                    isDetailView ? "hidden sm:flex" : "flex"
                )}>
                    {/* Mobile Header for Root View */}
                    <div className="sm:hidden flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800">
                        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Settings</h2>
                        <button
                            onClick={onClose}
                            className="w-9 h-9 flex items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>

                    <SettingsSidebar activeTab={activeTab} onTabChange={handleTabChange} />
                </div>

                {/* content wrapper: hidden on mobile if detail view is NOT active */}
                <div className={cn(
                    "flex-1 flex-col min-w-0 bg-white dark:bg-zinc-950 relative h-full",
                    isDetailView ? "flex" : "hidden sm:flex"
                )}>
                    {/* Mobile Detail Header */}
                    <div className="sm:hidden flex items-center gap-3 p-4 border-b border-zinc-200 dark:border-zinc-800">
                        <button
                            onClick={handleBack}
                            className="w-9 h-9 flex items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors -ml-2"
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white capitalize">
                            {activeTab.replace("-", " ")}
                        </h2>
                        <button
                            onClick={onClose}
                            className="ml-auto w-9 h-9 flex items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>

                    {/* Desktop Close Button */}
                    <button
                        onClick={onClose}
                        className="hidden sm:flex absolute top-5 right-5 w-9 h-9 items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors z-50"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                    {renderContent()}
                </div>
            </DialogContent>
        </Dialog>
    );
}
