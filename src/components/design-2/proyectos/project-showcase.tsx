"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowUpRight } from "lucide-react";

interface ProjectShowcaseProps {
  city: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  reversed?: boolean;
}

const ProjectShowcase = ({ city, title, description, image, features, reversed = false }: ProjectShowcaseProps) => {
  return (
    <section className="py-24 md:py-32 overflow-hidden bg-white text-black">
      <div className="container mx-auto px-4">
        <div className={cn(
          "flex flex-col gap-16 md:gap-24 items-center",
          reversed ? "md:flex-row-reverse" : "md:flex-row"
        )}>
          {/* Image Side */}
          <div className="w-full md:w-1/2">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden group">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  src={image} 
                  alt={title} 
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 uppercase tracking-widest text-xs font-medium">
                  {city}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <FadeIn delay={0.2}>
              <span className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-4 block">
                Zona de Alta Plusvalía
              </span>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <h2 
                className="text-4xl md:text-6xl font-light uppercase leading-[0.9] mb-8"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 200 }}
              >
                {title}
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <p className="text-gray-600 text-lg font-light leading-relaxed mb-10 max-w-md">
                {description}
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <ul className="grid grid-cols-1 gap-4 mb-10">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm tracking-wide uppercase text-gray-800">
                    <span className="h-px w-6 bg-black"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.6}>
              <button className="group flex items-center gap-2 text-sm uppercase tracking-widest border-b border-black pb-1 hover:opacity-60 transition-opacity">
                Ver Detalles
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProjectShowcase };
