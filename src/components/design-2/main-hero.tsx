"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import React, { useRef } from "react";

const MainHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 200]);
  
  return (
    <section className="relative w-full h-screen min-h-[100dvh] m-0 p-0 overflow-hidden bg-white text-black">
      <div className="w-full h-full m-0 p-0 overflow-hidden">
        <div
          ref={containerRef}
          className="relative flex h-full items-center justify-center container mx-auto px-4 text-center z-10"
        >
          {/* Background Image with Parallax */}
          <div className="absolute inset-0 z-0">
             <motion.img 
              style={{ y: yParallax }}
              src="https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop" 
              className="object-cover w-full h-[120%] opacity-20 grayscale"
              alt="Construcción Sólida"
             />
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 max-w-5xl mx-auto"
          >
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-6 block text-gray-500">
              EST. 2015 · HONDURAS
            </span>
            
            <h1 
              className="text-6xl md:text-8xl lg:text-[10rem] font-thin tracking-tight leading-none mb-6"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              INMAER
            </h1>
            
            <div className="h-px w-24 bg-black/20 mx-auto mb-8"></div>
            
            <p className="text-lg md:text-2xl font-light tracking-widest uppercase text-gray-800">
              CIMENTANDO TU PATRIMONIO
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-black/30"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-6 h-6" strokeWidth={1} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { MainHero };
