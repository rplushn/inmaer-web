import React from "react";
import { HeroModern, StatsBar } from "@/components/design-3/hero-modern";
import { InvestmentFocus } from "@/components/design-3/investment-focus";
import { ProjectSpotlight } from "@/components/design-3/project-spotlight";
import { TechInnovation } from "@/components/design-3/tech-innovation";
import { StepsGuide } from "@/components/design-3/steps-guide";
import { TestimonialsSection } from "@/components/design-3/testimonials-section";
import { FaqSection } from "@/components/design-3/faq-section";
import { CorporateContact } from "@/components/design-3/corporate-contact";
import { CtaFooter } from "@/components/design-3/cta-footer";
import { Section6Map } from "@/components/design-2/section6-map"; // Reusing Map as requested ("puedes reutilizar el mapa")

export default function Design3Page() {
  return (
    <>
      {/* 1. HERO: Video Background & Corporate Message */}
      <HeroModern />
      
      {/* 2. STATS: Trust Markers */}
      <StatsBar />

      <div className="relative z-10 bg-white text-gray-900">
        
        {/* 3. ABOUT / MISSION (Inline simple component for variety) */}
        <section className="py-24 px-6 container mx-auto text-center max-w-4xl">
           <h2 className="text-sm font-bold tracking-[0.3em] text-blue-600 mb-6 uppercase">Nuestra Filosofía</h2>
           <p className="text-3xl md:text-5xl font-bold leading-tight mb-8">
             No solo vendemos metros cuadrados, creamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">ecosistemas de valor</span>.
           </p>
           <p className="text-xl text-gray-500 font-light leading-relaxed">
             Cada proyecto de INMAER nace de un análisis urbano profundo. Buscamos las zonas de mayor expansión demográfica y comercial para garantizar que tu inversión crezca más rápido que la inflación.
           </p>
        </section>

        {/* 4. INVESTMENT FOCUS (Services) */}
        <InvestmentFocus />

        {/* 5. SPOTLIGHT 1: Ciudad Dorada */}
        <ProjectSpotlight 
           category="Residencial Premium"
           title="CIUDAD DORADA"
           description="El desarrollo más exclusivo de Danlí. Un oasis de seguridad y diseño con acceso controlado, áreas verdes y la plusvalía más alta de la región."
           image="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
        />

        {/* 6. TECH INNOVATION (App/Portal) */}
        <TechInnovation />

        {/* 7. SPOTLIGHT 2: Brisas del Sur */}
        <ProjectSpotlight 
           category="Expansión Comercial"
           title="BRISAS DEL SUR"
           description="Ubicado estratégicamente en el corredor logístico de San Lorenzo. Lotes comerciales listos para negocios que buscan capturar el tráfico del sur."
           image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
           reversed
        />

        {/* 8. STEPS TO INVEST */}
        <div className="bg-gray-50">
           <div className="container mx-auto px-6 pt-24 text-center">
              <h2 className="text-4xl font-bold">TU CAMINO A LA INVERSIÓN</h2>
           </div>
           <StepsGuide />
        </div>

        {/* 9. TESTIMONIALS */}
        <TestimonialsSection />

        {/* 10. MAP (Reused) */}
        <Section6Map />

        {/* 11. FAQ */}
        <FaqSection />

        {/* 12. FINAL CTA & CONTACT */}
        <CtaFooter />
        <CorporateContact />

      </div>
    </>
  );
}
