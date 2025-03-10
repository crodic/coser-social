import { Search } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

export default function SearchInput({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <Search className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400" size={16} />
      <Input className="w-full border-0 bg-gray-100 pl-10" placeholder="Search Socialmate" />
    </div>
  );
}
