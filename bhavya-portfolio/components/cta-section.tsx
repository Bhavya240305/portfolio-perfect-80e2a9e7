import Link from "next/link";
import { Section } from "./section";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "./motion-wrapper";

export function CTASection() {
  return (
    <Section className="pb-20 sm:pb-24 md:pb-28">
      <MotionWrapper>
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/15 via-card/40 to-transparent p-8 text-center shadow-glow sm:rounded-4xl sm:p-12 md:p-16 lg:p-20">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl"
            aria-hidden
          />

          <div className="relative">
            <p className="text-eyebrow mb-3 sm:mb-4">Get In Touch</p>

            <h2 className="font-serif text-display mx-auto max-w-4xl text-foreground">
              Let’s Work Together
            </h2>

            <p className="text-body-lg mx-auto mt-5 max-w-2xl text-muted-foreground sm:mt-7">
              Open to internships, collaborations, and high-impact product roles
            </p>

            <div className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-lg sm:flex-row sm:justify-center sm:gap-4">
              <Button asChild size="lg" className="w-full sm:flex-1">
                <Link href="/contact">Contact</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:flex-1"
              >
                <Link href="/projects">Explore Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </MotionWrapper>
    </Section>
  );
}
