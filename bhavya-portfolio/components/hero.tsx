import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";
import { Container } from "./container";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "./motion-wrapper";
import { RESUME_PDF_URL, SITE_CONFIG } from "@/lib/constants";

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
                Hi, I&apos;m Bhavya - I turn
                <span className="font-medium text-primary"> data</span>{" "} into
                <span className="font-medium text-primary"> decisions</span>
                <br />
              </h1>

              <p className="text-body-lg mt-5 max-w-xl text-muted-foreground sm:mt-7">
                I&apos;m an IIT Roorkee student specializing in analytics and product
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
            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
                <div className="mx-auto max-w-[360px]">
                  <div className="overflow-hidden rounded-[2rem] border border-white/10">
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src="/images/profile.jpg"
                        alt="Bhavya Dixit"
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="(max-width: 360px) 100vw, 360px"
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-center gap-10">
                    <Link
                      href={SITE_CONFIG.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="text-white/70 transition hover:scale-110 hover:text-primary"
                    >
                      <Linkedin size={30} strokeWidth={1.8} />
                    </Link>

                    <Link
                      href={`mailto:${SITE_CONFIG.email}`}
                      aria-label="Email"
                      className="text-white/70 transition hover:scale-110 hover:text-primary"
                    >
                      <Mail size={30} strokeWidth={1.8} />
                    </Link>

                    <Link
                      href={`tel:${SITE_CONFIG.phone}`}
                      aria-label="Phone"
                      className="text-white/70 transition hover:scale-110 hover:text-primary"
                    >
                      <Phone size={30} strokeWidth={1.8} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}
