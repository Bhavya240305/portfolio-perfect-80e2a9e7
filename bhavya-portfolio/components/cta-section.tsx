import Link from "next/link";
import { Section } from "./section";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "./motion-wrapper";

export function CTASection() {
  return (
    <Section>
      <MotionWrapper>
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/12 via-card/50 to-transparent p-6 text-center shadow-glow-sm sm:rounded-4xl md:p-8 lg:p-10">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl md:h-56 md:w-56"
            aria-hidden
          />

          <div className="relative">
            <p className="text-eyebrow mb-3">Get in touch</p>

            <h2 className="font-serif text-heading text-balance text-foreground">
              Let&apos;s work together
            </h2>

            <p className="text-body-lg mx-auto mt-4 max-w-xl text-muted-foreground md:mt-5">
              Open to internships, collaborations and high-impact product roles
            </p>

            <div className="mx-auto mt-6 flex w-full max-w-md flex-col gap-3 sm:max-w-lg sm:flex-row sm:justify-center md:mt-7">
              <Button asChild size="lg" className="w-full sm:flex-1">
                <Link href="/contact">Contact me</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:flex-1"
              >
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </MotionWrapper>
    </Section>
  );
}
