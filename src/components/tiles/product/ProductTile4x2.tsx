import React from 'react';

export function ProductTile4x2() {
    return (
        <div className="relative w-full h-full bg-[#27272a] rounded-[24px] shadow-sm ring-1 ring-white/10 flex overflow-hidden transform transition-transform cursor-default select-none group">
            {/* Left: Product Image */}
            <div className="h-full w-[40%] relative bg-white">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBprglI15uEJYQYBdnh53GFxGG_MkRJYGnDfYoBLvDV7r1mMHVPdLAk7x_ls9uuwfuaM2gthHHfVrzjQFvvHWRVUsm-19HNwuDOh21EDbS-SvPSCEJtz7zdTA4QbVMIXivV469uhVi9AcaD39XITt_FgKcW_ZdZrrBtCNODVGVDgZmsC73x-3FaedRMkfTbgGgSVdBnCDXcpjvNVFIlYtIsiH5Us053X4XkP4ws89Qlb280UBP-v_ty7VMsyhrtgJjS54PeOUMtAA')" }}></div>
                {/* Gradient overlay for text contrast if needed, subtle here */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
            </div>

            {/* Right: Content */}
            <div className="flex-1 p-4 flex flex-col justify-between bg-gradient-to-br from-[#27272a] to-[#1f1f22]">
                {/* Header Text */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 mb-0.5">
                        <div className="size-4 rounded bg-[#1313ec] flex items-center justify-center">
                            <span className="material-symbols-outlined text-[10px] text-white">storefront</span>
                        </div>
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">New Arrival</span>
                    </div>
                    <h3 className="text-white text-[15px] font-bold leading-tight line-clamp-2">Signature Blend Coffee</h3>
                    <p className="text-slate-400 text-[11px] font-medium leading-normal line-clamp-1">Ethically sourced, medium roast</p>
                </div>

                {/* Footer: Price & Action */}
                <div className="flex items-center justify-between mt-1">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-500 font-medium">Price</span>
                        <span className="text-white text-base font-bold tracking-tight">$18.00</span>
                    </div>
                    {/* iOS Style Action Button */}
                    <button className="size-8 rounded-full bg-[#3a3a3c] hover:bg-[#4a4a4c] flex items-center justify-center transition-colors group/btn">
                        <span className="material-symbols-outlined text-white text-[16px] group-hover/btn:translate-x-0.5 transition-transform">arrow_forward</span>
                    </button>
                </div>
            </div>

            {/* Micro-border (Simulating device light reflection) */}
            <div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/10 pointer-events-none"></div>
        </div>
    );
}
