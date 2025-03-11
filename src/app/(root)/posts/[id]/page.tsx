import { Post } from "@/components/post";
import { posts } from "@/mocks/posts";
import { Heart, MessageCircle } from "lucide-react";
import React from "react";
import ProfileCoser from "./_components/profile-coser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PostHeaderAction from "./_components/post-header-action";

const post = posts[2];

export default function PostDetailPage() {
  return (
    <main className="flex flex-1 gap-4 overflow-hidden">
      <div className="container mx-auto gap-4 overflow-y-auto">
        <PostHeaderAction />

        <div className="flex flex-col gap-4 p-4 lg:flex-row">
          <div className="flex flex-col gap-4">
            <Post
              comments={post.comments}
              content={post.content}
              medias={post.medias}
              reactions={post.reactions}
              shares={post.shares}
              user={post.user}
            />
            <div className="rounded-lg bg-white p-4 shadow">
              <h2 className="mb-4 font-bold">Bình luận (2)</h2>

              {/* Sample comments */}
              <div className="space-y-4">
                <div className="flex space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/image (3).png" alt="Commenter" />
                    <AvatarFallback>C1</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold">Alex Johnson</span>
                      <span className="text-sm text-gray-500">@alexj</span>
                      <span className="text-sm text-gray-500">· 1h</span>
                    </div>
                    <div className="mt-1">This looks amazing! Great work on the plugin.</div>
                    <div className="mt-2 flex space-x-4">
                      <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-500">
                        <Heart size={16} />
                        <span>12</span>
                      </button>
                      <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-500">
                        <MessageCircle size={16} />
                        <span>Reply</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/image (5).png" alt="Commenter" />
                    <AvatarFallback>C2</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold">Sarah Williams</span>
                      <span className="text-sm text-gray-500">@sarahw</span>
                      <span className="text-sm text-gray-500">· 45m</span>
                    </div>
                    <div className="mt-1">
                      I&apos;ve been using this for my projects and it&apos;s been a game changer!
                    </div>
                    <div className="mt-2 flex space-x-4">
                      <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-500">
                        <Heart size={16} />
                        <span>8</span>
                      </button>
                      <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-500">
                        <MessageCircle size={16} />
                        <span>Reply</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/image (5).png" alt="Commenter" />
                    <AvatarFallback>C2</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold">Sarah Williams</span>
                      <span className="text-sm text-gray-500">@sarahw</span>
                      <span className="text-sm text-gray-500">· 45m</span>
                    </div>
                    <div className="mt-1">
                      I&apos;ve been using this for my projects and it&apos;s been a game changer!
                    </div>
                    <div className="mt-2 flex space-x-4">
                      <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-500">
                        <Heart size={16} />
                        <span>8</span>
                      </button>
                      <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-500">
                        <MessageCircle size={16} />
                        <span>Reply</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/image (5).png" alt="Commenter" />
                    <AvatarFallback>C2</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold">Sarah Williams</span>
                      <span className="text-sm text-gray-500">@sarahw</span>
                      <span className="text-sm text-gray-500">· 45m</span>
                    </div>
                    <div className="mt-1">
                      I&apos;ve been using this for my projects and it&apos;s been a game changer!
                    </div>
                    <div className="mt-2 flex space-x-4">
                      <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-500">
                        <Heart size={16} />
                        <span>8</span>
                      </button>
                      <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-500">
                        <MessageCircle size={16} />
                        <span>Reply</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProfileCoser post={post} />
        </div>
      </div>
    </main>
  );
}
