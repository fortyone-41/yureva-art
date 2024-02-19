import { useEffect, useState } from "react";
import { Album } from "./album";
import "./galery.scss";

//Portrait
import PortraitAqua1 from "../../images/galery/portrait/aqua/1.jpg";
import PortraitAqua2 from "../../images/galery/portrait/aqua/2.jpg";
import PortraitAqua3 from "../../images/galery/portrait/aqua/3.jpg";
import PortraitAqua4 from "../../images/galery/portrait/aqua/4.jpg";
import PortraitAqua5 from "../../images/galery/portrait/aqua/5.jpg";
import PortraitAqua6 from "../../images/galery/portrait/aqua/6.jpg";
import PortraitAqua7 from "../../images/galery/portrait/aqua/7.jpg";
//Graph
import PortraitGraph1 from "../../images/galery/portrait/graph/1.jpg";
import PortraitGraph2 from "../../images/galery/portrait/graph/2.jpg";
import PortraitGraph3 from "../../images/galery/portrait/graph/3.jpg";
import PortraitGraph4 from "../../images/galery/portrait/graph/4.jpg";
import PortraitGraph6 from "../../images/galery/portrait/graph/6.jpg";
import PortraitGraph7 from "../../images/galery/portrait/graph/7.jpg";
import PortraitGraph8 from "../../images/galery/portrait/graph/8.jpg";
import PortraitGraph9 from "../../images/galery/portrait/graph/9.jpg";
//Oil
import PortraitOil1 from "../../images/galery/portrait/oil/1.jpg";
import PortraitOil2 from "../../images/galery/portrait/oil/2.jpg";
import PortraitOil4 from "../../images/galery/portrait/oil/4.jpg";
import PortraitOil5 from "../../images/galery/portrait/oil/5.jpg";
import PortraitOil6 from "../../images/galery/portrait/oil/6.jpg";
import PortraitOil7 from "../../images/galery/portrait/oil/7.jpg";
import PortraitOil8 from "../../images/galery/portrait/oil/8.jpg";
//Scenery
//Aqua
import SceneryAqua1 from "../../images/galery/scenery/aqua/1.jpg";
import SceneryAqua2 from "../../images/galery/scenery/aqua/2.jpg";
import SceneryAqua3 from "../../images/galery/scenery/aqua/3.jpg";
import SceneryAqua4 from "../../images/galery/scenery/aqua/4.jpg";
import SceneryAqua5 from "../../images/galery/scenery/aqua/5.jpg";
import SceneryAqua6 from "../../images/galery/scenery/aqua/6.jpg";
import SceneryAqua7 from "../../images/galery/scenery/aqua/7.jpg";
import SceneryAqua8 from "../../images/galery/scenery/aqua/8.jpg";
import SceneryAqua9 from "../../images/galery/scenery/aqua/9.jpg";
import SceneryAqua10 from "../../images/galery/scenery/aqua/10.jpg";
import SceneryAqua11 from "../../images/galery/scenery/aqua/11.jpg";
import SceneryAqua12 from "../../images/galery/scenery/aqua/12.jpg";
//Oil
import SceneryOil1 from "../../images/galery/scenery/oil/1.jpeg";
import SceneryOil2 from "../../images/galery/scenery/oil/2.jpg";
import SceneryOil3 from "../../images/galery/scenery/oil/3.jpg";
import SceneryOil4 from "../../images/galery/scenery/oil/4.jpg";
import SceneryOil5 from "../../images/galery/scenery/oil/5.jpg";
import SceneryOil6 from "../../images/galery/scenery/oil/6.jpg";
import SceneryOil7 from "../../images/galery/scenery/oil/7.jpg";
import SceneryOil8 from "../../images/galery/scenery/oil/8.jpg";
import SceneryOil9 from "../../images/galery/scenery/oil/9.jpg";
import SceneryOil10 from "../../images/galery/scenery/oil/10.jpg";
import SceneryOil11 from "../../images/galery/scenery/oil/11.jpg";
import SceneryOil12 from "../../images/galery/scenery/oil/12.jpg";
import SceneryOil13 from "../../images/galery/scenery/oil/13.jpg";
import SceneryOil14 from "../../images/galery/scenery/oil/14.jpg";
import SceneryOil15 from "../../images/galery/scenery/oil/15.jpg";
import SceneryOil16 from "../../images/galery/scenery/oil/16.jpg";
import SceneryOil17 from "../../images/galery/scenery/oil/17.jpg";
import SceneryOil18 from "../../images/galery/scenery/oil/18.jpg";
//Life
import Life1 from "../../images/galery/life/1.jpg";
import Life2 from "../../images/galery/life/2.jpg";
import Life3 from "../../images/galery/life/3.jpg";
//Images
import Image1 from "../../images/galery/images/1.jpg";
import Image2 from "../../images/galery/images/2.jpg";
import Image3 from "../../images/galery/images/3.jpg";
import Image4 from "../../images/galery/images/4.jpg";
import Image5 from "../../images/galery/images/5.jpg";
import Image6 from "../../images/galery/images/6.jpg";
import Image7 from "../../images/galery/images/7.jpg";
import Image8 from "../../images/galery/images/8.jpg";
import Image9 from "../../images/galery/images/9.jpg";
import Image10 from "../../images/galery/images/10.jpg";
import Image12 from "../../images/galery/images/12.jpg";
import Image13 from "../../images/galery/images/13.jpg";
import Image14 from "../../images/galery/images/14.jpg";
import Image15 from "../../images/galery/images/15.jpg";
import Image16 from "../../images/galery/images/16.jpg";
import Image17 from "../../images/galery/images/17.jpg";
import Image18 from "../../images/galery/images/18.png";
import Image19 from "../../images/galery/images/19.jpg";
import Image20 from "../../images/galery/images/20.jpg";
import Image21 from "../../images/galery/images/21.jpg";
import Image22 from "../../images/galery/images/22.jpg";
import Image23 from "../../images/galery/images/23.jpg";
import Image24 from "../../images/galery/images/24.jpg";
import Image25 from "../../images/galery/images/25.jpg";
import Image26 from "../../images/galery/images/26.jpg";
import Image27 from "../../images/galery/images/27.jpg";
import Image28 from "../../images/galery/images/28.jpg";

//Study
//Children
import StudyChildren0 from "../../images/galery/study/children/0.jpg";
import StudyChildren1 from "../../images/galery/study/children/1.jpg";
import StudyChildren2 from "../../images/galery/study/children/2.jpg";
import StudyChildren3 from "../../images/galery/study/children/3.jpg";
import StudyChildren4 from "../../images/galery/study/children/4.jpg";
import StudyChildren5 from "../../images/galery/study/children/5.jpg";
import StudyChildren6 from "../../images/galery/study/children/6.jpg";
import StudyChildren7 from "../../images/galery/study/children/7.jpg";
import StudyChildren8 from "../../images/galery/study/children/8.jpg";
import StudyChildren9 from "../../images/galery/study/children/9.jpg";
import StudyChildren10 from "../../images/galery/study/children/10.jpg";
import StudyChildren11 from "../../images/galery/study/children/11.jpg";
import StudyChildren12 from "../../images/galery/study/children/12.jpg";
import StudyChildren13 from "../../images/galery/study/children/13.jpg";
import StudyChildren14 from "../../images/galery/study/children/14.jpg";
import StudyChildren15 from "../../images/galery/study/children/15.jpg";
import StudyChildren16 from "../../images/galery/study/children/16.jpg";
import StudyChildren17 from "../../images/galery/study/children/17.jpg";
import StudyChildren18 from "../../images/galery/study/children/18.jpg";
import StudyChildren19 from "../../images/galery/study/children/19.jpg";
import StudyChildren20 from "../../images/galery/study/children/20.jpg";
import StudyChildren21 from "../../images/galery/study/children/21.jpg";
import StudyChildren22 from "../../images/galery/study/children/22.jpg";
import StudyChildren23 from "../../images/galery/study/children/23.jpg";
import StudyChildren24 from "../../images/galery/study/children/24.jpg";
import StudyChildren25 from "../../images/galery/study/children/25.jpg";
import StudyChildren26 from "../../images/galery/study/children/26.jpg";
import StudyChildren27 from "../../images/galery/study/children/27.jpg";
import StudyChildren28 from "../../images/galery/study/children/28.jpg";
import StudyChildren29 from "../../images/galery/study/children/29.jpg";
import StudyChildren30 from "../../images/galery/study/children/30.jpg";
import StudyChildren31 from "../../images/galery/study/children/31.jpg";
import StudyChildren32 from "../../images/galery/study/children/32.jpg";
import StudyChildren33 from "../../images/galery/study/children/33.jpg";
//Parents
import StudyParents1 from "../../images/galery/study/parents/1.jpg";
import StudyParents2 from "../../images/galery/study/parents/2.jpg";
import StudyParents3 from "../../images/galery/study/parents/3.jpg";
import StudyParents4 from "../../images/galery/study/parents/4.jpg";
import StudyParents5 from "../../images/galery/study/parents/5.jpg";
import StudyParents6 from "../../images/galery/study/parents/6.jpg";
import StudyParents7 from "../../images/galery/study/parents/7.jpg";
import StudyParents8 from "../../images/galery/study/parents/8.jpg";
import StudyParents9 from "../../images/galery/study/parents/9.jpg";
import StudyParents10 from "../../images/galery/study/parents/10.jpg";
//Grades
import Grade1 from "../../images/galery/grades/1.jpg";
import Grade2 from "../../images/galery/grades/2.jpg";
import Grade3 from "../../images/galery/grades/3.jpg";
import Grade4 from "../../images/galery/grades/4.jpg";
import Grade5 from "../../images/galery/grades/5.jpg";
import Grade6 from "../../images/galery/grades/6.jpg";
import Grade7 from "../../images/galery/grades/7.jpg";
import Grade8 from "../../images/galery/grades/8.jpg";
import Grade9 from "../../images/galery/grades/9.jpg";
import Grade10 from "../../images/galery/grades/10.jpg";
import Grade11 from "../../images/galery/grades/11.jpg";
import Grade12 from "../../images/galery/grades/12.jpg";
import Grade13 from "../../images/galery/grades/13.jpg";
import Grade14 from "../../images/galery/grades/14.jpg";
import Grade15 from "../../images/galery/grades/15.jpg";
import Grade16 from "../../images/galery/grades/16.jpg";
import Grade17 from "../../images/galery/grades/17.jpg";
import Grade18 from "../../images/galery/grades/18.jpg";
import Grade19 from "../../images/galery/grades/19.jpg";
import Grade20 from "../../images/galery/grades/20.jpg";
import Grade21 from "../../images/galery/grades/21.jpg";
import Grade22 from "../../images/galery/grades/22.jpg";
import Grade23 from "../../images/galery/grades/23.jpg";
import Grade24 from "../../images/galery/grades/24.jpg";
import Grade25 from "../../images/galery/grades/25.jpg";
import Grade26 from "../../images/galery/grades/26.jpg";
import Grade27 from "../../images/galery/grades/27.jpg";
import Grade28 from "../../images/galery/grades/28.jpg";
import Grade29 from "../../images/galery/grades/29.jpg";


const portraitAqua = [PortraitAqua1, PortraitAqua2, PortraitAqua3, PortraitAqua4, PortraitAqua5, PortraitAqua6, PortraitAqua7];
const portraitGraph = [PortraitGraph1, PortraitGraph2, PortraitGraph3, PortraitGraph4, PortraitGraph6, PortraitGraph7, PortraitGraph8, PortraitGraph9];
const portraitOil = [PortraitOil1, PortraitOil2, PortraitOil4, PortraitOil5, PortraitOil6, PortraitOil7, PortraitOil8];

const sceneryAqua = [SceneryAqua1, SceneryAqua2, SceneryAqua3, SceneryAqua4, SceneryAqua5, SceneryAqua6, SceneryAqua7, SceneryAqua8, SceneryAqua9, SceneryAqua10, SceneryAqua11, SceneryAqua12];
const sceneryOil = [SceneryOil1, SceneryOil2, SceneryOil3, SceneryOil4, SceneryOil5, SceneryOil6, SceneryOil7, SceneryOil8, SceneryOil9, SceneryOil10, SceneryOil11, SceneryOil12, SceneryOil13, SceneryOil14, SceneryOil15, SceneryOil16, SceneryOil17, SceneryOil18];

const life = [Life1, Life2, Life3];
const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image12, Image13, Image14, Image15, Image16, Image17, Image18, Image19, Image20, Image21, Image22, Image23, Image24, Image25, Image26, Image27, Image28];

const studyChildren = [
    StudyChildren1,
    StudyChildren2,
    StudyChildren3,
    StudyChildren4,
    StudyChildren5,
    StudyChildren6,
    StudyChildren7,
    StudyChildren8,
    StudyChildren9,
    StudyChildren10,
    StudyChildren11,
    StudyChildren12,
    StudyChildren13,
    StudyChildren14,
    StudyChildren15,
    StudyChildren16,
    StudyChildren17,
    StudyChildren18,
    StudyChildren19,
    StudyChildren20,
    StudyChildren21,
    StudyChildren22,
    StudyChildren23,
    StudyChildren24,
    StudyChildren25,
    StudyChildren26,
    StudyChildren27,
    StudyChildren28,
    StudyChildren29,
    StudyChildren30,
    StudyChildren31,
    StudyChildren32,
    StudyChildren33,
];
const studyParents = [StudyParents1, StudyParents7, StudyParents3, StudyParents4, StudyParents5, StudyParents6, StudyParents2, StudyParents8, StudyParents9, StudyParents10];

const grades = [
    Grade1,
    Grade2,
    Grade3,
    Grade4,
    Grade5,
    Grade6,
    Grade7,
    Grade8,
    Grade27,
    Grade10,
    Grade11,
    Grade12,
    Grade13,
    Grade14,
    Grade15,
    Grade16,
    Grade17,
    Grade18,
    Grade19,
    Grade28,
    Grade21,
    Grade22,
    Grade9,
    Grade24,
    Grade25,
    Grade26,
    Grade23,
    Grade20,
    Grade29,
];

const AlbumWrapper = ({ title, image, onClick }: { title: string, image: string, onClick: () => void }) => {
    const [loaded, setLoaded] = useState(false);
    return <div className="galery-album-main" onClick={onClick}>
        <div className="galery-album-main-caption">{title}</div>
        <div className="img-duotoner">
            <img src={image} height={loaded ? "" : "400px"} onLoad={() => setLoaded(true)} />
        </div>
    </div>
}

type Selected = {
    title: string;
    images: string[];
}

const Galery = () => {
    const [selectedAlbum, setSelectedAlbum] = useState<Selected | null>(null);

    return selectedAlbum ? <>
        <Album photos={selectedAlbum.images} title={selectedAlbum.title} onReturn={() => setSelectedAlbum(null)} />
    </> : <><div className="galery">

        <AlbumWrapper title="Дипломы, каталоги, статьи" image={Grade1} onClick={() => setSelectedAlbum({ images: grades, title: "Дипломы, каталоги, статьи" })} />
        <AlbumWrapper title="Мастер-класс(дети)" image={StudyChildren0} onClick={() => setSelectedAlbum({ images: studyChildren, title: "Мастер-класс(дети)" })} />
        <AlbumWrapper title="Мастер-класс(взрослые)" image={StudyParents10} onClick={() => setSelectedAlbum({ images: studyParents, title: "Мастер-класс(взрослые)" })} />
        <AlbumWrapper title="Портрет Акварель" image={PortraitAqua1} onClick={() => setSelectedAlbum({ images: portraitAqua, title: "Портрет Акварель" })} />
        <AlbumWrapper title="Портрет Графика" image={PortraitGraph1} onClick={() => setSelectedAlbum({ images: portraitGraph, title: "Портрет Графика" })} />
        <AlbumWrapper title="Портрет Масло" image={PortraitOil1} onClick={() => setSelectedAlbum({ images: portraitOil, title: "Портрет Масло" })} />
        <AlbumWrapper title="Пейзаж Акварель" image={SceneryAqua1} onClick={() => setSelectedAlbum({ images: sceneryAqua, title: "Пейзаж Акварель" })} />
        <AlbumWrapper title="Пейзаж Масло" image={SceneryOil1} onClick={() => setSelectedAlbum({ images: sceneryOil, title: "Пейзаж Масло" })} />
        <AlbumWrapper title="Натюрморт" image={Life1} onClick={() => setSelectedAlbum({ images: life, title: "Натюрморт" })} />
        <AlbumWrapper title="Иллюстрации" image={Image1} onClick={() => setSelectedAlbum({ images: images, title: "Иллюстрации" })} />
    </div>
    </>
}

export { Galery };
