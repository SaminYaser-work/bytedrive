/** @format */

import type { Folder, Items } from "@/lib/data";
import FileBrowser from "./file-browser";
import { FileLayout } from "./file-layout";
import { FolderPath } from "./navigation";

interface MainWindowProps {
    items: Items;
    paths: Folder[];
}

export function MainWindow({ items, paths }: MainWindowProps) {
    return (
        <>
            <div className="flex items-center justify-between border-b px-6 py-3">
                <FolderPath path={paths} />
                <div className="flex items-center gap-2">
                    <FileLayout />
                </div>
            </div>
            <FileBrowser items={items} />
        </>
    );
}
