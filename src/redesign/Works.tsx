import { useCallback, useEffect, useRef, useState } from "react";
import { works, type Work } from "./worksData";
import "./Works.scss";

/**
 * SELECTED WORKS — кинематографичная вертикальная лента работ.
 *
 * Каждая работа — отдельный «слот», выровненный слева/справа/по центру,
 * со своим размером. Подпись появляется ниже изображения на ховере.
 * Клик открывает полноэкранный VIEWER c размытым фоном.
 *
 * IntersectionObserver добавляет .is-in-view фигурам один раз — затем
 * отписывается, чтобы не мешать прокрутке вниз.
 */
const Works = () => {
  const stripRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<Work | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Появление фигур по мере входа в viewport.
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const figures = Array.from(strip.querySelectorAll<HTMLElement>(".works__figure"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in-view");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );

    figures.forEach((f) => io.observe(f));
    return () => io.disconnect();
  }, []);

  // Открыть/закрыть viewer + Esc + блокировка скролла body.
  const open = useCallback((work: Work, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActive(work);
  }, []);

  const close = useCallback(() => {
    setActive(null);
    // Возвращаем фокус на исходную кнопку для доступности.
    queueMicrotask(() => triggerRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!active) {
      document.body.classList.remove("is-viewer-open");
      return;
    }
    document.body.classList.add("is-viewer-open");

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    // Фокус на кнопке закрытия — после открытия.
    queueMicrotask(() => closeBtnRef.current?.focus());

    return () => window.removeEventListener("keydown", onKey);
  }, [active, close]);

  return (
    <>
      <section className="works" id="works" aria-labelledby="works-title">
        <header className="works__head">
          <p className="works__eyebrow">Избранное</p>
          <h2 id="works-title" className="works__title">
            Работы <em>в свет</em>
          </h2>
        </header>

        <div className="works__strip" ref={stripRef}>
          {works.map((w) => (
            <article
              key={w.id}
              className={`works__item works__item--${w.align}`}
            >
              <button
                type="button"
                className={`works__figure works__figure--${w.size}`}
                onClick={(e) => open(w, e.currentTarget)}
                aria-label={`Открыть работу «${w.title}»`}
              >
                <span
                  className="works__media"
                  style={{ aspectRatio: `${w.aspect.w} / ${w.aspect.h}` }}
                >
                  <img
                    src={w.src}
                    alt={w.title}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className="works__caption">
                  <span className="works__name">{w.title}</span>
                  <span className="works__meta">
                    {w.technique} · {w.year}
                  </span>
                </span>
              </button>
            </article>
          ))}
        </div>
      </section>

      <div
        className={`viewer${active ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!active}
        aria-label={active ? `Работа «${active.title}»` : undefined}
        onClick={(e) => {
          // Клик по подложке (а не по изображению) — закрытие.
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="viewer__topbar">
          <button
            ref={closeBtnRef}
            type="button"
            className="viewer__close"
            onClick={close}
          >
            Закрыть
          </button>
        </div>

        <div className="viewer__stage">
          {active && (
            <img src={active.src} alt={active.title} />
          )}
        </div>

        <div className="viewer__meta">
          <h3 className="viewer__name">{active?.title ?? ""}</h3>
          <p className="viewer__sub">
            {active ? `${active.technique} · ${active.year}` : ""}
          </p>
        </div>
      </div>
    </>
  );
};

export { Works };
