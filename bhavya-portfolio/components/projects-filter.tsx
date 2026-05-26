"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const filters = ["All", "Product", "Strategy", "Analytics", "Growth"];

export function ProjectsFilter({
  active,
  setActive,
}: {
  active: string;
  setActive: (filter: string) => void;
}) {
  return (
    <div
      className="-mx-1 mb-8 flex gap-2 overflow-x-auto px-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:mb-10 sm:flex-wrap sm:gap-3 md:mb-12 [&::-webkit-scrollbar]:hidden"
      role="tablist"
      aria-label="Filter projects"
    >
      {filters.map((filter) => (
        <Button
          key={filter}
          type="button"
          role="tab"
          aria-selected={active === filter}
          variant={active === filter ? "default" : "secondary"}
          size="sm"
          className={cn("shrink-0 snap-start", active !== filter && "font-medium")}
          onClick={() => setActive(filter)}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
}
