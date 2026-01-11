"use client";

import { motion } from "framer-motion";

export function StepsGuide() {
  const steps = [
    { number: "01", title: "Asesoría", text: "Analizamos tu perfil y objetivos para recomendarte el lote ideal." },
    { number: "02", title: "Visita", text: "Recorrido virtual o presencial para que conozcas tu futura propiedad." },
    { number: "03", title: "Reserva", text: "Congela el precio y ubicación con una prima mínima." },
    { number: "04", title: "Firma", text: "Legalización inmediata y entrega de plan de pagos." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-8 border-l-2 border-gray-200 hover:border-blue-600 transition-colors group"
            >
              <span className="text-6xl font-black text-gray-100 absolute top-4 right-4 group-hover:text-blue-50 transition-colors">
                {step.number}
              </span>
              <h3 className="text-2xl font-bold mb-4 relative z-10">{step.title}</h3>
              <p className="text-gray-500 relative z-10">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
