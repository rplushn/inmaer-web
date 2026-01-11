"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

const UltraHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
  
  return (
    <section className="relative w-full h-[100dvh] m-0 p-0 overflow-hidden bg-black">
      <div className="w-full h-full m-0 p-0 overflow-hidden">
        <div
          ref={containerRef}
          className="relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden"
        >
          {/* Video Background - Dynamic & Powerful */}
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ y: yParallax }}
          >
            <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for text readability */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[120%] object-cover object-center"
            >
              <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4" type="video/mp4" />
              {/* Fallback image if video fails */}
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" alt="Hero Background" className="w-full h-full object-cover" />
            </video>
          </motion.div>
          
          {/* Main Content */}
          <motion.div 
            className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4"
            style={{ opacity: opacityText }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center"
            >
              <h2 className="text-white/80 text-xs md:text-sm font-medium tracking-[0.5em] uppercase mb-6 md:mb-8">
                Desarrolladora Inmobiliaria
              </h2>
              
              <h1 
                className="text-6xl md:text-8xl lg:text-[10rem] leading-none text-white font-bold tracking-tighter mix-blend-overlay mb-8"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                INMAER
              </h1>
              
              <p className="text-white text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto mb-12 leading-relaxed">
                Transformamos el horizonte de Honduras con proyectos que definen el futuro.
              </p>

              <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                <button className="group flex items-center gap-3 px-8 py-4 bg-white text-black text-sm uppercase tracking-widest font-bold hover:bg-gray-200 transition-colors">
                  Ver Proyectos
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="px-8 py-4 border border-white/30 text-white text-sm uppercase tracking-widest hover:bg-white/10 transition-colors backdrop-blur-sm">
                  Contáctanos
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-10 z-20 flex flex-col items-center gap-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ opacity: opacityText }}
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
            <span className="text-[10px] text-white/60 tracking-widest uppercase">Scroll</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { UltraHero };
