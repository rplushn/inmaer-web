"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Section4ProjectsProps {
  className?: string;
}

const Section4Projects = ({ className }: Section4ProjectsProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const Images = [
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw12.jpeg",
      title: "Residencial Altos del Bosque",
      description: "Donde la naturaleza abraza tu hogar.",
      link: "#",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw13.jpeg",
      title: "Torre Horizonte",
      description: "Espacios inteligentes para la vida moderna.",
      link: "#",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw14.jpeg",
      title: "Eco-Villas Maderas",
      description: "Sostenibilidad y lujo en equilibrio.",
      link: "#",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw16.jpeg",
      title: "Diseños a Medida",
      description: "Arquitectura personalizada para tu visión única.",
      link: "#",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw17.jpeg",
      title: "Diseños a Medida",
      description: "Arquitectura personalizada para tu visión única.",
      link: "#",
    },
  ];

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className={cn("py-32", className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            loop: true,
            slidesToScroll: 1,
          }}
          plugins={[
            AutoScroll({
              speed: 1,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent className="flex w-full gap-4">
            {Images.map((img, index) => (
              <CarouselItem key={index} className="w-full basis-[91%]">
                <div className="p-1">
                  <div
                    key={index}
                    className="relative flex h-[600px] flex-col items-end justify-between bg-muted p-8 overflow-hidden rounded-none"
                  >
                    <div className="pointer-events-none absolute top-0 left-0 h-full w-full">
                      <img
                        src={img.image}
                        alt={img.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="z-10 mt-auto text-white">
                      <h1 className="max-w-lg text-right text-6xl font-light tracking-tighter">
                        {img.title}
                      </h1>
                      <p className="my-6 max-w-lg text-right text-lg">
                        {img.description}
                      </p>
                    </div>
                    <div className="z-10 flex w-full justify-between">
                      <a href={img.link}>
                        <Button
                          variant="outline"
                          className="text-md group flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight bg-background/80 backdrop-blur-sm"
                        >
                          VER DETALLES
                          <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {Array.from({ length: Images.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-all",
                  current === index
                    ? "w-4 bg-primary"
                    : "bg-muted-foreground/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </motion.div>
    </section>
  );
};

export { Section4Projects };
