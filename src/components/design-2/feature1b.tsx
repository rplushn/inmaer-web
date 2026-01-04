"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Feature1bProps {
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  videoUrl?: string;
  videoCaption?: string;
  videoSecondaryCaption?: string;
  cards?: {
    title: string;
    description: string;
    icon?: React.ComponentType<{ className?: string }>;
    className?: string;
  }[];
}

const Feature1b = ({
  className,
  imageSrc,
  imageAlt,
  videoUrl,
  videoCaption,
  videoSecondaryCaption,
  cards,
}: Feature1bProps = {}) => {
  const defaultImageSrc = "https://img.youtube.com/vi/Lc4eeUXtybU/sddefault.jpg";
  const defaultImageAlt = "Arquitectura que Respira - Video preview";
  const defaultVideoUrl = "https://www.youtube.com/watch?v=Lc4eeUXtybU";
  const defaultVideoCaption = "Arquitectura que Respira";
  const defaultVideoSecondaryCaption = "(0:24 Sec)";
  const defaultCards = [
    {
      title: "Seguridad Integral",
      description: "Circuitos cerrados con vigilancia 24/7 para que tu familia viva sin preocupaciones.",
    },
    {
      title: "Diseño Centrado en Ti",
      description: "Espacios arquitectónicos pensados para tu comodidad y estilo de vida moderno.",
    },
    {
      title: "Acompañamiento Total",
      description: "Te guiamos en cada paso, desde la selección del lote hasta la entrega de llaves.",
    },
    {
      title: "Plusvalía Garantizada",
      description: "Ubicaciones estratégicas que aseguran el crecimiento de tu inversión año tras año.",
    },
  ];

  const finalImageSrc = imageSrc ?? defaultImageSrc;
  const finalImageAlt = imageAlt ?? defaultImageAlt;
  const finalVideoUrl = videoUrl ?? defaultVideoUrl;
  const finalVideoCaption = videoCaption ?? defaultVideoCaption;
  const finalVideoSecondaryCaption = videoSecondaryCaption ?? defaultVideoSecondaryCaption;
  const finalCards = cards ?? defaultCards;

  // Helper function to extract YouTube video ID
  const getYouTubeVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const youtubeId = finalVideoUrl ? getYouTubeVideoId(finalVideoUrl) : null;
  const isYouTube = !!youtubeId;
  const isMobile = useIsMobile();

  return (
    <section className={cn("bg-muted font-sans", className)}>
      <div className="container mx-auto flex flex-col gap-2">
        <div className="grid w-full grid-cols-1 gap-1 lg:grid-cols-4">
          {finalCards.map((card, index) => (
            <Card key={index} className="border-none rounded-none p-10 shadow-none font-[system-ui,-apple-system,BlinkMacSystemFont,sans-serif] text-[13px]">
              <div className="flex w-full justify-end">
                <div className="text-[13px] font-medium font-sans text-muted-foreground">
                  0{index + 1}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[15px] leading-tight font-normal font-[system-ui,-apple-system,BlinkMacSystemFont,sans-serif] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-muted-foreground font-[system-ui,-apple-system,BlinkMacSystemFont,sans-serif]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Video Container */}
        <Dialog>
          <DialogTrigger asChild>
            <motion.div
              className="group relative aspect-video min-h-72 cursor-pointer overflow-hidden rounded-none"
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0"
                variants={{
                  initial: { filter: "blur(0px)" },
                  hover: { filter: "blur(4px)" },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.img
                  src={finalImageSrc}
                  alt={finalImageAlt}
                  className="h-full w-full rounded-none object-cover"
                  variants={{
                    initial: { scale: 1 },
                    hover: { scale: 1.1 },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.div>
              <div className="bg-opacity-20 absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="flex flex-col items-center justify-center gap-2 md:flex-row"
                  variants={{
                    initial: { gap: "0.5rem" },
                    hover: { gap: "0rem" },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.div
                    variants={{
                      initial: { x: 0, scale: 1 },
                      hover: {
                        x: isMobile ? 0 : "75%",
                        scale: 1.2,
                      },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Button
                      size="lg"
                      className="h-14 w-14 rounded-full bg-secondary hover:bg-secondary lg:h-20 lg:w-20"
                    >
                      <Play className="ml-0.5 size-5 text-primary md:size-7" />
                      <span className="sr-only">{finalVideoCaption}</span>
                    </Button>
                  </motion.div>

                  <motion.div
                    className="text-center md:text-left"
                    variants={{
                      initial: { opacity: 1 },
                      hover: { opacity: 0, transform: "-translate-y-3" },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="px-4 py-2">
                      <p className="text-lg font-bold font-sans text-secondary">
                        {finalVideoCaption}
                      </p>
                      <p className="text-lg font-medium font-sans text-muted-foreground">
                        {finalVideoSecondaryCaption}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </DialogTrigger>
          <DialogContent className="w-full border-none bg-black p-0 md:max-w-6xl md:p-1">
            <DialogTitle className="sr-only">{finalVideoCaption}</DialogTitle>
            <DialogDescription className="sr-only">
              {finalVideoSecondaryCaption} - {finalVideoCaption}
            </DialogDescription>
            <div className="aspect-video w-full">
              {isYouTube ? (
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/Lc4eeUXtybU?start=230&end=254&autoplay=1&rel=0"
                  title="Video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  className="h-full w-full rounded-none"
                  controls
                  autoPlay
                  src={finalVideoUrl}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export { Feature1b };
