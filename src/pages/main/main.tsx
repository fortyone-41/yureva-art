import { Carousel } from "../../components";
import Image1 from "../../images/background/1.jpg";
import Image2 from "../../images/background/2.jpg";
import Image3 from "../../images/background/3.jpg";
import Image4 from "../../images/background/4.jpg";
import Image5 from "../../images/background/5.jpg";
import Image6 from "../../images/background/6.jpg";
import Image7 from "../../images/background/7.jpg";
import Image8 from "../../images/background/8.jpg";
import Image9 from "../../images/background/9.jpg";
import Image10 from "../../images/background/10.jpeg";
import Image11 from "../../images/background/11.jpg";

import "./main.scss";
import { Link } from "react-router-dom";

const slides = [{
    image: Image1,
    title: "",
    description: ""
}, {
    image: Image2,
    title: "",
    description: ""
}, {
    image: Image3,
    title: "",
    description: ""
}, {
    image: Image4,
    title: "",
    description: ""
}, {
    image: Image5,
    title: "",
    description: ""
}, {
    image: Image6,
    title: "",
    description: ""
}, {
    image: Image7,
    title: "",
    description: ""
}, {
    image: Image8,
    title: "",
    description: ""
}, {
    image: Image9,
    title: "",
    description: ""
}, {
    image: Image10,
    title: "",
    description: ""
}, {
    image: Image11,
    title: "",
    description: ""
}];

const Main = () => {
    return <div className="main-wrapper">
        <div className="main-page">
            <div className="main-page-content">
                <p className="text-1">Приветствую вас и очень рада проявленному интересу к моим работам!</p>
                <p>Мне часто говорят, что от моих картин становится светло на душе! Может в этом
                    мой талант. Дурного и так много вокруг, а если я буду рисовать свой добрый мир, то
                    его станет на одну картину больше!</p>
                <p>Тут вы можете посмотреть мои работы, и при желании купить свободные к
                    приобретению картины в разделе <Link to="/gallery">Галерея</Link>, либо ознакомиться <Link to="/orders">здесь</Link>
                    &nbsp;с моими услугами и возможно сделать заказ на
                    картину или записаться на мастер-класс по живописи!</p>
                <p>Буду рада увидеть от вас отклик!</p>
            </div>
            <Carousel slides={slides} />
        </div>
    </div>
}

export { Main }