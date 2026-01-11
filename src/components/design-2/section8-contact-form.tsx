"use client";

import { ArrowRight, CornerDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Section8ContactFormProps {
  className?: string;
}

const Section8ContactForm = ({ className }: Section8ContactFormProps) => {
  return (
    <section
      className={cn("bg-black text-white py-24 md:py-32", className)}
      style={{
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Columna Izquierda */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="text-[60px] md:text-[90px] font-medium leading-[0.9] tracking-tight mb-8">
                Hablemos<span className="text-white">*</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-12 font-light">
                Estamos listos para asesorarte en tu próxima inversión. 
                Déjanos tus datos y un experto inmobiliario se pondrá en contacto contigo para construir tu futuro.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-auto pt-12">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="p-2 border border-white/20 rounded-full group-hover:border-white transition-colors">
                  <span className="text-xl">📞</span>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">+504 9999-9999</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="p-2 border border-white/20 rounded-full group-hover:border-white transition-colors">
                  <span className="text-xl">✉️</span>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">info@inmaer.hn</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Formulario */}
          <div className="flex flex-col">
            <form className="space-y-12">
              <div className="group">
                <label className="block text-sm text-gray-500 mb-2 group-focus-within:text-white transition-colors">
                  Nombre*
                </label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="group">
                <label className="block text-sm text-gray-500 mb-2 group-focus-within:text-white transition-colors">
                  Email*
                </label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="group">
                <label className="block text-sm text-gray-500 mb-2 group-focus-within:text-white transition-colors">
                  Mensaje (Cuéntanos sobre tu interés)
                </label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <button 
                type="button"
                className="group flex items-center gap-4 text-xl font-medium mt-8 hover:opacity-80 transition-opacity"
              >
                <CornerDownRight className="w-6 h-6" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Section8ContactForm };
