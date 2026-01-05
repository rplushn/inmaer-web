"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { FadeIn } from "@/components/animations/fade-in";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Section3AmenitiesProps {
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  videoUrl?: string;
  videoCaption?: string;
  videoSecondaryCaption?: string;
  storyImageSrc?: string;
  storyImageAlt?: string;
  storyTitle?: string;
  storyDescription?: string;
}

const Section3Amenities = ({
  className,
  imageSrc,
  imageAlt,
  videoUrl,
  videoCaption,
  videoSecondaryCaption,
  storyImageSrc = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  storyImageAlt = "Zona Oriental de Honduras",
  storyTitle = "Legado y Compromiso",
  storyDescription = "INMAER nació hace más de una década en la zona oriental con una misión clara: proveer a las familias de una inversión segura y elevar el estándar de vida. Nos hemos enfocado en desarrollar comunidades residenciales y plazas comerciales que transforman el entorno y generan plusvalía real.",
}: Section3AmenitiesProps = {}) => {
  const defaultImageSrc = "https://img.youtube.com/vi/Lc4eeUXtybU/sddefault.jpg";
  const defaultImageAlt = "Arquitectura que Respira - Video preview";
  const defaultVideoUrl = "https://www.youtube.com/watch?v=Lc4eeUXtybU";
  const defaultVideoCaption = "Arquitectura que Respira";
  const defaultVideoSecondaryCaption = "(0:24 Sec)";

  const finalImageSrc = imageSrc ?? defaultImageSrc;
  const finalImageAlt = imageAlt ?? defaultImageAlt;
  const finalVideoUrl = videoUrl ?? defaultVideoUrl;
  const finalVideoCaption = videoCaption ?? defaultVideoCaption;
  const finalVideoSecondaryCaption = videoSecondaryCaption ?? defaultVideoSecondaryCaption;

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
    <section className={cn("font-sans overflow-hidden w-full", className)} style={{ color: 'rgba(10, 10, 10, 1)' }}>
      <div className="flex flex-col md:flex-row h-auto md:h-[400px] w-full">
        {/* Left Column - Story Content (40-50% width) */}
        <div className="w-full md:w-[45%] bg-transparent flex items-center justify-center py-12 md:py-16 px-6 md:px-12 lg:px-16 order-2 md:order-1">
          <div className="max-w-lg mx-auto md:mx-0 w-full">
            {/* Story Image */}
            <FadeIn delay={0.1}>
              <div className="mb-8 md:mb-10">
                <img
                  src={storyImageSrc}
                  alt={storyImageAlt}
                  className="w-[300px] h-[200px] object-cover rounded-none"
                />
              </div>
            </FadeIn>

            {/* Story Text */}
            <FadeIn delay={0.2}>
              <p className="text-[10px] leading-relaxed text-muted-foreground font-sans font-medium w-[305px] h-[135px] -mt-[30px]">
                {storyDescription}
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Right Column - Video (50-60% width, extends to right edge) */}
        <div className="w-full md:w-[55%] h-[400px] md:h-full order-1 md:order-2 relative pr-4 md:pr-16 lg:pr-24">
          <Dialog>
            <DialogTrigger asChild>
              <motion.div
                className="group relative h-full w-full cursor-pointer overflow-hidden"
                whileHover="hover"
                initial="initial"
              >
                <motion.div
                  className="absolute inset-0"
                  variants={{
                    initial: { filter: "blur(0px)" },
                    hover: { filter: "blur(2px)" },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.img
                    src={finalImageSrc}
                    alt={finalImageAlt}
                    className="h-full w-full object-cover"
                    variants={{
                      initial: { scale: 1 },
                      hover: { scale: 1.05 },
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </motion.div>
                
                {/* Overlay with play button */}
                <div className="absolute right-0 bottom-0 w-full h-full flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300" style={{ width: '630px', height: '420px', maxWidth: '650px', paddingRight: '5px' }}>
                  <motion.div
                    className="flex flex-col items-center justify-center gap-3"
                    variants={{
                      initial: { opacity: 1, scale: 1 },
                      hover: { opacity: 1, scale: 1.1 },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Button
                      size="lg"
                      className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white/90 hover:bg-white text-foreground shadow-lg"
                    >
                      <Play className="ml-1 size-6 md:size-8 fill-foreground" />
                      <span className="sr-only">{finalVideoCaption}</span>
                    </Button>
                    {finalVideoCaption && (
                      <motion.div
                        className="text-center mt-2"
                        variants={{
                          initial: { opacity: 0.8 },
                          hover: { opacity: 1 },
                        }}
                      >
                        <p className="text-sm md:text-base font-medium text-white drop-shadow-lg">
                          {finalVideoCaption}
                        </p>
                        {finalVideoSecondaryCaption && (
                          <p className="text-xs md:text-sm text-white/80 mt-1">
                            {finalVideoSecondaryCaption}
                          </p>
                        )}
                      </motion.div>
                    )}
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
      </div>
    </section>
  );
};

export { Section3Amenities };
