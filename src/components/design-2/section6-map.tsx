"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface Section6MapProps {
  className?: string;
}

interface Location {
  id: string;
  name: string;
  top: string;
  left: string;
}

const locations: Location[] = [
  {
    id: "tegucigalpa",
    name: "Francisco Morazán (Tegucigalpa)",
    top: "60%",
    left: "32%",
  },
  {
    id: "danli",
    name: "El Paraíso (Danlí)",
    top: "62%",
    left: "42%",
  },
  {
    id: "olancho",
    name: "Olancho (Juticalpa)",
    top: "50%",
    left: "48%",
  },
  {
    id: "choluteca",
    name: "Choluteca",
    top: "78%",
    left: "28%",
  },
];

const Section6Map = ({ className }: Section6MapProps) => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (mapContainerRef.current) {
      const rect = mapContainerRef.current.getBoundingClientRect();
      setTooltipPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const hoveredLocationData = locations.find(
    (loc) => loc.id === hoveredLocation
  );

  return (
    <section
      className={cn("bg-transparent pb-5", className)}
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
          {/* Columna Izquierda - Título */}
          <div className="flex flex-col">
            <h2 className="mb-7 text-[77px] font-normal uppercase leading-[70px] tracking-[1px] font-[system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',Helvetica,Arial,sans-serif]">
              PRESENCIA NACIONAL
            </h2>
            <p 
              className="text-base leading-relaxed text-gray-700 max-w-md"
              style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif" }}
            >
              Con proyectos en múltiples departamentos de Honduras, expandimos
              nuestra presencia para llevar desarrollo y oportunidades a más
              comunidades.
            </p>
          </div>

          {/* Columna Derecha - Mapa */}
          <div className="relative w-full overflow-visible min-h-[540px] py-7">
            <div
              ref={mapContainerRef}
              className="relative w-full aspect-square max-w-4xl mx-auto"
              onMouseMove={handleMouseMove}
            >
              {/* Imagen de fondo */}
              <img
                src="/images/design-2/mapa-honduras.svg"
                alt="Mapa de Honduras"
                className="w-full h-auto object-contain opacity-80 max-h-[750px] scale-125 origin-center"
              />

              {/* Hotspots */}
              {locations.map((location) => (
                <div
                  key={location.id}
                  className="absolute cursor-pointer group inline-flex h-3 w-3 items-center justify-center"
                  style={{
                    top: location.top,
                    left: location.left,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={() => setHoveredLocation(location.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                >
                  {/* Círculo de Latido (Ping) */}
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-75"></span>
                  {/* Punto Sólido Central */}
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-black border-2 border-white transition-transform duration-300 group-hover:scale-125 shadow-lg"></span>
                </div>
              ))}

              {/* Tooltip */}
              {hoveredLocationData && hoveredLocation && (
                <div
                  className="absolute pointer-events-none z-50 bg-[#18181b] text-white px-4 py-2 rounded-md text-sm font-medium shadow-lg whitespace-nowrap"
                  style={{
                    left: `${tooltipPosition.x}px`,
                    top: `${tooltipPosition.y - 40}px`,
                    transform: "translateX(-50%)",
                  }}
                >
                  {hoveredLocationData.name}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#18181b]"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Section6Map };
