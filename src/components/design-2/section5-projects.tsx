"use client";

import { cn } from "@/lib/utils";

interface Section5ProjectsProps {
  className?: string;
  sectionLabel?: string;
  heading?: string;
  subheading?: string;
  descriptionHeading?: string;
  description?: string;
  image?: string;
  stats?: any[];
}

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
            <div key={index} className="flex flex-col items-center text-center group">
              <span className="text-[50px] md:text-[70px] font-bold text-black mb-2 transition-transform duration-300 group-hover:-translate-y-2">
                {stat.value}
              </span>
              <span className="text-sm md:text-base font-medium tracking-widest text-gray-500 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Section5Projects };
