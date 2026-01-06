import React from 'react';

export function ProductTile6x2() {
    return (
        <div className="relative w-full h-full bg-zinc-50 dark:bg-[#1c1c1e] rounded-[22px] shadow-sm border border-white/50 dark:border-white/10 flex overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-300 ring-1 ring-black/5 dark:ring-white/5 group">
            {/* Content Side (Left) */}
            <div className="flex-1 flex flex-col justify-center px-5 py-3 gap-1 z-10 relative">
                {/* Eyebrow */}
                <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#1313ec] animate-pulse"></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">New Drop</span>
                </div>
                {/* Headline */}
                <h2 className="text-lg font-bold leading-tight text-slate-900 dark:text-white">Summer Collection</h2>
                {/* Subtext/Offer */}
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Get 20% off this week</p>
                {/* CTA */}
                <div className="mt-2 flex items-center text-[#1313ec] dark:text-[#5e5ce6] text-xs font-bold gap-1 group-hover:gap-2 transition-all">
                    Shop Now
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </div>
            </div>
            {/* Visual Side (Right) */}
            <div className="w-[35%] h-full relative">
                {/* Gradient Overlay for smooth text transition */}
                <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-zinc-50 dark:from-[#1c1c1e] to-transparent z-10"></div>
                {/* Product Image */}
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBC1SnlMnY42IqYuFMucI3WtKD-glbtTQ2J4BBTUqrWbcnbnMg2Sz01PrgppsMo4jStBPxvpmAJ2AGDk0hujQA1JmhGFVjm-gKMBN6o0V1-HwfJyAFTlDBshcrybkq18OjiaGG9cetf3aE77QWUXk2cVt_ZxD8ZirorsV4qxQH-z3Erbis4nH0iaEcJrwRLIovqjotSpSdaAhEslyIjqnQj8MnUcYWJrCIOoVZCXmGrhMnAmrHvReWEibc8ZzX075Ev6-OWGxVvNQ')" }}></div>
            </div>
            {/* Gloss/Reflection Overlay (Subtle iOS touch) */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 dark:opacity-20 pointer-events-none"></div>
        </div>
    );
}
