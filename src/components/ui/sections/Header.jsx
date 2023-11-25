import React from "react";
import styled from "styled-components";
import {
  FaInstagram,
  FaBehance,
  FaGithub,
  FaLinkedinIn,
  FaLinkedin,
  FaArrowDownLong,
} from "react-icons/fa6";
import SocialButtons from "../SocialButtons";

const Container = styled.div`
  height: 100dvh;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  align-content: center;
  justify-content: center;

  div:nth-child(1) {
    grid-column: 2/5;
    grid-row: 2 / 3;
    text-align: left;
    align-self: center;
    justify-content: center;
    font-family: "kallisto";
    font-weight: 800;
    font-size: 50px;

    @media (max-width: 768px) {
      text-align: center;
      grid-column: 1/6;
      font-size: 26px;
    }
  }

  div:nth-child(2) {
    display: flex;
    grid-column: 2/5;
    grid-row: 3 / 4;
    text-align: center;
    align-self: center;
    justify-content: center;

    @media (max-width: 768px) {
      grid-column: 1/6;
      flex-direction: column;
    }

    // Hello im alex text
    h1 {
      font-size: 20px;
      font-weight: 300;
      align-self: center;
    }

    // IMG
    .test {
      margin: 0 25px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #f2f2f2;

      @media (max-width: 768px) {
        margin: 15px 0;
        height: 200px;
      }
    }

    // Social media icons
    a {
      font-size: 34px;
      align-self: center;
      color: white;
      text-decoration: none;
      margin: 0 5px;
    }
  }

  div:nth-child(3) {
    grid-column: 2/5;
    grid-row: 4 / 5;
    text-align: right;
    align-self: center;
    justify-content: center;
    font-size: 50px;
    font-family: "kallisto";
    font-weight: 800;

    @media (max-width: 768px) {
      text-align: center;
      grid-column: 1/6;
      font-size: 26px;
    }
  }

  div:nth-child(4) {
    text-align: center;
    grid-column: 2/5;
    grid-row: 5 / 6;
    align-self: center;
    font-size: 28px;

    a {
      color: #f2f2f2;
      text-decoration: none;
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <div>
        <h1>LANDRES</h1>
      </div>
      <div>
        <h1>Hello, i'm alex.</h1>
        <div className="test">IMG</div>
        <SocialButtons />
      </div>
      <div>
        <h1>CREATIVE</h1>
      </div>
      <div>
        <a href="#about">
          <FaArrowDownLong />
        </a>
      </div>
    </Container>
  );
};

export default Header;
