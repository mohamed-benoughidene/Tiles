import React from 'react';

export function NoteTile6x4() {
    return (
        <div className="w-full h-full bg-[#1f1f22] rounded-[2rem] p-6 flex flex-col shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/10 overflow-hidden relative group/widget">
            {/* Widget Header */}
            <div className="flex items-start justify-between mb-4 z-10">
                <div className="flex items-center gap-3">
                    {/* Note Icon */}
                    <div className="size-10 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg shadow-yellow-500/20">
                        <span className="material-symbols-outlined text-white text-xl drop-shadow-sm">description</span>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-white text-lg font-bold leading-tight tracking-tight">Brainstorming</h3>
                        <span className="text-[#71717a] text-[10px] font-medium uppercase tracking-wider mt-0.5">Product Team • 2h ago</span>
                    </div>
                </div>
                {/* Tap Indicator (Top Right) */}
                <div className="size-8 rounded-full bg-[#27272a] flex items-center justify-center text-[#71717a] group-hover/widget:bg-blue-600 group-hover/widget:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-lg">arrow_outward</span>
                </div>
            </div>

            {/* Widget Body Content */}
            <div className="flex flex-1 flex-col justify-between z-10 max-h-full overflow-hidden">
                <div className="flex flex-col gap-2">
                    <h4 className="text-white text-xl font-semibold leading-tight tracking-tight line-clamp-1">New Product Features</h4>
                    <p className="text-[#a1a1aa] text-sm leading-relaxed line-clamp-3">
                        Focus on reducing friction in the onboarding flow. We need to integrate the new API keys by next Tuesday. Key priority is the mobile dashboard refresh.
                    </p>
                </div>

                {/* Bottom Section: List & Visual */}
                <div className="flex items-end justify-between gap-4 mt-2">
                    <ul className="flex flex-col gap-1.5 w-full">
                        <li className="flex items-center gap-2 text-[#e4e4e7] text-xs font-medium">
                            <span className="material-symbols-outlined text-yellow-500 text-base">check_circle</span>
                            Review Q3 Analytics Data
                        </li>
                        <li className="flex items-center gap-2 text-[#e4e4e7] text-xs font-medium">
                            <span className="material-symbols-outlined text-[#3f3f46] text-base">radio_button_unchecked</span>
                            Finalize UI Mockups
                        </li>
                        <li className="flex items-center gap-2 text-[#e4e4e7] text-xs font-medium">
                            <span className="material-symbols-outlined text-[#3f3f46] text-base">radio_button_unchecked</span>
                            Schedule Dev Huddle
                        </li>
                    </ul>

                    {/* Embedded Media / Doodle */}
                    <div className="shrink-0 relative group/image hidden md:block">
                        <div
                            className="w-24 h-16 rounded-lg bg-cover bg-center shadow-inner ring-1 ring-white/10 transition-transform group-hover/image:scale-105"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6fVj9f00rW6AXuLMcI7WLsluboa95qqiyWvlz-6eL8BRkxa2NAjOlLeGAlMbPEc3KZjDk1460_3LPNDBUQfp9BTmfrVmWxBJs_CuzdJI_oCLYbW-URTkPNJatMf9fwjoalVGUrUVvfklLdibwKOhOug74-h3ZZGmDcKnbbw-zE5jEj35ajP9BBDWBr2NxP6T0pj-3P3w893euaDxwR67ggXeaSR9ntx50rP8xdKTwrd25KbcHhYzyysNCWdWH8b5bV7gAcfkiQA")' }}
                        >
                            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-[#27272a] text-[8px] text-white px-1.5 py-0.5 rounded-full border border-[#3f3f46]">
                            Img
                        </div>
                    </div>
                </div>
            </div>

            {/* Gradient Overlay (Bottom) for aesthetic depth */}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-b-[2rem]"></div>
        </div>
    );
}
