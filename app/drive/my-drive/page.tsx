/** @format */

"use client";

import { useState } from "react";

import FileBrowser from "@/components/file-browser";
import { getFolderContents, getPathToFolder } from "@/lib/files";

export default function Page() {
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
        <FileBrowser currentItems={currentItems} currentPath={currentPath} />
    );
}
