import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type RevealDirection = "start" | "center" | "end";
type AnimateOn = "hover" | "view";

type DecryptedTextProps = {
  text: string;
  speed?: number;
  maxIterations?: number;
  characters?: string;
  className?: string;
  encryptedClassName?: string;
  revealDirection?: RevealDirection;
  animateOn?: AnimateOn;
};

const DEFAULT_CHARACTERS = "ATGCATGCATGC01Δμλ";

export default function DecryptedText({
  text,
  speed = 70,
  maxIterations = 18,
  characters = DEFAULT_CHARACTERS,
  className = "",
  encryptedClassName = "",
  revealDirection = "center",
  animateOn = "hover",
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const hasViewed = useRef(false);
  const frameRef = useRef<number | null>(null);
  const rootRef = useRef<HTMLSpanElement>(null);

  const positions = useMemo(() => {
    const result = Array.from({ length: text.length }, (_, index) => index);
    if (revealDirection === "center") {
      return result.sort((a, b) => Math.abs(a - text.length / 2) - Math.abs(b - text.length / 2));
    }
    if (revealDirection === "end") return result.reverse();
    return result;
  }, [revealDirection, text.length]);

  const animate = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    let iteration = 0;
    const revealCount = Math.max(1, Math.ceil(text.length / maxIterations));

    const tick = () => {
      iteration += 1;
      const revealed = new Set(positions.slice(0, Math.min(text.length, iteration * revealCount)));
      setDisplayText(
        Array.from(text, (character, index) =>
          character === " " || character === "•"
            ? character
            : revealed.has(index)
              ? character
              : characters[Math.floor(Math.random() * characters.length)],
        ).join(""),
      );
      if (revealed.size === text.length) {
        setDisplayText(text);
        setIsAnimating(false);
        frameRef.current = null;
        return;
      }
      frameRef.current = window.setTimeout(tick, speed);
    };
    tick();
  }, [characters, isAnimating, maxIterations, positions, speed, text]);

  useEffect(() => {
    if (animateOn !== "view" || !rootRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasViewed.current) {
          hasViewed.current = true;
          animate();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, [animate, animateOn]);

  useEffect(
    () => () => {
      if (frameRef.current !== null) window.clearTimeout(frameRef.current);
    },
    [],
  );

  return (
    <span
      ref={rootRef}
      className={isAnimating ? encryptedClassName : className}
      onMouseEnter={animateOn === "hover" ? animate : undefined}
      aria-label={text}
    >
      {displayText}
    </span>
  );
}
