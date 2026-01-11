"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface Section5ProjectsProps {
  className?: string;
}

const Counter = ({ value, label }: { value: string; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Extraer la parte numérica y el prefijo/sufijo (ej: "+500" -> prefix="+", number=500)
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const prefix = value.match(/^[^\d]*/)?.[0] || "";
  const suffix = value.match(/[^\d]*$/)?.[0] || "";

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: 2 // Duración de 2 segundos para suavidad
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        // Formatear con separadores de miles si es necesario, y volver a unir
        ref.current.textContent = `${prefix}${Math.round(latest).toLocaleString()}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix]);

  return (
    <div className="flex flex-col items-center text-center group">
      <span 
        ref={ref}
        className="text-[50px] md:text-[70px] font-bold text-black mb-2 transition-transform duration-300 group-hover:-translate-y-2 tabular-nums"
        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
      >
        0
      </span>
      <span className="text-sm md:text-base font-medium tracking-widest text-gray-500 uppercase">
        {label}
      </span>
    </div>
  );
};

const Section5Projects = ({ className }: Section5ProjectsProps) => {
  const statsData = [
    { value: "+10", label: "AÑOS DE EXPERIENCIA" },
    { value: "3", label: "CIUDADES CLAVE" },
    { value: "+500", label: "FAMILIAS BENEFICIADAS" },
    { value: "+12", label: "PROYECTOS FINALIZADOS" },
  ];

  return (
    <section
      className={cn("bg-white py-24", className)}
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[40px] md:text-[60px] font-medium uppercase tracking-[2px] leading-tight text-black mb-6" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            RESULTADOS QUE HABLAN
          </h2>
          <div className="h-1 w-24 bg-black"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statsData.map((stat, index) => (
            <Counter key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Section5Projects };
