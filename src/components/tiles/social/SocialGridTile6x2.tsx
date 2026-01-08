import React from 'react';
import { InlineEdit } from '@/components/ui/inline-edit';
import { PLATFORMS, PlatformKey } from '@/lib/social-platforms';
import { cn } from '@/lib/utils';

interface SocialGridTile6x2Props {
    data: any;
    onUpdate: (data: any) => void;
    onEdit: () => void;
}



export function SocialGridTile6x2({ data, onUpdate, onEdit }: SocialGridTile6x2Props) {
    const renderContent = () => {
        const items = data.socials || [];
        const slots = items.slice(0, 5); // Max 5 items for 6x2 row
        const hasMoreSlots = slots.length < 5;

        // If we have items but less than 5, add an "Add" button
        const displayItems = hasMoreSlots ? [...slots, { id: 'add', isAdd: true }] : slots;

        return (
            <div className="flex items-center justify-between gap-2 mt-auto z-10 px-2 w-full">
                {displayItems.map((item: any) => {
                    if (item.isAdd) {
                        return (
                            <div
                                key="add-button"
                                className="flex flex-col items-center gap-1 group/icon cursor-pointer opacity-50 hover:opacity-100 transition-opacity no-drag"
                                onClick={onEdit}
                            >
                                <div className="w-12 h-12 rounded-full bg-[#2C2C2E] flex items-center justify-center border border-dashed border-white/20 hover:bg-[#3A3A3C] hover:border-white/30 transition-all duration-300">
                                    <span className="material-symbols-outlined text-[24px] text-zinc-400">add</span>
                                </div>
                            </div>
                        );
                    }

                    const platform = item.platform as PlatformKey;
                    const config = PLATFORMS[platform] || {
                        label: 'Link',
                        icon: <span className="material-symbols-outlined text-white">link</span>,
                        color: "bg-[#2C2C2E] hover:bg-[#3A3A3C]"
                    };

                    return (
                        <div
                            key={item.id}
                            className="flex flex-col items-center gap-1 group/icon cursor-pointer no-drag"
                            onClick={onEdit}
                        >
                            <div className={cn(
                                "w-12 h-12 rounded-full flex items-center justify-center active:scale-95 transition-all shadow-sm bg-[#2C2C2E] ring-1 ring-white/5",
                                "transition-colors text-white",
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
        <div className="w-full h-full bg-[#1C1C1E] rounded-[2rem] p-5 flex flex-col justify-between shadow-sm border border-white/5 relative overflow-hidden group/tile select-none">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

            {/* Widget Header */}
            <div className="flex items-start z-10 w-full">
                <div className="flex flex-col gap-0.5 w-full">
                    <InlineEdit
                        value={data.title}
                        onSave={(val) => onUpdate({ title: val })}
                        className="text-white text-lg font-semibold tracking-tight leading-tight w-full truncate"
                        inputClassName="text-lg font-semibold text-white bg-transparent w-full"
                    />

                </div>
            </div>

            {/* Widget Content: Social Row */}
            {renderContent()}
        </div>
    );
}
