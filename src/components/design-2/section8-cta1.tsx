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
      className={cn("bg-transparent py-20 mt-[90px] mb-[90px]", className)}
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        marginRight: '-300px',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-2 md:gap-14">
          {/* Columna Izquierda - Contenido */}
          <div className="flex flex-col gap-7">
            <h2 className="text-[36px] md:text-[77px] font-normal uppercase leading-[78px] tracking-[-1.2px] font-[system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',Helvetica,Arial,sans-serif]">
              FINANCIAMIENTO DIRECTO
            </h2>
            <p className="text-sm leading-relaxed text-gray-700 max-w-md">
              Planes a tu medida, aprobación inmediata y sin trámites bancarios.
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-3 mt-3">
              <Button size="lg" className="group h-12 rounded-none text-xs">
                <Calculator className="size-4" />
                CALCULAR CUOTA
                <ArrowRight className="size-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="h-10 rounded-none">
                CONTACTAR ASESOR
              </Button>
            </div>
          </div>

          {/* Columna Derecha - Imagen */}
          <div className="relative w-full">
            <div className="relative w-full h-[360px] md:h-[450px] lg:h-[350px] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
                alt="Financiamiento Directo - Inmaer"
                className="object-cover"
                style={{ borderRadius: "0px", width: "350px", height: "350px", marginLeft: "100px", marginRight: "0px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Section8Cta1 };
