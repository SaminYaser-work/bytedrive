/** @format */

import { type File, type Folder, files, folders } from "@/lib/data";

export function getFolderContents(folderId: string): (File | Folder)[] {
    const folderContents = [
        ...folders.filter((folder) => folder.parentId === folderId),
        ...files.filter((file) => file.parentId === folderId),
    ];
    return folderContents;
}

export function findFolder(id: string): Folder | undefined {
    return folders.find((folder) => folder.id === id);
}

export function getPathToFolder(id: string): Folder[] {
    const path = [];
    let currentFolder = findFolder(id);

    while (currentFolder) {
        path.unshift(currentFolder);
        currentFolder = currentFolder.parentId
            ? findFolder(currentFolder.parentId)
            : undefined;
    }

    return path;
}
