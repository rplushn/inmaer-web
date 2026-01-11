"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Building2, MapPin } from "lucide-react";

export function InvestmentFocus() {
  const areas = [
    {
      title: "Residencial Premium",
      description: "Comunidades cerradas con seguridad 24/7 y amenidades de primer nivel. Diseñadas para familias que valoran la privacidad y el estilo de vida.",
      icon: <Building2 className="w-10 h-10 text-blue-600" />
    },
    {
      title: "Comercial Estratégico",
      description: "Plazas y locales en puntos de alto tráfico vehicular. Ideales para negocios que buscan visibilidad y crecimiento acelerado.",
      icon: <TrendingUp className="w-10 h-10 text-blue-600" />
    },
    {
      title: "Lotes de Inversión",
      description: "Tierra en zonas de expansión urbana proyectada. La forma más segura de blindar tu capital contra la inflación a largo plazo.",
      icon: <MapPin className="w-10 h-10 text-blue-600" />
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">ENFOQUE DE INVERSIÓN</h2>
          <p className="text-gray-600 text-lg">Diversificamos nuestro portafolio para ofrecer opciones que se ajustan a diferentes perfiles de inversionista, siempre garantizando seguridad jurídica.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="mb-6 p-4 bg-blue-50 rounded-full w-fit">
                {area.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {area.description}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Alta demanda
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Escritura inmediata
                </li>
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
