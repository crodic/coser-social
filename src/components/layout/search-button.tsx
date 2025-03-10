"use client";

import { Search } from "lucide-react";
import { Button } from "../ui/button";
import useRootState from "@/stores/use-root-state";

export default function SearchButton() {
  const onOpenChange = useRootState((state) => state.onOpenSearchVisibleChange);
  return (
    <Button variant="ghost" size="icon" className="md:hidden" onClick={() => onOpenChange(true)}>
      <Search size={20} />
    </Button>
  );
}
