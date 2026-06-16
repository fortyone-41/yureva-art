// Серии работ — главы альбома. Каждая разворачивается inline.
//
// Импорты — статические; webpack сам подставит хеш-имена в bundle.
// Атрибут loading="lazy" на <img> в Series.tsx гарантирует, что
// миниатюры внутри свёрнутых глав не грузятся преждевременно.

/* ----------- Пейзаж маслом ----------- */
import oil_2  from "../images/galery/scenery/oil/2.jpg";
import oil_3  from "../images/galery/scenery/oil/3.jpg";
import oil_8  from "../images/galery/scenery/oil/8.jpg";
import oil_9  from "../images/galery/scenery/oil/9.jpg";
import oil_10 from "../images/galery/scenery/oil/10.jpg";
import oil_11 from "../images/galery/scenery/oil/11.jpg";
import oil_12 from "../images/galery/scenery/oil/12.jpg";
import oil_13 from "../images/galery/scenery/oil/13.jpg";
import oil_14 from "../images/galery/scenery/oil/14.jpg";
import oil_15 from "../images/galery/scenery/oil/15.jpg";
import oil_16 from "../images/galery/scenery/oil/16.jpg";
import oil_17 from "../images/galery/scenery/oil/17.jpg";

/* ----------- Пейзаж акварелью ----------- */
import aqua_3  from "../images/galery/scenery/aqua/3.jpg";
import aqua_4  from "../images/galery/scenery/aqua/4.jpg";
import aqua_5  from "../images/galery/scenery/aqua/5.jpg";
import aqua_6  from "../images/galery/scenery/aqua/6.jpg";
import aqua_7  from "../images/galery/scenery/aqua/7.jpg";
import aqua_8  from "../images/galery/scenery/aqua/8.jpg";
import aqua_9  from "../images/galery/scenery/aqua/9.jpg";
import aqua_10 from "../images/galery/scenery/aqua/10.jpg";
import aqua_11 from "../images/galery/scenery/aqua/11.jpg";
import aqua_12 from "../images/galery/scenery/aqua/12.jpg";

/* ----------- Портрет ----------- */
import po_1 from "../images/galery/portrait/oil/1.jpg";
import po_2 from "../images/galery/portrait/oil/2.jpg";
import po_4 from "../images/galery/portrait/oil/4.jpg";
import po_5 from "../images/galery/portrait/oil/5.jpg";
import po_6 from "../images/galery/portrait/oil/6.jpg";
import po_7 from "../images/galery/portrait/oil/7.jpg";
import po_8 from "../images/galery/portrait/oil/8.jpg";

import pa_1 from "../images/galery/portrait/aqua/1.jpg";
import pa_2 from "../images/galery/portrait/aqua/2.jpg";
import pa_3 from "../images/galery/portrait/aqua/3.jpg";
import pa_4 from "../images/galery/portrait/aqua/4.jpg";
import pa_5 from "../images/galery/portrait/aqua/5.jpg";
import pa_6 from "../images/galery/portrait/aqua/6.jpg";
import pa_7 from "../images/galery/portrait/aqua/7.jpg";

import pg_1 from "../images/galery/portrait/graph/1.jpg";
import pg_2 from "../images/galery/portrait/graph/2.jpg";
import pg_3 from "../images/galery/portrait/graph/3.jpg";
import pg_4 from "../images/galery/portrait/graph/4.jpg";
import pg_6 from "../images/galery/portrait/graph/6.jpg";
import pg_7 from "../images/galery/portrait/graph/7.jpg";
import pg_8 from "../images/galery/portrait/graph/8.jpg";
import pg_9 from "../images/galery/portrait/graph/9.jpg";

/* ----------- Мастер-классы ----------- */
import life_1 from "../images/galery/life/1.jpg";
import life_2 from "../images/galery/life/2.jpg";
import life_3 from "../images/galery/life/3.jpg";

import sp_1  from "../images/galery/study/parents/1.jpg";
import sp_2  from "../images/galery/study/parents/2.jpg";
import sp_3  from "../images/galery/study/parents/3.jpg";
import sp_4  from "../images/galery/study/parents/4.jpg";
import sp_5  from "../images/galery/study/parents/5.jpg";
import sp_8  from "../images/galery/study/parents/8.jpg";
import sp_9  from "../images/galery/study/parents/9.jpg";
import sp_10 from "../images/galery/study/parents/10.jpg";

export type SeriesWork = { src: string; alt: string };

export type Series = {
  id: string;
  title: string;
  subtitle: string;
  count: number;
  /** Цвет «обложки» главы — мягкий, из палитры серии. */
  accent: string;
  /** Контрастный оттенок для текста на обложке. */
  ink?: string;
  /** 2–3 миниатюры, разложенные «небрежно» на обложке. */
  previews: SeriesWork[];
  /** Полный список работ серии — раскрывается inline. */
  works: SeriesWork[];
};

export const seriesList: Series[] = [
  {
    id: "scenery-oil",
    title: "Пейзаж маслом",
    subtitle: "Тихие пространства, северный свет",
    count: 12,
    accent: "#E8E0CC",
    previews: [
      { src: oil_13, alt: "Пейзаж маслом — 1" },
      { src: oil_10, alt: "Пейзаж маслом — 2" },
      { src: oil_15, alt: "Пейзаж маслом — 3" },
    ],
    works: [
      { src: oil_2,  alt: "Пейзаж маслом" },
      { src: oil_3,  alt: "Пейзаж маслом" },
      { src: oil_8,  alt: "Пейзаж маслом" },
      { src: oil_9,  alt: "Пейзаж маслом" },
      { src: oil_10, alt: "Пейзаж маслом" },
      { src: oil_11, alt: "Пейзаж маслом" },
      { src: oil_12, alt: "Пейзаж маслом" },
      { src: oil_13, alt: "Пейзаж маслом" },
      { src: oil_14, alt: "Пейзаж маслом" },
      { src: oil_15, alt: "Пейзаж маслом" },
      { src: oil_16, alt: "Пейзаж маслом" },
      { src: oil_17, alt: "Пейзаж маслом" },
    ],
  },
  {
    id: "scenery-aqua",
    title: "Пейзаж акварелью",
    subtitle: "Воздух и влага, прозрачность",
    count: 10,
    accent: "#D2DDD3",
    previews: [
      { src: aqua_5, alt: "Пейзаж акварелью — 1" },
      { src: aqua_8, alt: "Пейзаж акварелью — 2" },
      { src: aqua_11, alt: "Пейзаж акварелью — 3" },
    ],
    works: [
      { src: aqua_3,  alt: "Пейзаж акварелью" },
      { src: aqua_4,  alt: "Пейзаж акварелью" },
      { src: aqua_5,  alt: "Пейзаж акварелью" },
      { src: aqua_6,  alt: "Пейзаж акварелью" },
      { src: aqua_7,  alt: "Пейзаж акварелью" },
      { src: aqua_8,  alt: "Пейзаж акварелью" },
      { src: aqua_9,  alt: "Пейзаж акварелью" },
      { src: aqua_10, alt: "Пейзаж акварелью" },
      { src: aqua_11, alt: "Пейзаж акварелью" },
      { src: aqua_12, alt: "Пейзаж акварелью" },
    ],
  },
  {
    id: "portrait",
    title: "Портрет",
    subtitle: "Масло, акварель, графика",
    count: 22,
    accent: "#EFD9CB",
    previews: [
      { src: po_4, alt: "Портрет — 1" },
      { src: pa_1, alt: "Портрет — 2" },
      { src: pg_1, alt: "Портрет — 3" },
    ],
    works: [
      { src: po_1, alt: "Портрет маслом" },
      { src: po_2, alt: "Портрет маслом" },
      { src: po_4, alt: "Портрет маслом" },
      { src: po_5, alt: "Портрет маслом" },
      { src: po_6, alt: "Портрет маслом" },
      { src: po_7, alt: "Портрет маслом" },
      { src: po_8, alt: "Портрет маслом" },
      { src: pa_1, alt: "Портрет акварелью" },
      { src: pa_2, alt: "Портрет акварелью" },
      { src: pa_3, alt: "Портрет акварелью" },
      { src: pa_4, alt: "Портрет акварелью" },
      { src: pa_5, alt: "Портрет акварелью" },
      { src: pa_6, alt: "Портрет акварелью" },
      { src: pa_7, alt: "Портрет акварелью" },
      { src: pg_1, alt: "Портрет — графика" },
      { src: pg_2, alt: "Портрет — графика" },
      { src: pg_3, alt: "Портрет — графика" },
      { src: pg_4, alt: "Портрет — графика" },
      { src: pg_6, alt: "Портрет — графика" },
      { src: pg_7, alt: "Портрет — графика" },
      { src: pg_8, alt: "Портрет — графика" },
      { src: pg_9, alt: "Портрет — графика" },
    ],
  },
  {
    id: "studies",
    title: "Мастер-классы",
    subtitle: "Из мастерской и с натуры",
    count: 11,
    accent: "#E5DCC8",
    previews: [
      { src: life_1, alt: "Мастер-класс — 1" },
      { src: sp_2,   alt: "Мастер-класс — 2" },
      { src: sp_5,   alt: "Мастер-класс — 3" },
    ],
    works: [
      { src: life_1, alt: "Мастер-класс" },
      { src: life_2, alt: "Мастер-класс" },
      { src: life_3, alt: "Мастер-класс" },
      { src: sp_1,   alt: "Мастер-класс" },
      { src: sp_2,   alt: "Мастер-класс" },
      { src: sp_3,   alt: "Мастер-класс" },
      { src: sp_4,   alt: "Мастер-класс" },
      { src: sp_5,   alt: "Мастер-класс" },
      { src: sp_8,   alt: "Мастер-класс" },
      { src: sp_9,   alt: "Мастер-класс" },
      { src: sp_10,  alt: "Мастер-класс" },
    ],
  },
];
