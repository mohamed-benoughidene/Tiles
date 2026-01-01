"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { ImageUpload } from "@/components/ui/image-upload";

export function AccountView() {
    return (
        <>
            <div className="h-20 px-8 flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 shrink-0">
                <div>
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                        Account Settings
                    </h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Manage your profile, security, and preferences.
                    </p>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                <div className="max-w-3xl space-y-8">
                    {/* Profile Information */}
                    <section>
                        <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-4">
                            Profile Information
                        </h3>
                        <div className="flex flex-col gap-6">
                            <ImageUpload
                                variant="account"
                                value="https://lh3.googleusercontent.com/aida-public/AB6AXuD5TtXMhNKmugJ-SuWGa4_-sTFzwJYQxORq3OwQKhyc258_HY_fhvs0P7QjzmBZh-JyxJ-_Pvs4NmYBY9FsvfZaZKRxjAIiUeDGOq2wzL4sm8HN5gN73nfvnZJUkScxqE21JHIiqthuxze4uEvbsmaEWaLb3RftP-867fc0ZIVvSCuMe3YzzruuTueuH_OXkMhF9qbIl_KmekWiqAmKSat1PSciGDZkMOgQF0AqT3I9GwVYbacCYTyviu18vVa7KTplGuwOrfMs3A"
                                onChange={(file) => console.log(file)}
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                        Full Name
                                    </label>
                                    <Input
                                        className="block w-full rounded-xl border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-900 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        defaultValue="Sarah Creator"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                        Email Address
                                    </label>
                                    <Input
                                        className="block w-full rounded-xl border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-900 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        defaultValue="sarah@example.com"
                                        type="email"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="h-px bg-zinc-100 dark:bg-zinc-800" />

                    {/* Password & Security */}
                    <section>
                        <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-4">
                            Password & Security
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40">
                                <div>
                                    <p className="text-sm font-medium text-zinc-900 dark:text-white">
                                        Password
                                    </p>
                                    <p className="text-xs text-zinc-500 mt-0.5">
                                        Last changed 3 months ago
                                    </p>
                                </div>
                                <button className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-1.5 transition-colors">
                                    Change
                                </button>
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40">
                                <div>
                                    <p className="text-sm font-medium text-zinc-900 dark:text-white">
                                        Two-Factor Authentication
                                    </p>
                                    <p className="text-xs text-zinc-500 mt-0.5">
                                        Add an extra layer of security.
                                    </p>
                                </div>
                                <Switch />
                            </div>
                        </div>
                    </section>

                    <div className="h-px bg-zinc-100 dark:bg-zinc-800" />

                    {/* Email Notifications */}
                    <section>
                        <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-4">
                            Email Notifications
                        </h3>
                        <div className="space-y-1">
                            <div className="flex items-center justify-between py-3">
                                <span className="text-sm text-zinc-600 dark:text-zinc-300">
                                    Product updates & changelog
                                </span>
                                <Switch defaultChecked />
                            </div>
                            <div className="flex items-center justify-between py-3 border-t border-zinc-100 dark:border-zinc-800/50">
                                <span className="text-sm text-zinc-600 dark:text-zinc-300">
                                    Marketing & offers
                                </span>
                                <Switch />
                            </div>
                            <div className="flex items-center justify-between py-3 border-t border-zinc-100 dark:border-zinc-800/50">
                                <span className="text-sm text-zinc-600 dark:text-zinc-300">
                                    Security alerts
                                </span>
                                <Switch defaultChecked disabled />
                            </div>
                        </div>
                    </section>

                    <div className="h-px bg-zinc-100 dark:bg-zinc-800" />

                    {/* Connected Accounts */}
                    <section>
                        <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-4">
                            Connected Accounts
                        </h3>
                        <div className="grid gap-3">
                            <div className="flex items-center justify-between p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-white border border-zinc-100 flex items-center justify-center shrink-0 p-2">
                                        <img
                                            alt="Google"
                                            className="w-full h-full object-contain"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuyUi8RpmUiLqVWz8FGAKp1uZgb5ONnrZCtxJFOUy-TDmWtsxp0CJd0T2Gw6RIOwzYYuNynwdMDwbGv8XlgXJN4hVqWPzNY_iMhp3gFnaVL5_gXc-5qaVKV-f7-rZgICWdM9XOij9HXTg3oI3v_UY8K6We88-KpRgTCz8Ic4e62DE5UIaEQelAfa6UJlyVXB1gaEmmJs8TDbVuC2OMMVCDlUnza9mfsJfSKehFfKD5u5n7hyLxkth7KHbpQPlgVeDUiw4cE8UN4g"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-zinc-900 dark:text-white">
                                            Google
                                        </span>
                                        <span className="text-xs text-zinc-500">
                                            sarah@example.com
                                        </span>
                                    </div>
                                </div>
                                <button className="text-xs font-medium text-red-600 hover:text-red-700 bg-red-50 dark:bg-red-900/10 hover:bg-red-100 dark:hover:bg-red-900/20 px-3 py-1.5 rounded-lg transition-colors">
                                    Disconnect
                                </button>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 opacity-75">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center shrink-0 border border-zinc-700">
                                        <span className="font-bold text-xs">X</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-zinc-900 dark:text-white">
                                            X (Twitter)
                                        </span>
                                        <span className="text-xs text-zinc-500">Not connected</span>
                                    </div>
                                </div>
                                <button className="text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-700 px-3 py-1.5 rounded-lg transition-colors">
                                    Connect
                                </button>
                            </div>
                        </div>
                    </section>
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
