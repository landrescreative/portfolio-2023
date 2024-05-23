import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";

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
  }

  .main-text:nth-child(2) {
    width: 50%;
  }

  // Second section

  .skills {
    font-size: 4rem;
    font-weight: 500;
    font-family: "kallisto";
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.8);
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

  let mm = gsap.matchMedia();
  mm.add("screen and (min-width: 768px)", () => {
    const maxRot = 30;
    function mouseMoveFunc(evt) {
      const percent = gsap.utils.normalize(0, window.innerWidth, evt.pageX);
      const percent2 = gsap.utils.normalize(0, window.innerWidth, evt.pageY);

      gsap.to(".section", {
        duration: 0.2,
        rotationY: -(percent * maxRot - maxRot / 2),
        rotationX: percent2 * maxRot - maxRot / 2,
        overwrite: true,
      });
    }
    window.addEventListener("mousemove", mouseMoveFunc);
  });

  return (
    <Container>
      <div className="section">
        <h1 className="main-text"> {t("who")} </h1>
        <h1 className="main-text"> {t("what")} </h1>
      </div>
      <div className="section">
        <h1 className="skills">{t("skillsn1")}</h1>
        <h1 className="skills">{t("skillsn2")}</h1>
        <h1 className="skills">{t("skillsn3")}</h1>
      </div>
    </Container>
  );
};

export default Introduction;
