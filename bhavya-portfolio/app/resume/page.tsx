import Link from "next/link";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/components/motion-wrapper";

export default function ResumePage() {
  return (
    <Section first divider={false} className="pt-4 sm:pt-6">
      <MotionWrapper>
        <SectionHeading
          eyebrow="Resume"
          title="Professional Snapshot"
          description="A concise overview of experience, leadership, and strategic problem-solving."
        />
      </MotionWrapper>

      <MotionWrapper>
        <div className="overflow-hidden rounded-3xl border border-border/15 bg-gradient-to-br from-primary/12 via-card/50 to-transparent p-8 text-center shadow-glow-sm sm:rounded-4xl sm:p-12 md:p-16">
          <div
            className="mx-auto mb-8 aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-2xl border border-border/10 sm:mb-10 sm:aspect-[16/9] sm:rounded-3xl md:h-64 md:aspect-auto lg:max-w-3xl"
            aria-hidden
          >
            <div className="h-full w-full bg-gradient-to-br from-primary/25 to-transparent" />
          </div>

          <p className="text-body-lg mx-auto max-w-2xl text-muted-foreground">
            Explore my professional experience, product work, leadership
            initiatives, and analytical problem-solving journey.
          </p>

          <Button asChild size="lg" className="mt-8 w-full sm:mt-10 sm:w-auto">
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              View Resume ↗
            </Link>
          </Button>
        </div>
      </MotionWrapper>
    </Section>
  );
}
