"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const images = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
  "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070&auto=format&fit=crop",
];

interface Section7ProjectsProps {
  className?: string;
}

const Section7Projects = ({ className }: Section7ProjectsProps) => {
  return (
    <section
      className={cn(
        "dark relative overflow-hidden bg-background py-32",
        className,
      )}
    >
      <div>
        <div className="container mx-auto mb-12 flex flex-col items-center justify-center text-center gap-4">
          <h2
            className="text-center text-[85px] font-medium uppercase tracking-[1px] text-[#F5F5F5]"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            }}
          >
            AMENIDADES
          </h2>
          <p className="text-center text-lg text-[#F5F5F5]/80">
            Espacios diseñados para tu bienestar y seguridad.
          </p>
        </div>
        <div className="relative">
          <Marquee repeat={2} className="p-0 opacity-40 [--duration:60s] [--gap:1.5rem]">
            {images.map((image, idx) => (
              <div key={idx} className="shrink-0">
                <img
                  src={image}
                  alt="gallery"
                  className="aspect-[2/3] w-96 rounded-none object-cover"
                />
              </div>
            ))}
          </Marquee>
          <a
            href="#"
            className="group absolute inset-0 z-10 container mx-auto flex w-fit scale-105 items-center justify-center overflow-hidden rounded-none transition-transform duration-500 hover:scale-104"
          >
            <div className="relative overflow-hidden rounded-none">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                alt="Casa Moderna con Piscina"
                className="aspect-[2/3] w-full max-w-96 rounded-none object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 backdrop-blur-[1px] transition-opacity duration-500 group-hover:opacity-100">
                <p className="-translate-y-6 border-b border-white/50 bg-gradient-to-b from-white to-white/80 bg-clip-text font-instrumentSerif text-xl font-medium text-transparent transition-transform duration-500 group-hover:translate-y-0">
                  CONOCE MÁS
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="container mt-12 mx-auto flex justify-center text-center">
          <p className="text-center text-lg text-[#F5F5F5]/80">
            Seguridad 24/7 • Áreas Verdes • Casa Club • Diseño Moderno
          </p>
        </div>
      </div>
    </section>
  );
};

export { Section7Projects };
