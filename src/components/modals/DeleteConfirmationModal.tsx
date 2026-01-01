"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
}

export function DeleteConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title = "Delete Item",
  description = "Are you sure you want to delete this item? This action cannot be undone.",
}: DeleteConfirmationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px] p-0 gap-0 overflow-hidden bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-3xl sm:rounded-3xl">
        <div className="flex flex-col p-6 gap-2 text-center sm:text-left">
          <DialogHeader className="p-0">
            <DialogTitle className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
              {title}
            </DialogTitle>
            <DialogDescription className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
              {description}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="p-6 pt-0 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
          <Button
            variant="ghost"
            onClick={onClose}
            className="rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 font-medium h-10 px-4"
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium shadow-sm shadow-red-200 dark:shadow-none h-10 px-4"
          >
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
