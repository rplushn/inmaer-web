"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a small delay on mount
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="https://wa.me/50498562930"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "rgba(37, 211, 102, 0.8)" // Slightly transparent on hover
          }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-lg cursor-pointer transition-colors duration-300 hover:shadow-xl"
          style={{ backdropFilter: "blur(4px)" }}
        >
          {/* Simple WhatsApp Icon representation using Lucide */}
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 fill-current" />
          
          {/* Ping animation ring */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-20 animate-ping"></span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
