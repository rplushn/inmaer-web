"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectSpotlightProps {
  title: string;
  category: string;
  description: string;
  image: string;
  reversed?: boolean;
}

export function ProjectSpotlight({ title, category, description, image, reversed = false }: ProjectSpotlightProps) {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`flex flex-col md:flex-row items-center gap-16 ${reversed ? 'md:flex-row-reverse' : ''}`}>
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl group">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>
          </motion.div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-blue-600 font-bold tracking-widest uppercase mb-4 block text-sm">
                {category}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                {title}
              </h2>
              <div className="h-1 w-20 bg-gray-200 mb-8"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {description}
              </p>
              
              <button className="group flex items-center gap-2 text-black font-bold uppercase tracking-wider hover:text-blue-600 transition-colors">
                Ver Detalles del Proyecto 
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
