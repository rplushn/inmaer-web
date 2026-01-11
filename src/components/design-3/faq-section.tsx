"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"; // Assuming you have shadcn accordion or I build a simple one
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

// Simple Accordion Component since I'm not sure if shadcn is fully set up with that component file
const SimpleAccordionItem = ({ title, content, isOpen, onClick }: { title: string, content: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={onClick}
        className="flex justify-between items-center w-full py-6 text-left hover:text-blue-600 transition-colors"
      >
        <span className="text-xl font-medium">{title}</span>
        {isOpen ? <Minus className="w-5 h-5 text-blue-600" /> : <Plus className="w-5 h-5 text-gray-400" />}
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-600 leading-relaxed">
          {content}
        </p>
      </motion.div>
    </div>
  );
};

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Ofrecen financiamiento directo?",
      answer: "Sí, contamos con planes de financiamiento propio hasta 36 meses sin intereses y opciones extendidas hasta 10 años con tasas preferenciales. Sin revisión de buró de crédito para la mayoría de nuestros desarrollos."
    },
    {
      question: "¿Cuándo se entrega la escritura?",
      answer: "Garantizamos la seguridad jurídica. La escritura se puede tramitar inmediatamente al cancelar el valor total del terreno. Todos nuestros proyectos cuentan con permisos municipales y legales al día."
    },
    {
      question: "¿Puedo construir inmediatamente?",
      answer: "Depende de la etapa del proyecto. En proyectos entregados ('Listos para construir'), sí. En proyectos de preventa, la construcción se habilita una vez finalizadas las obras de urbanización (agua, luz, calles)."
    },
    {
      question: "¿Aceptan pagos desde el extranjero?",
      answer: "Absolutamente. Tenemos un proceso simplificado para hondureños en USA y España. Puedes pagar vía transferencia bancaria, remesa o tarjeta de crédito/débito a través de nuestro portal seguro."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-bold mb-4">PREGUNTAS FRECUENTES</h2>
           <p className="text-gray-500">Resolvemos tus dudas con total transparencia.</p>
        </div>
        
        <div className="flex flex-col">
          {faqs.map((faq, idx) => (
            <SimpleAccordionItem 
              key={idx}
              title={faq.question}
              content={faq.answer}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
