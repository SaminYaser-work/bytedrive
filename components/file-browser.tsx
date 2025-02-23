/** @format */

"use client";

import { FileIcon, FolderIcon } from "lucide-react";

import { FileActions } from "@/components/file-actions";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import type { File, Folder, Items } from "@/lib/data";
import { useIsTrash } from "@/lib/hooks/use-is-trash";
import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";

export default function FileBrowser({ items }: { items: Items }) {
    const fileLayout = useStore((state) => state.fileLayout);

    const Browser = fileLayout === "grid" ? GridBrowser : TableBrowser;

    return (
        <ScrollArea className="flex-1 p-6">
            <Browser items={items} />
        </ScrollArea>
    );
}

function TableBrowser({ items }: { items: Items }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[400px]">Name</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Modified</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {items.folders.map((folder) => (
                    <ItemRow
                        item={folder}
                        key={"folder" + folder.id}
                        type="folder"
                    />
                ))}

                {items.files.map((file) => (
                    <ItemRow item={file} key={"file" + file.id} type="file" />
                ))}
            </TableBody>
        </Table>
    );
}

function ItemRow({
    item,
    type,
}: {
    item: File | Folder;
    type: "file" | "folder";
}) {
    const router = useRouter();
    const isTrash = useIsTrash();
    return (
        <TableRow
            key={item.id}
            className="cursor-pointer"
            onClick={(e) => {
                if ((e.target as HTMLElement).closest("[data-prevent-click]")) {
                    return;
                }

                if (isTrash) {
                    alert(`Restore?`);
                    return;
                }

                if (type === "folder") {
                    router.push(`/drive/folders/${item.id}`);
                } else {
                    alert(`Opening file: ${item.name}`);
                }
            }}
        >
            <TableCell>
                <div className="flex items-center gap-2">
                    {type === "file" ? (
                        <FileIcon className="h-5 w-5 text-gray-500" />
                    ) : (
                        <FolderIcon className="h-5 w-5 text-blue-500" />
                    )}
                    {item.name}
                </div>
            </TableCell>
            <TableCell>{type === "file" ? item.size : "--"}</TableCell>
            <TableCell>{item.modified}</TableCell>
            <TableCell className="text-right">
                <div data-prevent-click>
                    <FileActions item={item} />
                </div>
            </TableCell>
        </TableRow>
    );
}

function GridBrowser({ items }: { items: Items }) {
    const { files, folders } = items;

    return (
        <>
            <p className="text-sm font-semibold mb-2">Folders</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {folders.map((folder) => (
                    <FolderCard key={folder.id} folder={folder} />
                ))}
            </div>
            <p className="text-sm font-semibold mt-6 mb-2">Files</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {files.map((file) => (
                    <FileCard key={file.id} file={file} />
                ))}
            </div>
        </>
    );
}

function FolderCard({ folder }: { folder: Folder }) {
    const router = useRouter();
    const isTrash = useIsTrash();

    return (
        <div
            key={folder.id}
            className="group relative rounded-lg border p-3 transition-colors hover:bg-muted cursor-pointer"
            onClick={(e) => {
                if ((e.target as HTMLElement).closest("[data-prevent-click]")) {
                    return;
                }
                if (isTrash) {
                    alert(`Restore?`);
                    return;
                }
                router.push(`/drive/folders/${folder.id}`);
            }}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <FolderIcon className="h-6 w-6 fill-slate-500 stroke-slate-500" />
                    <div className="space-y-1">
                        <p className="line-clamp-2 text-sm font-semibold">
                            {folder.name}
                        </p>
                    </div>
                </div>
                <div data-prevent-click>
                    <FileActions item={folder} />
                </div>
            </div>
        </div>
    );
}

function FileCard({ file }: { file: File }) {
    const isTrash = useIsTrash();

    return (
        <div
            key={file.id}
            className="group relative rounded-lg border p-3 transition-colors hover:bg-muted cursor-pointer"
            onClick={(e) => {
                if ((e.target as HTMLElement).closest("[data-prevent-click]")) {
                    return;
                }
                if (isTrash) {
                    alert(`Restore?`);
                    return;
                }
                alert(`Opening file: ${file.name}`);
            }}
        >
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <FileIcon className="h-4 w-4 fill-slate-500 stroke-slate-500" />
                        <div className="space-y-1">
                            <p className="line-clamp-1 text-sm font-semibold">
                                {file.name}
                            </p>
                        </div>
                    </div>
                    <div data-prevent-click>
                        <FileActions item={file} />
                    </div>
                </div>
                <div className="flex items-center justify-center object-contain">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="w-full rounded"
                        src={
                            "https://placehold.co/150x150/gainsboro/white?text=File"
                        }
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
