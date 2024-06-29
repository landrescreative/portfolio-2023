import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

// Images
import img1 from "../../assets/veravitalizevideo.webm";
import img2 from "../../assets/theold.webm";
import img3 from "../../assets/launchsark.webp";
import img4 from "../../assets/Pringles.webp";
import img5 from "../../assets/codicavideo.webm";
import img6 from "../../assets/Powerkick-mockup.webp";

const Container = styled.div`
  display: grid;
  background-color: hsla(0, 0%, 100%, 1);
  grid-template-columns: repeat(12, 1fr);
  backdrop-filter: blur(10px);
  .gallery {
    grid-column: 1 / 13;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(calc(30%), 1fr));
    grid-gap: 15px;
    margin: 15px 10px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(auto-fit, minmax(calc(90%), 1fr));
      margin: 15px 0;
    }

    .thumbnails {
      aspect-ratio: 1/1;
      z-index: 1;
      background-color: #f2f2f2;
      position: relative;
      overflow: hidden;
      border-radius: 16px;
      transition: all 0.4s ease-in-out;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);

      @media screen and (max-width: 768px) {
        margin: 0px 15px;
      }

      img,
      video {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        object-fit: cover;
        z-index: -1;
        /* filter: grayscale(100%); */
        border-radius: 16px;
        transition: transform 0.4s ease-in-out;
        transform: scale(1);

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
        transform: scale(1.1);
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
        <div className="thumbnails veravitalize" id="work_images">
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
            <video autoPlay loop muted>
              <source src={img1} type="video/webm" />
            </video>
          </Link>
        </div>
        <div className="thumbnails" id="work_images">
          <a
            href="https://www.behance.net/gallery/199282107/LaunchShark-Logo"
            target="_blank"
          >
            <div className="overlay">
              <h1>{t("proyect3_h1")}</h1>
              <p>{t("proyect3_p")}</p>
              <div className="tags">
                <span>Illustrator</span>
                <span>Premiere</span>
                <span>After Effects</span>
                <span>Adobe Xd</span>
              </div>
            </div>

            <img src={img3}></img>
          </a>
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

            <video autoPlay loop muted>
              <source src={img2} type="video/webm" />
            </video>
          </a>
        </div>
        <div className="thumbnails" id="work_images">
          <a>
            <div className="overlay">
              <h1>{t("proyect4_h1")}</h1>
              <p>{t("proyect4_p")}</p>
              <div className="tags">
                <span>Adobe Photoshop</span>
                <span>Lightroom</span>
              </div>
            </div>
            <img src={img4}></img>
          </a>
        </div>
        <div className="thumbnails" id="work_images">
          <a>
            <div className="overlay">
              <h1>Codica Landing Page</h1>
              <p>Software Agency Website</p>
              <div className="tags">
                <span>Figma</span>
                <span>React</span>
                <span>ThreeJS</span>
              </div>
            </div>
            <video autoPlay loop muted>
              <source src={img5} type="video/webm" />
            </video>
          </a>
        </div>
        <div className="thumbnails" id="work_images">
          <a>
            <div className="overlay">
              <h1>Powerkick Website</h1>
              <p>Snakers shop website | UNDER DEVELOPMENT</p>
              <div className="tags">
                <span>Figma</span>
                <span>Blender</span>
                <span>Web Development</span>
              </div>
            </div>
            <img src={img6}></img>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Work;
