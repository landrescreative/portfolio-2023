import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// Images
import veravitalize from "../../components/assets/veravitalize.webp";
import mockup from "../../components/assets/Clay_Mockup.webp";
import mockup2 from "../../components/assets/mockup-vera.webp";
import CaseStudyTemplate from "./CaseStudyTemplate";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffff;

  .website-name {
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-weight: 600;
      font-size: 1.3rem;
      padding: 1rem;
    }
  }

  .website-banner {
    height: 85vh;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    overflow: hidden;

    .website-img {
      height: 100%;
      width: 100%;
      border-radius: 16px;
      display: flex;
      justify-content: center;
      overflow: hidden;
      background-color: #71d878;
    }

    img {
      width: 100%;
      border-radius: 16px;
      object-fit: cover;
      transition: all 0.5s ease;

      @media (max-width: 768px) {
        width: 100%;
      }

      &:hover {
        transform: scale(1.1);
      }
    }

    .website-description {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 768px) {
      }
    }

    .website-livepreviewsection {
      padding: 1rem;
      h3 {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 1rem;
        @media (max-width: 768px) {
          font-size: 1rem;
        }
      }

      button {
        padding: 1.5rem 3rem;
        background-color: #000000;
        color: white;
        border: none;
        border-radius: 40px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: #71d878;
          color: #000000;
        }

        @media (max-width: 768px) {
          padding: 1rem 1rem;
          font-size: 1rem;
        }
      }
    }

    .website-introduction {
      width: 50%;
      padding: 1rem;
      text-align: right;

      h1 {
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 1rem;

        @media (max-width: 768px) {
          font-size: 1rem;
        }
      }
    }
  }
`;

const CaseStudy = () => {
  const t = useTranslation().t;

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="website-name">
        <h1>VERAVITALIZE</h1>
      </div>
      <div className="website-banner ">
        <div className="website-img">
          <img src={veravitalize} alt="website-banner" />
        </div>
        <div className="website-description">
          <div className="website-livepreviewsection">
            <h3>Live Preview</h3>
            <a href="https://veravitalize.vercel.app" target="_blank">
              <button>Visit Site</button>
            </a>
          </div>
          <div className="website-introduction">
            <h1>{t("veravitalize_role")}</h1>
            <h1>{t("veravitalize_length")}</h1>
            <h1>{t("veravitalize_tag")}</h1>
          </div>
        </div>
      </div>
      <CaseStudyTemplate> </CaseStudyTemplate>
    </Container>
  );
};

export default CaseStudy;
