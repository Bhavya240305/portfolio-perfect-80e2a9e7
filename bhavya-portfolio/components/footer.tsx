import Link from "next/link";
import { Container } from "./container";
import { SITE_CONFIG } from "@/lib/constants";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/10 py-12 sm:py-14">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="text-center lg:text-left">
            <p className="font-serif text-xl text-foreground">{SITE_CONFIG.name}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {SITE_CONFIG.title}
            </p>
            <p className="text-body mt-4 max-w-sm text-muted-foreground lg:mt-5">
              Product × Strategy × Analytics
            </p>
          </div>

          <nav
            className="flex flex-col items-center gap-1 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-2 lg:items-end lg:justify-end"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-underline flex min-h-11 items-center px-2 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-10 border-t border-border/[0.06] pt-6 text-center text-xs text-muted-foreground sm:text-left">
          © {new Date().getFullYear()} {SITE_CONFIG.name} | All rights reserved
        </p>
      </Container>
    </footer>
  );
}
