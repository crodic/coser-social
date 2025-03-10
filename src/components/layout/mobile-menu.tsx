"use client";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import SidebarContent from "./sidebar-content";

export function MobileMenu() {
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
          <SidebarContent />
        </div>
      </SheetContent>
    </Sheet>
  );
}
