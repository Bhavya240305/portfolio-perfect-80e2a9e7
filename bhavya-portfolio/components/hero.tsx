import Link from "next/link";
import { Container } from "./container";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "./motion-wrapper";
import { GlassCard } from "./glass-card";
import { RESUME_PDF_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-8 sm:pb-20 sm:pt-10 md:pb-24 lg:pb-28">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -left-1/4 top-0 h-[min(80vh,600px)] w-[min(120vw,800px)] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-1/4 top-1/3 h-64 w-64 rounded-full bg-accent/5 blur-3xl md:h-96 md:w-96" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <MotionWrapper>
            <div className="max-w-xl lg:max-w-none">
              <p className="text-eyebrow mb-4 sm:mb-5">Product & Data Analyst</p>

              <h1 className="font-serif text-display-lg text-foreground">
                Hi, I&apos;m Bhavya
                <br />
              </h1>

              <p className="text-body-lg mt-5 max-w-xl text-muted-foreground sm:mt-7">
                An IIT Roorkee student specializing in analytics and product
                thinking, transforming complex data and ambiguous problems into
                <span className="font-medium text-primary"> clear insights</span>{" "}
                and
                <span className="font-medium text-primary">
                  {" "}
                  actionable solutions
                </span>
              </p>

              <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:max-w-md sm:flex-row sm:gap-4">
                <Button asChild size="lg" className="w-full sm:flex-1">
                  <Link href="/projects">View Projects</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:flex-1"
                >
                  <a href={RESUME_PDF_URL} download>
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.08} className="w-full">
            <GlassCard large className="w-full">
              <div
                className="mb-6 aspect-[5/4] w-full overflow-hidden rounded-2xl border border-border/10 bg-gradient-to-br from-primary/25 via-primary/10 to-transparent sm:mb-8 sm:aspect-[16/10] sm:rounded-3xl lg:aspect-auto lg:h-60 xl:h-72"
                aria-hidden
              >
                <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.35),transparent_55%)]" />
              </div>

              <blockquote className="text-body-lg font-medium leading-snug text-foreground">
                “I turn data into decisions.”
              </blockquote>

              <p className="mt-4 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:mt-5 sm:text-xs sm:tracking-[0.2em]">
                Product × Strategy × Analytics
              </p>
            </GlassCard>
          </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}
