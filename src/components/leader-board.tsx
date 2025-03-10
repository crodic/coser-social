"use client";

import { useState } from "react";
import { Crown, Medal, Star, Trophy, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

// Sample data for the leaderboard
const cosplayers = [
  {
    id: 1,
    name: "AkiraKosplay",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 12450,
    followers: 45.2,
    rank: 1,
    isFollowing: true,
    trending: true,
    badge: "gold",
  },
  {
    id: 2,
    name: "CosplayQueen",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 10890,
    followers: 38.7,
    rank: 2,
    isFollowing: false,
    trending: true,
    badge: "silver",
  },
  {
    id: 3,
    name: "MangaMaster",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 9750,
    followers: 32.1,
    rank: 3,
    isFollowing: true,
    trending: false,
    badge: "bronze",
  },
  {
    id: 4,
    name: "AnimeArtist",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 8640,
    followers: 29.8,
    rank: 4,
    isFollowing: false,
    trending: true,
    badge: null,
  },
  {
    id: 5,
    name: "CosplayKing",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 7920,
    followers: 25.3,
    rank: 5,
    isFollowing: true,
    trending: false,
    badge: null,
  },
  {
    id: 6,
    name: "OtakuPrincess",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 6840,
    followers: 21.9,
    rank: 6,
    isFollowing: false,
    trending: false,
    badge: null,
  },
  {
    id: 7,
    name: "CosplayNinja",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 5730,
    followers: 18.4,
    rank: 7,
    isFollowing: true,
    trending: true,
    badge: null,
  },
];

export default function Leaderboard() {
  const [following, setFollowing] = useState<number[]>(
    cosplayers.filter((cosplayer) => cosplayer.isFollowing).map((cosplayer) => cosplayer.id),
  );

  const handleFollow = (id: number) => {
    setFollowing((prev) => (prev.includes(id) ? prev.filter((followId) => followId !== id) : [...prev, id]));
  };

  const getBadgeIcon = (badge: string | null) => {
    switch (badge) {
      case "gold":
        return <Crown className="h-4 w-4 text-amber-400" />;
      case "silver":
        return <Medal className="h-4 w-4 text-slate-400" />;
      case "bronze":
        return <Trophy className="h-4 w-4 text-amber-700" />;
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-xs border-none shadow-none">
      <CardHeader className="px-4 pt-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Top Cosplayers</CardTitle>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Users className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="px-2 pb-4">
        <div className="space-y-2">
          {cosplayers.map((cosplayer) => (
            <div
              key={cosplayer.id}
              className={cn("flex items-center justify-between rounded-lg p-2 transition-colors", "hover:bg-muted/50")}
            >
              <div className="flex items-center gap-3">
                <div className="bg-muted relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                  <span className="bg-primary text-primary-foreground absolute -top-1 -left-1 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold">
                    {cosplayer.rank}
                  </span>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={cosplayer.avatar} alt={cosplayer.name} />
                    <AvatarFallback>{cosplayer.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium">{cosplayer.name}</span>
                    {getBadgeIcon(cosplayer.badge)}
                  </div>
                  <div className="text-muted-foreground flex items-center gap-1 text-xs">
                    <Star className="h-3 w-3" />
                    <span>{cosplayer.points.toLocaleString()} pts</span>
                  </div>
                </div>
              </div>
              <Button
                variant={following.includes(cosplayer.id) ? "default" : "outline"}
                size="sm"
                className={cn(
                  "h-7 w-20 rounded-full text-xs",
                  following.includes(cosplayer.id) ? "bg-primary text-primary-foreground" : "text-muted-foreground",
                )}
                onClick={() => handleFollow(cosplayer.id)}
              >
                {following.includes(cosplayer.id) ? "Following" : "Follow"}
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Button variant="ghost" className="text-muted-foreground text-xs">
            View All Rankings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
