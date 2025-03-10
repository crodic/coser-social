"use client";

import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import SearchInput from "../search-input";
import useRootState from "@/stores/use-root-state";

export default function SearchList() {
  const open = useRootState((state) => state.openSearchVisible);
  const onOpenChange = useRootState((state) => state.onOpenSearchVisibleChange);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 bg-white p-4 md:hidden">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" className="mr-2" onClick={() => onOpenChange(false)}>
          <ArrowLeft size={20} />
        </Button>
        <SearchInput className="w-full flex-1" />
      </div>
    </div>
  );
}
