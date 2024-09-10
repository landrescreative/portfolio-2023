import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import useIsMobile from "../components/useIsMobile";

// Img
import profilepicture from "../../assets/prof1.webp";

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  padding: 8rem 0;
  grid-template-columns: repeat(12, 1fr);
  background-color: #ffffff;
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
        transform: scale(1.2) rotate(-25deg);
        border-radius: 16px;
        filter: grayscale(0%);
      }

      @media (max-width: 768px) {
        filter: grayscale(0%);

        &:hover {
          transform: scale(1) rotate(0deg);
          border-radius: 50%;
        }
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
      padding: 0 20px;
    }

    h1 {
      align-self: flex-start;
      font-size: 22px;
      color: ${(props) => props.theme.colors.primary};

      @media (max-width: 768px) {
        align-self: center;
      }
    }

    p {
      font-size: 1.1rem;
      max-width: 90%;
    }
  }
`;

const About = () => {
  const { t } = useTranslation();

  // Create use state on click
  const [clicked, setClicked] = React.useState(false);

  var isMobile = useIsMobile();

  function animateOnClick() {
    gsap.to(".img", {
      duration: 0.3,
      scale: 1.2,
      rotate: -25,
      borderRadius: "16px",
      filter: "grayscale(0%)",
    });
  }

  function backToNormal() {
    gsap.to(".img", {
      duration: 0.3,
      scale: 1,
      rotate: 0,
      borderRadius: "50%",
      filter: "grayscale(100%)",
    });
  }

  return (
    <Container>
      <div className="about">
        <div className="about_img">
          <img
            className="img"
            src={profilepicture}
            onClick={isMobile ? animateOnClick : null}
            alt="profile"
          ></img>
        </div>
        <div className="about_texts">
          <div className="about_texts_container">
            <h1>{t("aboutmeh1")}</h1>
            <p>{t("aboutmep1")}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
