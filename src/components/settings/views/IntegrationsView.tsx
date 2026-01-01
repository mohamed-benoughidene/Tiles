"use client";

import { Switch } from "@/components/ui/switch";

export function IntegrationsView() {
    const integrations = [
        {
            name: "Google Analytics",
            description: "Track traffic and visitor behavior.",
            iconBg: "bg-orange-50 dark:bg-orange-500/10",
            iconBorder: "border-orange-100 dark:border-orange-500/20",
            iconText: "text-orange-600 dark:text-orange-400",
            icon: "analytics",
            connected: true,
        },
        {
            name: "Mailchimp",
            description: "Sync email subscribers automatically.",
            iconBg: "bg-yellow-50 dark:bg-yellow-500/10",
            iconBorder: "border-yellow-100 dark:border-yellow-500/20",
            iconText: "text-yellow-600 dark:text-yellow-400",
            icon: "mail",
            connected: false,
        },
        {
            name: "Shopify",
            description: "Display products from your store.",
            iconBg: "bg-green-50 dark:bg-green-500/10",
            iconBorder: "border-green-100 dark:border-green-500/20",
            iconText: "text-green-600 dark:text-green-400",
            icon: "shopping_bag",
            connected: false,
        },
        {
            name: "Patreon",
            description: "Show your latest membership tiers.",
            iconBg: "bg-red-50 dark:bg-red-500/10",
            iconBorder: "border-red-100 dark:border-red-500/20",
            iconText: "text-red-600 dark:text-red-400",
            icon: "favorite",
            connected: true,
        },
    ];

    return (
        <>
            <div className="h-20 px-8 flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 shrink-0">
                <div>
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                        Integrations
                    </h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Manage your third-party connections and services.
                    </p>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                <div className="max-w-3xl space-y-4">
                    {integrations.map((integration) => (
                        <div
                            key={integration.name}
                            className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/30 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors gap-4"
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${integration.iconBg} ${integration.iconBorder}`}
                                >
                                    <span
                                        className={`material-symbols-outlined ${integration.iconText} text-2xl`}
                                    >
                                        {integration.icon}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">
                                        {integration.name}
                                    </h4>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                        {integration.description}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 sm:pl-4">
                                <Switch defaultChecked={integration.connected} />
                            </div>
                        </div>
                    ))}
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
