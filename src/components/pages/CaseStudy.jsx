import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scroll } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";

// Images

import veravitalize from "../../components/assets/veravitalize.png";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .website-name {
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-family: "Montserrat", sans-serif;
      font-weight: 300;
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
        font-size: 1.5rem;
        font-weight: 300;
        margin-bottom: 1rem;
        text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.8);

        @media (max-width: 768px) {
          font-size: 1rem;
        }
      }

      button {
        padding: 1.5rem 3rem;
        background-color: white;
        color: black;
        border: none;
        border-radius: 40px;
        font-family: "Montserrat", sans-serif;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;

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
        font-weight: 300;
        margin-bottom: 1rem;
        text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.8);

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
      font-size: 1.5rem;
      font-weight: 300;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.8);
      justify-self: flex-start;
      align-self: flex-start;
      @media (max-width: 768px) {
        font-size: 1.3rem;
      }
    }

    p {
      font-size: 1rem;
      font-weight: 300;
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
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.8);

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

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .photos-test {
    height: 200px;
    width: 200px;
    background-color: #000;
  }
`;
// This create a sticky effect on the scroll section
const stickyRef = React.createRef();
const CaseStudy = () => {
  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("screen and (min-width: 768px)", () => {
      const photos = gsap.utils.toArray(".photos-test");
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
  function mouseMoveFunc(evt) {
    const percent = gsap.utils.normalize(0, window.innerWidth, evt.pageX);
    const percent2 = gsap.utils.normalize(0, window.innerWidth, evt.pageY);

    gsap.to(".website-img", {
      duration: 0.2,
      rotationY: -(percent * maxRot - maxRot / 2),
      rotationX: percent2 * maxRot - maxRot / 2,
      overwrite: true,
    });
  }
  window.addEventListener("mousemove", mouseMoveFunc);

  const t = useTranslation().t;

  return (
    <Container>
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
          <div className="photos-test"></div>
        </div>
      </div>
    </Container>
  );
};

export default CaseStudy;
