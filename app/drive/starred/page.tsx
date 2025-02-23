/** @format */

import { MainWindow } from "@/components/main-window";
import { getFavoriteFolderContents } from "@/lib/files";

const starred = [
    {
        id: "starred",
        name: "Starred",
        modified: "--",
        favorite: false,
        parentId: "root",
        deleted: false,
    },
];

export default async function Page() {
    const items = await getFavoriteFolderContents();

    return <MainWindow items={items} paths={starred} />;
}
