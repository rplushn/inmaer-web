"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useRef } from "react";

import { cn } from "@/lib/utils";
import { useMousePosition } from "@/hooks/use-mouse-position";

import VariableFontAndCursor from "@/components/fancy/components/text/variable-font-and-cursor";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { x, y } = useMousePosition(containerRef as React.RefObject<HTMLElement>);
  
  // Parallax effect for background image
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 200]);
  
  return (
    <section className={cn("w-full", className)}>
      <div className="w-full">
        <div
          ref={containerRef}
          className="relative flex h-screen flex-col items-center justify-center gap-4 overflow-hidden"
        >
          {/* Background image with parallax effect */}
          <motion.img
            src="/images/design-2/herob3.jpg"
            alt="Hero background"
            className="absolute inset-0 h-[120%] w-full object-cover object-center xl:object-cover"
            style={{ y: yParallax }}
          />
          <div className="absolute bottom-10 left-10 flex flex-col mix-blend-exclusion">
            <p className="text-xs text-secondary">x : {Math.round(x)}</p>
            <p className="text-xs text-secondary">y : {Math.round(y)}</p>
          </div>
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center mix-blend-exclusion">
            <div className="mx-auto w-fit">
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-sans text-xs uppercase tracking-widest text-white md:ml-3 sm:text-sm"
              >
                BIENVENIDOS a{" "}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <VariableFontAndCursor
                  label="INMAER"
                  className="text-5xl tracking-[-5px] text-white leading-none sm:text-7xl md:text-[12rem] lg:text-[14rem] md:tracking-[-13px]"
                  fontVariationMapping={{
                    y: { name: "wght", min: 100, max: 900 },
                    x: { name: "slnt", min: 0, max: -10 },
                  }}
                  containerRef={containerRef as React.RefObject<HTMLDivElement>}
                />
              </motion.div>
              <div
                className="absolute top-0 h-screen w-px -translate-x-1/2 bg-background"
                style={{
                  left: `${x - 2}px`,
                }}
              />
              <div
                className="absolute left-0 h-px w-screen -translate-y-1/2 bg-background"
                style={{
                  top: `${y - 2}px`,
                }}
              />
              <div
                className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-background"
                style={{
                  top: `${y - 2}px`,
                  left: `${x - 2}px`,
                  color: 'rgba(10, 10, 10, 1)',
                }}
              />
            </div>
          </div>
          <button className="group absolute bottom-20 left-1/2 z-[99] -translate-x-1/2 flex items-center gap-2 bg-background px-4 py-2 text-black transition-all duration-300 hover:gap-4">
            Inicia ya
            <ArrowRight
              className="-rotate-45 transition-all duration-300 group-hover:rotate-0"
              size={16}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export { Hero };
