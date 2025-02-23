/** @format */

"use-client";

import { Copy, History, MoreVertical, Pencil, Star, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { File, Folder } from "@/lib/data";
import {
    copyItem,
    deleteItem,
    renameItem,
    restoreItem,
    setFavorite,
    trashItem,
} from "@/lib/files";
import { useIsTrash } from "@/lib/hooks/use-is-trash";

type FileActionsProps = {
    item: File | Folder;
};

export function FileActions({ item: file }: FileActionsProps) {
    const isTrash = useIsTrash();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                {isTrash ? (
                    <TrashActions item={file} />
                ) : (
                    <DefaultActions item={file} />
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

function DefaultActions({ item }: FileActionsProps) {
    const itemType = "type" in item ? "file" : "folder";

    return (
        <>
            <DropdownMenuItem
                onClick={(e) => {
                    e.stopPropagation();
                    setFavorite(item.id, itemType, !item.favorite);
                }}
            >
                <Star className="mr-2 h-4 w-4" />
                {item.favorite ? "Remove from Starred" : "Add to Starred"}
            </DropdownMenuItem>
            <DropdownMenuItem
                onClick={(e) => {
                    e.stopPropagation();
                    renameItem(item.id, itemType, "TODO");
                }}
            >
                <Pencil className="mr-2 h-4 w-4" />
                Rename
            </DropdownMenuItem>
            <DropdownMenuItem
                onClick={(e) => {
                    e.stopPropagation();
                    copyItem(item.id, itemType);
                }}
            >
                <Copy className="mr-2 h-4 w-4" />
                Make a copy
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
                onClick={(e) => {
                    e.stopPropagation();
                    trashItem(item.id, itemType);
                }}
            >
                <Trash className="mr-2 h-4 w-4" />
                Move to Trash
            </DropdownMenuItem>
        </>
    );
}

function TrashActions({ item }: FileActionsProps) {
    const itemType = "type" in item ? "file" : "folder";
    return (
        <>
            <DropdownMenuItem
                onClick={(e) => {
                    e.stopPropagation();
                    restoreItem(item.id, itemType);
                }}
            >
                <History className="mr-2 h-4 w-4" />
                Restore
            </DropdownMenuItem>
            <DropdownMenuItem
                className="text-destructive"
                onClick={(e) => {
                    e.stopPropagation();
                    deleteItem(item.id, itemType);
                }}
            >
                <Trash className="mr-2 h-4 w-4" />
                Delete Forever
            </DropdownMenuItem>
        </>
    );
}
