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
};

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Resume", href: RESUME_PDF_URL, external: true },
  { name: "Contact", href: "/contact" },
];

function renderNavItem(
  item: NavItem,
  pathname: string,
  onNavigate?: () => void
) {
  const isActive =
    item.href !== "/#skills" && !item.external && pathname === item.href;

  const linkClass = cn(
    "text-sm transition",
    isActive ? "text-primary" : "text-white/80 hover:text-primary"
  );

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

  if (item.href === "/#skills") {
    return (
      <a
        key={item.name}
        href="/#skills"
        className={linkClass}
        onClick={onNavigate}
      >
        {item.name}
      </a>
    );
  }

  return (
    <Link key={item.name} href={item.href} className={linkClass} onClick={onNavigate}>
      {item.name}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="font-serif text-xl font-semibold tracking-tight text-foreground"
          >
            Bhavya Dixit
          </Link>

          <nav className="hidden gap-8 md:flex" aria-label="Main navigation">
            {navItems.map((item) => renderNavItem(item, pathname))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="secondary" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col">
                <SheetHeader className="border-b border-border/10 pb-4 text-left">
                  <SheetTitle className="font-serif text-xl">Menu</SheetTitle>
                </SheetHeader>
                <nav
                  className="mt-6 flex flex-col gap-4"
                  aria-label="Mobile navigation"
                >
                  {navItems.map((item) =>
                    renderNavItem(item, pathname, closeMenu)
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}
