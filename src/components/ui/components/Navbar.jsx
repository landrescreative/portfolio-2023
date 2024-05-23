import React, { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = (props) => {
  // This creates a state for the button
  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation();

  return (
    <Container_Navbar>
      <h1>LANDRES CREATIVE</h1>
      <div className={toggle ? "active" : ""}>
        <Link onClick={() => setToggle(!toggle)} to="/">
          {t("Navbar_Home")}
        </Link>
        {/* <Link to="/work">Work</Link> */}
        <Link onClick={() => setToggle(!toggle)} to="/about">
          {t("Navbar_About")}
        </Link>
      </div>
      <button onClick={() => setToggle(!toggle)}>
        <FaBars />
      </button>
    </Container_Navbar>
  );
};

const Container_Navbar = styled.div`
  z-index: 1000;
  height: 60px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  align-content: center;
  justify-content: center;
  position: sticky;

  // LANDRES text

  h1 {
    font-size: 22px;
    font-weight: 100;
    grid-column: 1 / 3;
    text-align: center;
    letter-spacing: 0px;

    @media (max-width: 768px) {
      grid-column: 1 / 8;
      display: none;
    }
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    grid-column: 9/13;

    // Media queries
    @media (max-width: 768px) {
      width: 100vw;
      height: 100dvh;
      flex-direction: column;
      justify-content: space-around;
      position: fixed;
      left: -100vw;
      background-color: #070707;
      transition: left 0.5s ease-in-out;
    }

    // LINKS TEXT

    a {
      text-decoration: none;
      font-size: 14px;
      font-weight: 100;
      text-transform: uppercase;
      letter-spacing: 2px;

      // Hover subline effect
      position: relative;
      color: #ffffff;
      transition: all 0.5s ease-in-out;
      transform: scale(1);

      &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #ffffff;
        transition: width 0.5s ease-in-out;
      }

      &:hover {
        transform: scale(1.1);
      }

      &:hover::after {
        width: 100%;
      }

      // Media queries
    }

    &.active {
      @media (max-width: 768px) {
        left: 0;
      }
    }
  }

  button {
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
    color: #ffffff;
    grid-column: 11 / 13;
    justify-self: center;
    z-index: 2;
    cursor: pointer;

    // Media queries
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export default Navbar;
