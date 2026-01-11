"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ProjectsTeaser = () => {
  const projects = [
    {
      name: "Ciudad Dorada",
      location: "Danlí",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
    },
    {
      name: "Brisas del Sur",
      location: "San Lorenzo",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Valle Verde",
      location: "Talanga",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-32 bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-thin uppercase tracking-tight">
              Portafolio <br/> Selecto
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/design-2/proyectos" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest border-b border-black pb-1 hover:opacity-60 transition-opacity">
              Ver Todos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <FadeIn key={idx} delay={idx * 0.2}>
              <Link href="/design-2/proyectos" className="group block relative aspect-[4/5] overflow-hidden bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 w-full p-8 text-white z-10">
                  <span className="text-xs uppercase tracking-widest block mb-2 opacity-80">{project.location}</span>
                  <h3 className="text-2xl font-light uppercase tracking-wide">{project.name}</h3>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
        
        <div className="mt-12 md:hidden flex justify-center">
            <Link href="/design-2/proyectos" className="flex items-center gap-2 text-sm uppercase tracking-widest border-b border-black pb-1">
              Ver Todos
              <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
      </div>
    </section>
  );
};

export { ProjectsTeaser };
