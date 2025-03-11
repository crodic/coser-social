import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PostType } from "@/mocks/posts";
import React from "react";

export default function ProfileCoser({ post }: { post: PostType }) {
  return (
    <aside className="sticky top-20 h-max min-w-80 space-y-6">
      {/* Cosplayer Profile Card */}
      <div className="rounded-lg bg-white shadow">
        <div className="p-4">
          <h2 className="mb-4 text-lg font-bold">About Cosplayer</h2>
          <div className="flex flex-col items-center">
            <Avatar className="mb-3 h-24 w-24">
              <AvatarImage src={post.user.avatar} alt={post.user.name} />
              <AvatarFallback>{post.user.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-bold">{post.user.name}</h3>
            <p className="mb-3 text-gray-500">@{post.user.name}</p>
            <Button className="mb-2 w-full bg-blue-500 hover:bg-blue-600">Follow</Button>
            <Button variant="outline" className="w-full">
              Message
            </Button>
          </div>

          <Separator className="my-4" />

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-500">Posts</span>
              <span className="font-semibold">248</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Followers</span>
              <span className="font-semibold">12.4K</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Following</span>
              <span className="font-semibold">420</span>
            </div>
          </div>

          <Separator className="my-4" />

          <div>
            <h4 className="mb-2 font-semibold">Bio</h4>
            <p className="text-sm text-gray-600">
              Professional cosplayer specializing in anime and game characters. Available for events and collaborations.
            </p>
          </div>
        </div>
      </div>

      {/* More Posts
      <div className="rounded-lg bg-white p-4 shadow">
        <h2 className="mb-4 text-lg font-bold">More from this Cosplayer</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex cursor-pointer gap-3 rounded-lg p-2 hover:bg-gray-50">
              <div className="h-16 w-16 overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={`/placeholder.svg?height=64&width=64`}
                  alt="Post thumbnail"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="line-clamp-2 text-sm">
                  Check out my latest {item === 1 ? "Goku" : item === 2 ? "Naruto" : "Luffy"} cosplay! What do you
                  think?
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  {item} day{item !== 1 ? "s" : ""} ago
                </p>
              </div>
            </div>
          ))}
        </div>
        <Button variant="ghost" className="mt-2 w-full text-blue-500">
          View All Posts
        </Button>
      </div> */}
    </aside>
  );
}
