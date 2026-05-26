import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CaseStudyCoverPreview } from "./case-study-cover-preview";

export function PDFPreviewCard({
  pdf,
  title,
  coverImage,
  ctaLabel = "View Full PDF ↗",
}: {
  pdf: string;
  title: string;
  coverImage: string;
  ctaLabel?: string;
}) {
  return (
    <div className="w-full min-w-0 overflow-hidden rounded-3xl border border-border/10 bg-card/40 shadow-glow-sm backdrop-blur-xl sm:rounded-4xl">
      <CaseStudyCoverPreview src={coverImage} title={title} />

      <div className="flex flex-col gap-4 border-t border-border/10 px-5 py-6 sm:px-7 sm:py-7 md:px-8">
        <div>
          <p className="text-eyebrow mb-2">Deliverable</p>
          <h3 className="w-full min-w-0 break-words font-serif text-heading-sm leading-snug text-foreground">
            {title}
          </h3>
        </div>

        <Button asChild size="lg" className="w-full sm:w-auto sm:self-start">
          <Link href={pdf} target="_blank" rel="noopener noreferrer">
            {ctaLabel}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
