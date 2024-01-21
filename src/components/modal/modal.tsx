import React from "react";
import "./modal.scss";
import { Cards } from "../cards";

type Card = {
    title: string;
    buttonText: string;
    onClick: () => void;
}

interface ModalProps {
    title: string;
    topContent?: React.ReactNode;
    content?: React.ReactNode;
    actions?: React.ReactNode;
    image?: string;
    isOpened: boolean;
    card?: Card;
    onClose: () => void;
}

function Modal(props: ModalProps) {
    const { isOpened, onClose, content, topContent, title, actions, image, card } = props;

    if (!isOpened) return null;

    return (
        <div className="modal-wrapper" onClick={onClose}>
            {image ? <>
                <div className="modal-wrapper-image" onClick={(event) => event.stopPropagation()}>
                    <img src={image} />
                    <div
                        className="modal-wrapper-close"
                        aria-label="close"
                        onClick={onClose}
                    >
                        &#10006;
                    </div>
                </div>
            </> : card ? <div className="modal-wrapper-card">
                <Cards items={[card]} />
            </div> : <>
                <div className="modal-body">
                    <div className="modal-body-title">
                        <div className="modal-body-title-text">{title}</div>
                        <div
                            className="modal-body-title-close"
                            aria-label="close"
                            onClick={onClose}
                        >
                            &#10006;
                        </div>
                    </div>
                    {!!topContent && <div className="modal-body-top-content">{topContent}</div>}
                    {!!content && <div className="modal-body-content">{content}</div>}
                    {!!actions && <div className="modal-body-actions">{actions}</div>}
                </div>
            </>
            }
        </div >
    );
}

export { Modal };
