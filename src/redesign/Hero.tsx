import { useEffect, useRef } from "react";
import HeroImage from "../images/galery/scenery/oil/13.jpg";
import "./Hero.scss";

/**
 * HERO — the opening canvas.
 *
 * Two scroll-tied effects:
 *  1. Image scale 1.08 → 1.0 driven by --hero-progress (set on the section).
 *  2. Sentinel at hero bottom toggles body.is-past-hero so the nav can fade in.
 *
 * Both reduce gracefully under prefers-reduced-motion (handled in CSS).
 */
const Hero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sentinel = sentinelRef.current;
    if (!section || !sentinel) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1) Drive the image zoom-out from scroll position.
    let raf = 0;
    const updateProgress = () => {
      raf = 0;
      if (reduce) return;
      const h = section.offsetHeight || 1;
      const p = Math.min(1, Math.max(0, window.scrollY / h));
      section.style.setProperty("--hero-progress", p.toFixed(4));
    };
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(updateProgress);
    };
    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });

    // 2) Toggle body class once the hero leaves the viewport.
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          document.body.classList.toggle("is-past-hero", !entry.isIntersecting);
        }
      },
      { rootMargin: "0px", threshold: 0 }
    );
    io.observe(sentinel);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
      io.disconnect();
      document.body.classList.remove("is-past-hero");
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero"
      id="hero"
      aria-label="Светлана Юрьева — главная"
    >
      <picture className="hero__image-wrap">
        <img
          className="hero__image"
          src={HeroImage}
          alt="Картина маслом — пейзаж"
          width={1920}
          height={1280}
          loading="eager"
          decoding="async"
        />
      </picture>

      <div className="hero__overlay">
        {/* Угловые метки — контекст художника, не «навигация».
            Намеренно мелкие, чтобы держать ритм пространства. */}
        <span className="hero__mark hero__mark--tl">Санкт-Петербург</span>
        <span className="hero__mark hero__mark--tr">2013 — ныне</span>

        <h1 className="hero__name">
          <span>Светлана</span>
          <span>Юрьева</span>
        </h1>

        <p className="hero__tagline">— от картин становится светло —</p>

        <span className="hero__mark hero__mark--br">
          масло · акварель · графика
        </span>
      </div>

      <span className="hero__cue" aria-hidden="true">
        <span className="hero__cue-text">листайте вниз</span>
      </span>
      <div ref={sentinelRef} className="hero__sentinel" aria-hidden="true" />
    </section>
  );
};

export { Hero };
