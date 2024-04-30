import React from "react";
import styled from "styled-components";
import { FaArrowRightLong, FaRegPaperPlane } from "react-icons/fa6";
import Separator from "../components/Separator";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  display: grid;
  margin: 15px 0px;
  grid-template-columns: repeat(12, 1fr);

  .contact_container {
    min-height: 85vh;
    display: grid;
    margin: 0;
    grid-column: 1 / 13;
    justify-items: center;
    align-content: flex-end;

    @media screen and (max-width: 768px) {
      margin: 0px 0.5rem;
    }

    h1 {
      grid-column: 1 / 13;
      text-align: center;
      font-size: 50px;
      font-weight: 800;
    }

    .contact_cta {
      display: flex;
      background-color: hsla(0, 0%, 100%, 0.2);
      border-radius: 50px;
      padding: 5px 20px;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 20px 0px;
      grid-column: 1 / 13;
      gap: 10px;

      h1 {
        font-size: 20px;
        font-weight: 300;
        text-align: center;
      }
    }

    .contact_img {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: #000;
      font-size: 30px;
      grid-column: 1 / 13;
      background-color: #fff;
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
`;

const Contact = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <div className="contact_container">
        <h1>{t("contacth1")}</h1>
        <div className="contact_img">
          <FaRegPaperPlane />
        </div>
        <div className="contact_cta">
          <h1>landres.creative@gmail.com</h1>
          <FaArrowRightLong />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
