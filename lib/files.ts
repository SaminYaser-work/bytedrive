/** @format */

"use server";

import { type File, type Folder, Items, files, folders } from "@/lib/data";

export async function renameItem(
    id: string,
    type: "folder" | "file",
    newName: string
) {
    const item = type === "folder" ? await findFolder(id) : await findFile(id);
    if (!item) return;
    item.name = newName;
}

export async function copyItem(
    id: string,
    type: "folder" | "file",
    parent = true
) {
    const item = type === "folder" ? await findFolder(id) : await findFile(id);
    if (!item) return;
    const newItem = { ...item };
    newItem.id = Math.random().toString(36).slice(2);
    newItem.name = item.name + (parent ? " (Copy)" : "");
    (type === "folder" ? folders : files).push(newItem);

    if (type === "folder") {
        const { folders, files } = await getFolderContents(id);

        const promises = [];

        for (const folder of folders) {
            if (folder.deleted) continue;
            promises.push(copyItem(folder.id, "folder", false));
        }

        for (const file of files) {
            if (file.deleted) continue;
            promises.push(copyItem(file.id, "file", false));
        }

        await Promise.all(promises);
    }
}

export async function trashItem(id: string, type: "folder" | "file") {
    const item = type === "folder" ? await findFolder(id) : await findFile(id);
    if (!item) return;
    item.deleted = true;

    if (type === "folder") {
        const { folders, files } = await getFolderContents(id);

        const promises = [];

        for (const folder of folders) {
            if (folder.deleted) continue;
            promises.push(trashItem(folder.id, "folder"));
        }

        for (const file of files) {
            if (file.deleted) continue;
            promises.push(trashItem(file.id, "file"));
        }

        await Promise.all(promises);
    }
}

export async function restoreItem(id: string, type: "folder" | "file") {
    const item = type === "folder" ? await findFolder(id) : await findFile(id);
    if (!item) return;
    item.deleted = false;

    if (type === "folder") {
        const { folders, files } = await getFolderContents(id);

        const promises = [];

        for (const folder of folders) {
            if (!folder.deleted) continue;
            promises.push(restoreItem(folder.id, "folder"));
        }

        for (const file of files) {
            if (!file.deleted) continue;
            promises.push(restoreItem(file.id, "file"));
        }

        await Promise.all(promises);
    }
}

export async function deleteItem(id: string, type: "folder" | "file") {
    const item = type === "folder" ? await findFolder(id) : await findFile(id);
    if (!item) return;

    if (type === "folder") {
        const { folders, files } = await getFolderContents(id);

        const promises = [];

        for (const folder of folders) {
            promises.push(deleteItem(folder.id, "folder"));
        }

        for (const file of files) {
            promises.push(deleteItem(file.id, "file"));
        }

        await Promise.all(promises);
    } else {
        await deleteItem(id, "file");
    }

    // TODO: Delete
}

export async function setFavorite(
    id: string,
    type: "folder" | "file",
    favorite: boolean
) {
    const item = type === "folder" ? await findFolder(id) : await findFile(id);
    if (!item) return;
    console.log(favorite);
    item.favorite = favorite;
}

export async function getFolderContents(folderId: string): Promise<Items> {
    const folderContents = {
        folders: folders.filter(
            (folder) => folder.parentId === folderId && !folder.deleted
        ),
        files: files.filter(
            (file) => file.parentId === folderId && !file.deleted
        ),
    };
    return folderContents;
}

export async function getFavoriteFolderContents(): Promise<Items> {
    return {
        folders: folders.filter((folder) => folder.favorite),
        files: files.filter((file) => file.favorite),
    };
}

export async function getTrashedFolderContents(): Promise<Items> {
    return {
        folders: folders.filter((folder) => folder.deleted),
        files: files.filter((file) => file.deleted),
    };
}

export async function findFolder(id: string): Promise<Folder | undefined> {
    return folders.find((folder) => folder.id === id);
}

export async function findFile(id: string): Promise<File | undefined> {
    return files.find((file) => file.id === id);
}

export async function getPathToFolder(id: string): Promise<Folder[]> {
    const path = [];
    let currentFolder = await findFolder(id);

    while (currentFolder) {
        path.unshift(currentFolder);
        currentFolder = currentFolder.parentId
            ? await findFolder(currentFolder.parentId)
            : undefined;
    }

    return path;
}
