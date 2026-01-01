import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full border-t border-zinc-200 dark:border-border-dark bg-white dark:bg-background-dark py-8 px-6">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-zinc-500 text-sm">
                    © 2024 Tiles Inc. All rights reserved.
                </p>
                <div className="flex gap-6">
                    <Link
                        className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        href="#"
                    >
                        Terms
                    </Link>
                    <Link
                        className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        href="#"
                    >
                        Privacy
                    </Link>
                    <Link
                        className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        href="#"
                    >
                        Cookies
                    </Link>
                </div>
            </div>
        </footer>
    );
}
