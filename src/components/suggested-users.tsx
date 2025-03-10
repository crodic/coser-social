"use client";

import { useState } from "react";
import { Check, Plus, RefreshCw, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Sample data for suggested users
const suggestedUsers = [
  {
    id: 1,
    name: "MechaBuilder",
    avatar: "/placeholder.svg?height=40&width=40",
    category: "Mecha Cosplay",
    mutualFollowers: 12,
  },
  {
    id: 2,
    name: "PropMaster",
    avatar: "/placeholder.svg?height=40&width=40",
    category: "Prop Designer",
    mutualFollowers: 8,
  },
  {
    id: 3,
    name: "AnimeGuru",
    avatar: "/placeholder.svg?height=40&width=40",
    category: "Anime Cosplay",
    mutualFollowers: 15,
  },
  {
    id: 4,
    name: "SFXMakeup",
    avatar: "/placeholder.svg?height=40&width=40",
    category: "SFX Makeup Artist",
    mutualFollowers: 6,
  },
  {
    id: 5,
    name: "FabricWizard",
    avatar: "/placeholder.svg?height=40&width=40",
    category: "Costume Designer",
    mutualFollowers: 10,
  },
];

export default function SuggestedUsers() {
  const [following, setFollowing] = useState<number[]>([]);
  const [dismissed, setDismissed] = useState<number[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleFollow = (id: number) => {
    setFollowing((prev) => (prev.includes(id) ? prev.filter((followId) => followId !== id) : [...prev, id]));
  };

  const handleDismiss = (id: number) => {
    setDismissed((prev) => [...prev, id]);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate refreshing suggestions
    setTimeout(() => {
      setDismissed([]);
      setIsRefreshing(false);
    }, 600);
  };

  const visibleUsers = suggestedUsers.filter((user) => !dismissed.includes(user.id));

  return (
    <Card className="w-full max-w-xs border-none pt-0 shadow-none">
      <CardHeader className="flex flex-row items-center justify-between px-4 pt-4 pb-2">
        <CardTitle className="text-lg font-semibold">Suggested For You</CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleRefresh} disabled={isRefreshing}>
          <RefreshCw className={cn("h-4 w-4", isRefreshing && "animate-spin")} />
        </Button>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        {visibleUsers.length > 0 ? (
          <div className="space-y-3">
            {visibleUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{user.name}</span>
                    <span className="text-muted-foreground text-xs">{user.category}</span>
                    <span className="text-muted-foreground text-xs">{user.mutualFollowers} mutual followers</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant={following.includes(user.id) ? "default" : "outline"}
                    size="icon"
                    className="h-7 w-7 rounded-full"
                    onClick={() => handleFollow(user.id)}
                  >
                    {following.includes(user.id) ? <Check className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground h-7 w-7 rounded-full"
                    onClick={() => handleDismiss(user.id)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <p className="text-muted-foreground mb-2 text-sm">No more suggestions right now</p>
            <Button variant="outline" size="sm" className="mt-2" onClick={handleRefresh}>
              Refresh Suggestions
            </Button>
          </div>
        )}

        <div className="mt-4">
          <Button variant="link" className="text-muted-foreground h-auto p-0 text-xs">
            View All Suggestions
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
