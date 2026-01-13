import React from 'react';
import { TileSizeName, TileSize } from '@/types/tiles';
import { SocialGridTile2x2 } from './social/SocialGridTile2x2';
import { SocialGridTile6x2 } from './social/SocialGridTile6x2';
import { SocialSetupModal } from '@/components/modals/SocialSetupModal';
import { SocialProfile } from '@/lib/social-platforms';
import { TileToolbar } from '@/components/editor/TileToolbar';

interface SocialGridTileProps {
    title?: string;
    size: TileSizeName;
    onResize?: (size: TileSizeName) => void;
    onRemove?: () => void;
    data?: any;
}

const ALLOWED_SIZES: TileSizeName[] = ['2x2', '6x2'];

const DEFAULT_SOCIALS: SocialProfile[] = [
    { id: '1', platform: 'instagram', url: '' },
    { id: '2', platform: 'tiktok', url: '' },
    { id: '3', platform: 'twitter', url: '' },
    { id: '4', platform: 'youtube', url: '' },
];

export function SocialGridTile({ title: initialTitle, size, onResize, onRemove, data }: SocialGridTileProps) {
    const [content, setContent] = React.useState({
        title: data?.title || initialTitle || "Socials",
        socials: data?.socials || DEFAULT_SOCIALS,
    });

    const [isSetupModalOpen, setIsSetupModalOpen] = React.useState(false);

    const handleUpdate = (updates: Partial<typeof content>) => {
        setContent(prev => ({ ...prev, ...updates }));
    };

    const handleSaveSocials = (socials: SocialProfile[]) => {
        handleUpdate({ socials });
        setIsSetupModalOpen(false);
    };

    const renderContent = () => {
        const props = {
            data: content,
            onUpdate: handleUpdate,
            onEdit: () => setIsSetupModalOpen(true)
        };

        switch (size) {
            case '2x2':
                return <SocialGridTile2x2 {...props} />;
            case '6x2':
                return <SocialGridTile6x2 {...props} />;
            default:
                return <SocialGridTile2x2 {...props} />;
        }
    };

    return (
        <div className="group relative h-full w-full cursor-pointer">
            {renderContent()}

            {/* Action Buttons (Top Left) */}
            <div className="absolute -top-3 -left-3 flex gap-2 z-50 opacity-0 group-hover:opacity-100 transition-opacity scale-100 active:scale-95 duration-200">
                {/* Delete Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onRemove?.();
                    }}
                    onPointerDown={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    className="w-9 h-9 rounded-lg bg-white dark:bg-zinc-950 text-zinc-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-center"
                    title="Delete Tile"
                >
                    <span className="material-symbols-outlined text-[20px]">delete</span>
                </button>

                {/* Social Settings Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsSetupModalOpen(true);
                    }}
                    onPointerDown={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    className="w-9 h-9 rounded-lg bg-white dark:bg-zinc-950 text-zinc-400 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-center"
                    title="Manage Socials"
                >
                    <span className="material-symbols-outlined text-[20px]">link</span>
                </button>
            </div>

            {/* TOOLBAR */}
            <div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                onPointerDown={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
            >
                <TileToolbar
                    currentSize={size}
                    onResize={onResize}
                    allowedSizes={ALLOWED_SIZES}
                />
            </div>

            {/* Social Setup Modal */}
            <SocialSetupModal
                isOpen={isSetupModalOpen}
                onClose={() => setIsSetupModalOpen(false)}
                initialSocials={content.socials}
                onSave={handleSaveSocials}
            />
        </div>
    );
}
