"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiSun, FiMoon, FiDownload } from "react-icons/fi";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/data/site-config";
import { btnClass } from "@/lib/button-styles";

const NAV_LINKS = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-9 w-9" />;

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.2 }}
          className="flex"
        >
          {theme === "dark" ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}

// Tracks which section is currently in view while scrolling, and returns
// its href (e.g. "#projects") so the nav can highlight the matching link.
// "#top" (Home) is treated specially — it's active only near the very top
// of the page, since the hero section has no dedicated <section id="top">
// bounds the same way the others do.
function useActiveSection(ids) {
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const sectionIds = ids.filter((id) => id !== "#top");
    const sections = sectionIds.map((id) => document.querySelector(id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActive(`#${visible[0].target.id}`);
        } else if (window.scrollY < window.innerHeight * 0.5) {
          setActive("#top");
        }
      },
      { rootMargin: "-15% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    // Also catch the "back at the very top" case directly on scroll,
    // since no observed section may be intersecting there.
    const onScroll = () => {
      if (window.scrollY < 80) setActive("#top");
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [ids]);

  return active;
}

// Desktop nav links with a soft background fill that smoothly slides to
// whichever section is currently scrolled into view.
function DesktopNavLinks() {
  const activeHref = useActiveSection(NAV_LINKS.map((l) => l.href));

  return (
    <div className="hidden items-center gap-1 md:flex">
      {NAV_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
            activeHref === link.href
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {activeHref === link.href && (
            <motion.span
              layoutId="nav-active-fill"
              className="absolute inset-0 rounded-md bg-muted"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative">{link.label}</span>
        </a>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-base font-semibold text-foreground">
          nur<span className="text-primary">.dev</span>
        </a>

        <DesktopNavLinks />

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <a href={siteConfig.resumeUrl} download className={btnClass("default", "sm")}>
            <FiDownload className="h-4 w-4" />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger aria-label="Open menu" className={btnClass("ghost", "icon")}>
              <FiMenu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="mt-10 flex flex-col gap-1 px-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.04 }}
                    className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <a
                  href={siteConfig.resumeUrl}
                  download
                  onClick={() => setOpen(false)}
                  className={btnClass("default", "default", "mt-4")}
                >
                  Download Resume
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}