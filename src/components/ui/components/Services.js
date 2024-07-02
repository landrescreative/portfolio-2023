import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";

// Estilos del componente Services usando styled-components
const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: #ffffff;
  padding: 50px 50px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LeftSection = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    margin-bottom: 0;
    align-items: center;
  }
`;

const RightSection = styled.div``;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: 768px) {
    font-size: 3rem;
    text-align: center;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  padding-right: 3rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
    padding-right: 0;
  }
`;

const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ServiceItem = styled.li`
  margin-bottom: 30px;
`;

const ServiceContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: #f9f9f9;
  }
`;

const ServiceText = styled.div`
  flex: 1;
`;

const ServiceTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
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
  cursor: none;

  &:hover {
    background-color: #555;
    transform: scale(1.1);
  }

  // modify background of parent on hover of child
  &:hover ~ .containerservice {
    background: #555;
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
      <LeftSection>
        <Title> {t("services")} </Title>
        <Subtitle>{t("services_p")}</Subtitle>
      </LeftSection>
      <RightSection>
        <ServicesList>
          <ServiceItem className="containerservice">
            <ServiceContent>
              <ServiceText>
                <ServiceTitle>{t("service_1")}</ServiceTitle>
              </ServiceText>
              <ContactButton href="#contact" onClick={handleScroll}>
                <BsArrowRight />
              </ContactButton>
            </ServiceContent>
          </ServiceItem>
          <hr />
          <ServiceItem>
            <ServiceContent>
              <ServiceText>
                <ServiceTitle>{t("service_2")}</ServiceTitle>
              </ServiceText>
              <ContactButton href="#contact" onClick={handleScroll}>
                <BsArrowRight />
              </ContactButton>
            </ServiceContent>
          </ServiceItem>
          <hr />
          <ServiceItem>
            <ServiceContent>
              <ServiceText>
                <ServiceTitle>{t("service_3")}</ServiceTitle>
              </ServiceText>
              <ContactButton href="#contact" onClick={handleScroll}>
                <BsArrowRight />
              </ContactButton>
            </ServiceContent>
          </ServiceItem>
          <hr />
          {/* Add more service items here as needed */}
        </ServicesList>
      </RightSection>
    </ServicesContainer>
  );
};

export default Services;
