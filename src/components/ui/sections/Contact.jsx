import React from "react";
import styled from "styled-components";
import { FaArrowRightLong, FaRegPaperPlane } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import SocialButtons from "../components/SocialButtons";
import useIsMobile from "../components/useIsMobile";
import { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  grid-template-columns: repeat(12, 1fr);
  justify-items: center;
  align-content: center;
  background-color: #ffffff;
  color: #000000;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    height: 80vh;
  }

  .contact_container {
    display: grid;
    margin: 0;
    margin-bottom: 25px;
    grid-column: 1 / 13;
    justify-items: center;
    align-content: flex-end;

    @media screen and (max-width: 768px) {
      margin: 0px 0.5rem;
    }

    .contact_h1 {
      grid-column: 1 / 13;
      text-align: center;
      font-size: 50px;
      font-weight: 800;
      color: ${(props) => props.theme.colors.primary};
    }

    .contact_cta {
      display: flex;
      background-color: #ffffff;
      border-radius: 50px;
      padding: 5px 20px;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 20px 0px;
      grid-column: 1 / 13;
      gap: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);

      h1 {
        font-size: 20px;
        font-weight: 300;
        text-align: center;
        color: #1c1c1c;
      }

      &:hover {
        background-color: #3f75ff;
        box-shadow: 0px 0px 10px 5px rgba(149, 190, 255, 0.6);
        transform: scale(1.05);
        h1 {
          color: #ffffff;
        }
      }
    }

    .cta_text {
      color: #1c1c1c;
    }

    .contact_img {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      grid-column: 1 / 13;
      background-color: #fff;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      transition: all 0.3s ease;
      box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);
      color: inherit;

      &:hover {
        background-color: #3f75ff;
        transform: scale(1.1);
        box-shadow: 0px 0px 10px 5px rgba(149, 190, 255, 0.6);

        svg {
          color: #ffffff;
        }
      }
    }
  }
`;

const Contact = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  function copyToClipboard() {
    var ctaBox = document.getElementsByClassName("contact_cta")[0];
    var cta = document.getElementsByClassName("cta_text")[0];
    cta.innerHTML = "Copied!";
    cta.style.color = "#ffffff";
    ctaBox.style.backgroundColor = "#2d56ff";

    setTimeout(() => {
      cta.innerHTML = "landres.creative@gmail.com";
      cta.style.color = "#1c1c1c";
      ctaBox.style.backgroundColor = "#ffffff";
    }, 3000);

    navigator.clipboard.writeText("landres.creative@gmail.com");
  }

  return (
    <Container>
      <div className="contact_container">
        <h1 className="contact_h1">{t("contacth1")}</h1>
        <a className="contact_img" href="mailto:landres.creative@gmail.com">
          <FaRegPaperPlane />
        </a>
        <div className="contact_cta" id="contact_cta">
          <div className="contact_cta_effect">
            <h1
              className="cta_text"
              onClick={() => {
                if (!isMobile) {
                  copyToClipboard();
                }
              }}
            >
              landres.creative@gmail.com
            </h1>
          </div>
        </div>
      </div>
      <SocialButtons className="buttons" />
    </Container>
  );
};

export default Contact;
