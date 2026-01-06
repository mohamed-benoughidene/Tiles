import React from 'react';

export function ProductTile4x4() {
    return (
        <div className="relative w-full h-full flex flex-col group transition-transform duration-500 hover:scale-[1.02] cursor-pointer">
            <div className="absolute inset-0 bg-[#1c1c1e] dark:bg-zinc-900 rounded-[2.5rem] shadow-sm overflow-hidden ring-1 ring-white/10 flex flex-col">
                <div className="h-[48%] w-full relative">
                    <div className="absolute top-4 left-4 z-20">
                        <span className="bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/10 tracking-wide uppercase">
                            Featured
                        </span>
                    </div>
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCt_kT59BiZoR0ElONBN6P8134pZuzWiUkgz4wiL3aoq_CezXSVEUanso5lpV0M85GpyQisYb24w4gM6uac8oikq5HTMlqgwx6clVafiqNmScjuuw7bTfcCZLxp99lCZQQBETh2LtaV6k1kPPWGfaNQ5Q-dkHakXYDOG-aolob8dwKLnTfTTm6TjnaxTNJzgL9_wYnI2hR4yMq196bUvPfdr8GodW0i78jtMD1J0X1if9Dj84t95Npkoc852L0KQH7CZIK7gcxW4w')" }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1e] via-transparent to-transparent opacity-80"></div>
                </div>
                <div className="h-[52%] w-full p-5 flex flex-col bg-[#1c1c1e] dark:bg-zinc-900 relative">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <div className="flex-1 flex flex-col z-10">
                        <div className="flex justify-between items-start gap-2">
                            <h3 className="text-white text-lg font-bold leading-tight tracking-tight line-clamp-2">
                                Handcrafted Ceramic Mug
                            </h3>
                        </div>
                        <div className="flex items-center gap-1.5 mt-1.5">
                            <div className="flex text-yellow-400 text-xs">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <span key={i} className="material-symbols-outlined text-[14px] fill-current">star</span>
                                ))}
                            </div>
                            <span className="text-zinc-500 text-[10px] sm:text-xs font-medium">(128)</span>
                        </div>
                        <p className="text-zinc-400 text-xs sm:text-[13px] leading-snug line-clamp-2 mt-2 pr-2">
                            Kiln-fired with a speckled glaze finish. Limited seasonal stock.
                        </p>
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-2 z-10">
                        <div className="flex flex-col">
                            <span className="text-zinc-500 text-[10px] uppercase tracking-wider font-semibold">Price</span>
                            <span className="text-white text-lg sm:text-xl font-bold">$32.00</span>
                        </div>
                        <button className="bg-[#1313ec] hover:bg-[#0c0cb8] active:scale-95 transition-all text-white h-9 px-4 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg shadow-[#1313ec]/20 shrink-0">
                            <span>Add to Bag</span>
                            <span className="material-symbols-outlined text-[16px]">shopping_bag</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
