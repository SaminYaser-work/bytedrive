/** @format */

import { FolderIcon, Star, Trash } from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export function Sidebar() {
    return (
        <div className="w-[240px] border-r">
            <ScrollArea className="h-full py-2">
                <div className="space-y-1 px-2">
                    <Link
                        href={"/drive/my-drive"}
                        className="w-full justify-start gap-2 hover:bg-muted"
                    >
                        <FolderIcon className="h-4 w-4" />
                        My Drive
                    </Link>
                    <Link
                        href={"/drive/starred"}
                        className="w-full justify-start gap-2 hover:bg-muted"
                    >
                        <Star className="h-4 w-4" />
                        Starred
                    </Link>
                    <Link
                        href={"/drive/trash"}
                        className="w-full justify-start gap-2 hover:bg-muted"
                    >
                        <Trash className="h-4 w-4" />
                        Trash
                    </Link>
                </div>
            </ScrollArea>
        </div>
    );
}
