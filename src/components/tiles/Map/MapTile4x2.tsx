import React from 'react';

interface MapTile4x2Props {
    readOnly?: boolean;
}

export function MapTile4x2({ readOnly }: MapTile4x2Props) {
    return (
        <div className="relative w-full h-full bg-zinc-100 dark:bg-[#1c1c1e] rounded-[1.75rem] shadow-sm border border-zinc-200/50 dark:border-white/10 overflow-hidden group cursor-pointer flex flex-col sm:flex-row font-sans">
            {/* Map Section */}
            <div className="relative flex-1 h-full min-h-0 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800&h=400"
                    alt="Map Location"
                    className="absolute inset-0 w-full h-full object-cover dark:opacity-80 dark:brightness-75 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                {/* Top Left Icon */}
                <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-white/90 dark:bg-black/60 backdrop-blur-md flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-zinc-900 dark:text-white text-[20px]">map</span>
                </div>

                {/* Floating Search/Action Bar */}
                <div className="absolute top-4 left-16 right-4 h-9 rounded-xl bg-white/90 dark:bg-[#1c1c1e]/90 backdrop-blur-md shadow-lg flex items-center px-3 gap-2 border border-black/5 dark:border-white/5">
                    <span className="material-symbols-outlined text-zinc-400 text-[18px]">search</span>
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Search Maps</span>
                </div>

                {/* Pin */}
                <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="material-symbols-outlined text-red-500 text-[42px] drop-shadow-2xl">location_on</span>
                </div>
            </div>

            {/* Side Panel (Navigation/Status) - for that dashboard feel */}
            <div className="w-full sm:w-[120px] h-auto sm:h-full bg-white dark:bg-[#1c1c1e] border-t sm:border-t-0 sm:border-l border-zinc-200/50 dark:border-white/5 flex sm:flex-col items-center sm:items-stretch justify-between sm:justify-start p-3 gap-3 shrink-0 z-10">
                {/* Destination Info */}
                <div className="flex flex-col gap-1">
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Destination</p>
                    <p className="text-sm font-bold text-zinc-900 dark:text-white leading-tight">Home</p>
                    <p className="text-[10px] text-zinc-500">22 min drive</p>
                </div>

                {/* Visual Route Line (Abstract) */}
                <div className="flex-1 w-1 bg-zinc-100 dark:bg-zinc-800 rounded-full mx-auto relative overflow-hidden">
                    <div className="absolute top-0 w-full h-1/2 bg-blue-500 rounded-full"></div>
                </div>

                {/* Go Button */}
                <div className="h-8 rounded-lg bg-green-500 hover:bg-green-600 transition-colors flex items-center justify-center shadow-lg shadow-green-500/20">
                    <span className="text-xs font-bold text-white">GO</span>
                </div>
            </div>
        </div>
    );
}
