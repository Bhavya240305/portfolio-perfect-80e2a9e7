import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Linkedin, Mail, Phone } from "lucide-react";
import { Container } from "./container";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "./motion-wrapper";
import { RESUME_PDF_URL, SITE_CONFIG } from "@/lib/constants";


export function Hero() {
  return (
    <section className="relative overflow-hidden py-12 md:py-16 lg:py-[4.5rem]">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -left-1/4 top-0 h-[min(70vh,520px)] w-[min(110vw,720px)] rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute -right-1/4 top-1/4 h-56 w-56 rounded-full bg-accent/6 blur-3xl md:h-80 md:w-80" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 xl:gap-14">
          <MotionWrapper>
            <div className="max-w-xl lg:max-w-none">
              <p className="text-eyebrow mb-4 md:mb-5">
                Aspiring Product Manager
              </p>

              <h1 className="font-serif text-display-lg text-balance text-foreground">
                Turning Ambiguity into{" "}
                <span className="text-primary">Product Decisions</span>
              </h1>

              <p className="text-body-lg prose-width mt-5 text-muted-foreground md:mt-6">
              I&apos;m Bhavya Dixit, an IIT Roorkee undergraduate passionate about building user-centric products through strategy, experimentation and data-backed execution.
              </p>


              <div className="mt-6 flex w-full flex-col gap-3 sm:max-w-lg sm:flex-row sm:gap-3 md:mt-8">
                <Button asChild size="lg" className="w-full sm:flex-1">
                  <Link href="/projects">
                    View Projects
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:flex-1"
                >
                  <a href={RESUME_PDF_URL} download>
                    Download resume
                  </a>
                </Button>
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.08} className="w-full lg:justify-self-end">
            <div className="mx-auto w-full max-w-[min(100%,22rem)] lg:max-w-[20rem] xl:max-w-[22rem]">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 shadow-glow backdrop-blur-xl md:rounded-[2rem] md:p-6">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 md:rounded-[1.75rem]">
                  <div className="relative aspect-[4/5] w-full sm:aspect-[3/4]">
                    <Image
                      src="/images/profile.jpg"
                      alt="Bhavya Dixit"
                      fill
                      className="object-cover object-[center_12%]"
                      priority
                      sizes="(max-width: 1024px) 88vw, 22rem"
                    />
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-center gap-8 md:mt-6 md:gap-10">
                  <Link
                    href={SITE_CONFIG.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="touch-target text-foreground/65 transition hover:scale-110 hover:text-primary"
                  >
                    <Linkedin size={26} strokeWidth={1.75} />
                  </Link>
                  <Link
                    href={`mailto:${SITE_CONFIG.email}`}
                    aria-label="Email"
                    className="touch-target text-foreground/65 transition hover:scale-110 hover:text-primary"
                  >
                    <Mail size={26} strokeWidth={1.75} />
                  </Link>
                  <Link
                    href={`tel:${SITE_CONFIG.phone}`}
                    aria-label="Phone"
                    className="touch-target text-foreground/65 transition hover:scale-110 hover:text-primary"
                  >
                    <Phone size={26} strokeWidth={1.75} />
                  </Link>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}
