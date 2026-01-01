import { cn } from "@/lib/utils";

interface SettingsSidebarProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export function SettingsSidebar({ activeTab, onTabChange }: SettingsSidebarProps) {
    const tabs = [
        { id: "general", label: "General", icon: "tune" },
        { id: "account", label: "Account", icon: "account_circle" },
        { id: "integrations", label: "Integrations", icon: "grid_view" },
        { id: "seo", label: "Seo", icon: "search" },
        { id: "billing", label: "Billing", icon: "paid" },
        { id: "danger-zone", label: "Danger Zone", icon: "warning" },
    ];

    return (
        <div className="w-full sm:w-64 bg-white dark:bg-zinc-950 sm:bg-zinc-50/80 sm:dark:bg-zinc-900/50 border-r-0 sm:border-r border-zinc-200 dark:border-zinc-800 flex flex-col shrink-0 h-full">
            <div className="p-4 sm:p-6 pb-2 sm:pb-2">
                <h3 className="text-xl sm:text-xs font-bold text-zinc-900 dark:text-white sm:text-zinc-400 sm:uppercase sm:tracking-wider">
                    Settings
                </h3>
            </div>

            <nav className="flex-1 px-0 sm:px-3 overflow-y-auto py-2">
                <div className="space-y-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => onTabChange(tab.id)}
                            className={cn(
                                "w-full group flex items-center justify-between sm:justify-start gap-3 px-4 sm:px-3 py-4 sm:py-2.5 text-base sm:text-sm font-medium transition-all text-left border-b border-zinc-100 dark:border-zinc-800/50 sm:border-0 sm:rounded-xl",
                                activeTab === tab.id
                                    ? "bg-zinc-50 sm:bg-white dark:bg-zinc-900 sm:dark:bg-zinc-800 text-zinc-900 dark:text-white sm:shadow-sm sm:ring-1 sm:ring-zinc-200 dark:sm:ring-zinc-700"
                                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                            )}
                        >
                            <div className="flex items-center gap-3">
                                <span
                                    className={cn(
                                        "material-symbols-outlined text-[24px] sm:text-[20px]",
                                        activeTab === tab.id
                                            ? "text-indigo-600 dark:text-indigo-400"
                                            : "text-zinc-400 gap-hover:text-zinc-600 dark:group-hover:text-zinc-300"
                                    )}
                                >
                                    {tab.icon}
                                </span>
                                {tab.label}
                            </div>
                            {/* Chevron for mobile only */}
                            <span className="material-symbols-outlined text-zinc-400 sm:hidden text-[20px]">
                                chevron_right
                            </span>
                        </button>
                    ))}
                </div>
            </nav>

            <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 mt-auto">
                <button className="w-full flex items-center gap-3 sm:gap-2 px-0 sm:px-3 py-2 text-base sm:text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-colors">
                    <span className="material-symbols-outlined text-[24px] sm:text-[20px]">logout</span>
                    Sign out
                </button>
            </div>
        </div>
    );
}
