import React from 'react';

export function SocialGridTile2x2() {
    return (
        <div className="w-full h-full bg-white dark:bg-[#1f1f22] rounded-[2rem] p-4 flex flex-col shadow-sm border border-zinc-200 dark:border-white/5 relative overflow-hidden group/tile">
            {/* Widget Header */}
            <div className="flex items-center justify-between mb-2 z-10">
                <div className="flex items-center gap-1.5 opacity-80">
                    <div className="size-1.5 rounded-full bg-green-500"></div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Socials</span>
                </div>
                <div className="size-6 rounded-full bg-zinc-100 dark:bg-white/5 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[14px] text-zinc-400 dark:text-zinc-500">more_horiz</span>
                </div>
            </div>

            {/* Icon Grid (2x2) */}
            <div className="flex-1 grid grid-cols-2 gap-2 place-content-center z-10">
                {/* Icon 1: Insta */}
                <div className="flex flex-col items-center justify-center">
                    <div className="size-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-800 dark:text-white group-hover/tile:bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] group-hover/tile:text-white transition-colors duration-300 shadow-sm ring-1 ring-black/5 dark:ring-white/10">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                    </div>
                </div>
                {/* Icon 2: TikTok */}
                <div className="flex flex-col items-center justify-center">
                    <div className="size-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-800 dark:text-white group-hover/tile:bg-black group-hover/tile:text-white transition-colors duration-300 shadow-sm ring-1 ring-black/5 dark:ring-white/10">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.55-1.1-.06-.06-.06-.06-.06-.06v6.11c0 .48 0 .97-.07 1.45-.44 3.09-2.9 5.39-6 5.54-3.41.17-6.27-2.31-6.57-5.69-.32-3.56 2.51-6.73 6.07-6.77.29 0 .57.01.86.04v4.1c-1.63.13-2.88 1.6-2.73 3.23.16 1.71 1.8 2.89 3.49 2.5 1.34-.31 2.29-1.5 2.27-2.88V6.99c0-1.61.02-3.23.01-4.84-.01-.72-.01-1.43-.01-2.15l-.41.02z"></path></svg>
                    </div>
                </div>
                {/* Icon 3: X */}
                <div className="flex flex-col items-center justify-center">
                    <div className="size-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-800 dark:text-white group-hover/tile:bg-black group-hover/tile:dark:bg-white group-hover/tile:text-white group-hover/tile:dark:text-black transition-colors duration-300 shadow-sm ring-1 ring-black/5 dark:ring-white/10">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                    </div>
                </div>
                {/* Icon 4: YT */}
                <div className="flex flex-col items-center justify-center">
                    <div className="size-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-800 dark:text-white group-hover/tile:bg-[#FF0000] group-hover/tile:text-white transition-colors duration-300 shadow-sm ring-1 ring-black/5 dark:ring-white/10">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
                    </div>
                </div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-blue-500/10 blur-xl rounded-full opacity-0 group-hover/tile:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
    );
}
