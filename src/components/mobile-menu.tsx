"use client";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Home, Users, Calendar, FileText, Grid, ShoppingBag, Bookmark, Star, Settings } from "lucide-react";

export function MobileMenu({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="mr-2 md:hidden">
          <Menu size={24} />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex h-full w-72 flex-col p-0">
        <SheetHeader className="hidden">
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto">
          <div className="flex h-full flex-col">
            <div className="border-b border-gray-200 p-4">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10 rounded-full bg-blue-500">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Lerro Mao" />
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

            {/* <div className="mt-auto border-t border-gray-200 p-4">
              <h3 className="mb-2 text-sm font-medium text-gray-500">Your Shortcuts</h3>
              <ShortcutItem image="/placeholder.svg?height=32&width=32" label="Game Community" />
              <ShortcutItem image="/placeholder.svg?height=32&width=32" label="Pixel Think (Member)" />
              <ShortcutItem image="/placeholder.svg?height=32&width=32" label="8 Ball Pool" />
              <ShortcutItem image="/placeholder.svg?height=32&width=32" label="Gemblo" />
            </div> */}
          </div>
        </div>
      </SheetContent>
    </Sheet>
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
