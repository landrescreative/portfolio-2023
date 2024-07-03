import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importa las imágenes de las tecnologías que usas
import reactLogo from "../../assets/react.png";
import wordpressLogo from "../../assets/WordPress-logotype-standard.png";

// Agrega más logos según sea necesario

const techLogos = [
  { src: reactLogo, alt: "React" },
  { src: wordpressLogo, alt: "Styled Components" },
  { src: reactLogo, alt: "Next.js" },
  // Agrega más logos según sea necesario
];

const TechSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
  padding: 2rem 0;
`;

const StyledSlider = styled(Slider)`
  .slick-slide img {
    display: block;
    margin: auto;
    max-height: 100px;
  }
`;

const Slide = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: #fff;
  border-radius: 10px;
  padding: 1rem;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export default TechSlider;
