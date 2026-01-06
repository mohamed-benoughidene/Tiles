import React from 'react';

export function SocialGridTile6x2() {
    return (
        <div className="w-full h-full bg-[#1C1C1E] rounded-[2rem] p-5 flex flex-col justify-between shadow-sm border border-white/5 relative overflow-hidden group/tile select-none">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

            {/* Widget Header */}
            <div className="flex justify-between items-start z-10">
                <div className="flex flex-col gap-0.5">
                    <h3 className="text-white text-lg font-semibold tracking-tight leading-tight">Connect With Us</h3>
                    <p className="text-zinc-400 text-[11px] font-medium uppercase tracking-wider">Socials</p>
                </div>
                <div className="bg-indigo-500/10 rounded-full p-1.5 flex items-center justify-center">
                    <span className="material-symbols-outlined text-indigo-500 text-[20px]">link</span>
                </div>
            </div>

            {/* Widget Content: Social Row (Spread out for 6x2 width) */}
            <div className="flex items-center justify-between gap-2 mt-auto z-10 px-2">

                {/* Instagram */}
                <div className="flex flex-col items-center gap-1 group/icon cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-[#2C2C2E] flex items-center justify-center hover:bg-[#3A3A3C] active:scale-95 transition-all ring-1 ring-white/5 shadow-sm">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                    </div>
                </div>

                {/* TikTok */}
                <div className="flex flex-col items-center gap-1 group/icon cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-[#2C2C2E] flex items-center justify-center hover:bg-[#3A3A3C] active:scale-95 transition-all ring-1 ring-white/5 shadow-sm">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.55-1.1-.06-.06-.06-.06-.06-.06v6.11c0 .48 0 .97-.07 1.45-.44 3.09-2.9 5.39-6 5.54-3.41.17-6.27-2.31-6.57-5.69-.32-3.56 2.51-6.73 6.07-6.77.29 0 .57.01.86.04v4.1c-1.63.13-2.88 1.6-2.73 3.23.16 1.71 1.8 2.89 3.49 2.5 1.34-.31 2.29-1.5 2.27-2.88V6.99c0-1.61.02-3.23.01-4.84-.01-.72-.01-1.43-.01-2.15l-.41.02z"></path></svg>
                    </div>
                </div>

                {/* X */}
                <div className="flex flex-col items-center gap-1 group/icon cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-[#2C2C2E] flex items-center justify-center hover:bg-[#3A3A3C] active:scale-95 transition-all ring-1 ring-white/5 shadow-sm">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                    </div>
                </div>

                {/* YouTube */}
                <div className="flex flex-col items-center gap-1 group/icon cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-[#2C2C2E] flex items-center justify-center hover:bg-[#3A3A3C] active:scale-95 transition-all ring-1 ring-white/5 shadow-sm">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
                    </div>
                </div>

                {/* LinkedIn */}
                <div className="flex flex-col items-center gap-1 group/icon cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-[#2C2C2E] flex items-center justify-center hover:bg-[#3A3A3C] active:scale-95 transition-all ring-1 ring-white/5 shadow-sm">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
