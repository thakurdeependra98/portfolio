"use client";
import Image from "next/image";
import gsap from "gsap";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function LoadingPage({ onFinish }) {
  const [isFinished, setIsFinished] = useState(false);
  const introRef = useRef(null);
  const bigTitleRef = useRef(null);
  const creativeRef = useRef(null);
  const footerRef = useRef(null);

  const title = useMemo(() => "PORTFOLIO", []);
  const subtitle = "Creative";

  const handleLoadingFinish = useCallback(() => {
    setIsFinished(true);
    if (onFinish) {
      onFinish();
    }
  }, [onFinish]);

  useEffect(() => {
    const context = gsap.context(() => {
      const titleLetters = bigTitleRef.current?.querySelectorAll("[data-letter]") || [];
      const creativeLetters = creativeRef.current?.querySelectorAll("[data-letter]") || [];

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: handleLoadingFinish,
      });

      timeline.fromTo(
        introRef.current,
        { opacity: 0, scale: 1.03 },
        { opacity: 1, scale: 1, duration: 1 }
      );

      timeline.fromTo(
        titleLetters,
        { opacity: 0, y: 36, filter: "blur(12px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.85,
          stagger: 0.045,
        },
        "<0.1"
      );

      timeline.fromTo(
        creativeLetters,
        { opacity: 0, x: -18, filter: "blur(8px)" },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 0.7,
          stagger: 0.04,
        },
        "<-0.45"
      );

      timeline.fromTo(
        footerRef.current?.children || [],
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 },
        "<-0.2"
      );
    });

    return () => context.revert();
  }, [handleLoadingFinish]);

  const renderCharacters = (text, keyPrefix, className = "") =>
    text.split("").map((character, index) => (
      <span
        key={`${keyPrefix}-${index}`}
        data-letter
        className={`inline-block ${character === " " ? "w-[0.28em]" : ""} ${className}`}
      >
        {character === " " ? "\u00A0" : character}
      </span>
    ));

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden bg-[#050505] transition-transform duration-700 ease-in-out ${
        isFinished ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.25),rgba(0,0,0,0.9))]" />

      <div className="absolute inset-0 opacity-80">
        <div className="absolute left-1/2 top-1/2 h-[92vw] w-[92vw] max-h-225 max-w-225 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/8 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[72vw] w-[72vw] max-h-175 max-w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/6 blur-3xl" />
      </div>

      <div ref={introRef} className="relative flex h-full w-full items-center justify-center px-4 opacity-0">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-[68vh] w-[72vw] max-h-190 max-w-245">
            <Image
              src="/me.png"
              alt="Portrait backdrop"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 72vw"
              className="object-contain object-center opacity-22 saturate-0 contrast-125 blur-[1px]"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/70" />
          </div>
        </div>

        <div className="relative z-10 flex w-full max-w-350 flex-col items-center justify-center text-center">
          <div
            ref={creativeRef}
            className="mb-[-0.3em] text-[clamp(2rem,4vw,4.5rem)] font-[cursive] italic leading-none tracking-wide text-[#f4a62a] drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)]"
          >
            {renderCharacters(subtitle, "creative")}
          </div>

          <h1
            ref={bigTitleRef}
            className="text-[clamp(4rem,14vw,13rem)] font-thin uppercase leading-[0.85] tracking-wider text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.75)]"
            aria-label={title}
          >
            {renderCharacters(title, "title", "will-change-transform")}
          </h1>

          <div
            ref={footerRef}
            className="mt-6 flex w-full max-w-295 items-center justify-between gap-4 px-2 text-[0.7rem] uppercase tracking-[0.34em] text-white/68 sm:text-xs"
          >
            <span>Creative Portfolio Presentation</span>
            <span>Presented By: Deependra Singh</span>
          </div>
        </div>
      </div>
    </div>
  );
}
