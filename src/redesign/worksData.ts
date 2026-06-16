// Список «избранных работ» для главной галереи.
//
// ВАЖНО: названия, годы и техника — заглушки, подобранные по смыслу
// файлов. Замените реальными названиями работ Светланы.
//
// Поля aspect — это ширина/высота в произвольных единицах (только пропорция
// важна). Они используются на контейнере, чтобы избежать layout shift.

import w1 from "../images/galery/scenery/oil/13.jpg";
import w2 from "../images/galery/portrait/oil/4.jpg";
import w3 from "../images/galery/scenery/aqua/5.jpg";
import w4 from "../images/galery/portrait/aqua/1.jpg";
import w5 from "../images/galery/scenery/oil/10.jpg";
import w6 from "../images/galery/portrait/graph/1.jpg";
import w7 from "../images/galery/life/1.jpg";

export type Work = {
  id: string;
  src: string;
  title: string;
  technique: string;
  year: string;
  // Пропорция исходника (примерная — для зарезервированной площади).
  aspect: { w: number; h: number };
  // Раскладка слота в строй: слева/по центру/справа + размер.
  align: "left" | "center" | "right";
  size: "sm" | "md" | "lg";
};

export const works: Work[] = [
  {
    id: "w1",
    src: w1,
    title: "Тихий берег",
    technique: "холст, масло",
    year: "2023",
    aspect: { w: 5, h: 4 },
    align: "left",
    size: "lg",
  },
  {
    id: "w2",
    src: w2,
    title: "Портрет",
    technique: "холст, масло",
    year: "2022",
    aspect: { w: 4, h: 5 },
    align: "right",
    size: "md",
  },
  {
    id: "w3",
    src: w3,
    title: "После дождя",
    technique: "бумага, акварель",
    year: "2023",
    aspect: { w: 5, h: 4 },
    align: "center",
    size: "sm",
  },
  {
    id: "w4",
    src: w4,
    title: "У окна",
    technique: "бумага, акварель",
    year: "2022",
    aspect: { w: 4, h: 5 },
    align: "left",
    size: "md",
  },
  {
    id: "w5",
    src: w5,
    title: "Северный вечер",
    technique: "холст, масло",
    year: "2021",
    aspect: { w: 5, h: 4 },
    align: "right",
    size: "lg",
  },
  {
    id: "w6",
    src: w6,
    title: "Этюд",
    technique: "бумага, графика",
    year: "2023",
    aspect: { w: 4, h: 5 },
    align: "center",
    size: "md",
  },
  {
    id: "w7",
    src: w7,
    title: "На свету",
    technique: "холст, масло",
    year: "2024",
    aspect: { w: 4, h: 5 },
    align: "left",
    size: "sm",
  },
];
