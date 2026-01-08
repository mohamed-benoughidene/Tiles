import React from 'react';
import { InlineEdit } from '@/components/ui/inline-edit';
import { PLATFORMS, PlatformKey } from '@/lib/social-platforms';
import { cn } from '@/lib/utils';

interface SocialGridTile2x2Props {
    data: any;
    onUpdate: (data: any) => void;
    onEdit: () => void;
}



export function SocialGridTile2x2({ data, onUpdate, onEdit }: SocialGridTile2x2Props) {
    const renderContent = () => {
        const items = data.socials || [];
        const slots = items.slice(0, 4);
        const hasMoreSlots = slots.length < 4;

        // If we have items but less than 4, add an "Add" button
        const displayItems = hasMoreSlots ? [...slots, { id: 'add', isAdd: true }] : slots;

        return (
            <div className="flex-1 grid grid-cols-2 gap-4 place-content-center z-10 w-fit mx-auto">
                {displayItems.map((item: any) => {
                    if (item.isAdd) {
                        return (
                            <div
                                key="add-button"
                                className="flex flex-col items-center justify-center cursor-pointer opacity-50 hover:opacity-100 transition-opacity no-drag"
                                onClick={onEdit}
                            >
                                <div className="size-14 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 flex items-center justify-center text-zinc-300 dark:text-zinc-600 border border-dashed border-zinc-200 dark:border-zinc-700/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300">
                                    <span className="material-symbols-outlined text-[30px]">add</span>
                                </div>
                            </div>
                        );
                    }

                    const platform = item.platform as PlatformKey;
                    const config = PLATFORMS[platform] || {
                        label: 'Link',
                        icon: <span className="material-symbols-outlined">link</span>,
                        color: "bg-zinc-100 dark:bg-zinc-800"
                    };

                    return (
                        <div
                            key={item.id}
                            className="flex flex-col items-center justify-center cursor-pointer"
                            onClick={onEdit}
                        >
                            <div className={cn(
                                "size-14 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-800 dark:text-white transition-all duration-300 shadow-sm ring-1 ring-black/5 dark:ring-white/10",
                                "[&_svg]:size-9", // Force icons to be even larger (36px)
                                config.color
                            )}>
                                {config.icon}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="w-full h-full bg-white dark:bg-[#1f1f22] rounded-[2rem] p-4 flex flex-col shadow-sm border border-zinc-200 dark:border-white/5 relative overflow-hidden group/tile">
            {/* Widget Header */}
            <div className="flex items-center mb-2 z-10 w-full">
                <div className="flex items-center gap-1.5 opacity-80 w-full">
                    <InlineEdit
                        value={data.title}
                        onSave={(val) => onUpdate({ title: val })}
                        className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 w-full truncate"
                        inputClassName="text-[10px] font-semibold uppercase w-full"
                    />
                </div>
            </div>

            {/* Icon Grid (2x2) */}
            {renderContent()}

            {/* Decorative Glow */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-blue-500/10 blur-xl rounded-full opacity-0 group-hover/tile:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
    );
}
