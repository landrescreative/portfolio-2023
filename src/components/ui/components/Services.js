import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { FaPaintBrush, FaCode, FaUserAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// animations rotation
import { keyframes } from "styled-components";

const gradient = keyframes`
  100% {transform: rotate(1turn);}
`;

// Estilos del componente Services usando styled-components
const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem 20px;
  @media (max-width: 768px) {
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 0 0;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #000000;
  text-align: center;
  padding: 0 10rem;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  width: 80%;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  z-index: 0;
  box-shadow: 0 0 36px rgba(0, 0, 0, 0);

  &::before {
    content: "";
    opacity: 0;
    box-sizing: border-box;
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #5d3fd3;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#5d3fd3, #5d3fd3),
      linear-gradient(#0070f3, #0070f3);
    animation: ${gradient} 4s linear infinite;

    @media (max-width: 768px) {
      opacity: 1;
    }
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 3px;
    top: 3px;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    background: white;
    border-radius: 5px;
    opacity: 0;

    @media (max-width: 768px) {
      opacity: 1;
    }
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 36px rgba(0, 0, 0, 0.3);

    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 1;
    }
  }
`;

const IconWrapper = styled.div`
  font-size: 3.2rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 10px;
`;

const CardContent = styled.div`
  text-align: center;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
`;

const ContactButton = styled.a`
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #555;
    transform: scale(1.1);
  }

  svg {
    transform: rotate(-45deg);
    font-size: 1.5rem;
  }
`;

const Services = () => {
  // Traducción de textos
  const { t } = useTranslation();

  // This handle scroll event on click to contact button
  const handleScroll = () => {
    const contactSection = document.getElementById("contact_cta");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ServicesContainer>
      <Title>{t("services")}</Title>
      <Subtitle>{t("services_p")}</Subtitle>
      <CardsContainer>
        <Card>
          <IconWrapper>
            <FaPaintBrush />
          </IconWrapper>
          <CardContent>
            <CardTitle>{t("service_1")}</CardTitle>
            <CardText>{t("service_1_description")}</CardText>
            <ContactButton href="#contact" onClick={handleScroll}>
              <BsArrowRight />
            </ContactButton>
          </CardContent>
        </Card>
        <Card>
          <IconWrapper>
            <FaCode />
          </IconWrapper>
          <CardContent>
            <CardTitle>{t("service_2")}</CardTitle>
            <CardText>{t("service_2_description")}</CardText>
            <ContactButton href="#contact" onClick={handleScroll}>
              <BsArrowRight />
            </ContactButton>
          </CardContent>
        </Card>
        <Card>
          <IconWrapper>
            <FaUserAlt />
          </IconWrapper>
          <CardContent>
            <CardTitle>{t("service_3")}</CardTitle>
            <CardText>{t("service_3_description")}</CardText>
            <ContactButton href="#contact" onClick={handleScroll}>
              <BsArrowRight />
            </ContactButton>
          </CardContent>
        </Card>
        {/* Add more cards as needed */}
      </CardsContainer>
    </ServicesContainer>
  );
};

export default Services;
