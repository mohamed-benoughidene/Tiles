import React, { useState, useMemo } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { icons } from 'lucide-react';
import { cn } from "@/lib/utils";

interface IconPickerModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (iconName: string) => void;
}

const COMMON_FOOD_ICONS = [
    'UtensilsCrossed', 'Coffee', 'Pizza', 'Beer', 'Wine',
    'Sandwich', 'Soup', 'Cookie', 'Cake', 'IceCream',
    'Candy', 'Croissant', 'CupSoda', 'Donut', 'Egg',
    'Fish', 'Ham', 'Martini', 'Milk', 'Nut',
    'Popcorn', 'Salad', 'Sausage', 'Utensils', 'Wheat'
];

export function IconPickerModal({ isOpen, onClose, onSelect }: IconPickerModalProps) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredIcons = useMemo(() => {
        if (!searchQuery) return COMMON_FOOD_ICONS;

        const query = searchQuery.toLowerCase();
        return Object.keys(icons).filter(name =>
            name.toLowerCase().includes(query)
        ).slice(0, 50); // Limit results for performance
    }, [searchQuery]);

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-[480px] w-full p-0 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-3xl bg-white dark:bg-zinc-950 overflow-hidden flex flex-col [&>button]:hidden h-[400px]">
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 z-50 w-9 h-9 flex items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                    <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
                <DialogHeader className="p-6 pb-2 border-b border-zinc-100 dark:border-zinc-800/50 shrink-0">
                    <DialogTitle className="text-xl font-bold text-zinc-900 dark:text-white">
                        Select Icon
                    </DialogTitle>
                    <Input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search icons..."
                        className="mt-2 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400"
                        autoFocus
                    />
                </DialogHeader>

                <div className="flex-1 overflow-y-auto p-6 pt-4">
                    <div className="grid grid-cols-5 gap-3">
                        {filteredIcons.map((iconName) => {
                            const Icon = icons[iconName as keyof typeof icons] as React.ElementType;
                            if (!Icon) return null;

                            return (
                                <button
                                    key={iconName}
                                    onClick={() => {
                                        onSelect(iconName);
                                        onClose();
                                    }}
                                    className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 transition-all group"
                                    title={iconName}
                                >
                                    <Icon className="w-6 h-6 text-zinc-600 dark:text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                                </button>
                            );
                        })}
                    </div>
                    {filteredIcons.length === 0 && (
                        <div className="text-center text-zinc-500 text-sm py-8">
                            No icons found
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
