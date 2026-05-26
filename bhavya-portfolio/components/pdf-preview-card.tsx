import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassCard } from "./glass-card";

export function PDFPreviewCard({
  pdf,
  title,
  ctaLabel = "View Full PDF ↗",
}: {
  pdf: string;
  title: string;
  ctaLabel?: string;
}) {
  return (
    <GlassCard large className="w-full">
      <div
        className="mb-6 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/10 sm:mb-8 sm:aspect-[16/9] sm:rounded-3xl md:h-52 md:aspect-auto lg:h-64"
        aria-hidden
      >
        <div className="h-full w-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent" />
      </div>

      <h3 className="font-serif text-heading-sm sm:text-heading">{title}</h3>
  

      <Button asChild size="lg" className="mt-6 w-full sm:mt-8 sm:w-auto">
        <Link href={pdf} target="_blank" rel="noopener noreferrer">
          {ctaLabel}
        </Link>
      </Button>
    </GlassCard>
  );
}
