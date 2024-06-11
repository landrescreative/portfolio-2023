import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// Images
import veravitalize from "../../components/assets/veravitalize.png";
import mockup from "../../components/assets/Clay_Mockup.png";
import mockup2 from "../../components/assets/mockup-vera.png";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #edf0ff;

  .website-name {
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-family: "Montserrat", sans-serif;
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
      font-family: "Montserrat", sans-serif;

      @media (max-width: 768px) {
      }
    }

    .website-livepreviewsection {
      width: 50%;
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
        font-family: "Montserrat", sans-serif;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: #71d878;
          color: #000000;
        }

        @media (max-width: 768px) {
          padding: 1rem 2rem;
          font-size: 1rem;
        }
      }
    }

    .website-introduction {
      width: 50%;
      padding: 1rem;
      text-align: right;

      h1 {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 1rem;

        @media (max-width: 768px) {
          font-size: 1rem;
        }
      }
    }
  }
  .website-case-study {
    display: flex;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .website-casestudy-section {
    width: 50%;
    font-family: "Montserrat", sans-serif;

    @media (max-width: 768px) {
      width: 100%;
    }

    h1 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 1rem;
      justify-self: flex-start;
      align-self: flex-start;
      color: #95beff;

      @media (max-width: 768px) {
        font-size: 1.3rem;
      }
    }

    p {
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.5;
      text-align: justify;

      @media (max-width: 768px) {
        font-size: 0.9rem;
      }
    }
  }

  .website-casestudy-text {
    height: 100%;
    font-family: "Montserrat", sans-serif;
    padding: 0 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 3rem;
    font-weight: 300;

    @media (max-width: 768px) {
      font-size: 2rem;
      padding: 0 2rem;
    }
  }

  .website-casestudy-scroll {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    background-color: #71d878;
    color: #000;
    height: 100vh;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .photos-test-1 {
    position: absolute;
    top: -500px;
    height: 1000px;
    width: 1000px;
    z-index: 1;

    @media (max-width: 768px) {
      top: 100px;
    }
  }

  .photos-test-2 {
    position: absolute;
    top: 00px;
    height: 1000px;
    width: 1000px;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;
// This create a sticky effect on the scroll section
const stickyRef = React.createRef();
const CaseStudy = () => {
  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("screen and (min-width: 768px)", () => {
      const photos = gsap.utils.toArray(".photos-test-1");
      gsap.set(photos, { yPercent: 200 });

      const animation = gsap.to(photos, {
        yPercent: 0,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: stickyRef.current,
        start: "top top",
        end: "+=3000px",
        animation: animation,
        pin: ".website-casestudy-scroll",
        scrub: 1,
      });
    });
  });

  const maxRot = 30;

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
      <div className="website-case-study " ref={stickyRef}>
        <div className="website-casestudy-section">
          <div className="website-casestudy-text">
            <h1>{t("veravitalize_tmit")}</h1>
            <p>{t("veravitalize_tmi")}</p>
          </div>
          <div className="website-casestudy-text">
            <h1>{t("veravitalize_techt")}</h1>
            <p>{t("veravitalize_tech")}</p>
          </div>
          <div className="website-casestudy-text">
            <h1>{t("veravitalize_objetivet")}</h1>
            <p>{t("veravitalize_objetive")}</p>
          </div>
        </div>
        <div className="website-casestudy-scroll">
          <img className="photos-test-1" src={mockup}></img>
          <img className="photos-test-2" src={mockup2}></img>
        </div>
      </div>
    </Container>
  );
};

export default CaseStudy;
