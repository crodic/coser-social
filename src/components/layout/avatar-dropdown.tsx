import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Lock, LogOut, UserCircle } from "lucide-react";
import { signOut } from "@/auth";
import { redirect } from "next/navigation";

export default function AvatarDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="size-10 cursor-pointer">
          <AvatarImage src="/image.png" alt="Profile" />
          <AvatarFallback className="bg-orange-500 text-white">LM</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <UserCircle />
          <span>Thông Tin Tài Khoản</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Lock />
          <span>Đổi Mật Khẩu</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <form
            action={async () => {
              "use server";
              await signOut({ redirect: false });
              redirect("/auth/login");
            }}
          >
            <button type="submit" className="flex w-full cursor-pointer items-center gap-2">
              <LogOut />
              <span>Đăng Xuất</span>
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
