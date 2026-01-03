"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface PointerHighlightProps {
  children: React.ReactNode;
  containerClassName?: string;
  highlightColor?: string;
}

export const PointerHighlight = ({
  children,
  containerClassName,
  highlightColor = "rgba(59, 130, 246, 0.5)",
}: PointerHighlightProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", () => setIsHovered(true));
      container.addEventListener("mouseleave", () => setIsHovered(false));
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", () => setIsHovered(true));
        container.removeEventListener("mouseleave", () => setIsHovered(false));
      }
    };
  }, []);

  return (
    <span
      ref={containerRef}
      className={cn("relative inline-block", containerClassName)}
    >
      {children}
      {isHovered && (
        <span
          className="pointer-events-none absolute inset-0 rounded-md opacity-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${highlightColor}, transparent 40%)`,
            opacity: 0.6,
          }}
        />
      )}
    </span>
  );
};
