"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ProjectsGridBold = () => {
  const projects = [
    {
      name: "Ciudad Dorada",
      location: "Danlí",
      type: "Residencial",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
    },
    {
      name: "Brisas del Sur",
      location: "San Lorenzo",
      type: "Comercial / Residencial",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Valle Verde",
      location: "Talanga",
      type: "Residencial",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop"
    },
    {
        name: "Plaza Central",
        location: "Danlí",
        type: "Comercial",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      }
  ];

  return (
    <section className="py-32 bg-gray-50 text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <FadeIn>
            <span className="text-sm font-bold tracking-widest uppercase text-blue-900 mb-2 block">Nuestro Trabajo</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900">
              Proyectos Destacados
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/design-2/proyectos" className="px-6 py-3 bg-white border border-gray-200 text-sm font-bold uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-all shadow-sm">
              Ver Portafolio Completo
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className={idx === 0 || idx === 3 ? "md:col-span-2" : ""}>
              <Link href="/design-2/proyectos" className="group block relative overflow-hidden rounded-sm shadow-xl aspect-[16/9]">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white z-10 flex justify-between items-end">
                  <div>
                    <span className="text-xs font-bold bg-blue-600 px-3 py-1 rounded-sm uppercase tracking-widest mb-3 inline-block">
                        {project.location}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold uppercase mb-2">{project.name}</h3>
                    <p className="text-gray-300 font-medium">{project.type}</p>
                  </div>
                  <div className="bg-white text-black p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ProjectsGridBold };
