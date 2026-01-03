"use client";

interface LinkTile4x4Props {
    title: string;
}

export function LinkTile4x4({ title }: LinkTile4x4Props) {
    return (
        <div className="h-full w-full bg-zinc-900 dark:bg-zinc-800 rounded-[2.2rem] shadow-sm overflow-hidden flex flex-col group cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-out select-none relative border border-white/10">
            <div className="h-[72%] w-full relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDe_2kix5ujOZv89FO3tNIJz4He-qRn7MxbVqlGIZIsOhMkFHQggGdUHe1zjE5qobu_hxJriLlt77EYBwH-MWlrk12ioNVQKF_atXEMRsrUbIx6t-Xoq77doG4vT_ymc_XyQkTNaJw0RrgLIhbYL_-rWDxrS--epNxpk2zzdRnGsqCVIVopO924FE7ozii4b5kWQ7yM6iEeMnKrdE1Cui-cBV-okYT6aTv2cVWpAKPvzSd1QJ705kUhORhTlaZbl7s3Yp6F8JcmTQ')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/10"></div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-1.5 rounded-full ring-1 ring-white/30 shadow-sm">
                    <div className="w-4 h-4 text-white">
                        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="h-[28%] w-full bg-[#1f1f22] flex flex-col justify-center px-6 py-2 border-t border-white/5 relative">
                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-500 group-hover:text-indigo-500 transition-colors duration-300">
                    <span className="material-symbols-outlined">arrow_forward_ios</span>
                </div>
                <p className="text-zinc-400 text-[13px] font-medium leading-snug tracking-wide uppercase mb-0.5">My Store</p>
                <h3 className="text-white text-[20px] font-bold leading-tight tracking-[-0.02em] line-clamp-1">{title}</h3>
                <p className="text-zinc-500 text-[13px] font-medium leading-normal mt-0.5 line-clamp-1">New arrivals available now.</p>
            </div>
        </div>
    );
}
