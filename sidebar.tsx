/** @format */

import { FolderIcon, Star, Trash } from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { FileUpload } from "./components/file-upload";

const sidebarLinks = [
    {
        name: "My Drive",
        href: "/drive/my-drive",
        icon: FolderIcon,
    },
    {
        name: "Starred",
        href: "/drive/starred",
        icon: Star,
    },
    {
        name: "Trash",
        href: "/drive/trash",
        icon: Trash,
    },
];

export function Sidebar() {
    return (
        <div className="w-[240px] border-r">
            <ScrollArea className="h-full py-2">
                <div className="flex items-center justify-center">
                    <FileUpload />
                </div>
                <div className="space-y-1 px-2">
                    {sidebarLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors hover:text-blue-500/10"
                        >
                            <link.icon className="h-4 w-4" />
                            <span>{link.name}</span>
                        </Link>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
}
