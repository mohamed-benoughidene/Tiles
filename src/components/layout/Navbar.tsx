import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <header className="flex items-center justify-between w-full px-6 py-5 lg:px-12 border-b border-zinc-200 dark:border-border-dark bg-white/50 dark:bg-background-dark/50 backdrop-blur-md sticky top-0 z-50">
            <div className="flex items-center gap-3">
                <div className="size-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary border border-primary/20">
                    <span className="material-symbols-outlined">layers</span>
                </div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    Tiles
                </h2>
            </div>
            <div className="flex items-center gap-6">
                <span className="hidden sm:block text-sm text-zinc-500 dark:text-zinc-400">
                    Need help?
                </span>
                <Button variant="link" className="p-0 h-auto font-medium shadow-none hover:no-underline hover:text-primary dark:hover:text-white transition-colors">
                    Sign In
                </Button>
            </div>
        </header>
    );
}
