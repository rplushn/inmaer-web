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
      <div className="sticky top-0 h-screen w-[45%] flex flex-col justify-center px-12 lg:px-20">
        <h2 className="mb-6 text-[77px] font-medium uppercase tracking-[1.1px] leading-[75.3px] text-white" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}>
          NATURALEZA Y DISEÑO
        </h2>
        <p className="text-[16px] leading-relaxed text-gray-300 max-w-md" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}>
          El concepto arquitectónico integra amplias terrazas y balcones inmersos
          en vegetación, ofreciendo privacidad y frescura. Techos altos y
          ventanales panorámicos maximizan la luz natural, creando una conexión
          real con el entorno.
        </p>
      </div>

      {/* Columna Derecha - Imagen */}
      <div className="w-[55%] h-screen">
        <img
          src="/images/design-2/herob3.jpg"
          alt="Arquitectura y naturaleza"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export { Section5Lifestyle };
