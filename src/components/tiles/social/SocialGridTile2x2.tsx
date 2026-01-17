import React from 'react';
import { InlineEdit } from '@/components/ui/inline-edit';
import { PLATFORMS, PlatformKey } from '@/lib/social-platforms';
import { cn } from '@/lib/utils';

interface SocialGridTile2x2Props {
    data: any;
    onUpdate: (data: any) => void;
    onEdit: () => void;
    readOnly?: boolean;
    layout?: 'grid' | 'list' | 'minimal';
}

export function SocialGridTile2x2({ data, onUpdate, onEdit, readOnly, layout = 'grid' }: SocialGridTile2x2Props) {
    const renderContent = () => {
        const items = data.socials || [];
        const maxItems = layout === 'list' ? 3 : 4;
        const slots = items.slice(0, maxItems);
        const hasMoreSlots = slots.length < maxItems;
        const displayItems = hasMoreSlots && !readOnly ? [...slots, { id: 'add', isAdd: true }] : slots;

        if (layout === 'list') {
            return (
                <div className="flex flex-col gap-1.5 w-full mt-2">
                    {displayItems.map((item: any) => {
                        if (item.isAdd) {
                            return (
                                <div key="add" onClick={onEdit} className="flex items-center gap-2 p-1.5 rounded-lg border border-dashed border-zinc-700/50 hover:bg-zinc-800/50 cursor-pointer opacity-60 hover:opacity-100 transition-all">
                                    <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-xs text-zinc-400">add</span>
                                    </div>
                                    <span className="text-xs font-medium text-zinc-400">Add</span>
                                </div>
                            );
                        }
                        const platform = item.platform as PlatformKey;
                        const config = PLATFORMS[platform] || { label: 'Link', icon: <span className="material-symbols-outlined">link</span>, color: "bg-zinc-800" };

                        return (
                            <div key={item.id} className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-zinc-800/20 border border-white/5 hover:bg-zinc-800/40 transition-colors">
                                <div className={cn("w-6 h-6 rounded flex items-center justify-center text-white scale-75", config.color)}>
                                    {React.cloneElement(config.icon as React.ReactElement<{ className?: string }>, { className: "" })}
                                </div>
                                <span className="text-xs font-medium text-zinc-300 w-full truncate">{config.label}</span>
                            </div>
                        )
                    })}
                </div>
            );
        }

        return (
            <div className={cn(
                "w-full flex-1 min-h-0",
                layout === 'minimal' ? "grid grid-cols-4 gap-1.5 place-items-center Content-center" : "grid grid-cols-2 gap-1.5 content-center"
            )}>
                {displayItems.map((item: any) => {
                    if (item.isAdd) {
                        return (
                            <div
                                key="add-button"
                                className={cn(
                                    "flex flex-col items-center justify-center gap-1 group/icon cursor-pointer opacity-50 hover:opacity-100 transition-opacity no-drag",
                                    layout === 'minimal' ? "size-10" : "w-full h-14"
                                )}
                                onClick={onEdit}
                            >
                                <div className={cn(
                                    "rounded-xl border border-dashed border-zinc-700 hover:border-zinc-500 bg-zinc-800/20 hover:bg-zinc-800/40 transition-all flex items-center justify-center",
                                    layout === 'minimal' ? "w-full h-full rounded-full" : "w-full h-full"
                                )}>
                                    <span className="material-symbols-outlined text-zinc-400 text-xl">add</span>
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
                            className={`group/icon no-drag relative ${readOnly ? '' : 'cursor-pointer'}`}
                            onClick={() => !readOnly && onEdit()}
                        >
                            <div className={cn(
                                "flex items-center justify-center transition-all shadow-sm text-white",
                                layout === 'minimal'
                                    ? "size-10 rounded-xl bg-transparent hover:bg-white/10 ring-0"
                                    : cn("w-full h-14 rounded-xl ring-1 ring-white/5 active:scale-95 flex-col gap-0.5 p-1", config.color)
                            )}>
                                <div className={cn("flex items-center justify-center", layout === 'minimal' ? "[&_svg]:size-6 [&_span]:text-2xl" : "[&_svg]:size-5 [&_span]:text-xl")}>
                                    {config.icon}
                                </div>
                                {layout !== 'minimal' && (
                                    <span className="text-[10px] font-medium text-white/70 truncate w-full text-center px-1">{config.label}</span>
                                )}
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
                        disabled={readOnly}
                        className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 w-full truncate"
                        inputClassName="text-[10px] font-semibold uppercase w-full"
                        placeholder="SOCIALS"
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
