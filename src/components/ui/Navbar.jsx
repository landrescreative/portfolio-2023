import React, { useState } from "react";
import styled from "styled-components";

const Navbar = (props) => {
  // This creates a state for the button
  const [toggle, setToggle] = useState(false);

  return (
    <Container_Navbar>
      <h1>LANDRES</h1>
      <div className={toggle ? "active" : ""}>
        <a>Inicio</a>
        <a>Proyectos</a>
        <a>Acerca de</a>
      </div>
      <button onClick={() => setToggle(!toggle)}>X</button>
    </Container_Navbar>
  );
};

const Container_Navbar = styled.div`
  background-color: #f2f2f2;
  height: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-content: center;
  justify-content: center;

  h1 {
    font-size: 1.5em;
    color: #000000;
    grid-column: 1 / 2;
    text-align: center;
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    grid-column: 3 / 4;

    // Media queries
    @media (max-width: 768px) {
      width: 100vw;
      height: 100vh;
      grid-column: 1 / 4;
      flex-direction: column;
      justify-content: space-evenly;
      position: fixed;
      left: -100vw;
      background-color: #fff;
      transition: left 0.5s ease-in-out;
    }

    a {
      text-decoration: none;
      color: #000000;
      font-size: 1.2em;
      font-weight: bold;
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
    font-size: 1.5em;
    color: #000000;
    grid-column: 3 / 4;
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
