import { useState } from "react";
import { Modal } from "../../../components";
import "./album.scss";

type Props = {
    photos: string[];
    title: string;
    onReturn: () => void;
}

type ImageProps = {
    image: string;
    onClick: () => void;
}

const Image = ({ image, onClick }: ImageProps) => {
    const [loaded, setLoaded] = useState(false);
    return <img onClick={onClick} src={image} onLoad={() => setLoaded(true)} />
}

const Album = ({ photos = [], title, onReturn }: Props) => {
    const [selected, setSelected] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    return <>
        <div className="album">
            <div className="album-header">
                <a href="" onClick={onReturn}>Назад</a>
                <span>/</span>
                <h2>{title}</h2>
            </div>
            <div className="album-wrapper">
                {photos.map((image, index) => <Image key={image} onClick={() => { setSelected(image); setSelectedIndex(index) }} image={image} />)}
            </div>
        </div>
        <Modal
            isOpened={!!selected}
            onClose={() => setSelected("")}
            image={selected} title=""
            onClickImage={selectedIndex < photos.length - 1 ? () => {setSelected(photos[selectedIndex + 1]); setSelectedIndex(selectedIndex + 1)} : undefined}
            onClickLeft={selectedIndex > 0 ? () => {setSelected(photos[selectedIndex - 1]); setSelectedIndex(selectedIndex - 1)} : undefined}
            onClickRight={selectedIndex < photos.length - 1 ? () => {setSelected(photos[selectedIndex + 1]); setSelectedIndex(selectedIndex + 1)} : undefined}
        />
    </>
};
// prevImage={index > 0 ? setSelected(photos[index-1]) : null} nextImage={index < photos.length - 1 ? photos[index + 1] : null}

export { Album };
