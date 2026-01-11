"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export function HeroModern() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Corporate" 
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-white/10 backdrop-blur-md">
              Liderazgo Inmobiliario
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight mb-8">
              CONSTRUIMOS <br />
              <span className="text-blue-500">CERTEZA.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
              Más que desarrolladores, somos gestores de patrimonio. Transformamos tierra en activos financieros de alto rendimiento en el oriente de Honduras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2">
                Explorar Portafolio <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-transparent border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2">
                <Play className="w-4 h-4 fill-current" /> Ver Video Corporativo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function StatsBar() {
  const stats = [
    { value: "+10", label: "Años de Experiencia" },
    { value: "+850", label: "Escrituras Entregadas" },
    { value: "4", label: "Ciudades Impactadas" },
    { value: "+15%", label: "Plusvalía Anual Promedio" },
  ];

  return (
    <section className="bg-blue-900 py-16 text-white border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left border-l border-white/20 pl-6">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</h3>
              <p className="text-blue-200 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
