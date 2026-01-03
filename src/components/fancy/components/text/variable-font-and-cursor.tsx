"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FontVariationMapping {
  y?: { name: string; min: number; max: number };
  x?: { name: string; min: number; max: number };
}

interface VariableFontAndCursorProps {
  label: string;
  className?: string;
  fontVariationMapping?: FontVariationMapping;
  containerRef: React.RefObject<HTMLDivElement>;
}

const VariableFontAndCursor = ({
  label,
  className,
  fontVariationMapping,
  containerRef,
}: VariableFontAndCursorProps) => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !textRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const containerWidth = rect.width;
      const containerHeight = rect.height;

      // Normalize mouse position to 0-1 range
      const normalizedX = Math.max(0, Math.min(1, x / containerWidth));
      const normalizedY = Math.max(0, Math.min(1, y / containerHeight));

      // Apply font variation settings
      if (fontVariationMapping) {
        const variations: Record<string, number> = {};

        if (fontVariationMapping.x) {
          const { name, min, max } = fontVariationMapping.x;
          variations[name] = min + (max - min) * normalizedX;
        }

        if (fontVariationMapping.y) {
          const { name, min, max } = fontVariationMapping.y;
          variations[name] = min + (max - min) * (1 - normalizedY);
        }

        // Apply font variations
        const variationString = Object.entries(variations)
          .map(([key, value]) => `"${key}" ${value}`)
          .join(", ");

        textRef.current.style.fontVariationSettings = variationString;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [containerRef, fontVariationMapping]);

  return (
    <h1 ref={textRef} className={cn(className)}>
      {label}
    </h1>
  );
};

export default VariableFontAndCursor;
