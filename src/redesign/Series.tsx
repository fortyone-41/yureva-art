import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { seriesList, type Series as SeriesType } from "./seriesData";
import "./Series.scss";

/**
 * SERIES — главы альбома. Открыта одна за раз (классический аккордеон).
 * Высота раскрытой части анимируется JS-измерением scrollHeight, чтобы
 * работать стабильно во всех браузерах и не зависеть от поддержки
 * grid-template-rows: 0fr/1fr transition.
 */

type ChapterProps = {
  s: SeriesType;
  isOpen: boolean;
  onToggle: () => void;
};

const SeriesChapter = ({ s, isOpen, onToggle }: ChapterProps) => {
  const expandRef = useRef<HTMLDivElement | null>(null);

  // Раскрытие / схлопывание: JS меряет реальную высоту контента.
  useEffect(() => {
    const el = expandRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.style.height = isOpen ? "auto" : "0px";
      return;
    }

    if (isOpen) {
      // Открытие: 0 → measured height, затем «отпускаем» в auto.
      el.style.height = "0px";
      // Reflow перед началом transition.
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      el.offsetHeight;
      const target = el.scrollHeight;
      el.style.height = target + "px";

      const onEnd = (e: TransitionEvent) => {
        if (e.propertyName !== "height") return;
        el.style.height = "auto";
        el.removeEventListener("transitionend", onEnd);
      };
      el.addEventListener("transitionend", onEnd);
      return () => el.removeEventListener("transitionend", onEnd);
    } else {
      // Закрытие: auto → фиксируем текущую → 0.
      const current = el.scrollHeight;
      el.style.height = current + "px";
      // Forced reflow перед переходом к 0.
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      el.offsetHeight;
      el.style.height = "0px";
    }
  }, [isOpen]);

  return (
    <div
      className={`series__chapter${isOpen ? " is-open" : ""}`}
      style={{ "--accent": s.accent } as CSSProperties}
    >
      <button
        type="button"
        className="series__opener"
        aria-expanded={isOpen}
        aria-controls={`series-expand-${s.id}`}
        onClick={onToggle}
      >
        <div className="series__copy">
          <span className="series__count">{s.count} работ в альбоме</span>
          <h3 className="series__name">{s.title}</h3>
          <span className="series__cta">
            {isOpen ? "свернуть" : "посмотреть всё"}
          </span>
        </div>

        <div className="series__previews" aria-hidden="true">
          {s.previews.map((p, i) => (
            <div key={i} className="series__preview">
              <img src={p.src} alt="" loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </button>

      <div
        id={`series-expand-${s.id}`}
        ref={expandRef}
        className="series__expand"
        role="region"
        aria-label={`Альбом «${s.title}»`}
        // Стартовое значение — свёрнуто. Дальше управляет эффект.
        style={{ height: 0 }}
      >
        <div className="series__works">
          {s.works.map((w, i) => (
            <div key={i} className="series__work">
              <img src={w.src} alt={w.alt} loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Series = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) =>
    setOpenId((curr) => (curr === id ? null : id));

  return (
    <section className="series" id="series" aria-labelledby="series-title">
      <header className="series__head">
        <h2 id="series-title" className="series__title">
          Альбомы
        </h2>
      </header>

      {seriesList.map((s) => (
        <SeriesChapter
          key={s.id}
          s={s}
          isOpen={openId === s.id}
          onToggle={() => toggle(s.id)}
        />
      ))}
    </section>
  );
};

export { Series };
