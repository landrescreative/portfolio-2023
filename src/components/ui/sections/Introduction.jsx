import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";

import mask from "../../assets/123.png";
import mask2 from "../../assets/1234.png";

const Container = styled.div`
  display: grid;
  text-align: center;

  .section {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .section:nth-child(1) {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      background-color: hsla(0, 0%, 100%, 0.9);
      -webkit-mask-image: url(${mask});
      mask-image: url(${mask});
      mask-clip: content-box;
      mask-size: 100% 100%;
      mask-repeat: no-repeat;

      @media screen and (max-width: 768px) {
        -webkit-mask-image: url(${mask2});
        mask-image: url(${mask2});
      }
    }
  }

  .section:nth-child(2) {
    background-color: hsla(0, 0%, 100%, 0.94);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: #000000;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    margin-bottom: 1rem;
  }
  // First section

  .main-text {
    margin: 0;
    font-size: 4rem;
    font-weight: 600;
    font-family: "kallisto";
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.8);
    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
    width: 80%;
  }

  .main-text:nth-child(2) {
    width: 70%;
  }

  // Second section

  .skills {
    font-size: 4rem;
    font-weight: 500;
    font-family: "kallisto";
    padding: 6rem 5rem;

    @media screen and (max-width: 768px) {
      padding: 3rem 3rem;
      font-size: 2rem;
    }
  }

  .skills:nth-child(1) {
    align-self: flex-start;

    @media screen and (max-width: 768px) {
      align-self: flex-start;
    }
  }

  .skills:nth-child(2) {
    align-self: center;

    @media screen and (max-width: 768px) {
      align-self: flex-start;
    }
  }

  .skills:nth-child(3) {
    align-self: flex-end;

    @media screen and (max-width: 768px) {
      align-self: flex-start;
    }
  }
`;

const Introduction = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="section whocontainer">
        <h1 className="main-text"> {t("who")} </h1>
        <h1 className="main-text"> {t("what")} </h1>
      </div>
      {/* <div className="section">
        <h1 className="skills">{t("skillsn1")}</h1>
        <h1 className="skills">{t("skillsn2")}</h1>
        <h1 className="skills">{t("skillsn3")}</h1>
      </div> */}
    </Container>
  );
};

export default Introduction;
