"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";
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
            className="fixed inset-0 z-[60] bg-white/90 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[70] flex flex-col bg-white overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 md:px-12 md:py-8 border-b border-gray-100">
              <h2 
                className="text-2xl md:text-3xl font-thin tracking-[0.2em] text-black uppercase"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Portafolio Selecto
              </h2>
              <button
                onClick={onClose}
                className="group p-2 text-black transition-transform hover:rotate-90 duration-300"
              >
                <X size={32} strokeWidth={1} />
              </button>
            </div>

            {/* Scrollable Grid */}
            <div className="flex-1 overflow-y-auto p-6 md:p-12">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                  {projects.map((project, idx) => (
                    <Link
                      key={project.id}
                      href="/design-2/proyectos" // Link directo a la página de proyectos
                      onClick={onClose}
                      className="group block"
                    >
                      {/* Image Container */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 mb-6">
                        <motion.img
                          initial={{ scale: 1.1 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 1.5 }}
                          src={project.image}
                          alt={project.name}
                          className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-2">
                        <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
                          {project.location}
                        </span>
                        <div className="flex justify-between items-baseline border-b border-gray-100 pb-4 group-hover:border-black transition-colors duration-500">
                          <h3 className="text-xl md:text-2xl font-light text-black uppercase tracking-wide">
                            {project.name}
                          </h3>
                          <ArrowRight className="w-5 h-5 text-black opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" strokeWidth={1} />
                        </div>
                        <p className="text-sm text-gray-500 font-light leading-relaxed mt-2 line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 px-6 py-6 text-center md:px-12 bg-gray-50">
              <Link 
                href="/design-2/proyectos" 
                onClick={onClose}
                className="text-xs md:text-sm text-black uppercase tracking-[0.3em] hover:text-gray-500 transition-colors"
              >
                Ver todos los detalles
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
