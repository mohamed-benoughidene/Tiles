import { ProfileCard } from "./bento/ProfileCard";
import { AnalyticsCard } from "./bento/AnalyticsCard";
import { ThemePreviewCard } from "./bento/ThemePreviewCard";
import { LayoutCustomizerCard } from "./bento/LayoutCustomizerCard";

export function BentoGrid() {
    return (
        <div className="lg:col-span-7 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px] aspect-square lg:aspect-[4/3]">
                {/* Decorative background panel */}
                <div className="absolute inset-0 bg-zinc-100/50 dark:bg-zinc-800/20 rounded-2xl border border-zinc-200 dark:border-border-dark backdrop-blur-sm transform rotate-3 scale-95 opacity-50 z-0"></div>

                {/* Main Grid Container */}
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-3 gap-4 p-6 bg-white dark:bg-[#15151e] rounded-2xl border border-zinc-200 dark:border-border-dark shadow-2xl z-10">
                    <ProfileCard />
                    <AnalyticsCard />
                    <ThemePreviewCard />
                    <LayoutCustomizerCard />
                </div>

                {/* Floating decorative pill */}
                <div className="absolute -right-4 top-20 bg-white dark:bg-zinc-800 py-2 px-4 rounded-lg shadow-xl border border-zinc-200 dark:border-zinc-700 flex items-center gap-2 z-20 animate-[bounce_3s_infinite]">
                    <span className="size-2 rounded-full bg-green-500"></span>
                    <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                        New click from NYC
                    </span>
                </div>
            </div>
        </div>
    );
}
