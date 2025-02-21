/** @format */

import { Sidebar } from "@/components/sidebar";
import { TopNav } from "@/components/top-nav";

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
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
