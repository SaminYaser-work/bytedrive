/** @format */

"use client";

import type { Folder } from "@/lib/data";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "./ui/breadcrumb";

export function FolderPath({ path }: { path: Folder[] }) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {path.map((folder, index) => (
                    <BreadcrumbChildren
                        key={folder.id}
                        folder={folder}
                        length={path.length}
                        index={index}
                    />
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}

function BreadcrumbChildren({
    folder,
    length,
    index,
}: {
    folder: Folder;
    length: number;
    index: number;
}) {
    return (
        <>
            {index > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
                {index === length - 1 ? (
                    <BreadcrumbPage>{folder.name}</BreadcrumbPage>
                ) : (
                    <BreadcrumbLink href={`/drive/folders/${folder.id}`}>
                        {folder.name}
                    </BreadcrumbLink>
                )}
            </BreadcrumbItem>
        </>
    );
}
