import "./header.scss";
import { Contacts } from "./contacts";
import { Menu } from "./menu";
import Logo from "../../images/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContactsBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width: 1300px) {
        display: none;
    }
`;

const Header = () => {
    return <>
        <div className="header">
            <Link className="header-logo" to="/">
                <img className="header-logo" src={Logo} />
            </Link>
            <Menu />
            <ContactsBlock>
                <Contacts />
            </ContactsBlock>
        </div>
    </>
}

export { Header };
