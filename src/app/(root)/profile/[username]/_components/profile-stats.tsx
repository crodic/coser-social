import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Camera, Heart, Users } from "lucide-react";

export default function ProfileStats() {
  const stats = [
    {
      label: "Bài viết",
      value: "248",
      icon: <MessageSquare className="h-5 w-5" />,
      href: "#",
    },
    {
      label: "Ảnh",
      value: "1.2K",
      icon: <Camera className="h-5 w-5" />,
      href: "#",
    },
    {
      label: "Lượt thích",
      value: "36.5K",
      icon: <Heart className="h-5 w-5" />,
      href: "#",
    },
    {
      label: "Người theo dõi",
      value: "128K",
      icon: <Users className="h-5 w-5" />,
      href: "#",
    },
    {
      label: "Đang theo dõi",
      value: "420",
      icon: <Users className="h-5 w-5" />,
      href: "#",
    },
  ];

  return (
    <Card className="bg-background/60 supports-[backdrop-filter]:bg-background/60 mt-8 backdrop-blur">
      <CardContent className="p-0">
        <div className="scrollbar-none flex min-w-full divide-x overflow-x-auto">
          {stats.map((stat, index) => (
            <Link
              key={index}
              href={stat.href}
              className="hover:bg-muted/50 flex min-w-[100px] flex-1 flex-col items-center justify-center gap-1 p-4 text-center transition-colors"
            >
              <div className="text-muted-foreground">{stat.icon}</div>
              <span className="text-xl font-semibold tracking-tight">{stat.value}</span>
              <span className="text-muted-foreground text-xs">{stat.label}</span>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
