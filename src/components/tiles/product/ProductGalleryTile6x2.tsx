import React from 'react';

export function ProductGalleryTile6x2() {
    return (
        <div className="group relative w-full h-full">
            {/* THE WIDGET */}
            <div className="relative h-full w-full bg-[#1c1c1e] text-white overflow-hidden rounded-[22px] border border-white/5 flex flex-col cursor-pointer">
                {/* Content Area: Horizontal Carousel Layout */}
                <div className="flex-1 flex p-3 gap-3">
                    {/* Item 1 */}
                    <div className="flex-1 relative rounded-xl overflow-hidden group/item">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/item:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBnWNvWph2JdTq5R05fGuJa2AyqPhNqREGQzQXIemOYPrgC7SK3GIPpkJ7XcIWj9BLgErExFeII-ZBmpY223ZZU_tq9Pbwol8VX2n_Swwew0qcXJbWH2BjHKJgAJ8oAtOz7tQcP3Keuxy10J7OhuJ3s1B1JPxN6ak49d8nS_XKBIz5s2AVjWUWsOz3Kbxf6MtfdSyWjLfCbisw3lF2X6SQqdMoafZ-xM1LuTgwFhT7pKdrZUgSdgu16iWxy2nQZLiqul1eKO-hz7g')" }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                        <div className="absolute bottom-2 left-3">
                            <p className="text-[10px] font-medium text-white/90 uppercase tracking-wide">New</p>
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className="flex-1 relative rounded-xl overflow-hidden group/item">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/item:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMAl6SeDZdIzRd866gvCLlMmz1Q3aNwOmEwdD8S5PeBp7hKuDFfBXN1VCB9L2Dm4p3PlbXiJvqNuA1hZvRkaRe-Db8d2Lc6MwAXbHK961Qym8s7uce38924Yq8Cvwmk3G_c4R7yHVs3P75sBX_jsWwdmXjS8gGTK43q-Oupb_J8pGi42PRSPZPS8PGMfyPH5Bb3x3HGjgirs8hOSKaaxV62eIuX44zy72Aypi0nLk7zIclbKUL9831fe_1K1CrKxTU3UChJyjS4g')" }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                    </div>
                    {/* Item 3 */}
                    <div className="flex-1 relative rounded-xl overflow-hidden group/item">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/item:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBAPak5A0v-dmC2JKi_I1-Kvt5NwUktxm2eBS5BZUrhMWaEIsK2cryP1diruJOe5WKq6RblzU3cPDr_WSFOAFVp_EB_tvt3XFoY4vASs3VyfyySisL7s0_yN-jkrLvsvXgJ9J2f3KaQqtBILhC7sKCKOMQcGNfsrs0FYDpZLODSAMOUdMhNUs5LyL7To4XqPZT_0lAYqCg6rU_CYgj2jfd6fHF-qIdmRfiJm0RJoxIrjrl4CQ4noNx0q5a0SL6r-Cg83EUpxmJKmg')" }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                        <div className="absolute bottom-0 right-0 p-2">
                            <div className="bg-white/20 backdrop-blur-md rounded-full p-1">
                                <span className="material-symbols-outlined text-[14px] text-white block">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer / Meta */}
                <div className="h-10 px-4 flex items-center justify-between bg-[#2c2c2e]/50 backdrop-blur-sm border-t border-white/5">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px] text-indigo-500">local_mall</span>
                        <span className="text-xs font-semibold text-gray-200">New Arrivals</span>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
