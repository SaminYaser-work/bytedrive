/** @format */

"use client";

import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function FileLayout() {
    const toggleFileLayout = useStore((state) => state.toggleFileLayout);

    return (
        <Button variant="ghost" size="icon" onClick={() => toggleFileLayout()}>
            <GridViewIcon />
            <span className="sr-only">Toggle view</span>
        </Button>
    );
}

function GridViewIcon() {
    const fileLayout = useStore((state) => state.fileLayout);
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn(fileLayout === "grid" && "text-primary")}
        >
            <rect width="7" height="7" x="3" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="14" rx="1" />
            <rect width="7" height="7" x="3" y="14" rx="1" />
        </svg>
    );
}
