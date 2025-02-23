/** @format */

import { MainWindow } from "@/components/main-window";
import { getFolderContents, getPathToFolder } from "@/lib/files";
import { redirect } from "next/navigation";

export default async function Page({
    params,
}: {
    params: { folderId: string };
}) {
    const { folderId } = await params;

    if (folderId === "root") {
        redirect("/drive/my-drive");
    }

    const currentItems = await getFolderContents(folderId);
    const currentPath = await getPathToFolder(folderId);

    return <MainWindow items={currentItems} paths={currentPath} />;
}
