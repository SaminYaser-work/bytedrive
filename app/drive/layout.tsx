/** @format */

import { FileLayout } from "@/components/file-layout";
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
                                <FileLayout />
                            </div>
                        </div>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
