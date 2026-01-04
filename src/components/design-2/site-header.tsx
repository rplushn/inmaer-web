"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isAtTop = latest < 50;
    setIsScrolled(!isAtTop);

    // Always show header at the top
    if (isAtTop) {
      setIsVisible(true);
      return;
    }

    // Show/hide header based on scroll direction
    if (latest > lastScrollY && latest > 100) {
      // Scrolling down - hide header
      setIsVisible(false);
    } else if (latest < lastScrollY) {
      // Scrolling up - show header
      setIsVisible(true);
    }

    setLastScrollY(latest);
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
            isScrolled
              ? "bg-white/70 backdrop-blur-md shadow-sm py-4"
              : "bg-white/10 backdrop-blur-sm py-6"
          )}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link
                href="/"
                className={cn(
                  "text-xl font-semibold transition-colors",
                  isScrolled ? "text-foreground" : "text-foreground"
                )}
              >
                {siteConfig.name}
              </Link>

              {/* Navigation Links - Hidden on mobile */}
              <nav className="hidden md:flex items-center gap-6">
                {siteConfig.navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      "text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Button */}
              <Link
                href="/design-2"
                className={cn(
                  "text-sm font-medium px-4 py-2 rounded-md transition-all",
                  isScrolled
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "bg-foreground/90 text-background hover:bg-foreground backdrop-blur-sm"
                )}
              >
                Ver Diseño 2
              </Link>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
