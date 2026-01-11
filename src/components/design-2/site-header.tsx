"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { ProjectsModal } from "./projects-modal";

export function SiteHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isAtTop = latest < 50;
    setIsScrolled(!isAtTop);

    if (isAtTop) {
      setIsVisible(true);
      return;
    }

    if (latest > lastScrollY && latest > 100) {
      setIsVisible(false);
    } else if (latest < lastScrollY) {
      setIsVisible(true);
    }

    setLastScrollY(latest);
  });

  return (
    <>
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
                ? "bg-white/70 backdrop-blur-md shadow-sm py-3"
                : "bg-transparent py-4" // Removed white backdrop on top for cleaner look with dark text
            )}
          >
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <Link
                  href="/"
                  className={cn(
                    "text-xl font-semibold transition-colors uppercase tracking-widest",
                    "text-black" // Always black
                  )}
                >
                  {siteConfig.name}
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center gap-8">
                  <button
                    onClick={() => setIsProjectsModalOpen(true)}
                    className={cn(
                      "text-[13px] font-medium uppercase tracking-[2px] transition-colors hover:text-gray-600 cursor-pointer bg-transparent border-none p-0",
                      "text-black" // Always black
                    )}
                  >
                    Proyectos
                  </button>
                  
                  {siteConfig.navLinks.filter(l => l.label !== "Proyectos").map((link) => (
                     <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "text-[13px] font-medium uppercase tracking-[2px] transition-colors hover:text-gray-600",
                        "text-black" // Always black
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
                    "text-[11px] font-bold uppercase tracking-[1px] px-5 py-2.5 rounded-none transition-all border",
                    isScrolled
                      ? "bg-black text-white border-black hover:bg-gray-800"
                      : "bg-transparent text-black border-black/30 hover:bg-black hover:text-white" // Black text on transparent
                  )}
                >
                  Contáctanos
                </Link>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      <ProjectsModal 
        isOpen={isProjectsModalOpen} 
        onClose={() => setIsProjectsModalOpen(false)} 
      />
    </>
  );
}
