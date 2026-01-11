"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-16 h-16 text-blue-200 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-bold mb-12 italic text-gray-800">
            "Invertir con INMAER fue la decisión más inteligente para asegurar el futuro de mis hijos. La plusvalía ha superado mis expectativas."
          </h2>
          <div className="flex flex-col items-center">
             <div className="w-16 h-16 bg-gray-300 rounded-full mb-4 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop" alt="User" />
             </div>
             <p className="font-bold text-lg">Roberto Méndez</p>
             <p className="text-gray-500 text-sm">Inversionista en Ciudad Dorada</p>
          </div>
        </div>
      </div>
    </section>
  );
}
