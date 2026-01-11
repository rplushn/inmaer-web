"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const ContactHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 200]);
  
  return (
    <section className="relative w-full h-[70vh] min-h-[600px] m-0 p-0 overflow-hidden">
      <div className="w-full h-full m-0 p-0 overflow-hidden">
        <div
          ref={containerRef}
          className="relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden bg-black"
        >
          {/* Background image with parallax effect */}
          <motion.img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Contacto Hero"
            className="absolute inset-0 h-[120%] w-full object-cover object-center opacity-50 grayscale"
            style={{ y: yParallax }}
          />
          
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <h1 
                className="text-5xl md:text-8xl lg:text-9xl text-white font-light uppercase tracking-widest mb-6"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 100 }}
              >
                Contacto
              </h1>
              <p className="text-white/80 text-sm md:text-lg uppercase tracking-[0.3em] font-light">
                Estamos cerca de ti
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContactHero };
