"use client";

import { Calculator, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Section8Cta1Props {
  className?: string;
}

const Section8Cta1 = ({ className }: Section8Cta1Props) => {
  return (
    <section
      className={cn("bg-[#F5F5F5] py-24 mt-[100px] mb-[100px]", className)}
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-stretch gap-12 md:grid-cols-2 md:gap-16">
          {/* Columna Izquierda - Contenido */}
          <div className="flex flex-col gap-8">
            <h2 className="text-[40px] md:text-[70px] font-normal uppercase leading-tight tracking-[-3.7px] font-[system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',Helvetica,Arial,sans-serif]">
              FINANCIAMIENTO DIRECTO
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 max-w-md">
              Planes a tu medida, aprobación inmediata y sin trámites bancarios.
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="group rounded-none">
                <Calculator className="size-5" />
                CALCULAR CUOTA
                <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-none">
                CONTACTAR ASESOR
              </Button>
            </div>
          </div>

          {/* Columna Derecha - Imagen */}
          <div className="relative w-full">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
                alt="Financiamiento Directo - Inmaer"
                className="w-full h-full object-cover"
                style={{ borderRadius: "0px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Section8Cta1 };
