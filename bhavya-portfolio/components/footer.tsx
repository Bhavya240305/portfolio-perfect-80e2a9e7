import Link from "next/link";
import { ArrowUpRight, Linkedin, Mail, Phone } from "lucide-react";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { GlassCard } from "./glass-card";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

const contactLinks = [
  {
    href: SITE_CONFIG.linkedin,
    label: "linkedin.com/in/bhavyadixit",
    icon: Linkedin,
    external: true,
  },
  {
    href: `mailto:${SITE_CONFIG.email}`,
    label: SITE_CONFIG.email,
    icon: Mail,
    external: false,
  },
  {
    href: `tel:${SITE_CONFIG.phone}`,
    label: SITE_CONFIG.phone,
    icon: Phone,
    external: false,
  },
] as const;

export function Footer() {
  return (
    <footer id="contact" className="section-divider section-padding pb-safe">
      <Container>
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's work together"
          titleClassName="text-heading-sm"
          description="Open to internships, collaborations and high-impact product roles."
          align="center"
          className="mx-auto max-w-3xl"
        />

        <div className="mt-6 flex justify-center md:mt-7">
          <Button asChild size="lg">
            <Link href={`mailto:${SITE_CONFIG.email}`}>
              Contact
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-4 md:mt-10">
          {contactLinks.map(({ href, label, icon: Icon, external }) => (
            <Link
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group block rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <GlassCard
                interactive
                className="flex min-w-0 items-center gap-4 !p-4 sm:!p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border/15 bg-card/60 transition group-hover:border-primary/30 group-hover:bg-primary/10 sm:h-12 sm:w-12">
                  <Icon
                    size={20}
                    className="text-foreground/70 transition group-hover:text-primary"
                    aria-hidden
                  />
                </div>
                <span className="text-body min-w-0 flex-1 break-words font-medium text-foreground/85 transition group-hover:text-primary sm:break-normal">
                  {label}
                </span>
                <ArrowUpRight
                  className="ml-auto h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition group-hover:text-primary group-hover:opacity-100"
                  aria-hidden
                />
              </GlassCard>
            </Link>
          ))}
        </div>

        <p className="mt-8 border-t border-border/[0.07] pt-6 text-center text-xs text-muted-foreground md:mt-10">
          © {new Date().getFullYear()} {SITE_CONFIG.name} · {SITE_CONFIG.title}
        </p>
      </Container>
    </footer>
  );
}
