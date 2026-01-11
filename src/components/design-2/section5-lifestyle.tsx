"use client";

import { cn } from "@/lib/utils";

interface Section5LifestyleProps {
  className?: string;
}

const Section5Lifestyle = ({ className }: Section5LifestyleProps) => {
  return (
    <section
      className={cn("relative flex w-full", className)}
      style={{
        backgroundColor: "#2E2E2E",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      {/* Columna Izquierda - Contenido Sticky */}
      <div className="sticky top-0 h-screen w-full md:w-[45%] flex flex-col justify-center px-8 md:px-12 lg:px-20 z-10 bg-[#2E2E2E]">
        <span className="block text-[#A3A3A3] text-sm md:text-base tracking-[3px] uppercase mb-4 font-light">
          Ingeniería de Vida
        </span>
        <h2 className="mb-6 text-[48px] md:text-[77px] font-medium uppercase tracking-[1.1px] leading-tight md:leading-[75.3px] text-white" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}>
          ESTÁNDAR INMAER
        </h2>
        <p className="text-[16px] leading-relaxed text-gray-300 max-w-md" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}>
          Más que urbanización, creamos ecosistemas donde la naturaleza y el diseño arquitectónico coexisten. 
          Cada proyecto es planificado meticulosamente para elevar tu calidad de vida, garantizando plusvalía 
          y bienestar desde el primer día.
        </p>
      </div>

      {/* Columna Derecha - Imagen */}
      <div className="hidden md:block w-[55%] h-screen">
        <img
          src="/images/design-2/herob3.jpg"
          alt="Estándar INMAER - Arquitectura y Naturaleza"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export { Section5Lifestyle };
