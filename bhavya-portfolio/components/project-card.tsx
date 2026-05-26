import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
        "group block h-full rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:rounded-4xl",
        className
      )}
    >
      <GlassCard
        interactive
        className="project-card-interactive flex h-full min-h-[280px] flex-col sm:min-h-[300px]"
      >
        <Badge variant="chip">{category}</Badge>

        <h3 className="mt-4 font-serif text-heading-sm sm:mt-5">{title}</h3>

        <p className="text-body mt-3 flex-1 text-muted-foreground sm:mt-4">
          {description}
        </p>

        <span className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-primary sm:mt-5 [@media(hover:hover)]:group-hover:gap-2.5">
          View Pdf
          <ArrowUpRight
            className="h-4 w-4 transition-transform [@media(hover:hover)]:group-hover:translate-x-0.5 [@media(hover:hover)]:group-hover:-translate-y-0.5"
            aria-hidden
          />
        </span>
      </GlassCard>
    </Link>
  );
}
