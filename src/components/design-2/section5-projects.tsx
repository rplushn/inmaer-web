"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Section5ProjectsProps {
  className?: string;
}

const Section5Projects = ({ className }: Section5ProjectsProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      title: "TRAYECTORIA SÓLIDA",
      description:
        "Más de una década transformando el paisaje urbano de la zona oriental con proyectos entregados a tiempo.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    },
    {
      title: "PLUSVALÍA ASEGURADA",
      description:
        "Nuestros desarrollos se ubican en zonas de alto crecimiento, garantizando el retorno de tu inversión año tras año.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80",
    },
    {
      title: "CONSTRUCCIÓN PREMIUM",
      description:
        "Estándares de calidad internacionales, desde la cimentación hasta los acabados finales.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80",
    },
    {
      title: "RESPALDO FINANCIERO",
      description:
        "Alianzas directas con la banca nacional para facilitar tu crédito hipotecario de forma ágil.",
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80",
    },
  ];

  return (
    <section
      className={cn("bg-transparent py-[5px]", className)}
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-2 md:gap-14">
          {/* Columna Izquierda - Imagen */}
          <div className="w-full flex justify-start">
            <div className="relative aspect-square w-[70%] overflow-hidden rounded-none">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={features[hoveredIndex ?? 0].image}
                  src={features[hoveredIndex ?? 0].image}
                  alt="Arquitectura INMAER"
                  className="absolute inset-0 w-full h-[400px] object-cover rounded-none"
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-20%", opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Columna Derecha - Lista de Características */}
          <div className="flex flex-col">
            {/* Título General */}
            <h2 className="mb-10 text-[77px] font-normal uppercase leading-[70px] tracking-[1px] font-[system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',Helvetica,Arial,sans-serif]">
              POR QUÉ INMAER?
            </h2>

            {/* Lista de Características */}
            <div
              className="flex flex-col"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className={cn(
                    "border-t border-gray-300 p-7 first:border-t-0 transition-all duration-300 cursor-pointer",
                    index === hoveredIndex
                      ? "bg-[#2E2E2E] text-white"
                      : hoveredIndex !== null
                        ? "bg-transparent text-gray-400"
                        : "bg-transparent text-black"
                  )}
                >
                  <h3
                    className={cn(
                      "mb-3 text-[32px] font-light uppercase tracking-tight transition-colors duration-300",
                      index === hoveredIndex
                        ? "text-white"
                        : hoveredIndex !== null
                          ? "text-gray-400"
                          : "text-black"
                    )}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={cn(
                      "text-base leading-relaxed transition-colors duration-300",
                      index === hoveredIndex
                        ? "text-white"
                        : hoveredIndex !== null
                          ? "text-gray-400"
                          : "text-gray-700"
                    )}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Section5Projects };
