/** @format */

import { MainWindow } from "@/components/main-window";
import { getFolderContents, getPathToFolder } from "@/lib/files";

export default async function Page({
    params,
}: {
    params: { folderId: string };
}) {
    const { folderId } = await params;

    const currentItems = getFolderContents(folderId);
    const currentPath = getPathToFolder(folderId);

    return <MainWindow currentItems={currentItems} currentPath={currentPath} />;
}
