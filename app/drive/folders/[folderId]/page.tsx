/** @format */

import FileBrowser from "@/components/file-browser";
import { getFolderContents, getPathToFolder } from "@/lib/files";

export default async function Page({
    params,
}: {
    params: { folderId: string };
}) {
    const { folderId } = params;

    const currentItems = getFolderContents(folderId);
    const currentPath = getPathToFolder(folderId);

    return (
        <FileBrowser currentItems={currentItems} currentPath={currentPath} />
    );
}
