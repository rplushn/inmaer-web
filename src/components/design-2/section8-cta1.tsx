"use client";

import { MessageCircle, ArrowRight } from "lucide-react";
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
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
          {/* Columna Izquierda - Contenido */}
          <div className="flex flex-col gap-7">
            <h2 className="text-[36px] md:text-[77px] font-normal uppercase leading-[1.1] tracking-[-1.2px] font-[system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',Helvetica,Arial,sans-serif]">
              TU PRÓXIMO PASO
            </h2>
            <p className="text-base leading-relaxed text-gray-700 max-w-md">
              La inversión inteligente comienza con una conversación. Nuestros asesores expertos están listos para guiarte hacia tu nueva propiedad.
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 mt-5">
              <Button size="lg" className="group h-14 px-8 rounded-none text-xs bg-black text-white hover:bg-gray-800" asChild>
                <a href="https://wa.me/50499999999" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4 mr-2" />
                  HABLEMOS POR WHATSAPP
                  <ArrowRight className="size-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Columna Derecha - Imagen */}
          <div className="relative w-full flex justify-center md:justify-end">
            <div className="relative w-full md:w-[80%] aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
                alt="Tu Próximo Paso - Inmaer"
                className="object-cover w-full h-full"
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
