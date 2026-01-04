"use client";

import { cn } from "@/lib/utils";

interface ConceptTextProps {
  className?: string;
}

const ConceptText = ({ className }: ConceptTextProps) => {
  return (
    <section
      className={cn(
        "bg-neutral-100 py-16 md:py-24 font-sans",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-[10px] mb-[10px]">
          {/* Left Column - Label */}
          <div className="md:col-span-2 flex items-start md:pt-2">
            <p className="text-base uppercase tracking-widest text-muted-foreground font-sans" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              CONCEPTO
            </p>
          </div>

          {/* Right Column - Main Content */}
          <div className="md:col-span-10 flex flex-col gap-6 md:gap-[38px] ml-[175px] justify-start items-start">
            {/* Title */}
            <h2 className="text-4xl md:text-[70px] font-semibold uppercase leading-[80px] font-sans text-foreground max-w-4xl text-left align-top ml-[60px]" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              CASAS PREMIUM, CONSTRUIDAS PARA VIVIR — NO SOLO PARA VISITAR
            </h2>

            {/* Paragraph */}
            <p className="text-base text-muted-foreground max-w-xl font-sans leading-relaxed ml-[70px]" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Somos una empresa hondureña con más de 10 años de experiencia, comprometidos con elevar el estándar de vida en la zona oriental. Nuestro legado se construye sobre la confianza de cientos de familias que hoy disfrutan de hogares seguros, modernos y con alta plusvalía.
              <br /><br />
              En INMAER no solo construimos casas; diseñamos entornos donde la comunidad florece, integrando seguridad 24/7, áreas verdes y acabados de primera calidad que garantizan que tu inversión crezca con el tiempo.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export { ConceptText };
