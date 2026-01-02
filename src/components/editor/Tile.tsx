'use client';

import { Tile as TileType } from '@/types/tiles';
import { useDraggable } from '@dnd-kit/core';

interface TileProps {
    tile: TileType;
    isSelected: boolean;
    onSelect: (id: string) => void;
}

export function Tile({ tile, isSelected, onSelect }: TileProps) {
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: tile.id,
        data: tile,
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        zIndex: isDragging ? 50 : undefined,
    } : undefined;

    return (
        <div
            ref={setNodeRef}
            style={{
                ...style,
                gridColumn: `${tile.position.col} / span ${tile.size.width}`,
                gridRow: `${tile.position.row} / span ${tile.size.height}`,
            }}
            className={`
        relative rounded-3xl transition-shadow duration-200 cursor-grab active:cursor-grabbing group
        ${isSelected
                    ? 'ring-4 ring-indigo-500/20 border-2 border-indigo-500 shadow-xl z-20'
                    : 'border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md z-10 bg-white dark:bg-zinc-900'}
        ${isDragging ? 'opacity-50 shadow-2xl' : ''}
      `}
            onClick={(e) => {
                if (!isDragging) {
                    e.stopPropagation();
                    onSelect(tile.id);
                }
            }}
            {...listeners}
            {...attributes}
        >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-400 text-xs font-mono p-2 pointer-events-none">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">{tile.size.name}</div>
                {tile.content?.text && (
                    <div className="mt-2 text-zinc-800 dark:text-zinc-200 font-bold opacity-100">
                        {tile.content.text}
                    </div>
                )}
            </div>
        </div>
    );
}
