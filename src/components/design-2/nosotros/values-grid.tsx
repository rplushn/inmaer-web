"use client";

import { motion } from "framer-motion";
import { HardHat, Home, FileCheck } from "lucide-react";

const ValuesGrid = () => {
  const values = [
    {
      title: "SEGURIDAD JURÍDICA",
      description: "No vendemos promesas, vendemos escrituras. Todos nuestros lotes cuentan con documentación legal al día, listos para traspaso inmediato.",
      icon: <FileCheck className="w-8 h-8 text-black" />
    },
    {
      title: "URBANISMO REAL",
      description: "Entregamos proyectos con servicios básicos garantizados: agua potable, energía eléctrica y calles transitables desde el primer día.",
      icon: <HardHat className="w-8 h-8 text-black" />
    },
    {
      title: "PLUSVALÍA ASEGURADA",
      description: "Elegimos ubicaciones estratégicas donde el valor de tu tierra crece año con año, protegiendo tu inversión de la inflación.",
      icon: <Home className="w-8 h-8 text-black" />
    }
  ];

  return (
    <section className="py-32 bg-white text-black border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {values.map((val, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="group"
            >
              <div className="mb-6 flex justify-center md:justify-start">
                <div className="p-4 bg-gray-50 rounded-full group-hover:bg-gray-100 transition-colors">
                  {val.icon}
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-4">{val.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ValuesGrid };
