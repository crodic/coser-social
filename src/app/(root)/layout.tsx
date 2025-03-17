import { auth } from "@/auth";
import Header from "@/components/layout/header";
import SearchList from "@/components/layout/search-list";
import SidebarContent from "@/components/layout/sidebar-content";
import { ReactNode } from "react";

export default async function DefaultLayout({ children }: { children: ReactNode }) {
  const session = await auth();
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar - Desktop */}
      {session?.user && (
        <div className="hidden w-64 flex-col overflow-y-auto border-r border-gray-200 bg-white md:flex">
          <SidebarContent />
        </div>
      )}
      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Navigation */}
        <Header />

        {/* Mobile Search Container */}
        <SearchList />

        {children}
      </div>
    </div>
  );
}
