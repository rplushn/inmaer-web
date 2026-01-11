"use client";

import { useState, useEffect } from "react";
import { ProjectsModal } from "@/components/design-2/projects-modal";
import Link from "next/link";

export default function TestModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  // Auto-open modal on load for testing
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-8">
      <h1 className="text-3xl font-light text-black">Prueba de Diseño de Modal</h1>
      
      <button 
        onClick={() => setIsOpen(true)}
        className="px-8 py-4 bg-black text-white uppercase tracking-widest hover:bg-gray-800 transition-colors"
      >
        Abrir Modal
      </button>

      <Link href="/" className="text-gray-500 underline text-sm">
        Volver al Inicio
      </Link>

      <ProjectsModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
