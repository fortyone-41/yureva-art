import { useEffect, useRef, useState } from "react";
import "./cards.scss";
import { Input } from "../input";

const Cards = ({ items = [] }) => {
    const overlayRef = useRef();
    const cardsContainerRef = useRef();
    const [state, setState] = useState({});

    useEffect(() => {
        const cardsContainer = cardsContainerRef.current;
        const overlay = overlayRef.current;
        const cards = Array.from(document.querySelector(".cards__inner").querySelectorAll(".card"));
        const applyOverlayMask = (e) => {
            if (cardsContainer) {

                const overlayEl = e.currentTarget;
                const x = e.pageX - cardsContainer.offsetLeft;
                const y = e.pageY - cardsContainer.offsetTop;

                overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
            }
        };

        const createOverlayCta = (overlayCard, ctaEl) => {
            const overlayCta = document.createElement("div");
            overlayCta.classList.add("cta");
            overlayCta.textContent = ctaEl.textContent;
            overlayCta.setAttribute("aria-hidden", "true");
            overlayCard.append(overlayCta);
        };

        const observer = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                const cardIndex = cards.indexOf(entry.target);
                console.log(entry.borderBoxSize[0]);
                
                let width = entry.borderBoxSize[0].inlineSize;
                let height = entry.borderBoxSize[0].blockSize;

                if (cardIndex >= 0) {
                    overlay.children[cardIndex].style.width = `${width}px`;
                    overlay.children[cardIndex].style.height = `${height}px`;
                }
            });
        });

        const initOverlayCard = (cardEl) => {
            const overlayCard = document.createElement("div");
            overlayCard.classList.add("card");
            createOverlayCta(overlayCard, cardEl.lastElementChild);
            overlayCard.remove(overlay.firstElementChild);
            overlay.append(overlayCard);
            observer.observe(cardEl);
        };


        cards.forEach(initOverlayCard);
        cardsContainer.addEventListener("pointermove", applyOverlayMask);
    }, []);

    return <div ref={cardsContainerRef} className="main__cards cards">
        <div className="cards__inner">
            {items.map(({ title, price = 300, buttonText, options = [], onClick = (() => { }) }) => <div key={title} className="cards__card card">
                <h2 className="card__heading">{title}</h2>
                <div className="card__input"><Input title="Имя" /></div>
                <p className="card__price">{price} руб.</p>
                <ul role="list" className="card__bullets flow">
                    {options.map(option => <li>{option}</li>)}
                </ul>
                <a className="card__cta cta" onClick={() => onClick}>{buttonText}</a>
            </div>)}

        </div>

        <div ref={overlayRef} className="overlay cards__inner"></div>
    </div>
}

export { Cards };
