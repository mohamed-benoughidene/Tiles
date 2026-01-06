"use client";

import { useState, useRef, useEffect, KeyboardEvent, FocusEvent } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface InlineEditProps {
    value: string;
    onSave?: (value: string) => void;
    className?: string;
    inputClassName?: string;
    placeholder?: string;
    description?: string; // For aria-label
    disabled?: boolean;
    isEditing?: boolean;
    onEditChange?: (isEditing: boolean) => void;
}

export function InlineEdit({
    value,
    onSave,
    className,
    inputClassName,
    placeholder = "Enter text...",
    description,
    disabled = false,
    isEditing: controlledIsEditing,
    onEditChange,
}: InlineEditProps) {
    const [internalIsEditing, setInternalIsEditing] = useState(false);

    // Determine effective state
    const isEditing = controlledIsEditing !== undefined ? controlledIsEditing : internalIsEditing;

    const setIsEditing = (newState: boolean) => {
        if (onEditChange) {
            onEditChange(newState);
        } else {
            setInternalIsEditing(newState);
        }
    };

    const [inputValue, setInputValue] = useState(value);

    const inputRef = useRef<HTMLInputElement>(null);

    // Sync internal state if prop changes
    useEffect(() => {
        setInputValue(value);
    }, [value]);

    // UX: Focus and Select All on mount
    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isEditing]);

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            save();
        } else if (e.key === "Escape") {
            cancel();
        }
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        // Prevent saving if related target is internal (if we add action buttons later)
        // For now, simple blur saves
        save();
    };

    const save = () => {
        // Only save if changed (optional, but good for performance)
        if (inputValue !== value && onSave) {
            onSave(inputValue);
        }
        setIsEditing(false);
    };

    const cancel = () => {
        setInputValue(value); // Revert
        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                className={cn("h-auto py-1 px-2 -ml-2", inputClassName)}
                placeholder={placeholder}
                aria-label={description || "Edit text"}
            />
        );
    }

    return (
        <span
            onClick={() => !disabled && setIsEditing(true)}
            onKeyDown={(e) => {
                if (!disabled && e.key === "Enter") {
                    setIsEditing(true);
                }
            }}
            tabIndex={disabled ? -1 : 0}
            role="button"
            className={cn(
                "cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded px-1 -ml-1 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md break-words whitespace-pre-wrap max-w-full block",
                disabled && "cursor-not-allowed hover:bg-transparent hover:border-transparent opacity-50",
                className
            )}
            aria-label={description || "Click to edit"}
        >
            {value || <span className="text-zinc-400 italic">{placeholder}</span>}
        </span>
    );
}
