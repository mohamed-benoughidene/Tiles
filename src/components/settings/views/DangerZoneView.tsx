"use client";

export function DangerZoneView() {
    return (
        <>
            <div className="h-20 px-8 flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 shrink-0">
                <div>
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                        Danger Zone
                    </h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Irreversible and destructive actions.
                    </p>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                <div className="max-w-2xl space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-b border-zinc-100 dark:border-zinc-800">
                        <div>
                            <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">
                                Transfer Ownership
                            </h4>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                                Transfer this page to another user account.
                            </p>
                        </div>
                        <button className="shrink-0 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                            Transfer
                        </button>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4">
                        <div>
                            <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">
                                Reset Page Layout
                            </h4>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                                Revert your page layout to the default template.
                            </p>
                        </div>
                        <button className="shrink-0 px-4 py-2 rounded-xl border border-red-200 dark:border-red-900/50 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                            Reset Layout
                        </button>
                    </div>

                    <div className="rounded-2xl border border-red-200 dark:border-red-900/50 bg-red-50/50 dark:bg-red-900/10 p-6 sm:p-8">
                        <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-base font-bold text-red-900 dark:text-red-100">
                                    Delete Page
                                </h4>
                                <p className="text-sm text-red-700 dark:text-red-300/80 mt-1 leading-relaxed">
                                    Permanently delete your page and all of its content. This
                                    action is not reversible - please be certain.
                                </p>
                            </div>
                            <div className="flex justify-end pt-2">
                                <button className="px-4 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-medium transition-colors shadow-sm shadow-red-200 dark:shadow-none flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[18px]">
                                        delete
                                    </span>
                                    Delete Page
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
