
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface EditorHeaderProps {
    viewMode: "desktop" | "mobile";
    setViewMode: (mode: "desktop" | "mobile") => void;
}

export function EditorHeader({ viewMode, setViewMode }: EditorHeaderProps) {
    return (
        <header className="h-14 absolute top-0 w-full bg-white/30 dark:bg-black/30 backdrop-blur-[2px] flex items-center justify-between px-4 shrink-0 z-50 transition-all supports-[backdrop-filter]:bg-white/20 dark:supports-[backdrop-filter]:bg-black/20">
            <div className="flex items-center gap-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="size-8 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center shadow-sm cursor-pointer hover:opacity-90 transition-opacity">
                            <span className="material-symbols-outlined text-[20px]">grid_view</span>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-72 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-2xl p-2 gap-1">
                        {/* Workspaces Section */}
                        <DropdownMenuLabel className="px-2 py-1.5 text-xs font-medium text-zinc-500 uppercase tracking-wider">Workspaces</DropdownMenuLabel>
                        <DropdownMenuItem className="rounded-lg px-2 py-2 cursor-pointer bg-zinc-100 dark:bg-zinc-800/50 text-emerald-600 dark:text-emerald-400 font-medium transition-colors">
                            <span className="material-symbols-outlined text-[18px] mr-2">check</span>
                            <span>Personal Workspace</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="rounded-lg px-2 py-2 cursor-pointer transition-colors focus:bg-zinc-100 dark:focus:bg-zinc-900">
                            <span className="size-[18px] mr-2"></span>
                            <span className="text-zinc-600 dark:text-zinc-400">Team Box</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="rounded-lg px-2 py-2 cursor-pointer transition-colors focus:bg-zinc-100 dark:focus:bg-zinc-900 text-zinc-500">
                            <span className="material-symbols-outlined text-[18px] mr-2">add</span>
                            <span>Create Workspace</span>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator className="my-2 bg-zinc-100 dark:bg-zinc-900" />

                        {/* Pages Section */}
                        <DropdownMenuLabel className="px-2 py-1.5 text-xs font-medium text-zinc-500 uppercase tracking-wider">Pages</DropdownMenuLabel>
                        <DropdownMenuItem className="rounded-lg px-2 py-2 cursor-pointer bg-zinc-100 dark:bg-zinc-800/50 text-emerald-600 dark:text-emerald-400 font-medium transition-colors">
                            <span className="material-symbols-outlined text-[18px] mr-2">check</span>
                            <span>My Bio Page</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="rounded-lg px-2 py-2 cursor-pointer transition-colors focus:bg-zinc-100 dark:focus:bg-zinc-900">
                            <span className="size-[18px] mr-2"></span>
                            <span className="text-zinc-600 dark:text-zinc-400">Storefront</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="rounded-lg px-2 py-2 cursor-pointer transition-colors focus:bg-zinc-100 dark:focus:bg-zinc-900 text-zinc-500">
                            <span className="material-symbols-outlined text-[18px] mr-2">add</span>
                            <span>Create Page</span>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator className="my-2 bg-zinc-100 dark:bg-zinc-900" />

                        {/* App Features Section */}
                        <DropdownMenuLabel className="px-2 py-1.5 text-xs font-medium text-zinc-500 uppercase tracking-wider">Features</DropdownMenuLabel>
                        <DropdownMenuItem disabled className="rounded-lg px-2 py-2 cursor-not-allowed opacity-60 group">
                            <div className="size-8 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 flex items-center justify-center mr-3 transition-colors">
                                <span className="material-symbols-outlined text-[18px]">bar_chart</span>
                            </div>
                            <div className="flex flex-col flex-1">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Analytics</span>
                                    <span className="text-[10px] uppercase font-bold tracking-wider text-rose-500 bg-rose-50 dark:bg-rose-950/30 px-1.5 py-0.5 rounded-sm ml-2">Soon</span>
                                </div>
                                <span className="text-xs text-zinc-400">View page insights</span>
                            </div>
                        </DropdownMenuItem>

                        <DropdownMenuItem disabled className="rounded-lg px-2 py-2 cursor-not-allowed opacity-60 group">
                            <div className="size-8 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 flex items-center justify-center mr-3 transition-colors">
                                <span className="material-symbols-outlined text-[18px]">storefront</span>
                            </div>
                            <div className="flex flex-col flex-1">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Store</span>
                                    <span className="text-[10px] uppercase font-bold tracking-wider text-rose-500 bg-rose-50 dark:bg-rose-950/30 px-1.5 py-0.5 rounded-sm ml-2">Soon</span>
                                </div>
                                <span className="text-xs text-zinc-400">Manage products & orders</span>
                            </div>
                        </DropdownMenuItem>

                        <DropdownMenuItem disabled className="rounded-lg px-2 py-2 cursor-not-allowed opacity-60 group">
                            <div className="size-8 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 flex items-center justify-center mr-3 transition-colors">
                                <span className="material-symbols-outlined text-[18px]">group</span>
                            </div>
                            <div className="flex flex-col flex-1">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Audience</span>
                                    <span className="text-[10px] uppercase font-bold tracking-wider text-rose-500 bg-rose-50 dark:bg-rose-950/30 px-1.5 py-0.5 rounded-sm ml-2">Soon</span>
                                </div>
                                <span className="text-xs text-zinc-400">Customers & fans</span>
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <span className="text-sm font-semibold text-zinc-900 dark:text-white tracking-tight">
                    Editor
                </span>
            </div>
            <div className="flex items-center gap-3">
                <div className="flex items-center text-xs font-medium text-zinc-500 mr-2">
                    <span className="material-symbols-outlined text-[16px] mr-1.5 text-green-500">
                        check_circle
                    </span>{" "}
                    Saved
                </div>
                <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800 mx-1"></div>

                <div className="hidden md:block">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    onClick={() => setViewMode(viewMode === "desktop" ? "mobile" : "desktop")}
                                    className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
                                >
                                    <span className="material-symbols-outlined text-[20px]">
                                        {viewMode === "desktop" ? "smartphone" : "desktop_windows"}
                                    </span>
                                </button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{viewMode === "desktop" ? "Switch to Mobile View" : "Switch to Desktop View"}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>

                <button className="h-8 px-4 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors shadow-sm cursor-pointer">
                    Preview
                </button>
            </div>
        </header>
    );
}
