"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

const projects = [
  {
    src: "/images/design-2/carrusel1.jpg",
    title: "Proyecto Premium 1",
  },
  {
    src: "/images/design-2/carrusel2.jpg",
    title: "Proyecto Premium 2",
  },
  {
    src: "/images/design-2/carrusel3.jpg",
    title: "Proyecto Premium 3",
  },
  {
    src: "/images/design-2/carrusel4.jpg",
    title: "Proyecto Premium 4",
  },
  {
    src: "/images/design-2/carrusel5.jpg",
    title: "Proyecto Premium 5",
  },
];

interface Section4ProjectsProps {
  className?: string;
}

const Section4Projects = ({ className }: Section4ProjectsProps) => {
  const duplicatedProjects = [...projects, ...projects];
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 30,
      },
    });
  }, [controls]);

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto px-4">
        <h1 className="font-sans text-6xl font-semibold">Nuestros Proyectos</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Descubre nuestra colección de proyectos premium, diseñados con excelencia arquitectónica y acabados de primera calidad.
        </p>
        <div className="relative w-full overflow-hidden pt-16">
          <motion.div
            className="flex gap-6"
            animate={controls}
            onMouseEnter={() => {
              controls.stop();
            }}
            onMouseLeave={() => {
              controls.start({
                x: ["0%", "-50%"],
                transition: {
                  repeat: Infinity,
                  ease: "linear",
                  duration: 30,
                },
              });
            }}
          >
            {duplicatedProjects.map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className="min-w-[300px] flex-shrink-0 md:min-w-[400px] lg:min-w-[450px]"
              >
                <div className="group relative overflow-hidden rounded-none shadow-lg">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="h-[400px] w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="text-white text-xl font-semibold">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { Section4Projects };
