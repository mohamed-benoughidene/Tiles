"use client";

export function BillingView() {
    return (
        <>
            <div className="h-20 px-8 flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 shrink-0">
                <div>
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                        Billing
                    </h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Manage your subscription, payment methods, and invoices.
                    </p>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                <div className="max-w-3xl space-y-8">
                    {/* Active Plan */}
                    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-zinc-50/50 dark:bg-zinc-900/50">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                                    Pro Plan
                                </h3>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300">
                                    Active
                                </span>
                            </div>
                            <div className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
                                $10
                                <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400">
                                    /month
                                </span>
                            </div>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                Next billing date: November 24, 2024
                            </p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                            <button className="px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm">
                                Manage Subscription
                            </button>
                            <button className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-colors shadow-sm shadow-indigo-200 dark:shadow-none">
                                Upgrade Plan
                            </button>
                        </div>
                    </div>

                    <div className="border-t border-b border-zinc-100 dark:border-zinc-800 py-6">
                        <h4 className="text-base font-semibold text-zinc-900 dark:text-white mb-4">
                            Payment Method
                        </h4>
                        <div className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-8 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center relative overflow-hidden text-zinc-600 dark:text-zinc-400">
                                    <span className="material-symbols-outlined text-[20px]">
                                        credit_card
                                    </span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-zinc-900 dark:text-white">
                                        Visa ending in 4242
                                    </p>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                                        Expires 12/2025
                                    </p>
                                </div>
                            </div>
                            <button className="px-3 py-1.5 rounded-lg text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 transition-colors">
                                Update
                            </button>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-base font-semibold text-zinc-900 dark:text-white">
                                Billing History
                            </h4>
                            <button className="flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-[18px]">
                                    download
                                </span>
                                Download All
                            </button>
                        </div>
                        <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-zinc-950">
                            <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-zinc-50/50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                                <div className="col-span-5 sm:col-span-4">Invoice</div>
                                <div className="col-span-3">Status</div>
                                <div className="col-span-2 sm:col-span-3">Amount</div>
                                <div className="col-span-2 text-right"></div>
                            </div>

                            {/* Invoice Item 1 */}
                            <div className="grid grid-cols-12 gap-4 px-6 py-4 items-center border-b border-zinc-100 dark:border-zinc-800 last:border-0 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/20 transition-colors group">
                                <div className="col-span-5 sm:col-span-4">
                                    <p className="text-sm font-medium text-zinc-900 dark:text-white">
                                        Pro Plan - Oct 2024
                                    </p>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                                        Oct 24, 2024
                                    </p>
                                </div>
                                <div className="col-span-3">
                                    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-green-50 dark:bg-green-900/20 text-xs font-medium text-green-700 dark:text-green-400 border border-green-100 dark:border-green-900/30">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>{" "}
                                        Paid
                                    </span>
                                </div>
                                <div className="col-span-2 sm:col-span-3 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                                    $10.00
                                </div>
                                <div className="col-span-2 text-right">
                                    <button className="w-8 h-8 flex items-center justify-center rounded-lg text-zinc-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors opacity-0 group-hover:opacity-100">
                                        <span className="material-symbols-outlined text-[20px]">
                                            download
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Invoice Item 2 */}
                            <div className="grid grid-cols-12 gap-4 px-6 py-4 items-center border-b border-zinc-100 dark:border-zinc-800 last:border-0 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/20 transition-colors group">
                                <div className="col-span-5 sm:col-span-4">
                                    <p className="text-sm font-medium text-zinc-900 dark:text-white">
                                        Pro Plan - Sep 2024
                                    </p>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                                        Sep 24, 2024
                                    </p>
                                </div>
                                <div className="col-span-3">
                                    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-green-50 dark:bg-green-900/20 text-xs font-medium text-green-700 dark:text-green-400 border border-green-100 dark:border-green-900/30">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>{" "}
                                        Paid
                                    </span>
                                </div>
                                <div className="col-span-2 sm:col-span-3 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                                    $10.00
                                </div>
                                <div className="col-span-2 text-right">
                                    <button className="w-8 h-8 flex items-center justify-center rounded-lg text-zinc-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors opacity-0 group-hover:opacity-100">
                                        <span className="material-symbols-outlined text-[20px]">
                                            download
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
