/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MediaBackdropProps {
  media: { type: "image" | "video"; src: string }[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function BackdropMedia({ media, initialIndex, isOpen, onClose }: MediaBackdropProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  //   useEffect(() => {
  //     const handleKeyDown = (e: KeyboardEvent) => {
  //       if (!isOpen) return;

  //       if (e.key === "Escape") {
  //         onClose();
  //       } else if (e.key === "ArrowLeft") {
  //         handlePrevious();
  //       } else if (e.key === "ArrowRight") {
  //         handleNext();
  //       }
  //     };

  //     window.addEventListener("keydown", handleKeyDown);
  //     return () => window.removeEventListener("keydown", handleKeyDown);
  //   }, [isOpen, onClose]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={onClose}>
      <div
        className="relative flex h-full max-h-screen w-full max-w-screen-xl items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </Button>

        {/* Media display */}
        <div className="relative flex h-full w-full items-center justify-center p-4">
          {media[currentIndex].type === "video" ? (
            <video src={media[currentIndex].src} controls autoPlay className="max-h-full max-w-full object-contain" />
          ) : (
            <img
              src={media[currentIndex].src || "/placeholder.svg"}
              alt={`Media ${currentIndex + 1}`}
              className="max-h-full max-w-full object-contain"
            />
          )}
        </div>

        {/* Navigation buttons */}
        {media.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 left-4 -translate-y-1/2 text-white hover:bg-white/20"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-8 w-8" />
              <span className="sr-only">Previous</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 right-4 -translate-y-1/2 text-white hover:bg-white/20"
              onClick={handleNext}
            >
              <ChevronRight className="h-8 w-8" />
              <span className="sr-only">Next</span>
            </Button>

            {/* Pagination indicators */}
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 space-x-2">
              {media.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
