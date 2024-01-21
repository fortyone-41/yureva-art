import "./contacts.scss";
import { Inst, Vk, Wa } from "./items";

const Contacts = () => {
    return <div className="contacts">
        <div className="logo">
            <a href="https://instagram.com/yureva_painter" target="_blank">
                <Inst />
            </a>
        </div>
        <div className="logo">
            <a href="https://vk.com/yureva_sv1968" target="_blank">
                <Vk />
            </a>
        </div>
        <div className="logo">
            <a href="https://api.whatsapp.com/send/?phone=79811890747" target="_blank">
                <Wa />
            </a>
        </div>
    </div>
}

export { Contacts };
