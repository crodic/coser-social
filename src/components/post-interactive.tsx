"use client";

import React from "react";
import PostActionButton from "./post-action";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PostInteractive({ postId }: { postId: string }) {
  const router = useRouter();
  return (
    <div className="flex border-t border-gray-200 pt-3">
      <PostActionButton icon={<Heart size={18} />} label="Like" />
      <PostActionButton
        icon={<MessageCircle size={18} />}
        label="Comment"
        callback={() => router.push(`/posts/${postId}`)}
      />
      <PostActionButton icon={<Share2 size={18} />} label="Share" />
    </div>
  );
}
