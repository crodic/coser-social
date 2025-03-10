import Image from "next/image";
import Link from "next/link";
import { Heart, MessageCircle } from "lucide-react";

export default function ProfileGallery() {
  // Sample gallery items
  const galleryItems = [
    {
      id: 1,
      type: "image",
      src: "/image (1).png",
      alt: "Cosplay 1",
      likes: "2.4K",
      comments: "128",
    },
    {
      id: 2,
      type: "image",
      src: "/image (2).png",
      alt: "Cosplay 2",
      likes: "1.8K",
      comments: "96",
    },
    {
      id: 3,
      type: "video",
      src: "/image (4).png",
      alt: "Cosplay Video",
      duration: "2:45",
      likes: "3.2K",
      comments: "215",
    },
    {
      id: 4,
      type: "image",
      src: "/image (2).png",
      alt: "Cosplay 3",
      likes: "1.5K",
      comments: "84",
    },
    {
      id: 5,
      type: "image",
      src: "/image (8).png",
      alt: "Cosplay 4",
      likes: "2.1K",
      comments: "112",
    },
    {
      id: 6,
      type: "image",
      src: "/image (6).png",
      alt: "Cosplay 5",
      likes: "1.9K",
      comments: "103",
    },
    {
      id: 7,
      type: "video",
      src: "/image (1).png",
      alt: "Cosplay Video 2",
      duration: "1:30",
      likes: "2.8K",
      comments: "176",
    },
    {
      id: 8,
      type: "image",
      src: "/image (5).png",
      alt: "Cosplay 6",
      likes: "1.7K",
      comments: "92",
    },
    {
      id: 9,
      type: "image",
      src: "/image.png",
      alt: "Cosplay 7",
      likes: "2.2K",
      comments: "118",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4">
      {galleryItems.map((item) => (
        <Link href="#" key={item.id} className="group relative overflow-hidden rounded-lg">
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src={item.src || "/placeholder.svg"}
              alt={item.alt}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/40" />

            {/* Video indicator */}
            {item.type === "video" && (
              <>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-background/80 rounded-full p-3 opacity-80 group-hover:opacity-100">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="bg-background/80 absolute right-2 bottom-2 rounded px-2 py-1 text-xs">
                  {item.duration}
                </div>
              </>
            )}

            {/* Stats on hover */}
            <div className="absolute right-0 bottom-0 left-0 flex items-center justify-between p-2 opacity-0 transition-opacity group-hover:opacity-100">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-white">
                  <Heart className="h-4 w-4" />
                  <span className="text-sm">{item.likes}</span>
                </div>
                <div className="flex items-center gap-1 text-white">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm">{item.comments}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
