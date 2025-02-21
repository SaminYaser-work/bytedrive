/** @format */

"use client";

import { FolderIcon, Star, Trash } from "lucide-react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileUpload } from "./file-upload";
import { ScrollArea } from "./ui/scroll-area";

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
    const pathname = usePathname();

    return (
        <div className="w-[240px] border-r">
            <ScrollArea className="h-full py-2">
                <div className="flex items-center justify-center mb-4">
                    <FileUpload />
                </div>
                <div className="space-y-2 px-2">
                    {sidebarLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="block"
                        >
                            <div
                                className={cn(
                                    "flex items-center gap-4 rounded-md p-2 text-sm transition-colors hover:bg-muted",
                                    pathname === link.href &&
                                        "text-primary-foreground bg-primary"
                                )}
                            >
                                <link.icon className="h-4 w-4" />
                                <span>{link.name}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
}
