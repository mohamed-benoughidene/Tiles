export function ProfileCard() {
    return (
        <div className="row-span-2 col-span-1 bg-zinc-50 dark:bg-card-dark rounded-xl border border-zinc-100 dark:border-zinc-800 p-4 flex flex-col gap-4 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-br from-primary/20 to-purple-500/20"></div>
            <div className="relative z-10 flex flex-col items-center mt-8 text-center">
                <div
                    className="size-20 rounded-full border-4 border-white dark:border-card-dark bg-cover bg-center shadow-md"
                    style={{
                        backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGM_i86mRFJ_QQwsVuRAD3w2EYmronRZ4tXzH0eTyE1ac21XS15ToAT_wZm78YZUZflmXXXmv5z0dxfRfLxktmBjCoGJ5dFWemqfMuIokqw2W0koWJesbpc_qiBD_7lWQYnY9WdS4WPdy67oXAi0DQLJt8inJ72De30MQIzd1KE0iMZXuvxSFE8JLhjbFC3MIJwiyKVfkkmvvtB-TBWmumFL7SSjWprHrXg5QCJwjM8ZeFYjeE6_mFy0Z60utUzYenRr1NiTsuAA")',
                    }}
                ></div>
                <h3 className="mt-3 text-lg font-bold text-zinc-900 dark:text-white">
                    Sarah Jenkins
                </h3>
                <p className="text-sm text-zinc-500">@sarahcreates</p>
            </div>
            <div className="mt-auto flex flex-col gap-2 relative z-10">
                <div className="h-10 w-full bg-white dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-700/50 flex items-center px-3 gap-3 shadow-sm">
                    <div className="size-6 bg-[#FF0000] rounded flex items-center justify-center text-white text-[10px] font-bold">
                        YT
                    </div>
                    <div className="h-2 w-20 bg-zinc-100 dark:bg-zinc-700 rounded"></div>
                </div>
                <div className="h-10 w-full bg-white dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-700/50 flex items-center px-3 gap-3 shadow-sm">
                    <div className="size-6 bg-[#1DA1F2] rounded flex items-center justify-center text-white text-[10px] font-bold">
                        TW
                    </div>
                    <div className="h-2 w-16 bg-zinc-100 dark:bg-zinc-700 rounded"></div>
                </div>
            </div>
        </div>
    );
}
