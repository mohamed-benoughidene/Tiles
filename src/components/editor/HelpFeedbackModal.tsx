"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface HelpFeedbackModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function HelpFeedbackModal({ isOpen, onClose }: HelpFeedbackModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 [&>button]:hidden">
                <DialogHeader className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex-row items-center justify-between space-y-0">
                    <div>
                        <DialogTitle className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                            Help & Feedback
                        </DialogTitle>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            How can we help you today?
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors rounded-lg p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </DialogHeader>

                <Tabs defaultValue="feedback" className="w-full">
                    <div className="px-6 pt-4 pb-0 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                        <TabsList className="bg-transparent p-0 h-auto gap-6 justify-start w-full">
                            <TabsTrigger
                                value="feedback"
                                className="rounded-none border-b-2 border-transparent px-0 pb-3 data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600 dark:data-[state=active]:border-indigo-400 dark:data-[state=active]:text-indigo-400 data-[state=active]:shadow-none bg-transparent hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                            >
                                Feedback
                            </TabsTrigger>
                            <TabsTrigger
                                value="bug-report"
                                className="rounded-none border-b-2 border-transparent px-0 pb-3 data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600 dark:data-[state=active]:border-indigo-400 dark:data-[state=active]:text-indigo-400 data-[state=active]:shadow-none bg-transparent hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                            >
                                Bug Report
                            </TabsTrigger>
                            <TabsTrigger
                                value="support"
                                className="rounded-none border-b-2 border-transparent px-0 pb-3 data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600 dark:data-[state=active]:border-indigo-400 dark:data-[state=active]:text-indigo-400 data-[state=active]:shadow-none bg-transparent hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                            >
                                Support
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <div className="p-6 overflow-y-auto max-h-[60vh]">
                        <TabsContent value="feedback" className="mt-0 space-y-6">
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 text-indigo-900 dark:text-indigo-200 text-sm">
                                <span className="material-symbols-outlined text-indigo-600 dark:text-indigo-400 mt-0.5 text-lg">
                                    lightbulb
                                </span>
                                <p>
                                    Share your ideas or suggestions on how we can improve the
                                    editor experience.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                    How are you feeling?
                                </label>
                                <div className="flex gap-3">
                                    {["🤩", "🙂", "😕"].map((emoji, i) => (
                                        <button
                                            key={i}
                                            className="flex-1 p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col items-center gap-2 group ring-2 ring-transparent focus:ring-indigo-500 focus:outline-none"
                                        >
                                            <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">
                                                {emoji}
                                            </span>
                                            <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                                                {["Loving it", "It's okay", "Confused"][i]}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="feedback-msg"
                                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                                >
                                    Your Feedback
                                </label>
                                <Textarea
                                    id="feedback-msg"
                                    placeholder="Tell us what you think..."
                                    className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 resize-none min-h-[100px]"
                                />
                            </div>

                            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20">
                                Send Feedback
                            </Button>
                        </TabsContent>

                        <TabsContent value="bug-report" className="mt-0 space-y-6">
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 text-indigo-900 dark:text-indigo-200 text-sm">
                                <span className="material-symbols-outlined text-indigo-600 dark:text-indigo-400 mt-0.5 text-lg">
                                    bug_report
                                </span>
                                <p>
                                    Found a glitch? Please provide detailed steps to reproduce it.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                    Describe the bug
                                </label>
                                <Textarea
                                    placeholder="What happened? What did you expect to happen?"
                                    className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 resize-none min-h-[150px]"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="flex items-start gap-3 p-3 rounded-lg border border-dashed border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 cursor-pointer transition-colors group">
                                    <div className="h-8 w-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-indigo-500 transition-colors shrink-0">
                                        <span className="material-symbols-outlined text-lg">add_a_photo</span>
                                    </div>
                                    <div className="flex-1 text-sm">
                                        <span className="font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Attach a screenshot</span>
                                        <p className="text-zinc-400 text-xs">Optional. Max 5MB.</p>
                                    </div>
                                </label>
                            </div>

                            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20">
                                Submit Report
                            </Button>
                        </TabsContent>

                        <TabsContent value="support" className="mt-0 space-y-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                    Search Documentation
                                </label>
                                <div className="relative group">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-indigo-500 transition-colors">
                                        search
                                    </span>
                                    <Input
                                        placeholder="Search for answers..."
                                        className="pl-10 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
                                    />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3">Popular Topics</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { icon: "rocket_launch", label: "Getting Started", color: "blue" },
                                        { icon: "palette", label: "Customization", color: "purple" },
                                        { icon: "credit_card", label: "Billing & Plans", color: "green" },
                                        { icon: "link", label: "Domains", color: "orange" }
                                    ].map((topic, i) => (
                                        <button key={i} className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-800 bg-white dark:bg-zinc-900 transition-all group flex items-start gap-3 text-left w-full">
                                            <div className={`p-1.5 rounded-md bg-${topic.color}-50 dark:bg-${topic.color}-900/30 text-${topic.color}-600 dark:text-${topic.color}-400 shrink-0`}>
                                                <span className="material-symbols-outlined text-[20px]">{topic.icon}</span>
                                            </div>
                                            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                {topic.label}
                                            </p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-sm font-medium text-zinc-900 dark:text-white">Contact our team</h3>
                                    <span className="text-xs text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full">Wait time: ~5m</span>
                                </div>
                                <div className="flex gap-3">
                                    <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-sm font-medium text-zinc-700 dark:text-zinc-200 transition-colors border border-zinc-200 dark:border-zinc-700">
                                        <span className="material-symbols-outlined text-[18px]">mail</span>
                                        Email
                                    </button>
                                    <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 text-sm font-medium text-indigo-700 dark:text-indigo-300 transition-colors border border-indigo-100 dark:border-indigo-800/50">
                                        <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
                                        Live Chat
                                    </button>
                                </div>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </DialogContent >
        </Dialog >
    );
}
