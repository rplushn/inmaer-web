"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import React, { useRef } from "react";

const MainHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 200]);
  
  return (
    <section className="relative w-full h-screen min-h-[100dvh] m-0 p-0 overflow-hidden bg-black">
      <div className="w-full h-full m-0 p-0 overflow-hidden">
        <div
          ref={containerRef}
          className="relative flex h-full flex-col items-center justify-center gap-6 overflow-hidden"
        >
          {/* Background - Elegant Dark Cinematic */}
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ y: yParallax }}
          >
            <div className="absolute inset-0 bg-black/30 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop" 
              alt="Main Hero" 
              className="w-full h-[120%] object-cover object-center opacity-80" 
            />
          </motion.div>
          
          {/* Main Content - Minimalist & Sober */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-white/90 text-xs md:text-sm font-light tracking-[0.6em] uppercase mb-8 ml-2">
                Est. 2015 • Honduras
              </h2>
              
              <h1 
                className="text-7xl md:text-9xl lg:text-[11rem] leading-none text-white font-thin tracking-tight mix-blend-difference mb-8"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                INMAER
              </h1>
              
              <div className="h-px w-24 bg-white/50 mx-auto mb-8"></div>

              <p className="text-white/90 text-lg md:text-xl font-light tracking-widest uppercase max-w-xl mx-auto">
                Arquitectura de Inversión
              </p>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-12 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <ArrowDown className="text-white w-6 h-6 animate-bounce font-thin" strokeWidth={1} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { MainHero };
