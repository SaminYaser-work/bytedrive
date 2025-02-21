/** @format */

import { MainWindow } from "@/components/main-window";
import { getFolderContents, getPathToFolder } from "@/lib/files";

export default async function Page() {
    const currentItems = getFolderContents("root");
    const currentPath = getPathToFolder("root");

    // const handleFolderClick = (folderId: string) => {};

    // const handlePathClick = (index: number) => {
    //     const pathToIndex = currentPath.slice(0, index + 1);
    //     const folders = getFolderContents("root");
    //     let currentId = "root";

    //     // Skip first item (root) in the path
    //     for (let i = 1; i < pathToIndex.length; i++) {
    //         const folder = folders.find(
    //             (f) => f.name === pathToIndex[i] && "type" in f === false
    //         );
    //         if (folder) {
    //             currentId = folder.id;
    //         }
    //     }
    // };

    return <MainWindow currentItems={currentItems} currentPath={currentPath} />;
}
