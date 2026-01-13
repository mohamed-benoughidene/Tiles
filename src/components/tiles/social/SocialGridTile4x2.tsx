import React from 'react';
import { InlineEdit } from '@/components/ui/inline-edit';
import { PLATFORMS, PlatformKey } from '@/lib/social-platforms';
import { cn } from '@/lib/utils';

interface SocialGridTile4x2Props {
    data: any;
    onUpdate: (data: any) => void;
    onEdit: () => void;
    readOnly?: boolean;
    layout?: 'grid' | 'list' | 'minimal';
}

export function SocialGridTile4x2({ data, onUpdate, onEdit, readOnly, layout = 'grid' }: SocialGridTile4x2Props) {
    const renderContent = () => {
        const items = data.socials || [];
        const slots = items.slice(0, 5);
        const hasMoreSlots = slots.length < 5;
        const displayItems = hasMoreSlots && !readOnly ? [...slots, { id: 'add', isAdd: true }] : slots;

        if (layout === 'list') {
            return (
                <div className="flex flex-col gap-2 w-full mt-2 overflow-y-auto no-scrollbar mask-gradient">
                    {displayItems.map((item: any) => {
                        if (item.isAdd) {
                            return (
                                <div key="add" onClick={onEdit} className="flex items-center gap-3 p-2 rounded-xl border border-dashed border-zinc-700/50 hover:bg-zinc-800/50 cursor-pointer opacity-60 hover:opacity-100 transition-all">
                                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-sm text-zinc-400">add</span>
                                    </div>
                                    <span className="text-sm font-medium text-zinc-400">Add Social</span>
                                </div>
                            );
                        }
                        const platform = item.platform as PlatformKey;
                        const config = PLATFORMS[platform] || { label: 'Link', icon: <span className="material-symbols-outlined">link</span>, color: "bg-zinc-800" };

                        return (
                            <div key={item.id} className="flex items-center gap-3 p-2 rounded-xl bg-zinc-800/20 border border-white/5 hover:bg-zinc-800/40 transition-colors">
                                <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center text-white", config.color)}>
                                    {React.cloneElement(config.icon as React.ReactElement<{ className?: string }>, { className: "text-base" })}
                                </div>
                                <span className="text-sm font-medium text-100">{config.label}</span>
                                <span className="material-symbols-outlined text-zinc-600 text-sm ml-auto">arrow_outward</span>
                            </div>
                        )
                    })}
                </div>
            );
        }

        // Minimal & Grid share a row layout, but Minimal is cleaner
        return (
            <div className={`flex items-center ${layout === 'minimal' ? 'justify-start gap-4' : 'justify-between gap-1.5'} mt-auto z-10 px-1 w-full`}>
                {displayItems.map((item: any) => {
                    if (item.isAdd) {
                        return (
                            <div
                                key="add-button"
                                className="flex flex-col items-center gap-1 group/icon cursor-pointer opacity-50 hover:opacity-100 transition-opacity no-drag"
                                onClick={onEdit}
                            >
                                <div className={cn(
                                    "rounded-full flex items-center justify-center border border-dashed transition-all duration-300",
                                    layout === 'minimal' ? "w-10 h-10 bg-transparent border-zinc-600 hover:border-zinc-400" : "w-11 h-11 bg-[#2C2C2E] border-white/20 hover:bg-[#3A3A3C] hover:border-white/30"
                                )}>
                                    <span className="material-symbols-outlined text-[20px] text-zinc-400">add</span>
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
                            className={`flex flex-col items-center gap-1 group/icon no-drag ${readOnly ? '' : 'cursor-pointer'}`}
                            onClick={() => !readOnly && onEdit()}
                        >
                            <div className={cn(
                                "flex items-center justify-center transition-all shadow-sm text-white",
                                layout === 'minimal'
                                    ? "w-10 h-10 rounded-xl bg-transparent hover:bg-white/10 ring-0"
                                    : cn("w-11 h-11 rounded-full ring-1 ring-white/5 active:scale-95", config.color)
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
                        disabled={readOnly}
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
