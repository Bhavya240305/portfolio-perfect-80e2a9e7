"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Container } from "./container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { RESUME_PDF_URL } from "@/lib/constants";

type NavItem = {
  name: string;
  href: string;
  external?: boolean;
  download?: boolean;
};

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Resume", href: "https://drive.google.com/file/d/16ue6eEBFaP8EJwM9nM47e_2AoPLi3yJn/view?usp=drive_link", download: false},
  { name: "Contact", href: "/#contact" },
];

function renderNavItem(
  item: NavItem,
  pathname: string,
  mobile = false,
  onNavigate?: () => void
) {
  const isHash = item.href.startsWith("/#");
  const isActive =
    !item.external &&
    !item.download &&
    !isHash &&
    pathname === item.href;

  const linkClass = cn(
    "font-medium transition-colors",
    mobile
      ? "flex min-h-12 items-center rounded-xl px-3 text-base active:bg-muted/40"
      : "text-sm",
    isActive
      ? "text-primary"
      : "text-foreground/75 hover:text-primary"
  );

  if (item.download) {
    return (
      <a
        key={item.name}
        href={item.href}
        download
        className={linkClass}
        onClick={onNavigate}
      >
        {item.name}
      </a>
    );
  }

  if (item.external) {
    return (
      <a
        key={item.name}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        onClick={onNavigate}
      >
        {item.name}
      </a>
    );
  }

  return (
    <Link
      key={item.name}
      href={item.href}
      className={linkClass}
      onClick={onNavigate}
    >
      {item.name}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 z-[60] w-full border-b transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-border/10 bg-background/80 shadow-[0_8px_32px_hsl(var(--background)/0.6)] backdrop-blur-xl"
          : "border-transparent bg-background/40 backdrop-blur-md"
      )}
    >
      <Container>
        <div className="flex h-nav items-center justify-between gap-4">
          <Link
            href="/"
            className="font-serif text-lg font-semibold tracking-tight text-foreground sm:text-xl"
          >
            Bhavya Dixit
          </Link>

          <nav
            className="hidden items-center gap-6 md:flex lg:gap-8"
            aria-label="Main navigation"
          >
            {navItems.map((item) => renderNavItem(item, pathname))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <ThemeToggle />

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-11 w-11 shrink-0"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="flex w-[min(100vw,20rem)] flex-col border-border/10 bg-background/95 backdrop-blur-xl"
              >
                <SheetHeader className="border-b border-border/10 pb-4 text-left">
                  <SheetTitle className="font-serif text-xl">Menu</SheetTitle>
                </SheetHeader>
                <nav
                  className="mt-4 flex flex-1 flex-col gap-1"
                  aria-label="Mobile navigation"
                >
                  {navItems.map((item) =>
                    renderNavItem(item, pathname, true, closeMenu)
                  )}
                </nav>
                <div className="mt-auto border-t border-border/10 pt-4 pb-safe">
                  <Button asChild className="w-full" size="lg">
                    <Link href="/contact" onClick={closeMenu}>
                      Get in touch
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}
