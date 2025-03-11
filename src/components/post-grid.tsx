/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef, useState } from "react";
import { BackdropMedia } from "./backdrop-media";

/* eslint-disable @next/next/no-img-element */
interface PostGridProps {
  paths: { type: "video" | "image"; src: string }[];
  maxDisplay?: number;
}

export function PostGrid({ paths, maxDisplay = 4 }: PostGridProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);
  const totalPaths = paths.length;
  const displayPaths = paths.slice(0, maxDisplay);
  const remainingPaths = Math.max(0, totalPaths - maxDisplay);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (videoRef.current) {
        if (
          document.fullscreenElement ||
          (document as any).webkitFullscreenElement ||
          (document as any).msFullscreenElement ||
          (document as any).mozFullScreenElement
        ) {
          videoRef.current.classList.remove("object-cover");
          videoRef.current.classList.add("object-contain");
        } else {
          if (videoRef.current.dataset.single === "true") return;
          videoRef.current.classList.add("object-cover");
          videoRef.current.classList.remove("object-contain");
        }
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
    };
  }, []);

  const onMediaClick = (index: number) => {
    setIsOpen(true);
    setInitialIndex(index);
  };

  if (totalPaths === 0) return null;

  const renderMedia = (path: { type: "video" | "image"; src: string }, index: number, isSingle: boolean = false) => {
    return path.type === "video" ? (
      <video
        key={index}
        src={path.src}
        ref={videoRef}
        data-single={isSingle}
        controls
        onClick={(e) => {
          e.preventDefault();
          onMediaClick(index);
        }}
        className={`bg-accent h-full w-full cursor-pointer ${isSingle ? "max-h-[500px] object-contain" : "object-cover"}`}
      ></video>
    ) : (
      <img
        key={index}
        src={path.src || "/placeholder.svg"}
        alt={`Post content ${index + 1}`}
        onClick={() => onMediaClick(index)}
        className={`bg-accent h-full w-full cursor-pointer ${isSingle ? "max-h-[500px] object-contain" : "object-cover"}`}
      />
    );
  };

  if (totalPaths === 1) {
    return (
      <div className="relative max-h-[500px] overflow-hidden rounded-lg">
        {renderMedia(paths[0], 0, true)}{" "}
        <BackdropMedia media={paths} initialIndex={initialIndex} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    );
  }

  if (totalPaths === 2) {
    return (
      <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-lg">
        {displayPaths.map((path, i) => (
          <div key={i} className="aspect-square">
            {renderMedia(path, i)}
          </div>
        ))}
        <BackdropMedia media={paths} initialIndex={initialIndex} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    );
  }

  if (totalPaths === 3) {
    return (
      <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-lg">
        <div className="col-span-2 row-span-2 aspect-video">{renderMedia(paths[0], 0)}</div>
        <div className="aspect-square">{renderMedia(paths[1], 1)}</div>
        <div className="aspect-square">{renderMedia(paths[2], 2)}</div>
        <BackdropMedia media={paths} initialIndex={initialIndex} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    );
  }

  if (totalPaths === 4) {
    return (
      <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-lg">
        {displayPaths.map((path, i) => (
          <div key={i} className="aspect-square">
            {renderMedia(path, i)}
          </div>
        ))}
        <BackdropMedia media={paths} initialIndex={initialIndex} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-6 gap-1 overflow-hidden rounded-lg">
      <div className="col-span-6 aspect-video">{renderMedia(paths[0], 0)}</div>
      <div className="col-span-2 aspect-square">{renderMedia(paths[1], 1)}</div>
      <div className="col-span-2 aspect-square">{renderMedia(paths[2], 2)}</div>
      <div className="relative col-span-2 aspect-square">
        {renderMedia(paths[3], 3)}
        {remainingPaths > 0 && (
          <div
            className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/50"
            onClick={() => onMediaClick(3)}
          >
            <span className="text-2xl font-medium text-white">+{remainingPaths}</span>
          </div>
        )}
      </div>
      <BackdropMedia media={paths} initialIndex={initialIndex} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
