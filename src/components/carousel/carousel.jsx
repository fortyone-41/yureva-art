import React, { useState, useEffect, useCallback } from "react";

import "./carousel.scss";
import { Modal } from "../modal";



//const imgArr = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27,img28,img29,img30]

function importAll(r) {
    return r.keys().map(r);
}

// const images = importAll(require.context("../../media/images/carousel/", true, /\.(png|jpe?g|svg)$/));
// const slides = images.map((item, index) => ({
//   title: "Criminal Raccoon #"+index,
//   subtitle: "Prison V.L.",
//   description: "",
//   image: item,
// }))
/*[{
 title: "Criminal Raccoon #"+1,
 subtitle: "Prison V.L.",
 description: "",
 image: img1,
},{
 title: "Criminal Raccoon #"+1,
 subtitle: "Prison V.L.",
 description: "",
 image: img2,
},{
 title: "Criminal Raccoon #"+1,
 subtitle: "Prison V.L.",
 description: "",
 image: img3,
},{
 title: "Criminal Raccoon #"+1,
 subtitle: "Prison V.L.",
 description: "",
 image: img4,
}]*/


function useTilt(active) {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (!ref.current || !active) {
            return;
        }

        const state = {
            rect: undefined,
            mouseX: undefined,
            mouseY: undefined,
        };

        let el = ref.current;

        const handleMouseMove = (e) => {
            if (!el) {
                return;
            }
            if (!state.rect) {
                state.rect = el.getBoundingClientRect();
            }
            state.mouseX = e.clientX;
            state.mouseY = e.clientY;
            const px = (state.mouseX - state.rect.left) / state.rect.width;
            const py = (state.mouseY - state.rect.top) / state.rect.height;

            el.style.setProperty("--px", px);
            el.style.setProperty("--py", py);
        };

        el.addEventListener("mousemove", handleMouseMove);

        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
        };
    }, [active]);

    return ref;
}

// const initialState = {
//     slideIndex: Math.trunc(slides.length / 2),
// };

const slidesReducer = (state, event, slides) => {
    if (event.type === "NEXT") {
        return {
            ...state,
            slideIndex: (state.slideIndex + 1) % slides.length,
        };
    }
    if (event.type === "PREV") {
        return {
            ...state,
            slideIndex:
                state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
        };
    }
};

const useProgressiveImage = src => {
    const [sourceLoaded, setSourceLoaded] = useState(null);
    useEffect(() => {
        const img = new Image()
        img.src = src
        img.onload = () => setSourceLoaded(src)
    }, [src])
    return sourceLoaded
}

function Slide({ slide, offset, onClick }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);
    const loaded = useProgressiveImage(slide.image);
    return (
        <div
            ref={ref}
            className="slide"
            data-active={active}
            style={{
                "--offset": offset,
                "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
            }}
        >
            <div
                className="slideBackground"
                style={{
                    backgroundImage: `url('${slide.image}')`,
                }}
            />
            <div
                className="slideContent"
                style={{
                    backgroundImage: `url('${loaded || slide.title}')`,
                    backgroundSize: "contain",
                }}
                onClick={onClick}
            >
                <div className="slideContentInner">
                    <h2 className="slideTitle">{slide.title}</h2>
                    <p className="slideDescription">{slide.description}</p>
                </div>
            </div>
        </div>
    );
}

function Carousel({ slides }) {
    const [selected, setSelected] = useState();
    const initialState = { slideIndex: Math.trunc(slides.length / 2) };
    const reducer = (state, event) => {
        return slidesReducer(state, event, slides);
    }
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const handleClick = useCallback((slide, offset) => {
        if (offset === 0) {
            setSelected(slide);
        }
        if (offset > 0) {
            dispatch({ type: "PREV" })
        } else {
            dispatch({ type: "NEXT" })
        }
    }, []);

    return (
        <>
            <div className="slides">
                <button onClick={() => dispatch({ type: "NEXT" })}>‹</button>

                {[...slides, ...slides, ...slides].map((slide, i) => {
                    let offset = slides.length + (state.slideIndex - i);
                    return <Slide slide={slide} onClick={() => handleClick(slide, offset)} offset={offset} key={i} />;
                })}
                <button onClick={() => dispatch({ type: "PREV" })}>›</button>

            </div>
            <Modal isOpened={selected} onClose={() => setSelected()} image={slides[state.slideIndex].image} />
        </>
    );
}

export { Carousel };
