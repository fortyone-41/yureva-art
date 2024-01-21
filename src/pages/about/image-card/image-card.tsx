import { useState } from "react";
import Return from "../../../images/return2.png";
import "./image-card.scss";
import { Modal } from "../../../components";

type Props = {
    title: string;
    image: string;
}

const ImageCard = ({ image, title }: Props) => {
    const [click, setClick] = useState(false);
    const [selected, setSelected] = useState(false);
    return <>
        <div className={`image-card ${click ? " image-card-hover" : ""}`}>
            <div className="image-card__side image-card__side--front-1">
                <div className="corner-icon-cont-5" onClick={() => setClick(true)}>
                    <span className="corner-icon-5"><img src={Return} /></span>
                </div>
                <img onClick={() => setSelected(!!image)} {...image && { src: image }} />
            </div>
            <div className="image-card__side image-card__side--back image-card__side--back-1">
                <div className="corner-icon-cont-5" onClick={() => setClick(false)}>
                    <span className="corner-icon-5"><img src={Return} /></span>
                </div>
                <div className="image-card__side--back-title">
                    {title}
                </div>
            </div>

        </div>
        <Modal isOpened={selected} onClose={() => setSelected(false)} title="" image={image} />
    </>
}

export { ImageCard };
