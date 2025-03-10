/* eslint-disable @next/next/no-img-element */
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function StoryItem({ image, avatar, name }: { image: string; avatar: string; name: string }) {
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
