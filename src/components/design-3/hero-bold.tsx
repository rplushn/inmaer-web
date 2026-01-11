"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useRef } from "react";

const HeroBold = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 200]);
  
  return (
    <section className="relative w-full h-screen min-h-[100dvh] m-0 p-0 overflow-hidden bg-white">
      <div className="w-full h-full m-0 p-0 overflow-hidden">
        <div
          ref={containerRef}
          className="relative flex h-full items-center justify-start container mx-auto px-6 md:px-12"
        >
          {/* Split Background - Right Side Image */}
          <div className="absolute top-0 right-0 w-full md:w-[55%] h-full bg-gray-900 z-0 overflow-hidden">
             <motion.img 
              style={{ y: yParallax }}
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" 
              className="object-cover w-full h-[120%] opacity-60 mix-blend-overlay"
              alt="Architecture"
             />
             <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900/90" />
          </div>

          {/* Content - Left Aligned, Bold & Corporate */}
          {/* Added mix-blend-difference to ensure visibility on both white and dark backgrounds */}
          <div className="relative z-10 max-w-4xl text-white mix-blend-difference">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="h-[2px] w-12 bg-white"></span>
                <span className="text-sm font-bold tracking-widest uppercase">Desde 2015</span>
              </div>
              
              <h1 
                className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-8 tracking-tighter"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                EL FUTURO <br/>
                ES AHORA.
              </h1>
              
              <p className="text-lg md:text-2xl text-gray-200 font-medium leading-relaxed mb-10 max-w-xl">
                Desarrollo inmobiliario de alto impacto en Honduras. Plazas comerciales y residenciales que redefinen el estándar de inversión.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors">
                  Ver Proyectos
                </button>
                <button className="group px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors flex items-center gap-3">
                  Contáctanos
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroBold };
