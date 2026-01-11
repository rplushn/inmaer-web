"use client";

import { motion } from "framer-motion";
import { ArrowDownLeft, Mail, Phone } from "lucide-react";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

interface Section8ContactFormProps {
  className?: string;
}

const Section8ContactForm = ({ className }: Section8ContactFormProps) => {
  return (
    <section className="py-24 md:py-32 bg-[#1C1C1C] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          
          {/* Left Column - Title & Info */}
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Icon removed to lift the title up */}
                
                <h2 
                  className="text-6xl md:text-8xl font-normal mb-8 uppercase" 
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  HABLEMOS
                </h2>
                
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md">
                  Estamos listos para asesorarte en tu próxima inversión. Déjanos tus datos y un experto inmobiliario se pondrá en contacto contigo para construir tu futuro.
                </p>
              </motion.div>
            </div>

            <div className="hidden md:flex flex-col gap-6 mt-16">
              <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors cursor-pointer group">
                <div className="p-3 rounded-full border border-white/10 group-hover:border-white/40 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg tracking-wide">+504 9856-2930</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors cursor-pointer group">
                <div className="p-3 rounded-full border border-white/10 group-hover:border-white/40 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg tracking-wide">info@inmaer.hn</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="md:w-1/2">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-8">
                <div className="group relative">
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-transparent border-b border-white/20 py-4 text-lg focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                    placeholder="Nombre"
                  />
                  <label 
                    htmlFor="name"
                    className="absolute left-0 top-4 text-gray-500 transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-white cursor-text"
                  >
                    Nombre
                  </label>
                </div>

                <div className="group relative">
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-transparent border-b border-white/20 py-4 text-lg focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                    placeholder="Email"
                  />
                  <label 
                    htmlFor="email"
                    className="absolute left-0 top-4 text-gray-500 transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-white cursor-text"
                  >
                    Email
                  </label>
                </div>

                <div className="group relative">
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-lg focus:outline-none focus:border-white transition-colors peer placeholder-transparent resize-none"
                    placeholder="Mensaje"
                  ></textarea>
                  <label 
                    htmlFor="message"
                    className="absolute left-0 top-4 text-gray-500 transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-white cursor-text"
                  >
                    Mensaje (Cuéntanos sobre tu interés)
                  </label>
                </div>
              </div>

              <div className="flex justify-start">
                <button 
                  type="button"
                  className="group flex items-center gap-4 text-xl font-light hover:text-gray-300 transition-colors"
                >
                  <ArrowDownLeft className="w-6 h-6 rotate-180 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Enviar Mensaje
                </button>
              </div>

              {/* Mobile Contact Info (Visible only on mobile) */}
              <div className="md:hidden flex flex-col gap-6 mt-12 pt-12 border-t border-white/10">
                <div className="flex items-center gap-4 text-gray-400">
                  <Phone className="w-5 h-5" />
                  <span>+504 9856-2930</span>
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                  <Mail className="w-5 h-5" />
                  <span>info@inmaer.hn</span>
                </div>
              </div>

            </motion.form>
          </div>

        </div>
      </div>
    </section>
  );
};

export { Section8ContactForm };
