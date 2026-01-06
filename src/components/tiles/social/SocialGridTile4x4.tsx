import React from 'react';

export function SocialGridTile4x4() {
    return (
        <div className="w-full h-full bg-[#1c1c1e] rounded-[2rem] p-5 flex flex-col gap-4 shadow-sm border border-white/5 relative overflow-hidden select-none group/tile">
            {/* Header Row */}
            <div className="flex justify-between items-center z-10">
                <div className="flex items-center gap-2.5">
                    <div className="size-8 rounded-full bg-gradient-to-tr from-orange-400 to-pink-600 p-[2px]">
                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden border border-black">
                            {/* Avatar Placeholder */}
                            <span className="material-symbols-outlined text-white text-[16px]">person</span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[15px] font-semibold text-white leading-none tracking-tight">Socials</span>
                        <span className="text-[11px] text-gray-400 mt-0.5 font-medium">@janedoe_design</span>
                    </div>
                </div>
                <div className="size-6 rounded-md bg-[#2c2c2e] flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[16px]">bolt</span>
                </div>
            </div>

            {/* Main Bento Grid */}
            <div className="grid grid-cols-2 grid-rows-2 gap-3 flex-1 z-10">
                {/* Instagram Tile */}
                <div className="bg-[#2c2c2e] rounded-[20px] p-3.5 flex flex-col justify-between hover:bg-[#3a3a3c] active:bg-[#48484a] transition-colors cursor-pointer relative overflow-hidden group/subtile">
                    <div className="absolute top-0 right-0 p-3 opacity-0 group-hover/subtile:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-[16px] text-gray-400">arrow_outward</span>
                    </div>
                    <div className="size-8 rounded-full bg-gradient-to-bl from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center mb-2">
                        <span className="material-symbols-outlined text-white text-[16px]">photo_camera</span>
                    </div>
                    <div>
                        <div className="text-xl font-bold text-white tracking-tight">12.5k</div>
                        <div className="text-[10px] font-medium text-gray-400">Followers</div>
                    </div>
                </div>

                {/* Twitter/X Tile */}
                <div className="bg-[#2c2c2e] rounded-[20px] p-3.5 flex flex-col justify-between hover:bg-[#3a3a3c] active:bg-[#48484a] transition-colors cursor-pointer relative overflow-hidden group/subtile">
                    <div className="absolute top-0 right-0 p-3 opacity-0 group-hover/subtile:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-[16px] text-gray-400">arrow_outward</span>
                    </div>
                    <div className="size-8 rounded-full bg-black flex items-center justify-center mb-2 border border-white/10">
                        <svg aria-hidden="true" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218Zm-1.6824 1.9563L11.3032 11.5833L5.31388 3.01362H7.70014L12.6199 10.052L13.3195 11.053L19.6465 20.1064H17.2602L11.9999 12.5781Z"></path></svg>
                    </div>
                    <div>
                        <div className="text-xs text-gray-300 leading-snug line-clamp-2 font-medium">"Just dropped our new roadmap!"</div>
                        <div className="text-[10px] text-gray-500 mt-1.5 font-medium">2h ago</div>
                    </div>
                </div>

                {/* LinkedIn Tile */}
                <div className="bg-[#2c2c2e] rounded-[20px] p-3.5 flex flex-col justify-between hover:bg-[#3a3a3c] active:bg-[#48484a] transition-colors cursor-pointer relative overflow-hidden group/subtile">
                    <div className="absolute top-0 right-0 p-3 opacity-0 group-hover/subtile:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-[16px] text-gray-400">arrow_outward</span>
                    </div>
                    <div className="flex justify-between items-start mb-2">
                        <div className="size-8 rounded-full bg-[#0077b5] flex items-center justify-center">
                            <svg aria-hidden="true" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill-rule="evenodd"></path></svg>
                        </div>
                        <div className="bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 px-1.5 py-0.5 rounded text-[10px] font-bold">
                            +3 New
                        </div>
                    </div>
                    <div>
                        <div className="text-xl font-bold text-white tracking-tight">500+</div>
                        <div className="text-[10px] font-medium text-gray-400">Connections</div>
                    </div>
                </div>

                {/* TikTok Tile */}
                <div className="bg-[#2c2c2e] rounded-[20px] p-3.5 flex flex-col justify-between hover:bg-[#3a3a3c] active:bg-[#48484a] transition-colors cursor-pointer relative overflow-hidden group/subtile">
                    <div className="absolute top-0 right-0 p-3 opacity-0 group-hover/subtile:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-[16px] text-gray-400">arrow_outward</span>
                    </div>
                    <div className="size-8 rounded-full bg-black flex items-center justify-center mb-2 border border-white/10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#25F4EE]/20 to-[#FE2C55]/20 mix-blend-screen"></div>
                        <svg aria-hidden="true" className="w-4 h-4 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path></svg>
                    </div>
                    <div>
                        <div className="text-xl font-bold text-white tracking-tight">1.2M</div>
                        <div className="text-[10px] font-medium text-gray-400">Likes</div>
                    </div>
                </div>

            </div>

            {/* Reflection/Glass Effect Overlay */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-50"></div>
        </div>
    );
}
