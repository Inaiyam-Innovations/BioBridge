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
	const animatingRef = useRef(false);
	const rootRef = useRef<HTMLSpanElement>(null);
	const safeCharacters = characters.length > 0 ? characters : DEFAULT_CHARACTERS;

	const positions = useMemo(() => {
		const result = Array.from({ length: text.length }, (_, index) => index);
		if (revealDirection === "center") {
			return result.sort(
				(a, b) =>
					Math.abs(a - text.length / 2) - Math.abs(b - text.length / 2),
			);
		}
		if (revealDirection === "end") return result.reverse();
		return result;
	}, [revealDirection, text.length]);

	const animate = useCallback(() => {
		if (animatingRef.current) return;
		if (frameRef.current !== null) {
			window.clearTimeout(frameRef.current);
			frameRef.current = null;
		}

		animatingRef.current = true;
		setIsAnimating(true);
		let iteration = 0;
		const revealCount = Math.max(
			1,
			Math.ceil(text.length / Math.max(1, maxIterations)),
		);

		const tick = () => {
			iteration += 1;
			const revealSize = Math.min(text.length, iteration * revealCount);
			const revealed = new Set(positions.slice(0, revealSize));
			const nextText = Array.from(text, (character, index) => {
				if (character === " " || character === "•") return character;
				if (revealed.has(index)) return character;
				return safeCharacters[
					Math.floor(Math.random() * safeCharacters.length)
				];
			}).join("");

			setDisplayText(nextText);
			if (revealed.size >= text.length) {
				setDisplayText(text);
				setIsAnimating(false);
				animatingRef.current = false;
				frameRef.current = null;
				return;
			}
			frameRef.current = window.setTimeout(tick, Math.max(1, speed));
		};

		tick();
	}, [maxIterations, positions, safeCharacters, speed, text]);

	useEffect(() => {
		if (animateOn !== "view" || !rootRef.current || hasViewed.current) return;
		const element = rootRef.current;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting && !hasViewed.current) {
				hasViewed.current = true;
				animate();
				observer.disconnect();
			}
		}, { threshold: 0.3 });
		observer.observe(element);
		return () => observer.disconnect();
	}, [animate, animateOn]);

	useEffect(() => {
		setDisplayText(text);
		hasViewed.current = false;
	}, [text]);

	useEffect(() => () => {
		if (frameRef.current !== null) window.clearTimeout(frameRef.current);
		frameRef.current = null;
		animatingRef.current = false;
	}, []);

	return (
		<span
			ref={rootRef}
			className={isAnimating ? encryptedClassName : className}
			onMouseEnter={animateOn === "hover" ? animate : undefined}
			aria-label={text}
			aria-live="polite"
		>
			{displayText}
		</span>
	);
}
