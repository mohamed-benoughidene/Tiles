import React from 'react';

interface MapTile2x2Props {
    readOnly?: boolean;
}

export function MapTile2x2({ readOnly }: MapTile2x2Props) {
    return (
        <div className="relative w-full h-full bg-zinc-100 dark:bg-[#1c1c1e] rounded-[1.75rem] shadow-sm border border-zinc-200/50 dark:border-white/10 overflow-hidden group cursor-pointer font-sans">
            {/* Map Background Image - Using a light map for light mode, generic for now */}
            <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600&h=600"
                alt="Map Location"
                className="absolute inset-0 w-full h-full object-cover dark:opacity-80 dark:brightness-75 transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay Gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Apple Maps Logo / Icon (Top Left) */}
            <div className="absolute top-3.5 left-3.5 w-8 h-8 rounded-lg bg-white/90 dark:bg-black/60 backdrop-blur-md flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/17/AppleMaps_logo.svg"
                    alt="Apple Maps"
                    className="w-5 h-5 object-contain"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<span class="material-symbols-outlined text-zinc-900 dark:text-white text-[18px]">map</span>';
                    }}
                />
            </div>

            {/* "Go" / ETA Pill (Top Right) */}
            <div className="absolute top-3.5 right-3.5 px-3 py-1.5 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-[0_2px_8px_rgba(0,180,0,0.3)] backdrop-blur-sm flex flex-col items-center justify-center">
                <p className="text-[10px] font-bold text-white leading-none">12</p>
                <p className="text-[8px] font-medium text-white/90 leading-none mt-0.5">min</p>
            </div>

            {/* Center Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%]">
                <span className="material-symbols-outlined text-red-500 text-[40px] drop-shadow-xl filter">location_on</span>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-base font-bold text-white leading-tight drop-shadow-md">San Francisco</h3>
                <p className="text-[11px] text-zinc-100 font-medium truncate drop-shadow-md opacity-90">420 Market Street</p>
            </div>
        </div>
    );
}
