/** @format */

import type { Folder } from "@/lib/data";
import FileBrowser from "./file-browser";
import { FileLayout } from "./file-layout";
import { FolderPath } from "./navigation";

interface MainWindowProps {
    currentItems: (File | Folder)[];
    currentPath: Folder[];
}

export function MainWindow({ currentItems, currentPath }: MainWindowProps) {
    return (
        <>
            <div className="flex items-center justify-between border-b px-6 py-3">
                <FolderPath path={currentPath} />
                <div className="flex items-center gap-2">
                    <FileLayout />
                </div>
            </div>
            <FileBrowser
                currentItems={currentItems}
                currentPath={currentPath}
            />
        </>
    );
}
