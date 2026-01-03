"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect } from "react";

interface DraggableCardContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const DraggableCardContainer = ({
  children,
  className,
}: DraggableCardContainerProps) => {
  return (
    <div className={cn("select-none", className)}>
      {children}
    </div>
  );
};

interface DraggableCardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const DraggableCardBody = ({
  children,
  className,
}: DraggableCardBodyProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      const rect = card.getBoundingClientRect();
      setDragStart({
        x: e.clientX - rect.left - position.x,
        y: e.clientY - rect.top - position.y,
      });
      e.preventDefault();
      e.stopPropagation();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const container = card.offsetParent as HTMLElement;
      const containerRect = container?.getBoundingClientRect() || { left: 0, top: 0 };
      
      setPosition({
        x: e.clientX - dragStart.x - containerRect.left,
        y: e.clientY - dragStart.y - containerRect.top,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    card.addEventListener("mousedown", handleMouseDown);

    return () => {
      card.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart, position]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "cursor-grab active:cursor-grabbing transition-transform",
        isDragging && "z-50",
        className
      )}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {children}
    </div>
  );
};
