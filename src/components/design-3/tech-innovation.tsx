"use client";

import { motion } from "framer-motion";
import { Laptop, Smartphone, LineChart } from "lucide-react";

export function TechInnovation() {
  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
             <span className="text-blue-500 font-bold tracking-widest uppercase mb-4 block">Innovación 2026</span>
             <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
               TU PATRIMONIO <br />
               EN TUS MANOS.
             </h2>
             <p className="text-gray-400 text-lg mb-8 leading-relaxed">
               Presentamos el ecosistema digital INMAER. Una plataforma exclusiva donde podrás monitorear la plusvalía de tus terrenos, realizar pagos y gestionar tu documentación legal desde cualquier dispositivo.
             </p>
             
             <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600/20 rounded-lg text-blue-500">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">App Móvil</h4>
                    <p className="text-sm text-gray-500">Control total de tus pagos y estados de cuenta.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600/20 rounded-lg text-blue-500">
                    <LineChart className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Tracker de Plusvalía</h4>
                    <p className="text-sm text-gray-500">Visualiza cómo crece el valor de tu inversión mes a mes.</p>
                  </div>
                </div>
             </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
               {/* Mockup Representation */}
               <div className="relative w-72 md:w-80 h-[500px] bg-black border-4 border-gray-800 rounded-[3rem] shadow-2xl overflow-hidden">
                 <img 
                   src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop" 
                   alt="App Interface" 
                   className="w-full h-full object-cover opacity-80"
                 />
                 <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-1 bg-white rounded-full"></div>
               </div>
               
               {/* Floating Element */}
               <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute top-20 -right-12 bg-blue-600 p-4 rounded-xl shadow-lg"
               >
                 <span className="font-bold text-2xl text-white">+24%</span>
                 <p className="text-xs text-blue-200 uppercase">Rendimiento Anual</p>
               </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
