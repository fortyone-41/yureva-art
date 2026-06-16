import { useEffect, useRef, type CSSProperties } from "react";
import p1 from "../images/references/images/6.jpg";
import p2 from "../images/references/images/12.jpg";
import p3 from "../images/references/other/16.jpg";
import p4 from "../images/references/other/22.jpg";
import p5 from "../images/background/9.jpg";
import "./Process.scss";

/**
 * PROCESS — горизонтальная киноплёнка кадров из мастерской.
 * Каждый кадр со своим вертикальным смещением (offset) и одной
 * курсивной подписью. Появление кадров — однократный IO.
 *
 * ВНИМАНИЕ: изображения здесь — заглушки из references/background,
 * замените на реальные снимки процесса при первой возможности.
 */
const frames = [
  { src: p1, alt: "Кадр из мастерской",   offset: 0,   caption: "утро в мастерской — свет ложится первым" },
  { src: p2, alt: "Эскиз",                offset: 56,  caption: "пока всё ещё возможно — карандашом" },
  { src: p3, alt: "Палитра",              offset: 24,  caption: "слой за слоем — пейзаж проявляется как воспоминание" },
  { src: p4, alt: "Этюд у окна",          offset: 72,  caption: "акварель не позволяет колебаться" },
  { src: p5, alt: "После сеанса",         offset: 12,  caption: "и долго ещё смотрю — так ли" },
];

const Process = () => {
  const stripRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const items = Array.from(strip.querySelectorAll<HTMLElement>(".process__frame"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in-view");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    items.forEach((i) => io.observe(i));
    return () => io.disconnect();
  }, []);

  return (
    <section className="process" id="process" aria-labelledby="process-title">
      <header className="process__head">
        <p className="process__eyebrow">Процесс</p>
        <h2 id="process-title" className="process__title">
          В <em>мастерской</em>
        </h2>
      </header>

      <div className="process__strip" ref={stripRef} role="list">
        {frames.map((f, i) => (
          <figure
            key={i}
            role="listitem"
            className="process__frame"
            style={{ "--offset": `${f.offset}px` } as CSSProperties}
          >
            <div className="process__media">
              <img src={f.src} alt={f.alt} loading="lazy" decoding="async" />
            </div>
            <figcaption className="process__caption">{f.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export { Process };
