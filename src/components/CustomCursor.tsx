"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Position references
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only show on desktop screens (width >= 768px)
    if (window.innerWidth < 768) return;

    setIsVisible(true);

    // Dynamically inject stylesheet to hide default cursor
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
      body, a, button, select, input, textarea, .skill-card, .proj-card, .exp-item, .edu-card {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleEl);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isHoverable = 
        target.closest("a") || 
        target.closest("button") || 
        target.closest(".skill-card") || 
        target.closest(".proj-card") || 
        target.closest(".exp-item") || 
        target.closest(".edu-card");

      if (isHoverable) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    // Animation loop for smooth ring lag-behind
    let animationFrameId: number;
    const updateRingPosition = () => {
      const ease = 0.15;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }

      animationFrameId = requestAnimationFrame(updateRingPosition);
    };

    animationFrameId = requestAnimationFrame(updateRingPosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
      if (document.head.contains(styleEl)) {
        document.head.removeChild(styleEl);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Central dot cursor */}
      <div
        ref={dotRef}
        style={{
          left: "-100px",
          top: "-100px",
        }}
        className="cursor-dot"
      />
      {/* Outer ring cursor */}
      <div
        ref={ringRef}
        style={{
          left: "-100px",
          top: "-100px",
          transform: `translate(-50%, -50%) ${isHovered ? "scale(1.8)" : "scale(1)"}`,
          opacity: isHovered ? 0.4 : 0.6,
        }}
        className="cursor-ring"
      />
    </>
  );
}
