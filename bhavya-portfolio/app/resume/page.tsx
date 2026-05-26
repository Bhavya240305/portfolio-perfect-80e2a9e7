import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/components/motion-wrapper";
import { RESUME_PDF_URL } from "@/lib/constants";

export default function ResumePage() {
  return (
    <Section first divider={false} className="pt-4 sm:pt-6">
      <MotionWrapper>
        <SectionHeading eyebrow="Resume" />
      </MotionWrapper>

      <MotionWrapper>
        <div className="overflow-hidden rounded-3xl border border-border/15 bg-gradient-to-br from-primary/12 via-card/50 to-transparent p-8 text-center shadow-glow-sm sm:rounded-4xl sm:p-12 md:p-16">
          <div
            className="mx-auto mb-8 aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-2xl border border-border/10 sm:mb-10 sm:aspect-[16/9] sm:rounded-3xl md:aspect-auto md:h-64 lg:max-w-3xl"
            aria-hidden
          >
            <div className="h-full w-full bg-gradient-to-br from-primary/25 to-transparent" />
          </div>

          <Button asChild size="lg" className="mt-8 w-full sm:mt-10 sm:w-auto">
            <a href={RESUME_PDF_URL} download>
              Download Resume
            </a>
          </Button>
        </div>
      </MotionWrapper>
    </Section>
  );
}
