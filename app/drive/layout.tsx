/** @format */

import { FileUpload } from "@/components/file-upload";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/sidebar";
import { TopNav } from "@/top-nav";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen flex-col">
            <TopNav />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <main className="flex-1 overflow-hidden">
                    <div className="flex h-full flex-col">
                        <div className="flex items-center justify-between border-b px-6 py-3">
                            {/* <Navigation /> */}
                            <div className="flex items-center gap-2">
                                <FileUpload />
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    // onClick={() => setIsGridView(!isGridView)}
                                >
                                    {/* <GridViewIcon
                                        className={cn(
                                            isGridView && "text-primary"
                                        )}
                                    /> */}
                                    <span className="sr-only">Toggle view</span>
                                </Button>
                            </div>
                        </div>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}

function GridViewIcon({ className }: { className?: string }) {
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
            className={className}
        >
            <rect width="7" height="7" x="3" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="14" rx="1" />
            <rect width="7" height="7" x="3" y="14" rx="1" />
        </svg>
    );
}
