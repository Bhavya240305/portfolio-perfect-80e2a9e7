"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
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

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "#skills" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

function NavLink({
  href,
  children,
  active,
  onClick,
}: {
  href: string;
  children: ReactNode;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "nav-link group",
        active ? "nav-link-active" : "nav-link-inactive"
      )}
    >
      <span className="relative">
        {children}
        <span
          className={cn(
            "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300",
            active && "scale-x-100",
            "group-hover:scale-x-100"
          )}
          aria-hidden
        />
      </span>
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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-border/15 bg-background/90 shadow-[0_8px_32px_hsl(var(--background)/0.6)] backdrop-blur-xl"
          : "border-transparent bg-background/50 backdrop-blur-md"
      )}
    >
      <Container>
        <div className="flex h-nav items-center justify-between gap-3 sm:gap-4">
          <Link
            href="/"
            className="font-serif text-base font-semibold tracking-tight text-foreground transition-opacity hover:opacity-90 sm:text-lg md:text-xl"
          >
            Bhavya Dixit
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex lg:gap-2"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                href={item.href}
                active={pathname === item.href}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              asChild
              size="sm"
              className="hidden md:inline-flex lg:hidden"
            >
              <Link href="/contact">Contact</Link>
            </Button>

            <ThemeToggle />

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="secondary" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col pb-safe">
                <SheetHeader className="border-b border-border/10 pb-4 text-left">
                  <SheetTitle className="font-serif text-xl">
                    Navigation
                  </SheetTitle>
                </SheetHeader>

                <nav
                  className="mt-6 flex flex-1 flex-col gap-1"
                  aria-label="Mobile navigation"
                >
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: open ? 1 : 0, x: open ? 0 : 12 }}
                      transition={{ delay: open ? i * 0.04 : 0, duration: 0.25 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex min-h-12 items-center rounded-2xl px-4 text-base font-medium transition-colors",
                          pathname === item.href
                            ? "bg-primary/15 text-primary"
                            : "text-foreground active:bg-card/60"
                        )}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-auto space-y-3 border-t border-border/10 pt-6">
                  <Button asChild size="lg" className="w-full">
                    <Link href="/contact" onClick={() => setOpen(false)}>
                      Get In Touch
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    <Link href="/projects" onClick={() => setOpen(false)}>
                      View Projects
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
