/** @format */

import { MainWindow } from "@/components/main-window";
import { getFolderContents, getPathToFolder } from "@/lib/files";

export default async function Page() {
    const items = await getFolderContents("root");
    const paths = await getPathToFolder("root");

    return <MainWindow items={items} paths={paths} />;
}
