"use client";

import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations/fade-in";

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
  title = "TU PATRIMONIO EN TIERRA FIRME CON NOSOTROS",
  description = (
    <>
      <strong>Inversión con propósito.</strong>
      <br /><br />
      Garantizamos certeza jurídica y crecimiento exponencial en las zonas de mayor expansión: Danlí, San Lorenzo y Talanga.
    </>
  ),
  buttonText,
}: ConceptTextProps) => {
  const hasLabel = label !== null && label !== undefined && label !== "";

  return (
    <section
      className={cn(
        "bg-transparent pt-9 md:pt-[250px] pb-9 md:pb-[150px] pr-5 font-sans mt-0 mb-0 text-foreground",
        className
      )}
      style={{ marginRight: '0px', marginTop: '0px', paddingTop: '70px', paddingRight: '20px', paddingBottom: '120px' }}
    >
      <div className="container mx-auto px-4">
        {hasLabel ? (
          // Two-column layout when label exists
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-10 mt-0 mb-[90px]">
            {/* Left Column - Label */}
            <FadeIn className="md:col-span-3 flex items-start md:pt-2 pl-0 md:pl-0">
              <p 
                className="text-[16px] sm:text-xs md:text-xl font-normal uppercase tracking-widest text-muted-foreground font-sans text-left m-0" 
                style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '1.2px' }}
              >
                {label}
              </p>
            </FadeIn>

            {/* Right Column - Main Content */}
            <div className="md:col-span-7 md:col-start-6 flex flex-col gap-3 md:gap-7 justify-start items-start text-left">
              {/* Title */}
              <FadeIn delay={0.2}>
                <h2 
                  className="text-4xl sm:text-5xl md:text-[77px] lg:text-7xl xl:text-[77px] font-medium uppercase leading-[1.1] md:leading-[77px] tracking-0 break-words font-sans text-foreground max-w-4xl text-left" 
                  style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}
                >
                  {title}
                </h2>
              </FadeIn>

              {/* Paragraph - ALIGNED WITH TITLE */}
              <FadeIn delay={0.4} className="pl-[2px]"> {/* Added tiny padding to align perfectly visually if needed */}
                <div 
                  className="text-sm sm:text-base md:text-base text-muted-foreground max-w-xl font-sans leading-relaxed text-left block" 
                  style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}
                >
                  {description}
                </div>
              </FadeIn>

              {/* Button (if provided) */}
              {buttonText && (
                <FadeIn delay={0.6}>
                  <button 
                    className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors font-sans text-left"
                  >
                    {buttonText}
                  </button>
                </FadeIn>
              )}
            </div>
          </div>
        ) : (
          // Single-column centered layout when no label
          <div className="max-w-6xl mx-auto text-center mt-[9px] mb-[9px] px-4">
            <div className="flex flex-col gap-3 md:gap-7 items-center">
              {/* Title */}
              <FadeIn delay={0.2}>
                <h2 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[77px] font-medium uppercase leading-[1.1] md:leading-[77px] tracking-[0.1px] break-words font-sans text-foreground max-w-full px-4 mt-[100px]" 
                  style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif', fontSize: '77px', lineHeight: '77px', letterSpacing: '0.1px' }}
                >
                  {title}
                </h2>
              </FadeIn>

              {/* Paragraph */}
              <FadeIn delay={0.4}>
                <p 
                  className="text-sm sm:text-base md:text-base text-muted-foreground max-w-xl font-sans leading-relaxed"
                >
                  {description}
                </p>
              </FadeIn>

              {/* Button (if provided) */}
              {buttonText && (
                <FadeIn delay={0.6}>
                  <button 
                    className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors font-sans"
                  >
                    {buttonText}
                  </button>
                </FadeIn>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export { ConceptText };
