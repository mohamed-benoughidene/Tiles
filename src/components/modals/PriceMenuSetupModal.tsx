"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PriceMenuData, PriceMenuItem } from "@/types/tiles";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { icons } from "lucide-react";

interface PriceMenuSetupModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialData: PriceMenuData;
    onSave: (data: PriceMenuData) => void;
}

const Label = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <label className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)}>
        {children}
    </label>
);

export function PriceMenuSetupModal({ isOpen, onClose, initialData, onSave }: PriceMenuSetupModalProps) {
    const [data, setData] = useState<PriceMenuData>(initialData);
    const [activeTab, setActiveTab] = useState("categories");
    const [editingItem, setEditingItem] = useState<PriceMenuItem | null>(null);

    // Inline adding in modal
    const [addingToCategory, setAddingToCategory] = useState<string | null>(null);
    const [newItemName, setNewItemName] = useState("");
    const [newItemPrice, setNewItemPrice] = useState("");

    useEffect(() => {
        setData(initialData);
    }, [initialData, isOpen]);

    const handleSave = () => {
        onSave({
            ...data
        });
        onClose();
    };

    const addCategory = () => {
        setData((prev) => ({
            ...prev,
            categories: [...prev.categories, "New Category"]
        }));
    };

    const updateCategory = (index: number, value: string) => {
        const newCategories = [...data.categories];
        const oldCategory = newCategories[index];
        newCategories[index] = value;

        // Update items that were in this category
        const newItems = data.items.map((item: PriceMenuItem) =>
            item.category === oldCategory ? { ...item, category: value } : item
        );

        setData((prev: PriceMenuData) => ({
            ...prev,
            categories: newCategories,
            items: newItems
        }));
    };

    const removeCategory = (index: number) => {
        const categoryToRemove = data.categories[index];
        setData((prev: PriceMenuData) => ({
            ...prev,
            categories: prev.categories.filter((_: string, i: number) => i !== index),
            items: prev.items.filter((item: PriceMenuItem) => item.category !== categoryToRemove)
        }));
    };

    const addItem = () => {
        const newItem: PriceMenuItem = {
            id: crypto.randomUUID(),
            name: "",
            price: "",
            category: data.categories[0] || "",
            description: ""
        };
        setEditingItem(newItem);
    };

    const saveItem = (item: PriceMenuItem) => {
        setData((prev: PriceMenuData) => {
            const exists = prev.items.find((i: PriceMenuItem) => i.id === item.id);
            if (exists) {
                return {
                    ...prev,
                    items: prev.items.map((i: PriceMenuItem) => i.id === item.id ? item : i)
                };
            }
            return {
                ...prev,
                items: [...prev.items, item]
            };
        });
        setEditingItem(null);
    };

    const deleteItem = (id: string) => {
        setData((prev: PriceMenuData) => ({
            ...prev,
            items: prev.items.filter((i: PriceMenuItem) => i.id !== id)
        }));
    };

    const updateItemField = (id: string, field: keyof PriceMenuItem, value: string) => {
        setData((prev: PriceMenuData) => ({
            ...prev,
            items: prev.items.map((i: PriceMenuItem) =>
                i.id === id ? { ...i, [field]: value } : i
            )
        }));
    };

    const handleQuickAdd = (category: string) => {
        if (!newItemName) return;

        setData((prev) => ({
            ...prev,
            items: [...prev.items, {
                id: crypto.randomUUID(),
                name: newItemName,
                price: newItemPrice,
                category: category,
                description: ""
            }]
        }));

        setNewItemName("");
        setNewItemPrice("");
        // Keep adding mode open for rapid entry, or close if preferred. Keeping open is better for flow.
        // If user wants to stop, they click away or hit escape (handled by UI logic ideally, but here just button cancel)
    };

    const cancelQuickAdd = () => {
        setAddingToCategory(null);
        setNewItemName("");
        setNewItemPrice("");
    };

    if (editingItem) {
        return (
            <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
                <DialogContent className="sm:max-w-[480px] w-full p-0 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-3xl bg-white dark:bg-zinc-950 overflow-hidden flex flex-col gap-0 [&>button]:hidden">
                    <button
                        onClick={() => setEditingItem(null)}
                        className="absolute top-5 right-5 z-50 w-9 h-9 flex items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                        <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>
                    <DialogHeader className="p-6 pb-4 border-b border-zinc-100 dark:border-zinc-800/50">
                        <DialogTitle className="text-xl font-bold text-zinc-900 dark:text-white">
                            {data.items.find(i => i.id === editingItem.id) ? "Edit Item" : "New Item"}
                        </DialogTitle>
                    </DialogHeader>
                    <div className="p-6 space-y-4">
                        <div className="space-y-2">
                            <Label className="text-zinc-700 dark:text-zinc-300">Name</Label>
                            <Input
                                value={editingItem.name}
                                onChange={e => setEditingItem({ ...editingItem, name: e.target.value })}
                                placeholder="e.g. Latte"
                                className="bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-zinc-700 dark:text-zinc-300">Price</Label>
                            <Input
                                value={editingItem.price}
                                onChange={e => setEditingItem({ ...editingItem, price: e.target.value })}
                                placeholder="e.g. $4.50"
                                className="bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-zinc-700 dark:text-zinc-300">Category</Label>
                            <select
                                className="flex h-10 w-full rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-900 dark:text-white ring-offset-background placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                value={editingItem.category}
                                onChange={e => setEditingItem({ ...editingItem, category: e.target.value })}
                            >
                                {data.categories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                        <div className="space-y-2">
                            <Label className="text-zinc-700 dark:text-zinc-300">Description (Optional)</Label>
                            <Input
                                value={editingItem.description || ""}
                                onChange={e => setEditingItem({ ...editingItem, description: e.target.value })}
                                placeholder="Short description"
                                className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-zinc-700 dark:text-zinc-300">Image URL (Optional)</Label>
                            <Input
                                value={editingItem.image || ""}
                                onChange={e => setEditingItem({ ...editingItem, image: e.target.value })}
                                placeholder="https://..."
                                className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400"
                            />
                        </div>
                    </div>
                    <div className="p-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-end gap-3 bg-zinc-50/50 dark:bg-zinc-900/50 shrink-0">
                        <Button
                            variant="ghost"
                            onClick={() => setEditingItem(null)}
                            className="px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors h-auto"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={() => saveItem(editingItem)}
                            className="px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm shadow-indigo-200 dark:shadow-none transition-all hover:translate-y-px active:translate-y-0 h-auto min-w-[100px]"
                        >
                            Save Item
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-[600px] w-full max-h-[85vh] p-0 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-3xl bg-white dark:bg-zinc-950 overflow-hidden flex flex-col [&>button]:hidden">
                <div className="flex flex-col h-full min-h-0 relative">
                    {/* Custom Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 z-50 w-9 h-9 flex items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                        <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>

                    <DialogHeader className="p-6 pb-2 border-b border-zinc-100 dark:border-zinc-800/50">
                        <DialogTitle className="text-xl font-bold text-zinc-900 dark:text-white">
                            Edit Menu
                        </DialogTitle>
                    </DialogHeader>

                    <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col min-h-0">
                        <div className="px-6 pt-2 pb-0">
                            <TabsList className="w-full justify-start bg-transparent border-b border-zinc-200 dark:border-zinc-800 rounded-none h-auto p-0 gap-6">
                                <TabsTrigger
                                    value="categories"
                                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-indigo-500 rounded-none px-0 py-3 text-zinc-600 dark:text-zinc-400 data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400"
                                >
                                    Categories
                                </TabsTrigger>
                                <TabsTrigger
                                    value="items"
                                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-indigo-500 rounded-none px-0 py-3 text-zinc-600 dark:text-zinc-400 data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400"
                                >
                                    Items ({data.items.length})
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6">

                            <TabsContent value="categories" className="mt-0 space-y-4">
                                <div className="flex flex-col gap-2">
                                    {data.categories.map((cat, idx) => (
                                        <div key={idx} className="flex gap-2">
                                            <Input
                                                value={cat}
                                                onChange={e => updateCategory(idx, e.target.value)}
                                                className="bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-600 text-zinc-900 dark:text-white placeholder:text-zinc-400"
                                            />
                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                onClick={() => removeCategory(idx)}
                                                className="text-zinc-400 hover:text-rose-500"
                                            >
                                                <span className="material-symbols-outlined">delete</span>
                                            </Button>
                                        </div>
                                    ))}
                                    <Button onClick={addCategory} variant="outline" className="w-full border-dashed border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                        <span className="material-symbols-outlined mr-2 text-sm">add</span>
                                        Add Category
                                    </Button>
                                </div>
                            </TabsContent>

                            <TabsContent value="items" className="mt-0 space-y-4">
                                <div className="flex flex-col gap-2">
                                    {data.categories.map(cat => {
                                        const items = data.items.filter(i => i.category === cat);

                                        // Always show category even if empty so we can add items
                                        return (
                                            <div key={cat} className="space-y-2 mb-4">
                                                <h4 className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">{cat}</h4>
                                                {items.map(item => (
                                                    <div key={item.id} className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-100 dark:border-zinc-700/50">
                                                        <div className="flex flex-col gap-2 w-full mr-3">
                                                            <Input
                                                                value={item.name}
                                                                onChange={(e) => updateItemField(item.id, 'name', e.target.value)}
                                                                placeholder="Item Name"
                                                                className="h-8 text-sm bg-transparent border-0 border-b border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 focus-visible:border-indigo-500 dark:focus-visible:border-indigo-500 rounded-none px-0 shadow-none focus-visible:ring-0 transition-colors font-medium text-zinc-900 dark:text-white"
                                                            />
                                                            <Input
                                                                value={item.price}
                                                                onChange={(e) => updateItemField(item.id, 'price', e.target.value)}
                                                                placeholder="Price"
                                                                className="h-6 text-xs bg-transparent border-0 border-b border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 focus-visible:border-indigo-500 dark:focus-visible:border-indigo-500 rounded-none px-0 shadow-none focus-visible:ring-0 transition-colors text-zinc-600 dark:text-zinc-400"
                                                            />
                                                        </div>
                                                        <div className="flex items-center gap-1 shrink-0">
                                                            <Button size="icon" variant="ghost" className="h-8 w-8 text-zinc-400 hover:text-rose-500" onClick={() => deleteItem(item.id)}>
                                                                <span className="material-symbols-outlined text-sm">delete</span>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ))}

                                                {/* Inline Add Item Row */}
                                                {addingToCategory === cat ? (
                                                    <div className="flex items-center gap-2 p-2 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-indigo-500/20 animate-in fade-in duration-200">
                                                        <Input
                                                            value={newItemName}
                                                            onChange={(e) => setNewItemName(e.target.value)}
                                                            placeholder="Item Name"
                                                            className="h-8 text-sm bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-600 text-zinc-900 dark:text-white placeholder:text-zinc-400"
                                                            autoFocus
                                                            onKeyDown={(e) => {
                                                                if (e.key === 'Enter') handleQuickAdd(cat);
                                                                if (e.key === 'Escape') cancelQuickAdd();
                                                            }}
                                                        />
                                                        <Input
                                                            value={newItemPrice}
                                                            onChange={(e) => setNewItemPrice(e.target.value)}
                                                            placeholder="Price"
                                                            className="h-8 max-w-[80px] text-sm bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-600 text-zinc-900 dark:text-white placeholder:text-zinc-400"
                                                            onKeyDown={(e) => {
                                                                if (e.key === 'Enter') handleQuickAdd(cat);
                                                                if (e.key === 'Escape') cancelQuickAdd();
                                                            }}
                                                        />
                                                        <Button size="icon" className="h-8 w-8 bg-indigo-600 hover:bg-indigo-500" onClick={() => handleQuickAdd(cat)}>
                                                            <span className="material-symbols-outlined text-[16px]">check</span>
                                                        </Button>
                                                        <Button size="icon" variant="ghost" className="h-8 w-8 text-zinc-400" onClick={cancelQuickAdd}>
                                                            <span className="material-symbols-outlined text-[16px]">close</span>
                                                        </Button>
                                                    </div>
                                                ) : (
                                                    <Button
                                                        variant="ghost"
                                                        onClick={() => {
                                                            setAddingToCategory(cat);
                                                            setNewItemName("");
                                                            setNewItemPrice("");
                                                        }}
                                                        className="w-full justify-start text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 h-8 text-xs"
                                                    >
                                                        <span className="material-symbols-outlined mr-2 text-[14px] leading-none">add</span>
                                                        Add Item
                                                    </Button>
                                                )}
                                            </div>
                                        );
                                    })}

                                    {data.categories.length === 0 && (
                                        <div className="text-center py-8 text-zinc-500 text-sm">
                                            No categories. Go to Categories tab to add one.
                                        </div>
                                    )}
                                </div>
                            </TabsContent>
                        </div>

                        <div className="p-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-end gap-3 bg-zinc-50/50 dark:bg-zinc-900/50 shrink-0">
                            <Button
                                variant="ghost"
                                onClick={onClose}
                                className="px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors h-auto"
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={handleSave}
                                className="px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm shadow-indigo-200 dark:shadow-none transition-all hover:translate-y-px active:translate-y-0 h-auto min-w-[100px]"
                            >
                                Save Changes
                            </Button>
                        </div>
                    </Tabs>
                </div>
            </DialogContent >
        </Dialog >
    );
}
