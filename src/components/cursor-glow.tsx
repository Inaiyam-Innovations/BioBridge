import { useEffect, useState, useRef } from "react";

export function CursorGlow() {
  const [visible, setVisible] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only activate for devices with a fine pointer (mouse / trackpad)
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const animate = () => {
      const ease = 0.16; // Fluid trailing response
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * ease;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[35] overflow-hidden transition-opacity duration-500 select-none"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* Bioluminescent cyan-blue radial aura matching the BioBridge theme */}
      <div
        ref={glowRef}
        className="absolute -left-[320px] -top-[320px] h-[640px] w-[640px] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(32, 175, 197, 0.16) 0%, rgba(21, 153, 181, 0.10) 32%, rgba(217, 242, 246, 0.05) 58%, transparent 72%)",
          filter: "blur(20px)",
        }}
      />
    </div>
  );
}

