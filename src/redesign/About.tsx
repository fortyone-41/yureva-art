import { useEffect, useRef } from "react";
import PortraitImage from "../images/about/main.jpg";
import "./About.scss";

/**
 * ABOUT — «рука за работой».
 *
 * Один IntersectionObserver включает .is-in-view, когда секция входит
 * примерно на четверть в окно; CSS отвечает за плавное «проявление».
 * Анимации выключаются при prefers-reduced-motion (в CSS).
 */
const About = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-in-view");
            // Однократное появление — отписываемся.
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0.12 }
    );
    io.observe(el);

    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="about paper" id="about" aria-labelledby="about-title">
      <div className="about__inner">
        <figure className="about__photo">
          <div className="about__photo-frame">
            <img
              src={PortraitImage}
              alt="Светлана Юрьева в мастерской"
              width={800}
              height={1000}
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption className="about__photo-caption">
            у мольберта
          </figcaption>
        </figure>

        <div className="about__text">
          <p className="about__eyebrow">О художнике</p>
          <h2 id="about-title" className="about__title">
            Рука <em>за работой</em>
          </h2>

          <div className="about__bio">
            <p>
              Художник-автодидакт. Живописью занимаюсь всю жизнь, активно
              выставляюсь с 2013 года: пейзаж, портрет на заказ, анималистика;
              многие работы — в частных коллекциях.
            </p>
            <p>
              В декабре 2023 года открыла свою Арт-студию в Санкт-Петербурге —
              там же провожу мастер-классы для взрослых и занятия для детей
              от трёх лет.
            </p>
            <p>
              Мне часто говорят, что от моих картин становится светло на душе.
              Может, в этом и есть мой талант — добавлять в мир одну добрую
              картину.
            </p>
          </div>

          <ul className="about__facts" aria-label="Кратко">
            <li>10+ лет на выставках</li>
            <li>масло · акварель · графика</li>
            <li>Санкт-Петербург / онлайн</li>
            <li>член Союза Русских художников</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export { About };
