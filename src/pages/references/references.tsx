import { useEffect, useState } from "react";
import { Album } from "./album";
import "./references.scss";

//Other
import Other1 from "../../images/references/other/1.jpg";
import Other2 from "../../images/references/other/2.jpg";
import Other3 from "../../images/references/other/3.jpg";
import Other4 from "../../images/references/other/4.jpg";
import Other5 from "../../images/references/other/5.jpg";
import Other6 from "../../images/references/other/6.jpg";
import Other7 from "../../images/references/other/7.jpg";
import Other8 from "../../images/references/other/8.jpg";
import Other9 from "../../images/references/other/9.jpg";
import Other10 from "../../images/references/other/10.jpg";
import Other11 from "../../images/references/other/11.jpg";
import Other12 from "../../images/references/other/12.jpg";
import Other13 from "../../images/references/other/13.jpg";
import Other14 from "../../images/references/other/14.jpg";
import Other15 from "../../images/references/other/15.jpg";
import Other16 from "../../images/references/other/16.jpg";
import Other17 from "../../images/references/other/17.jpg";
import Other18 from "../../images/references/other/18.jpg";
import Other19 from "../../images/references/other/19.jpg";
import Other20 from "../../images/references/other/20.jpg";
import Other21 from "../../images/references/other/21.jpg";
import Other22 from "../../images/references/other/22.jpg";
import Other23 from "../../images/references/other/23.jpg";
import Other24 from "../../images/references/other/24.jpg";
import Other25 from "../../images/references/other/25.jpg";
import Other26 from "../../images/references/other/26.jpg";
import Other27 from "../../images/references/other/27.jpg";
import Other28 from "../../images/references/other/28.jpg";
import Other29 from "../../images/references/other/29.jpg";
import Other30 from "../../images/references/other/30.jpg";
import Other31 from "../../images/references/other/31.jpg";
import Other32 from "../../images/references/other/32.jpg";
import Other33 from "../../images/references/other/33.jpg";
import Other34 from "../../images/references/other/34.jpg";
import Other35 from "../../images/references/other/35.jpg";
import Other36 from "../../images/references/other/36.jpg";
import Other37 from "../../images/references/other/37.jpg";
import Other38 from "../../images/references/other/38.jpg";
import Other39 from "../../images/references/other/39.jpg";
import Other40 from "../../images/references/other/40.jpg";
import Other41 from "../../images/references/other/41.jpg";
import Other42 from "../../images/references/other/42.jpg";
//Glass
import Glass1 from "../../images/references/glass/1.jpg";
import Glass2 from "../../images/references/glass/2.jpg";
import Glass3 from "../../images/references/glass/3.jpg";
import Glass4 from "../../images/references/glass/4.jpg";
import Glass5 from "../../images/references/glass/5.jpg";
import Glass6 from "../../images/references/glass/6.jpg";
import Glass7 from "../../images/references/glass/7.jpg";
import Glass8 from "../../images/references/glass/8.jpg";
import Glass9 from "../../images/references/glass/9.jpg";
import Glass10 from "../../images/references/glass/10.jpg";
import Glass11 from "../../images/references/glass/11.jpg";
import Glass12 from "../../images/references/glass/12.jpg";
import Glass13 from "../../images/references/glass/13.jpg";
import Glass14 from "../../images/references/glass/14.jpg";
import Glass15 from "../../images/references/glass/15.jpg";
import Glass16 from "../../images/references/glass/16.jpg";
import Glass17 from "../../images/references/glass/17.jpg";
import Glass18 from "../../images/references/glass/18.jpg";
//Images
import Image1 from "../../images/references/images/1.jpg";
import Image2 from "../../images/references/images/2.jpg";
import Image3 from "../../images/references/images/3.jpg";
import Image4 from "../../images/references/images/4.jpg";
import Image5 from "../../images/references/images/5.jpg";
import Image6 from "../../images/references/images/6.jpg";
import Image7 from "../../images/references/images/7.jpg";
import Image8 from "../../images/references/images/8.jpg";
import Image9 from "../../images/references/images/9.jpg";
import Image10 from "../../images/references/images/10.jpg";
import Image11 from "../../images/references/images/11.jpg";
import Image12 from "../../images/references/images/12.jpg";
//Animals
import Animal1 from "../../images/references/animals/1.jpg";
import Animal2 from "../../images/references/animals/2.jpg";
import Animal3 from "../../images/references/animals/3.jpg";
import Animal4 from "../../images/references/animals/4.jpg";

const other = [
    Other1,
    Other2, Other3, Other4, Other5, Other6, Other7, Other8, Other9, Other10, Other11, Other12, Other13, Other14, Other15, Other16, Other17, Other18, Other19, Other20, Other21, Other22, Other23, Other24, Other25, Other26, Other27, Other28, Other29, Other30, Other31, Other32, Other33, Other34, Other35, Other36, Other37, Other38, Other39, Other40, Other41, Other42];

const glass = [
    Glass1,
    Glass2, Glass3, Glass4, Glass5, Glass6, Glass7, Glass8, Glass9, Glass10, Glass11, Glass12, Glass13, Glass14, Glass15, Glass16, Glass17, Glass18]

const images = [
    Image1,
    Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12]

const animals = [
    Animal1,
    Animal2, Animal3, Animal4]

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

const References = () => {
    const [selectedAlbum, setSelectedAlbum] = useState<Selected | null>(null);

    return selectedAlbum ? <>
        <Album photos={selectedAlbum.images} title={selectedAlbum.title} onReturn={() => setSelectedAlbum(null)} />
    </> : <><div className="galery">

        <AlbumWrapper title="Витражи" image={Glass1} onClick={() => setSelectedAlbum({ images: glass, title: "Витражи" })} />
        <AlbumWrapper title="Животные" image={Animal1} onClick={() => setSelectedAlbum({ images: animals, title: "Животные" })} />
        <AlbumWrapper title="Другое" image={Other1} onClick={() => setSelectedAlbum({ images: other, title: "Другое" })} />
        <AlbumWrapper title="Милые иллюстрации" image={Image1} onClick={() => setSelectedAlbum({ images: images, title: "Милые иллюстрации" })} />
    </div>
    </>
}

export { References };
