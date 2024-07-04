import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importa las imágenes de las tecnologías que usas
import reactLogo from "../../assets/React_logo_PNG_(10).png";
import wordpressLogo from "../../assets/WordPress-logotype-standard.png";
import webflowLogo from "../../assets/Webflow_logo_2023.svg";
import nodeJsLogo from "../../assets/76004cda170cb68b6fdefd3e70f272d3.png";
import nextJsLogo from "../../assets/nextjs.svg";
import expressLogo from "../../assets/Expressjs.png";
import adobeCreative from "../../assets/adobe-cc.png";
import blenderLogo from "../../assets/Logo_Blender.svg";
import mayaLogo from "../../assets/Autodesk Maya.svg";
import figmaLogo from "../../assets/62c6bc0beee9410fe137d91e.png";
import mongoDB from "../../assets/MongoDB_Logo.svg";

// Agrega más logos según sea necesario

const techLogos = [
  { src: reactLogo, alt: "React" },
  { src: wordpressLogo, alt: "WordPress" },
  { src: webflowLogo, alt: "Webflow" },
  { src: nodeJsLogo, alt: "Node.js" },
  { src: nextJsLogo, alt: "Next.js" },
  { src: expressLogo, alt: "Express.js" },
  { src: adobeCreative, alt: "Adobe Creative Cloud" },
  { src: blenderLogo, alt: "Blender" },
  { src: mayaLogo, alt: "Autodesk Maya" },
  { src: figmaLogo, alt: "Figma" },
  { src: mongoDB, alt: "MongoDB" },
];

const TechSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Duplicar los elementos para mejorar la percepción de infinitud
  const duplicatedLogos = [...techLogos, ...techLogos];

  return (
    <SliderContainer>
      <StyledSlider {...settings}>
        {duplicatedLogos.map((logo, index) => (
          <Slide key={index}>
            <img src={logo.src} alt={logo.alt} />
          </Slide>
        ))}
      </StyledSlider>
    </SliderContainer>
  );
};

// Styled Components
const SliderContainer = styled.div`
  width: 100%;
  padding: 0rem 0;
  overflow: hidden;
`;

const StyledSlider = styled(Slider)`
  .slick-slide img {
    display: flex;
    margin: auto;
    max-height: 80px;
    filter: grayscale(100%);
    opacity: 0.5;
  }
`;

const Slide = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 120px;
  background-color: #fff;
  border-radius: 10px;
  padding: 1rem;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export default TechSlider;
