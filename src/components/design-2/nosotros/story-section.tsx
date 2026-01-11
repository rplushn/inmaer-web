"use client";

import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations/fade-in";

interface StorySectionProps {
  label: string;
  title: string;
  description: React.ReactNode;
  image: string;
  reversed?: boolean;
}

const StorySection = ({ label, title, description, image, reversed = false }: StorySectionProps) => {
  return (
    <section className="py-24 md:py-32 overflow-hidden bg-white text-black">
      <div className="container mx-auto px-4">
        <div className={cn(
          "flex flex-col gap-16 md:gap-24 items-center",
          reversed ? "md:flex-row-reverse" : "md:flex-row"
        )}>
          {/* Image Side */}
          <div className="w-full md:w-1/2">
            <FadeIn>
              <div className="relative aspect-[3/4] md:aspect-square overflow-hidden">
                <img 
                  src={image} 
                  alt={title} 
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </FadeIn>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <FadeIn delay={0.2}>
              <span className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-6 block border-l-2 border-black pl-4">
                {label}
              </span>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl font-light uppercase leading-[1.1] mb-8"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 200 }}
              >
                {title}
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="text-gray-600 text-lg font-light leading-relaxed space-y-6">
                {description}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export { StorySection };
