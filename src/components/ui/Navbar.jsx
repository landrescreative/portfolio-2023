import React, { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa6";

const Navbar = (props) => {
  // This creates a state for the button
  const [toggle, setToggle] = useState(false);

  return (
    <Container_Navbar>
      <h1>LANDRES CREATIVE</h1>
      <div className={toggle ? "active" : ""}>
        <a>Home</a>
        <a>Work</a>
        <a>About</a>
      </div>
      <button onClick={() => setToggle(!toggle)}>
        <FaBars />
      </button>
    </Container_Navbar>
  );
};

const Container_Navbar = styled.div`
  z-index: 1000;
  width: 100vw;
  height: 60px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  align-content: center;
  justify-content: center;
  background-color: #070707;
  position: fixed;

  // LANDRES text

  h1 {
    font-size: 22px;
    font-weight: 100;
    grid-column: 1 / 3;
    text-align: center;
    letter-spacing: 0px;

    @media (max-width: 768px) {
      grid-column: 1 / 8;
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
