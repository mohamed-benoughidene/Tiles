import React from 'react';

export function ProductTile6x4() {
    return (
        <div className="relative w-full h-full bg-white dark:bg-[#27272a] rounded-[2rem] shadow-sm flex flex-col overflow-hidden ring-1 ring-black/5 dark:ring-white/10 transition-transform duration-500 hover:scale-[1.01] cursor-pointer group">
            {/* Header / Top Bar */}
            <div className="absolute top-0 left-0 right-0 p-5 z-20 flex justify-between items-start pointer-events-none">
                <div className="flex items-center gap-2 bg-white/80 dark:bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full ring-1 ring-black/5 dark:ring-white/10 shadow-sm">
                    <span className="material-symbols-outlined text-[14px] text-[#1313ec]">bolt</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">New Drop</span>
                </div>
                {/* Favorite/Wishlist Action */}
                <button className="pointer-events-auto flex items-center justify-center w-8 h-8 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-md hover:bg-white dark:hover:bg-black transition-colors ring-1 ring-black/5 dark:ring-white/10 text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400">
                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                </button>
            </div>

            {/* Hero Image Area (Takes up ~65% of height) */}
            <div className="h-[65%] w-full relative bg-slate-100 dark:bg-slate-800 overflow-hidden">
                {/* Image */}
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXC09ZKtVkemCyvra9ymSXbCFRRn-gMxv-4VFBBXh9_sRsMQvFHO29DvMwjTNr2wwP_T8bjeLSZDoUtCpI9Yfg-OV2Qjjautzug6bo1i_fMGpZm4WsVQ2WpuFEcjtAsP7QwSQFNGXWYX_lNFIfTkl4rz1R-xa1_6g8bgftg-5yINNutjFejl4W8UeabmCYg9H0zEoAVm60g8wgk9s1VpKXkhEUaV4rrKoeQWUv5xa8t6kocsUnku9F_tNP-8rlFlTrFuV0Iw5r8g')" }}></div>
                {/* Gradient Overlay for text readability at bottom of image if needed */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/10 dark:from-[#27272a]/40 to-transparent"></div>
            </div>

            {/* Content Area (Takes up ~35% of height) */}
            <div className="h-[35%] w-full p-5 sm:p-6 flex flex-col justify-between bg-white dark:bg-[#27272a] relative z-10">
                {/* Product Info */}
                <div className="flex justify-between items-start gap-4">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mb-1">
                            Air Stride X1
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium line-clamp-1">
                            Premium comfort. Limited run edition.
                        </p>
                    </div>
                    <div className="text-right shrink-0">
                        <span className="block text-lg sm:text-xl font-bold text-[#1313ec]">$120.00</span>
                    </div>
                </div>
                {/* Actions Row */}
                <div className="flex items-center gap-3 mt-auto">
                    <button className="flex-1 h-10 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-[#1313ec] dark:hover:bg-[#1313ec] hover:text-white dark:hover:text-white rounded-xl font-semibold text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2">
                        <span>Buy Now</span>
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                    <button className="h-10 w-11 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
