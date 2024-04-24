import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Contacts } from "./contacts";
import Logo from "../../images/logo.png";

const COLORS = {
  primaryDark: "#726dba",
  primaryLight: "#9cb7fa",
};

const MenuLabel = styled.label`
  display: none;
  @media(max-width: 1300px) {
    display: block;
  }
  background-color: ${COLORS.primaryLight};
  opacity: .6;
  position: absolute;
  top: 3%;
  right: 3%;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(58, 138, 218, 0.3);
  text-align: center;
  &:hover {
    opacity: 1;
  }
`;

const NavBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-image: radial-gradient(
    ${COLORS.primaryDark},
    ${COLORS.primaryLight}
  );
  height: ${(props) => (props.clicked ? '100vh' : '0vh')};
  width: ${(props) => (props.clicked ? '100vw' : '0vw')};
  /* border-radius: 50%; */
  z-index: 600;
  /* transform: ${(props) => (props.clicked ? "scale(0)" : "scale(0)")}; */
  /* transition: height 0.8s, width 0.8s; */
  overflow: hidden;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 2rem;
  height: 2px;
  display: inline-block;
  margin-top: 2rem;
  transition: all 0.3s;

  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 2rem;
    height: 2px;
    display: inline-block;

    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.7rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.7rem")};

    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }

  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.9rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "0.9rem")};
  }
`;

const Navigation = styled.nav`
  @media(max-width: 1300px) {
    display: ${(props) => (props.clicked ? "block" : "none")};
    height: calc(var(--vh, 1vh) * 100);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 600;
    width: ${(props) => (props.clicked ? "100vw" : "0")};
    opacity: ${(props) => (props.clicked ? "1" : "0")};
    overflow: hidden;
  };
  transition: width 0.8s, opacity 0.8s;
  height: 100%;
  gap: 1rem;
  position: static;
`;

const List = styled.ul`
  @media(max-width: 1300px) {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  padding: 0;
  margin: 0;
  list-style: none;
  
  text-align: center;
  position: static;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const ItemLink = styled(NavLink)`
  display: inline-block;
  font-weight: 300;
  @media(max-width: 1300px) {
    font-size: 3rem;
    color: ${COLORS.primaryLight};
  }
  text-decoration: none;
  color: #3d3d3d;
  padding: 1rem 2rem;
  font-size: 1.5rem;

  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;
  background-position: ${(props) => (props.active ? "100%" : null)};
  &:hover,
  &:active {
    background-position: 100%;
    color: #0b0b0b;
    @media(max-width: 1300px) {
      color: ${COLORS.primaryDark};
    }
    transform: ${(props) => (props.active ? null : "translateX(1rem)")};
  }
`;

const LogoLi = styled.li`
  display: none;
  @media(max-width: 1300px) {
    display: block;
  }
`

const ContactsLi = styled.li`
  display: none;
  @media(max-width: 1300px) {
    display: block;
  }
`;

function Menu() {
  const location = useLocation();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const handleClose = () => setClick(false);

  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        <List>
          <LogoLi>
            <img className="header-logo" src={Logo} />
          </LogoLi>
          <li>
            <ItemLink active={location.pathname === "/"} onClick={handleClose} to="/">
              Главная
            </ItemLink>
          </li>
          <li>
            <ItemLink active={location.pathname === "/about"} onClick={handleClose} to="/about">
              Биография
            </ItemLink>
          </li>
          <li>
            <ItemLink active={location.pathname === "/gallery"} onClick={handleClose} to="/gallery">
              Галерея
            </ItemLink>
          </li>
          <li>
            <ItemLink active={location.pathname === "/references"} onClick={handleClose} to="/references">
              Референсы
            </ItemLink>
          </li>
          <li>
            <ItemLink active={location.pathname === "/orders"} onClick={handleClose} to="/orders">
              Заказать
            </ItemLink>
          </li>
          <li>&nbsp;</li>
          <ContactsLi>
            <Contacts />
          </ContactsLi>
        </List>
      </Navigation>
    </>
  );
}

export { Menu };