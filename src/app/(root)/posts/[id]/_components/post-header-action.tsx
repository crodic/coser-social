"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PostHeaderAction() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <header className="sticky top-0 z-10 flex items-center border-b border-gray-200 bg-white/80 p-4 backdrop-blur-sm">
      <Button variant="ghost" size="icon" className="mr-4" onClick={handleBack}>
        <ArrowLeft size={20} />
        <span className="sr-only">Back</span>
      </Button>
      <h1 className="text-xl font-bold">Bài viết</h1>
    </header>
  );
}
