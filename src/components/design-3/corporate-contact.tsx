"use client";

import { motion } from "framer-motion";
import { ArrowDownLeft, Mail, Phone, MapPin } from "lucide-react";
import React from "react";

export function CorporateContact() {
  return (
    <section className="py-24 md:py-32 bg-white text-gray-900 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          
          {/* Left Column - Corporate Info */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tight">
              Sede Central
            </h2>
            <div className="space-y-8 mt-12">
               <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Oficinas Corporativas</h4>
                    <p className="text-gray-500 text-lg">Colonia Los Arcos, Bloque B, Casa 5<br/>Danlí, El Paraíso, Honduras.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <Phone className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Línea de Inversionistas</h4>
                    <p className="text-gray-500 text-lg">+504 9856-2930</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <Mail className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Correo Electrónico</h4>
                    <p className="text-gray-500 text-lg">gerencia@inmaer.hn</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column - Clean Form */}
          <div className="md:w-1/2 bg-gray-50 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-8">Solicitar Información</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Nombre</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Tu nombre" />
                 </div>
                 <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Teléfono</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="+504..." />
                 </div>
              </div>
              <div>
                 <label className="block text-sm font-bold text-gray-700 mb-2">Correo Electrónico</label>
                 <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="tucorreo@empresa.com" />
              </div>
              <div>
                 <label className="block text-sm font-bold text-gray-700 mb-2">Interés</label>
                 <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white">
                    <option>Inversión Residencial</option>
                    <option>Locales Comerciales</option>
                    <option>Lotes de Terreno</option>
                    <option>Otros</option>
                 </select>
              </div>
              <div>
                 <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje</label>
                 <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="¿Cómo podemos ayudarte?"></textarea>
              </div>
              <button className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                Enviar Solicitud <ArrowDownLeft className="w-5 h-5 rotate-180" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
