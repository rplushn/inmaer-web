"use client";

import { FadeIn } from "@/components/animations/fade-in";

const ValuesGrid = () => {
  const values = [
    {
      title: "Transparencia",
      description: "Hablamos claro desde el primer día. Documentación legal, procesos abiertos y certeza jurídica en cada metro cuadrado."
    },
    {
      title: "Innovación",
      description: "No solo urbanizamos, transformamos. Integramos diseño moderno y sostenibilidad en regiones donde nadie más lo hace."
    },
    {
      title: "Compromiso",
      description: "Nacimos en Danlí y crecemos con Honduras. Nuestro compromiso es impulsar el desarrollo económico de la zona oriental."
    }
  ];

  return (
    <section className="py-24 bg-[#f9f9f9] text-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, idx) => (
            <FadeIn key={idx} delay={idx * 0.2} className="flex flex-col gap-6 p-8 border border-gray-200 hover:border-black transition-colors duration-500 bg-white">
              <span className="text-4xl font-light text-gray-300">0{idx + 1}</span>
              <h3 className="text-2xl uppercase tracking-widest font-light">{value.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {value.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ValuesGrid };
