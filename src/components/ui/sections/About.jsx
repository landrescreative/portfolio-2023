import React from "react";
import styled from "styled-components";
import Separator from "../components/Separator";
import { useTranslation } from "react-i18next";

// Img
import profilepicture from "../../assets/prof1.jpg";

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  grid-template-columns: repeat(12, 1fr);
  background-color: #edf0ff;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #000000;

  .about {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-column: 1 / 13;
    grid-row: 2 / 3;
    justify-items: center;
  }

  .about_img {
    margin: 0px;
    grid-column: 2 / 5;
    width: 100%;
    text-align: center;

    img {
      width: 80%;
      border-radius: 50%;
      transition: all 0.5s;
      filter: grayscale(100%);

      &:hover {
        filter: grayscale(0%);
      }
    }

    @media (max-width: 768px) {
      grid-column: 1 / 13;
      margin: 0px;
    }
  }

  .about_texts {
    display: flex;
    grid-column: 6 / 9;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      grid-column: 1 / 13;
    }
  }

  .about_texts_container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
      align-items: center;
    }

    h1 {
      align-self: flex-start;
      font-size: 22px;
      color: #95beff;

      @media (max-width: 768px) {
        align-self: center;
      }
    }

    p {
      max-width: 80%;
    }
  }
`;

const About = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <div className="about">
        <div className="about_img">
          <img src={profilepicture} alt="profile"></img>
        </div>
        <div className="about_texts">
          <div className="about_texts_container">
            <h1>{t("aboutmeh1")}</h1>
            <p>{t("aboutmep1")}</p>
            <h1>CV</h1>
            <a>{t("aboutresume")}</a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
