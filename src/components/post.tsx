import type React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, ImageIcon, Smile, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PostGrid } from "./post-grid";
import PostInteractive from "./post-interactive";

interface PostProps {
  user: {
    name: string;
    avatar: string;
    status?: string;
  };
  content: string;
  medias: { type: "image" | "video"; src: string }[];
  reactions: {
    count: number;
    avatars: string[];
  };
  comments: number;
  shares: number;
}

export function Post({ user, content, medias, reactions, comments, shares }: PostProps) {
  return (
    <div className="mb-4 rounded-lg bg-white shadow">
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex space-x-2">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.avatar} alt={user.name} className="object-cover" />
              <AvatarFallback className="bg-orange-500 text-white">{user.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">{user.name}</div>
              {user.status && <div className="text-xs text-gray-500">{user.status}</div>}
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal size={16} />
          </Button>
        </div>

        <div className="mt-3">
          <p className="text-sm whitespace-pre-line">{content}</p>
        </div>
      </div>

      {medias.length > 0 && (
        <div className="w-full">
          <PostGrid paths={medias} />
        </div>
      )}

      <div className="p-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex -space-x-1">
              {reactions.avatars.slice(0, 3).map((avatar, i) => (
                <Avatar key={i} className="h-6 w-6 border-2 border-white">
                  <AvatarImage src={avatar} alt="Reaction" />
                  <AvatarFallback className="bg-blue-500 text-xs text-white">{i + 1}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="ml-2 text-xs text-gray-500">{reactions.count}+</span>
          </div>
          <div className="text-xs text-gray-500">
            <span>{comments} Comments</span>
            <span className="mx-2">•</span>
            <span>{shares} Shares</span>
          </div>
        </div>

        <PostInteractive postId={"1"} />

        <div className="mt-3 flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatar.jpg" alt="Profile" />
            <AvatarFallback className="bg-blue-500 text-white">U</AvatarFallback>
          </Avatar>
          <div className="relative flex-1">
            <Input className="border-0 bg-gray-100 pr-10" placeholder="Write a comment..." />
            <div className="absolute top-1/2 right-2 flex -translate-y-1/2 transform space-x-1">
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <ImageIcon size={16} className="text-gray-500" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Smile size={16} className="text-gray-500" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Send size={16} className="text-blue-500" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
