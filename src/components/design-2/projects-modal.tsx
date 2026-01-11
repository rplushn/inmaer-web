"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects } from "@/data/design-2/projects";

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectsModal({ isOpen, onClose }: ProjectsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-x-4 top-[5%] md:inset-x-0 md:top-[10%] bottom-[5%] z-[70] mx-auto w-full max-w-7xl overflow-hidden rounded-xl bg-[#1a1a1a] shadow-2xl flex flex-col border border-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 md:px-8 bg-[#1a1a1a]">
              <h2 
                className="text-2xl font-light tracking-widest text-white uppercase"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Colección Residencial
              </h2>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Grid */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-[#1a1a1a]">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {projects.map((project) => (
                  <a
                    key={project.id}
                    href="#" // Aquí iría el link real a la página del proyecto cuando existan
                    className="group relative flex aspect-[4/5] w-full flex-col overflow-hidden bg-[#242424] transition-all hover:-translate-y-1 hover:shadow-xl rounded-none border border-white/5"
                  >
                    {/* Image Container */}
                    <div className="relative h-[60%] w-full overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-0" />
                      <img
                        src={project.image}
                        alt={project.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Badge Ubicación */}
                      <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1 text-[10px] font-medium tracking-widest text-white uppercase">
                        {project.location}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col justify-between p-5">
                      <div>
                        <h3 className="mb-2 text-lg font-medium text-white uppercase tracking-wide">
                          {project.name}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-400 line-clamp-3 font-light">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center text-xs font-bold uppercase tracking-widest text-white/80 group-hover:text-white">
                        Ver Detalles
                        <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer / CTA opcional */}
            <div className="border-t border-white/10 bg-[#1a1a1a] px-6 py-4 text-center md:px-8">
              <p className="text-xs text-gray-500 uppercase tracking-widest">
                Desarrollando el futuro de Honduras
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
