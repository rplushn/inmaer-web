"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { ShieldCheck, TrendingUp, Users } from "lucide-react";

const FeaturesBold = () => {
  const features = [
    {
      title: "Certeza Jurídica",
      description: "Escrituración inmediata y todos los permisos de operación en regla desde el día uno.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Plusvalía Garantizada",
      description: "Ubicaciones estratégicas en las zonas de mayor crecimiento económico del país.",
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Comunidad",
      description: "Más de 500 familias ya han confiado su patrimonio en nuestros desarrollos.",
      icon: <Users className="w-8 h-8 text-blue-500" />
    }
  ];

  return (
    <section className="py-32 bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <FadeIn key={idx} delay={idx * 0.2} className="relative group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>
              
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-white rounded-xl shadow-sm w-fit group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FeaturesBold };
