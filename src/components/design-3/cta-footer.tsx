"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export function CtaFooter() {
  return (
    <section className="py-32 bg-blue-900 text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            TU LEGADO COMIENZA AQUÍ.
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto font-light">
            No esperes a comprar tierra, compra tierra y espera. Agenda una asesoría gratuita hoy mismo.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3">
              Agendar Cita Virtual <ArrowRight className="w-6 h-6" />
            </button>
            <button className="bg-transparent border-2 border-white/30 hover:bg-white/10 px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3">
              <MessageSquare className="w-6 h-6" /> Chat WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
