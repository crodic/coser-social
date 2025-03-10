"use client";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Bookmark, Calendar, FileText, Home, Settings, ShoppingBag, Star, Users, Video } from "lucide-react";
import Link from "next/link";

export default function SidebarContent() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <div className="flex-shrink-0 border-b border-gray-200 p-4">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10 rounded-full bg-blue-500">
            <AvatarImage src="/image (8).png" alt="Lerro Mao" />
            <AvatarFallback className="bg-blue-500 text-white">LM</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">Lerro Mao</div>
            <div className="text-xs text-gray-500">@maolo</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-2">
        <NavItem icon={<Home size={20} />} label="Trang Chủ" active={pathname === "/"} href="/" />
        <NavItem
          icon={<Users size={20} />}
          label="Trang Cá Nhân"
          active={pathname.includes("/profile")}
          href="/profile/maolo"
        />
        <NavItem icon={<Calendar size={20} />} label="Sự Kiện" active={pathname === "/event"} href="/event" />
        <NavItem icon={<FileText size={20} />} label="Khám Phá" active={pathname === "/discover"} href="/discover" />
        <NavItem icon={<Video size={20} />} label="Short" active={pathname === "/shorts"} href="/shorts" />
        <NavItem
          icon={<ShoppingBag size={20} />}
          label="Mua Sắm"
          active={pathname === "/marketplace"}
          href="/marketplace"
        />
        <NavItem icon={<Bookmark size={20} />} label="Đã Lưu" active={pathname === "/saved"} href="/saved" />
        <NavItem icon={<Star size={20} />} label="Yêu Thích" active={pathname === "/favorites"} href="/favorites" />
        <NavItem icon={<Settings size={20} />} label="Cài Đặt" active={pathname === "/settings"} href="/settings" />
      </nav>
    </div>
  );
}

function NavItem({
  icon,
  label,
  active,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={`mb-1 flex w-full items-center space-x-3 rounded-lg p-2 text-left ${
        active ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <span className={active ? "text-blue-600" : "text-gray-500"}>{icon}</span>
      <span className="font-medium">{label}</span>
    </Link>
  );
}
