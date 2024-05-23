import React from "react";
import styled from "styled-components";
import Separator from "../components/Separator";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

// Images
import img1 from "../../assets/Gif2.gif";
import img2 from "../../assets/Gif The Old.gif";

const Container = styled.div`
  display: grid;
  margin: 0 0px;
  grid-template-columns: repeat(12, 1fr);

  .gallery {
    grid-column: 1 / 13;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(calc(30%), 1fr));
    grid-gap: 10px;
    margin: 15px 10px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(auto-fit, minmax(calc(80%), 1fr));
      margin: 15px 0;
    }

    .thumbnails {
      aspect-ratio: 1/1;
      z-index: 1;
      background-color: #f2f2f2;
      position: relative;
      border-radius: 20px;
      overflow: hidden;

      @media screen and (max-width: 768px) {
        margin: 0px 15px;
      }

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        object-fit: cover;
        z-index: -1;
        border-radius: 20px;
        filter: grayscale(100%);

        @media screen and (max-width: 768px) {
          filter: grayscale(0%);
        }
      }

      .overlay {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: hsla(0, 0%, 0%, 0.3);
        transition: all 0.4s ease-in-out;
        color: #ffffff;
        opacity: 1;
        backdrop-filter: blur(16px);
        z-index: 1;
        border-radius: 0px;
        padding: 20px;
        bottom: -100%;

        h1 {
          font-size: 1.2rem;
          font-weight: 700;
          margin: 0px;
          padding: 0px;
        }

        .tags {
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
        }

        .tags span {
          font-size: 12px;
          font-weight: 500;
          color: #000;
          background-color: rgba(255, 255, 255, 1);
          padding: 5px 10px;
          border-radius: 5px;
          transition: background-color 0.2s ease;

          &:hover {
            background-color: rgba(255, 255, 255, 0.8);
          }
        }

        a {
          color: inherit;
          text-decoration: underline;
        }
      }

      &:hover .overlay {
        left: 0;
        bottom: 0;
      }

      &:hover img {
        filter: grayscale(0%);
      }
    }
  }
`;

const Work = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="gallery">
        <div className="thumbnails" id="work_images">
          <Link to="/veravitalize">
            <div className="overlay">
              <h1>{t("proyect1_h1")}</h1>
              <p>{t("proyect1_p")}</p>
              <div className="tags">
                <span>React</span>
                <span>ThreeJS</span>
                <span>GSAP</span>
              </div>
            </div>

            <img src={img1}></img>
          </Link>
        </div>
        <div className="thumbnails" id="work_images">
          <a href="https://youtu.be/yHKBqA1yWz0?si=2U3ddlahthod70O9">
            <div className="overlay">
              <h1>{t("proyect2_h1")}</h1>
              <p>{t("proyect2_p")}</p>
              <div className="tags">
                <span>Blender</span>
                <span>ThreeJS</span>
                <span>Adobe Premiere</span>
              </div>
            </div>

            <img src={img2}></img>
          </a>
        </div>
        <div className="thumbnails" id="work_images">
          <Link to="/veravitalize">
            <div className="overlay">
              <h1>{t("proyect3_h1")}</h1>
              <p>{t("proyect3_p")}</p>
              <div className="tags">
                <span>React</span>
                <span>ThreeJS</span>
                <span>GSAP</span>
              </div>
            </div>

            <img src={img1}></img>
          </Link>
        </div>
        <div className="thumbnails" id="work_images">
          <Link to="/veravitalize">
            <div className="overlay">
              <h1>{t("proyect4_h1")}</h1>
              <p>{t("proyect4_p")}</p>
              <div className="tags">
                <span>React</span>
                <span>ThreeJS</span>
                <span>GSAP</span>
              </div>
            </div>

            <img src={img1}></img>
          </Link>
        </div>
        <div className="thumbnails" id="work_images">
          <Link to="/veravitalize">
            <div className="overlay">
              <h1>{t("proyect5_h1")}</h1>
              <p>{t("proyect5_p")}</p>
              <div className="tags">
                <span>React</span>
                <span>ThreeJS</span>
                <span>GSAP</span>
              </div>
            </div>

            <img src={img1}></img>
          </Link>
        </div>
        <div className="thumbnails" id="work_images">
          <Link to="/veravitalize">
            <div className="overlay">
              <h1>{t("proyect6_h1")}</h1>
              <p>{t("proyect6_p")}</p>
              <div className="tags">
                <span>React</span>
                <span>ThreeJS</span>
                <span>GSAP</span>
              </div>
            </div>

            <img src={img1}></img>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Work;
