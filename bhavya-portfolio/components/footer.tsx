import Link from "next/link";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { Container } from "./container";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="section-divider relative pb-safe">
      <Container className="py-10 md:py-12 lg:py-14">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:items-start lg:gap-12">
          <div>
            <p className="font-serif text-heading-sm text-foreground">
              {SITE_CONFIG.name}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {SITE_CONFIG.title}
            </p>
            <p className="text-body mt-3 max-w-xs text-muted-foreground">
              Product x Growth x Strategy x Analytics
            </p>
          </div>

          <nav
            className="flex flex-col gap-1 sm:gap-0.5"
            aria-label="Footer navigation"
          >
            <p className="text-label mb-3">Explore</p>
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-underline flex min-h-11 items-center text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4 md:items-start lg:items-end lg:text-right">
            <p className="text-label lg:ml-auto">Connect</p>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap md:flex-col lg:items-end">
              <a
                href={`mailto:bhavyadixit.iitr@gmail.com`}
                className="link-underline inline-flex min-h-11 items-center gap-2 text-sm font-medium"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                {SITE_CONFIG.email}
              </a>
              <Link
                href={"https://linkedin.com/in/bhavyadixit/"}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex min-h-11 items-center gap-2 text-sm font-medium"
              >
                <Linkedin className="h-4 w-4 shrink-0 text-primary" />
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
              </Link>
            </div>
            <Button asChild size="sm" className="w-full sm:w-auto lg:ml-auto">
              <Link href="/contact">
                Open to opportunities
                <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>

        <p className="mt-8 border-t border-border/[0.06] pt-6 text-center text-xs text-muted-foreground sm:text-left">
          © {new Date().getFullYear()} {SITE_CONFIG.name}. Crafted for product
          roles.
        </p>
      </Container>
    </footer>
  );
}
