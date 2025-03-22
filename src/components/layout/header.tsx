import React from "react";
import { MobileMenu } from "./mobile-menu";
import SearchInput from "../search-input";
import { Bell, FileText, Home, MessageSquare, Users, Video } from "lucide-react";
import SearchButton from "./search-button";
import { Dancing_Script } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { auth } from "@/auth";
import AvatarDropdown from "./avatar-dropdown";

const dancingScript = Dancing_Script({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing-script",
});

export default async function Header() {
  const session = await auth();
  return (
    <header className={cn("sticky top-0 z-30 border-b border-gray-200 bg-white", dancingScript.variable)}>
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          {/* Mobile Menu Button */}
          {session?.user && <MobileMenu />}

          <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 font-[family-name:var(--font-dancing-script)] text-2xl font-bold text-white md:hidden">
            C
          </div>
          <p className="mr-4 hidden font-[family-name:var(--font-dancing-script)] text-4xl font-bold text-blue-500 md:block">
            Cosper
          </p>
          <SearchInput className="hidden w-64 md:block" />
          <SearchButton />
        </div>

        <div className="hidden items-center space-x-8 md:flex">
          <NavIcon icon={<Home size={24} />} active={true} />
          <NavIcon icon={<FileText size={24} />} active={false} />
          <NavIcon icon={<Users size={24} />} active={false} />
          <NavIcon icon={<Video size={24} />} active={false} />
        </div>

        {session?.user ? (
          <div className="flex items-center space-x-3">
            <IconBadge icon={<MessageSquare size={20} />} count={2} />
            <IconBadge icon={<Bell />} count={10} />
            <AvatarDropdown />
          </div>
        ) : (
          <div className="flex items-center space-x-3">
            <Button>
              <Link href="/auth/login">Đăng Nhập</Link>
            </Button>
            <Button variant="outline">
              <Link href="/auth/register">Đăng Ký</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}

function NavIcon({ icon, active }: { icon: React.ReactNode; active: boolean }) {
  return (
    <button className={`rounded-lg p-2 ${active ? "text-blue-600" : "text-gray-500 hover:bg-gray-100"}`}>{icon}</button>
  );
}

function IconBadge({ icon, count }: { icon: React.ReactNode; count: number }) {
  return (
    <div className="relative">
      <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100">{icon}</button>
      {count > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
          {count}
        </span>
      )}
    </div>
  );
}
