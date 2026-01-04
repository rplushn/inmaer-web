"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ConceptTextProps {
  className?: string;
  label?: string | null;
  title?: string;
  description?: string | React.ReactNode;
  buttonText?: string;
}

const ConceptText = ({ 
  className,
  label = "CONCEPTO",
  title = "CASAS PREMIUM, CONSTRUIDAS PARA VIVIR — NO SOLO PARA VISITAR",
  description = (
    <>
      Somos una empresa hondureña con más de 10 años de experiencia, comprometidos con elevar el estándar de vida en la zona oriental. Nuestro legado se construye sobre la confianza de cientos de familias que hoy disfrutan de hogares seguros, modernos y con alta plusvalía.
      <br /><br />
      En INMAER no solo construimos casas; diseñamos entornos donde la comunidad florece, integrando seguridad 24/7, áreas verdes y acabados de primera calidad que garantizan que tu inversión crezca con el tiempo.
    </>
  ),
  buttonText,
}: ConceptTextProps) => {
  const hasLabel = label !== null && label !== undefined && label !== "";

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section
      className={cn(
        "bg-neutral-100 pt-10 md:pt-[200px] pb-10 md:pb-[100px] font-sans mt-0 mb-0 text-foreground",
        className
      )}
    >
      <div className="container mx-auto px-4">
        {hasLabel ? (
          // Two-column layout when label exists
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-12 mt-0 mb-[100px]">
            {/* Left Column - Label */}
            <motion.div 
              className="md:col-span-3 flex items-start md:pt-2 pl-0 md:pl-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <motion.p 
                className="text-[18px] sm:text-xs md:text-xl font-normal uppercase tracking-widest text-muted-foreground font-sans text-left m-0" 
                style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '1.2px' }}
                variants={fadeInUp}
              >
                {label}
              </motion.p>
            </motion.div>

            {/* Right Column - Main Content */}
            <div className="md:col-span-7 md:col-start-6 flex flex-col gap-4 md:gap-8 justify-start items-start text-left">
              {/* Title */}
              <motion.h2 
                className="text-4xl sm:text-5xl md:text-[85px] lg:text-7xl xl:text-[85px] font-medium uppercase leading-[1.1] md:leading-[85.25px] tracking-0 break-words font-sans text-foreground max-w-4xl text-left" 
                style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                {title}
              </motion.h2>

              {/* Paragraph */}
              <motion.p 
                className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl font-sans leading-relaxed text-left" 
                style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
              >
                {description}
              </motion.p>

              {/* Button (if provided) */}
              {buttonText && (
                <motion.button 
                  className="text-base font-medium text-foreground hover:text-muted-foreground transition-colors font-sans text-left"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  transition={{ delay: 0.6 }}
                >
                  {buttonText}
                </motion.button>
              )}
            </div>
          </div>
        ) : (
          // Single-column centered layout when no label
          <div className="max-w-6xl mx-auto text-center mt-[10px] mb-[10px] px-4">
            <div className="flex flex-col gap-4 md:gap-8 items-center">
              {/* Title */}
              <motion.h2 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[85px] font-medium uppercase leading-[1.1] md:leading-[85px] tracking-[0.1px] break-words font-sans text-foreground max-w-full px-4" 
                style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif', fontSize: '85px', lineHeight: '85px', letterSpacing: '0.1px' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                {title}
              </motion.h2>

              {/* Paragraph */}
              <motion.p 
                className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl font-sans leading-relaxed"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
              >
                {description}
              </motion.p>

              {/* Button (if provided) */}
              {buttonText && (
                <motion.button 
                  className="text-base font-medium text-foreground hover:text-muted-foreground transition-colors font-sans"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  transition={{ delay: 0.6 }}
                >
                  {buttonText}
                </motion.button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export { ConceptText };
