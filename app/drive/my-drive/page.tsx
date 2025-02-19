/** @format */

"use client";

import { FileIcon, FolderIcon } from "lucide-react";
import { useState } from "react";

import { FileActions } from "@/components/file-actions";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { getFolderContents, getPathToFolder } from "@/lib/files";

export default function Page() {
    const [isGridView, setIsGridView] = useState(true);
    const [currentFolderId, setCurrentFolderId] = useState("root");
    const currentItems = getFolderContents(currentFolderId);
    const currentPath = getPathToFolder(currentFolderId);

    const handleFolderClick = (folderId: string) => {
        setCurrentFolderId(folderId);
    };

    const handlePathClick = (index: number) => {
        const pathToIndex = currentPath.slice(0, index + 1);
        const folders = getFolderContents("root");
        let currentId = "root";

        // Skip first item (root) in the path
        for (let i = 1; i < pathToIndex.length; i++) {
            const folder = folders.find(
                (f) => f.name === pathToIndex[i] && "type" in f === false
            );
            if (folder) {
                currentId = folder.id;
            }
        }

        setCurrentFolderId(currentId);
    };

    return (
        <ScrollArea className="flex-1 p-6">
            {isGridView ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {currentItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative rounded-lg border p-3 hover:border-primary cursor-pointer"
                            onClick={(e) => {
                                if (
                                    (e.target as HTMLElement).closest(
                                        "[data-prevent-click]"
                                    )
                                ) {
                                    return;
                                }
                                if (!("type" in item)) {
                                    handleFolderClick(item.id);
                                } else {
                                    alert(`Opening file: ${item.name}`);
                                }
                            }}
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-2">
                                    {"type" in item ? (
                                        <FileIcon className="h-10 w-10 text-gray-500" />
                                    ) : (
                                        <FolderIcon className="h-10 w-10 text-blue-500" />
                                    )}
                                    <div className="space-y-1">
                                        <p className="line-clamp-2 text-sm font-medium">
                                            {item.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {"type" in item ? item.size : ""}
                                        </p>
                                    </div>
                                </div>
                                <div data-prevent-click>
                                    <FileActions file={item} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[400px]">Name</TableHead>
                            <TableHead>Size</TableHead>
                            <TableHead>Modified</TableHead>
                            <TableHead className="text-right">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentItems.map((item) => (
                            <TableRow
                                key={item.id}
                                className="cursor-pointer"
                                onClick={(e) => {
                                    if (
                                        (e.target as HTMLElement).closest(
                                            "[data-prevent-click]"
                                        )
                                    ) {
                                        return;
                                    }
                                    if (!("type" in item)) {
                                        handleFolderClick(item.id);
                                    } else {
                                        alert(`Opening file: ${item.name}`);
                                    }
                                }}
                            >
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        {"type" in item ? (
                                            <FileIcon className="h-5 w-5 text-gray-500" />
                                        ) : (
                                            <FolderIcon className="h-5 w-5 text-blue-500" />
                                        )}
                                        {item.name}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {"type" in item ? item.size : "--"}
                                </TableCell>
                                <TableCell>{item.modified}</TableCell>
                                <TableCell className="text-right">
                                    <div data-prevent-click>
                                        <FileActions file={item} />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </ScrollArea>
    );
}
