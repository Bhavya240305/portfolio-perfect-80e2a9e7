import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "./glass-card";
import { cn } from "@/lib/utils";

export function ProjectCard({
  title,
  description,
  category,
  href,
  className,
}: {
  title: string;
  description: string;
  category: string;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group block h-full rounded-4xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <GlassCard
        interactive
        className="flex h-full min-h-[min(100%,320px)] flex-col sm:min-h-[340px]"
      >
        <Badge>{category}</Badge>

        <h3 className="mt-5 font-serif text-heading-sm sm:mt-6">{title}</h3>

        <p className="text-body mt-3 flex-1 text-muted-foreground sm:mt-4">
          {description}
        </p>

        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary sm:mt-6 [@media(hover:hover)]:group-hover:gap-2">
          View Case Study
          <span
            aria-hidden
            className="transition-transform [@media(hover:hover)]:group-hover:translate-x-0.5"
          >
            →
          </span>
        </span>
      </GlassCard>
    </Link>
  );
}
