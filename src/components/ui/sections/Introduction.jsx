import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

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
    font-size: 4rem;
    font-weight: 600;
    font-family: "kallisto";

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
      <div className="section">
        <span className="main-text"> {t("who")} </span>
        <span className="main-text"> {t("what")} </span>
      </div>
      <div className="section">
        <span className="skills">{t("skillsn1")}</span>
        <span className="skills">{t("skillsn2")}</span>
        <span className="skills">{t("skillsn3")}</span>
      </div>
    </Container>
  );
};

export default Introduction;
