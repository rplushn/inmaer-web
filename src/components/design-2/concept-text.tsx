"use client";

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

  return (
    <section
      className={cn(
        "bg-neutral-100 pt-0 pb-[50px] font-sans mt-[120px] mb-[100px]",
        className
      )}
    >
      <div className="container mx-auto px-4" style={{ width: '1200px' }}>
        {hasLabel ? (
          // Two-column layout when label exists
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-12 mt-[120px] mb-[100px]">
            {/* Left Column - Label */}
            <div className="md:col-span-1 flex items-start md:pt-2">
              <p className="text-base uppercase tracking-widest text-muted-foreground font-sans" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                {label}
              </p>
            </div>

            {/* Right Column - Main Content */}
            <div className="md:col-span-1 flex flex-col gap-6 md:gap-[38px] ml-[175px] justify-start items-start">
              {/* Title */}
              <h2 className="text-4xl md:text-[70px] font-semibold uppercase leading-[80px] font-sans text-foreground max-w-4xl text-left align-top ml-[60px]" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                {title}
              </h2>

              {/* Paragraph */}
              <p className="text-base text-muted-foreground max-w-xl font-sans leading-relaxed ml-[70px]" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                {description}
              </p>

              {/* Button (if provided) */}
              {buttonText && (
                <div className="ml-[70px]">
                  <button className="text-base font-medium text-foreground hover:text-muted-foreground transition-colors font-sans" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    {buttonText}
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          // Single-column centered layout when no label
          <div className="max-w-6xl mx-auto text-center mt-[10px] mb-[10px] px-4">
            <div className="flex flex-col gap-6 md:gap-[38px] items-center" style={{ width: '1100px' }}>
              {/* Title */}
              <h2 className="text-4xl md:text-[70px] font-semibold uppercase leading-[80px] font-sans text-foreground max-w-full px-[5px]" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif', marginRight: '0px' }}>
                {title}
              </h2>

              {/* Paragraph */}
              <p className="text-base text-muted-foreground max-w-xl font-sans leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                {description}
              </p>

              {/* Button (if provided) */}
              {buttonText && (
                <button className="text-base font-medium text-foreground hover:text-muted-foreground transition-colors font-sans" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  {buttonText}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export { ConceptText };
