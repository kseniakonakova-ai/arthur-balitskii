"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function HeroCarousel() {
  // Замени на свои картинки
  const slides = useMemo(
    () => [
      "/images/slider/slide1.jpg",
  "/images/slider/slide2.jpg",
  "/images/slider/slide3.jpg",
  "/images/slider/slide4.jpg",
  "/images/slider/slide5.jpg",
  "/images/slider/slide6.jpg",
    ],
    []
  );

  const [i, setI] = useState(0);
  const startX = useRef<number | null>(null);

  const prev = () => setI((x) => (x - 1 + slides.length) % slides.length);
  const next = () => setI((x) => (x + 1) % slides.length);

  // Автопрокрутка (можно убрать, если не нужно)
  useEffect(() => {
    const t = window.setInterval(() => next(), 4500);
    return () => window.clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length]);

  // Клавиатура ← →
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length]);

  // Свайп мышью/трекпадом (drag)
  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current == null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;

    if (Math.abs(dx) < 40) return; // порог
    if (dx > 0) prev();
    else next();
  };

  return (
    <div className="carouselWrap">
      <div
        className="carousel"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        role="region"
        aria-label="Featured works"
      >
        {slides.map((src, idx) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={src} src={src} alt="" className={idx === i ? "active" : ""} />
        ))}

        <button className="carouselBtn left" onClick={prev} aria-label="Previous">
          ←
        </button>
        <button className="carouselBtn right" onClick={next} aria-label="Next">
          →
        </button>

        <div className="carouselDots" aria-label="Slide dots">
          {slides.map((_, idx) => (
            <button


key={idx}
              className={`carouselDot ${idx === i ? "active" : ""}`}
              onClick={() => setI(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}