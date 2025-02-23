/** @format */

import { MainWindow } from "@/components/main-window";
import { getTrashedFolderContents } from "@/lib/files";

const trash = [
    {
        id: "trash",
        name: "Trash",
        modified: "--",
        favorite: false,
        parentId: "root",
        deleted: false,
    },
];

export default async function Page() {
    const items = await getTrashedFolderContents();

    return <MainWindow items={items} paths={trash} />;
}
