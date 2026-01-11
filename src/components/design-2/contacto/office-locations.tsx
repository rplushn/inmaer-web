"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { MapPin, Mail, Clock } from "lucide-react";

const OfficeLocations = () => {
  const offices = [
    {
      city: "Danlí",
      address: "Barrio El Centro, Frente al Parque Central",
      icon: <MapPin className="w-5 h-5" />
    },
    {
      city: "Tegucigalpa",
      address: "Edificio Metrópolis, Torre 2, Piso 15",
      icon: <MapPin className="w-5 h-5" />
    },
    {
      city: "Correo",
      address: "info@inmaer.hn",
      icon: <Mail className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-24 bg-[#f9f9f9] text-black border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="flex flex-col items-center text-center gap-4 p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
              <span className="p-3 bg-gray-50 rounded-full text-black">
                {office.icon}
              </span>
              <h3 className="text-lg font-medium uppercase tracking-widest">{office.city}</h3>
              <p className="text-gray-500 font-light text-sm">
                {office.address}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export { OfficeLocations };
