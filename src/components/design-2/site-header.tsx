"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { ProjectsModal } from "./projects-modal"; // Importar el Modal

export function SiteHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false); // Estado para el modal

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
                : "bg-white/10 backdrop-blur-sm py-4"
            )}
          >
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <Link
                  href="/"
                  className={cn(
                    "text-xl font-semibold transition-colors uppercase tracking-widest",
                    isScrolled ? "text-foreground" : "text-white mix-blend-difference" // Logo blanco en Hero
                  )}
                >
                  {siteConfig.name}
                </Link>

                {/* Navigation Links - Hidden on mobile */}
                <nav className="hidden md:flex items-center gap-8">
                  <button
                    onClick={() => setIsProjectsModalOpen(true)}
                    className={cn(
                      "text-[13px] font-medium uppercase tracking-[2px] transition-colors hover:text-primary cursor-pointer bg-transparent border-none p-0",
                      isScrolled ? "text-foreground" : "text-white mix-blend-difference"
                    )}
                  >
                    Proyectos
                  </button>
                  
                  {/* Otros links si los hubiere, por ahora solo Proyectos destaca */}
                  {siteConfig.navLinks.filter(l => l.label !== "Proyectos").map((link) => (
                     <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "text-[13px] font-medium uppercase tracking-[2px] transition-colors hover:text-primary",
                         isScrolled ? "text-foreground" : "text-white mix-blend-difference"
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
                      : "bg-white/10 text-white border-white/30 hover:bg-white hover:text-black backdrop-blur-md"
                  )}
                >
                  Contáctanos
                </Link>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Projects Modal Component */}
      <ProjectsModal 
        isOpen={isProjectsModalOpen} 
        onClose={() => setIsProjectsModalOpen(false)} 
      />
    </>
  );
}
