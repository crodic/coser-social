import { Plus } from "lucide-react";
import { Post } from "@/components/post";
import { CreatePostModal } from "@/components/create-post-modal";
import StoryItem from "@/components/story-item";
import Leaderboard from "@/components/leader-board";
import SuggestedUsers from "@/components/suggested-users";
import { Separator } from "@/components/ui/separator";
import PostInput from "@/components/post-input";
import { posts } from "@/mocks/posts";

export default function Page() {
  return (
    <>
      <main className="flex flex-1 overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4">
          {/* Stories */}
          <div className="mb-4 flex space-x-2 overflow-x-auto pb-4">
            <div className="relative flex h-32 w-32 flex-shrink-0 flex-col items-center justify-center overflow-hidden rounded-lg bg-gray-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <Plus size={20} className="text-blue-500" />
              </div>
              <span className="mt-2 text-xs font-medium">Add Story</span>
            </div>

            <StoryItem image="" avatar="/placeholder.svg?height=32&width=32" name="Alen Lio" />
            <StoryItem image="" avatar="/placeholder.svg?height=32&width=32" name="Josep" />
            <StoryItem image="" avatar="/placeholder.svg?height=32&width=32" name="Jessica" />
          </div>

          {/* Create Post */}
          <PostInput />

          {/* Posts */}
          {posts.map((post) => (
            <Post
              key={post.id}
              user={post.user}
              content={post.content}
              medias={post.medias}
              reactions={post.reactions}
              comments={post.comments}
              shares={post.shares}
            />
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="sticky top-0 hidden w-80 overflow-y-auto border-l border-gray-200 bg-white p-4 lg:block">
          <SuggestedUsers />
          <Separator className="rounded-full border-4" />
          <Leaderboard />
        </div>
      </main>

      <CreatePostModal />
    </>
  );
}
