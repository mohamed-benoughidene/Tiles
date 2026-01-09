import React from 'react';

export function ProductTile2x2() {
    return (
        <div className="relative w-full h-full bg-[#1C1C1E] overflow-hidden shadow-sm border border-white/10 flex flex-col rounded-[2rem]">
            {/* Background Accent (Subtle Gradient) */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#1313ec]/20 rounded-full blur-[60px] translate-x-12 -translate-y-12 pointer-events-none opacity-60"></div>

            {/* Content Area */}
            <div className="relative z-10 flex flex-col h-full justify-between p-5">
                {/* Header: Icon & Meta */}
                <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-0.5">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Featured</span>
                        <h3 className="text-lg font-bold text-white leading-tight">Espresso</h3>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-[16px]">local_cafe</span>
                    </div>
                </div>

                {/* Hero Image / Visual Focus */}
                <div className="flex-1 flex items-center justify-center py-1">
                    <div className="relative w-24 h-24 rounded-full shadow-lg border-2 border-white/5 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10"></div>
                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBbCdpUwpwZgJ1e3mcnqD-FuvNxGwF2bCKDclB4pd1yX30GMUr5ZTEeC6tK5Jd7QfSzLHWmd8yy4EfTL_k7So4h5UVQISVW4aWNCeusqHchmhqHVb7u_5cMJeOOqohR6tXvH-6OGQojjaIaRao4vYF00rayCJFoTiMdNcHjHghze2lGGzbmFPpITW9L2kPgxNe_pRc4Ao_4H0_bI7j7EjPQH4FB_C_qTYIPxM1nGLsRys9zBi_p1niGTNv-hn6uTXhxFr2ZdGVCg')" }}></div>
                    </div>
                </div>

                {/* Footer: Price & Action */}
                <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-white tracking-tight">$3.50</span>
                    </div>
                    {/* Action Button (Small) */}
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1313ec] text-white shadow-lg shadow-[#1313ec]/30 transition-colors hover:bg-blue-600">
                        <span className="text-[10px] font-medium">Order</span>
                        <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                    </div>
                </div>
            </div>


        </div>
    );
}
