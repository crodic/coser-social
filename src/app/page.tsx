/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Home,
  Users,
  Calendar,
  FileText,
  Grid,
  ShoppingBag,
  Bookmark,
  Star,
  Settings,
  Search,
  Bell,
  MessageSquare,
  ImageIcon,
  Video,
  Smile,
  Plus,
  ArrowLeft,
} from "lucide-react";
import { Post } from "@/components/post";
import { CreatePostModal } from "@/components/create-post-modal";
import { MobileMenu } from "@/components/mobile-menu";

export default function SocialMediaUI() {
  const [activeTab, setActiveTab] = useState("home");
  const [searchVisible, setSearchVisible] = useState(false);
  const [createPostOpen, setCreatePostOpen] = useState(false);

  // Sample posts with different image counts
  const posts = [
    {
      id: 1,
      user: {
        name: "Lori Cortez",
        avatar: "/image (1).png",
        status: "Active",
      },
      content:
        "I created Roughly plugin to sketch crafted hand-drawn elements which can be used to any usage (diagrams/flows/decoration/etc)",
      images: ["/image (1).png", "/image (2).png", "/image (3).png"],
      reactions: {
        count: 8,
        avatars: ["/image (1).png", "/image (5).png", "/image (3).png"],
      },
      comments: 4,
      shares: 1,
    },
    {
      id: 2,
      user: {
        name: "Ai Goku Kid",
        avatar: "/image (6).png",
        status: "2 hours ago",
      },
      content: "Goku kid đẹp đâyyy 😍\nE sẵn các mẫu Goku kid siu kute.\nMời ae lên đơn nhé 🧡🧡🧡",
      images: [
        "/image (5).png",
        "/image (6).png",
        "/image (2).png",
        "/image (7).png",
        "/image (4).png",
        "/image (8).png",
      ],
      reactions: {
        count: 24,
        avatars: ["/image (3).png", "/image (8).png", "/image.png"],
      },
      comments: 7,
      shares: 3,
    },
    {
      id: 3,
      user: {
        name: "Alex Johnson",
        avatar: "/image (1).png",
        status: "Yesterday",
      },
      content: "Just got these amazing new shoes! What do you think?",
      images: ["/image (5).png", "/image (4).png"],
      reactions: {
        count: 15,
        avatars: ["/image (5).png", "/image (3).png", "/image (1).png"],
      },
      comments: 8,
      shares: 1,
    },
    {
      id: 4,
      user: {
        name: "Sarah Williams",
        avatar: "/image (8).png",
        status: "3 days ago",
      },
      content: "Our trip to the mountains was incredible! Here are some highlights:",
      images: ["/image (6).png", "/image (1).png", "/image (3).png"],
      reactions: {
        count: 42,
        avatars: ["/image (6).png", "/image (7).png", "/image (2).png"],
      },
      comments: 12,
      shares: 5,
    },
    {
      id: 5,
      user: {
        name: "Mike Chen",
        avatar: `/image.png`,
        status: "1 week ago",
      },
      content: "My collection is growing! Check out these new additions:",
      images: ["/image (1).png", "/image (2).png", "/image (5).png", "/image (7).png"],
      reactions: {
        count: 31,
        avatars: ["/image (3).png", "/image (8).png", "/image (6).png"],
      },
      comments: 9,
      shares: 2,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar - Desktop */}
      <div className="hidden w-64 flex-col overflow-y-auto border-r border-gray-200 bg-white md:flex">
        <SidebarContent activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center">
              {/* Mobile Menu Button */}
              <MobileMenu activeTab={activeTab} setActiveTab={setActiveTab} />

              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 font-bold text-white">
                S
              </div>
              <div className="relative hidden md:block">
                <Search className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400" size={16} />
                <Input className="w-64 border-0 bg-gray-100 pl-10" placeholder="Search Socialmate" />
              </div>
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSearchVisible(true)}>
                <Search size={20} />
              </Button>
            </div>

            <div className="hidden items-center space-x-8 md:flex">
              <NavIcon icon={<Home size={24} />} active={true} />
              <NavIcon icon={<FileText size={24} />} active={false} />
              <NavIcon icon={<Users size={24} />} active={false} />
              <NavIcon icon={<Video size={24} />} active={false} />
            </div>

            <div className="flex items-center space-x-2">
              <IconBadge icon={<MessageSquare size={20} />} count={2} />
              <IconBadge icon={<Bell size={20} />} count={3} />
              <Avatar className="h-8 w-8 cursor-pointer">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Profile" />
                <AvatarFallback className="bg-orange-500 text-white">LM</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Mobile Search Container */}
        {searchVisible && (
          <div className="fixed inset-0 z-40 bg-white p-4 md:hidden">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="mr-2" onClick={() => setSearchVisible(false)}>
                <ArrowLeft size={20} />
              </Button>
              <div className="relative flex-1">
                <Search className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400" size={16} />
                <Input className="w-full border-0 bg-gray-100 pl-10" placeholder="Search Socialmate" autoFocus />
              </div>
            </div>
          </div>
        )}

        {/* Main Content Area */}
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
            <div className="mb-4 rounded-lg bg-white p-4 shadow">
              <div className="mb-4 flex cursor-pointer items-center space-x-2" onClick={() => setCreatePostOpen(true)}>
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Profile" />
                  <AvatarFallback className="bg-blue-500 text-white">LM</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Input className="border-0 bg-gray-100" placeholder="Write something to Lerro..." readOnly />
                </div>
              </div>

              <div className="flex border-t border-gray-200 pt-3">
                <PostActionButton icon={<Video className="text-red-500" size={18} />} label="Live" />
                <PostActionButton icon={<ImageIcon className="text-green-500" size={18} />} label="Photo/Video" />
                <PostActionButton icon={<Smile className="text-yellow-500" size={18} />} label="Feelings/Activity" />
              </div>
            </div>

            {/* Posts */}
            {posts.map((post) => (
              <Post
                key={post.id}
                user={post.user}
                content={post.content}
                images={post.images}
                reactions={post.reactions}
                comments={post.comments}
                shares={post.shares}
              />
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="hidden w-80 overflow-y-auto border-l border-gray-200 bg-white p-4 lg:block">
            <div className="mb-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold">
                  Request <span className="rounded-full bg-red-500 px-1.5 text-xs text-white">2</span>
                </h3>
              </div>

              <FriendRequest name="Piter Maio" avatar="/placeholder.svg?height=40&width=40" mutualCount={10} />
              <FriendRequest name="Floyd Miles" avatar="/placeholder.svg?height=40&width=40" mutualCount={10} />
            </div>
          </div>
        </main>
      </div>
      <CreatePostModal open={createPostOpen} onOpenChange={setCreatePostOpen} />
    </div>
  );
}

// Sidebar Content Component
function SidebarContent({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
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
        <NavItem
          icon={<Home size={20} />}
          label="Home"
          active={activeTab === "home"}
          onClick={() => setActiveTab("home")}
        />
        <NavItem
          icon={<Users size={20} />}
          label="People"
          active={activeTab === "people"}
          onClick={() => setActiveTab("people")}
        />
        <NavItem
          icon={<Calendar size={20} />}
          label="Event"
          active={activeTab === "event"}
          onClick={() => setActiveTab("event")}
        />
        <NavItem
          icon={<FileText size={20} />}
          label="Pages"
          active={activeTab === "pages"}
          onClick={() => setActiveTab("pages")}
        />
        <NavItem
          icon={<Grid size={20} />}
          label="Group"
          active={activeTab === "group"}
          onClick={() => setActiveTab("group")}
        />
        <NavItem
          icon={<ShoppingBag size={20} />}
          label="Marketplace"
          active={activeTab === "marketplace"}
          onClick={() => setActiveTab("marketplace")}
        />
        <NavItem
          icon={<Bookmark size={20} />}
          label="Saved"
          active={activeTab === "saved"}
          onClick={() => setActiveTab("saved")}
        />
        <NavItem
          icon={<Star size={20} />}
          label="Favorites"
          active={activeTab === "favorites"}
          onClick={() => setActiveTab("favorites")}
        />
        <NavItem
          icon={<Settings size={20} />}
          label="Settings"
          active={activeTab === "settings"}
          onClick={() => setActiveTab("settings")}
        />
      </nav>

      {/* <div className="mt-auto flex-shrink-0 border-t border-gray-200 p-4">
        <h3 className="mb-2 text-sm font-medium text-gray-500">Your Shortcuts</h3>
        <ShortcutItem image="/placeholder.svg?height=32&width=32" label="Game Community" />
        <ShortcutItem image="/placeholder.svg?height=32&width=32" label="Pixel Think (Member)" />
        <ShortcutItem image="/placeholder.svg?height=32&width=32" label="8 Ball Pool" />
        <ShortcutItem image="/placeholder.svg?height=32&width=32" label="Gemblo" />
      </div> */}
    </div>
  );
}

// Component for navigation items in the left sidebar
function NavItem({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`mb-1 flex w-full items-center space-x-3 rounded-lg p-2 text-left ${
        active ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <span className={active ? "text-blue-600" : "text-gray-500"}>{icon}</span>
      <span className="font-medium">{label}</span>
    </button>
  );
}

// Component for shortcut items in the left sidebar
// function ShortcutItem({ image, label }: { image: string; label: string }) {
//   return (
//     <div className="flex cursor-pointer items-center space-x-3 rounded-lg p-2 hover:bg-gray-100">
//       <Avatar className="h-8 w-8 rounded-lg">
//         <AvatarImage src={image} alt={label} />
//         <AvatarFallback className="rounded-lg bg-gray-200 text-xs text-gray-600">
//           {label.substring(0, 2)}
//         </AvatarFallback>
//       </Avatar>
//       <span className="text-sm font-medium text-gray-700">{label}</span>
//     </div>
//   );
// }

// Component for navigation icons in the top bar
function NavIcon({ icon, active }: { icon: React.ReactNode; active: boolean }) {
  return (
    <button className={`rounded-lg p-2 ${active ? "text-blue-600" : "text-gray-500 hover:bg-gray-100"}`}>{icon}</button>
  );
}

// Component for icons with notification badges
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

// Component for story items
function StoryItem({ image, avatar, name }: { image: string; avatar: string; name: string }) {
  return (
    <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg">
      <img src={image || "/image (3).png"} alt={name} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <Avatar className="absolute top-2 left-2 h-8 w-8 border-2 border-blue-500">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback className="bg-blue-500 text-xs text-white">{name.substring(0, 2)}</AvatarFallback>
      </Avatar>
      <span className="absolute bottom-2 left-2 text-xs font-medium text-white">{name}</span>
    </div>
  );
}

// Component for post action buttons
function PostActionButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex flex-1 items-center justify-center space-x-2 rounded-lg p-2 hover:bg-gray-100">
      {icon}
      <span className="text-sm text-gray-600">{label}</span>
    </button>
  );
}

// Component for friend requests
function FriendRequest({ name, avatar, mutualCount }: { name: string; avatar: string; mutualCount: number }) {
  return (
    <div className="mb-4">
      <div className="mb-2 flex items-center space-x-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="bg-purple-500 text-white">{name.substring(0, 2)}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">{name}</div>
          <div className="flex items-center text-xs text-gray-500">
            <div className="mr-1 flex -space-x-1">
              <Avatar className="h-4 w-4 border border-white">
                <AvatarImage src="/placeholder.svg?height=16&width=16" alt="Mutual" />
                <AvatarFallback className="bg-gray-200 text-[8px] text-gray-600">1</AvatarFallback>
              </Avatar>
              <Avatar className="h-4 w-4 border border-white">
                <AvatarImage src="/placeholder.svg?height=16&width=16" alt="Mutual" />
                <AvatarFallback className="bg-gray-200 text-[8px] text-gray-600">2</AvatarFallback>
              </Avatar>
            </div>
            {mutualCount} mutual friends
          </div>
        </div>
      </div>
      <div className="flex space-x-2">
        <Button className="h-8 flex-1 bg-blue-500 text-sm text-white hover:bg-blue-600">Confirm</Button>
        <Button variant="outline" className="h-8 flex-1 text-sm">
          Delete
        </Button>
      </div>
    </div>
  );
}
