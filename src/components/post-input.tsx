"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { ImageIcon } from "lucide-react";
import PostActionButton from "./post-action";
import useRootState from "@/stores/use-root-state";

export default function PostInput() {
  const onOpenChange = useRootState((state) => state.onOpenCreatePostChange);
  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow">
      <div className="mb-4 flex cursor-pointer items-center space-x-2" onClick={() => onOpenChange(true)}>
        <Avatar className="h-10 w-10">
          <AvatarImage src="/avatar.jpg" alt="Profile" />
          <AvatarFallback className="bg-blue-500 text-white">LM</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <Input className="border-0 bg-gray-100" placeholder="Write something to Lerro..." readOnly />
        </div>
      </div>

      <div className="flex border-t border-gray-200 pt-3">
        <PostActionButton icon={<ImageIcon className="text-green-500" size={18} />} label="Photo/Video" />
      </div>
    </div>
  );
}
