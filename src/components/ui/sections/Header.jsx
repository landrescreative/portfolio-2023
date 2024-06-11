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
import SocialButtons from "../components/SocialButtons";
import { useTranslation } from "react-i18next";
import profilepicture from "../../assets/Paper-Profile-Pic.jpg";

const Container = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-content: center;
  justify-content: center;
  background-color: #edf0ff;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #000000;

  @media screen and (max-width: 1024px) {
    height: auto;
    grid-template-rows: repeat(1, 1fr);
  }

  div:nth-child(1) {
    grid-column: 2/5;
    grid-row: 1 / 2;
    text-align: left;
    align-self: center;
    justify-content: center;
    font-family: "kallisto";
    font-weight: 800;
    font-size: 50px;

    @media (max-width: 1024px) {
      text-align: center;
      grid-column: 1/6;
      font-size: 26px;
    }
  }

  div:nth-child(2) {
    display: flex;
    grid-column: 3/4;
    grid-row: 2 / 4;
    text-align: center;
    align-self: center;
    justify-content: space-around;

    @media (max-width: 1024px) {
      grid-column: 1/6;
      flex-direction: column;
      justify-content: center;
    }

    // Hello im alex text
    h1 {
      font-size: 20px;
      font-weight: 300;
      align-self: center;
      font-family: "Montserrat";
    }

    // IMG
    .test {
      margin: 0 25px;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background-color: #f2f2f2;
      border: 2px solid #f2f2f2;
      align-self: center;
      justify-self: center;

      @media (max-width: 1024px) {
        margin: 15px 0;
        width: 200px;
        height: 200px;
      }
    }

    // Social media icons
    a {
      font-size: 34px;
      align-self: center;
      color: #000000;
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

    @media (max-width: 1024px) {
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
  const { t } = useTranslation();

  return (
    <Container>
      <div>
        <h1 className="landres-text">LANDRES</h1>
      </div>
      <div>
        <h1> {t("welcome")} </h1>
        <img className="test" src={profilepicture}></img>
        <SocialButtons />
      </div>
      <div>
        <h1>CREATIVE</h1>
      </div>
    </Container>
  );
};

export default Header;
