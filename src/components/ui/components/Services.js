import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

// Estilos del componente Services usando styled-components
const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: #ffffff;
  padding: 50px 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const RightSection = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
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
  background-color: #333;
  color: #fff;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }

  svg {
    font-size: 1.5rem;
  }
`;

const Services = () => {
  return (
    <ServicesContainer>
      <LeftSection>
        <Title>Services</Title>
        <Subtitle>What does your brand need?</Subtitle>
      </LeftSection>
      <RightSection>
        <ServicesList>
          <ServiceItem>
            <ServiceContent>
              <ServiceText>
                <ServiceTitle>Graphic Design</ServiceTitle>
              </ServiceText>
              <ContactButton href="#contact">
                <BsArrowRight />
              </ContactButton>
            </ServiceContent>
          </ServiceItem>
          <hr />
          <ServiceItem>
            <ServiceContent>
              <ServiceText>
                <ServiceTitle>Web Developer</ServiceTitle>
              </ServiceText>
              <ContactButton href="#contact">
                <BsArrowRight />
              </ContactButton>
            </ServiceContent>
          </ServiceItem>
          <hr />
          <ServiceItem>
            <ServiceContent>
              <ServiceText>
                <ServiceTitle>UI/UX Designer</ServiceTitle>
              </ServiceText>
              <ContactButton href="#contact">
                <BsArrowRight />
              </ContactButton>
            </ServiceContent>
          </ServiceItem>
          <hr />
          <ServiceItem>
            <ServiceContent>
              <ServiceText>
                <ServiceTitle>Design Consultancy</ServiceTitle>
              </ServiceText>
              <ContactButton href="#contact">
                <BsArrowRight />
              </ContactButton>
            </ServiceContent>
          </ServiceItem>
          {/* Add more service items here as needed */}
        </ServicesList>
      </RightSection>
    </ServicesContainer>
  );
};

export default Services;
