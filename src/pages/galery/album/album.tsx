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
    return <>
        <div className="album">
            <div className="album-header">
                <a href="" onClick={onReturn}>Назад</a>
                <span>/</span>
                <h2>{title}</h2>
            </div>
            <div className="album-wrapper">
                {photos.map(image => <Image key={image} onClick={() => setSelected(image)} image={image} />)}
            </div>
        </div>
        <Modal isOpened={!!selected} onClose={() => setSelected("")} image={selected} title="" />
    </>
};

export { Album };
