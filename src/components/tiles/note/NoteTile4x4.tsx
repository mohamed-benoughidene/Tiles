import React from 'react';

export function NoteTile4x4() {
    return (
        <div className="w-full h-full bg-[#1f1f22] rounded-[2rem] p-5 flex flex-col shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/10 overflow-hidden relative group/widget">
            {/* Widget Header */}
            <div className="flex items-start justify-between mb-3 z-10">
                <div className="flex items-center gap-3">
                    {/* Note Icon */}
                    <div className="size-10 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg shadow-yellow-500/20">
                        <span className="material-symbols-outlined text-white text-xl drop-shadow-sm">description</span>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-white text-lg font-bold leading-tight tracking-tight">Brainstorming</h3>
                        <span className="text-[#71717a] text-[10px] font-medium uppercase tracking-wider mt-0.5">Product Team</span>
                    </div>
                </div>
                {/* Tap Indicator */}
                <div className="size-8 rounded-full bg-[#27272a] flex items-center justify-center text-[#71717a] group-hover/widget:bg-blue-600 group-hover/widget:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-lg">arrow_outward</span>
                </div>
            </div>

            {/* Widget Body Content */}
            <div className="flex flex-1 flex-col z-10 overflow-hidden">
                <div className="flex flex-col gap-2 mb-3">
                    <h4 className="text-white text-lg font-semibold leading-tight tracking-tight line-clamp-2">New Product Features: Q3 Roadmap</h4>
                    <div className="w-full h-[1px] bg-white/5 my-1"></div>
                </div>

                {/* List Items - More prominent in 4x4 */}
                <ul className="flex flex-col gap-2 w-full flex-1 overflow-hidden">
                    <li className="flex items-start gap-2 text-[#e4e4e7] text-xs font-medium">
                        <span className="material-symbols-outlined text-yellow-500 text-sm mt-0.5">check_circle</span>
                        <span className="line-clamp-2">Review Q3 Analytics Data regarding user retention</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#e4e4e7] text-xs font-medium">
                        <span className="material-symbols-outlined text-[#3f3f46] text-sm mt-0.5">radio_button_unchecked</span>
                        <span className="line-clamp-2">Finalize UI Mockups for the new settings panel</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#e4e4e7] text-xs font-medium">
                        <span className="material-symbols-outlined text-[#3f3f46] text-sm mt-0.5">radio_button_unchecked</span>
                        <span className="line-clamp-1">Schedule Dev Huddle</span>
                    </li>
                </ul>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-b-[2rem]"></div>
        </div>
    );
}
