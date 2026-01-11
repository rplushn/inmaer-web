"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Phone } from "lucide-react";

const ContactInfoHighlight = () => {
  return (
    <section className="py-32 bg-white text-black flex flex-col items-center justify-center text-center">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="flex flex-col items-center gap-6">
            <span className="p-4 rounded-full border border-black/10 text-black mb-4">
               <Phone className="w-6 h-6" />
            </span>
            
            <p className="text-sm tracking-[0.3em] uppercase text-gray-500">
              Línea Directa
            </p>
            
            <h2 
              className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-tighter"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              +504.9856.2930
            </h2>
            
            <p className="text-gray-400 font-light max-w-md mt-4">
              Nuestro equipo de asesores está disponible para atenderte de Lunes a Sábado, 8:00 AM - 5:00 PM.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export { ContactInfoHighlight };
