import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import gsap from "gsap";

const Header = () => {
  const { t } = useTranslation();
  const headerRef = useRef(null);
  const roleTextRef = useRef(null);
  const descriptionRef = useRef(null);
  const selfDescriptionRef = useRef(null);
  const buttonRefs = useRef([]);

  const handleScroll = () => {
    const contactSection = document.getElementById("contact_cta");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll2 = () => {
    const gallerySection = document.getElementById("work");
    gallerySection.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onLoad = () => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1 }
      );
      gsap.fromTo(
        roleTextRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, delay: 0.5 }
      );
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, delay: 1 }
      );
      gsap.fromTo(
        selfDescriptionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 1.5 }
      );
      buttonRefs.current.forEach((button, index) => {
        gsap.fromTo(
          button,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, delay: 2 + index * 0.5 }
        );
      });
    };

    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <HeaderContainer ref={headerRef}>
      <HeaderText>
        <RoleText ref={roleTextRef}>{t("who")}</RoleText>
        <Description ref={descriptionRef}>{t("welcome")}</Description>
        <SelfDescription ref={selfDescriptionRef}>
          {t("description")}
        </SelfDescription>
        <ButtonContainer>
          <ActionButton
            ref={(el) => (buttonRefs.current[0] = el)}
            onClick={handleScroll2}
          >
            {t("cta1")}
          </ActionButton>
          <ActionButton
            ref={(el) => (buttonRefs.current[1] = el)}
            onClick={handleScroll}
          >
            {t("cta2")}
          </ActionButton>
        </ButtonContainer>
      </HeaderText>
    </HeaderContainer>
  );
};

// Styled Components
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  text-align: center;
  background-color: #ffffff;

  @media (max-width: 768px) {
    padding-bottom: 2rem;
    padding-top: 0;
  }
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Inter Tight", sans-serif;
  color: #000000;
  max-width: 70%;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const RoleText = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  color: ${(props) => props.theme.colors.primary};
`;

const Description = styled.h2`
  width: 90%;
  margin: 1rem 0;
  font-size: 5rem;
  font-weight: 600;
  color: #333333;

  @media (max-width: 768px) {
    font-size: 3rem;
    width: 100%;
  }
`;

const SelfDescription = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 400;
  color: #333333;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const ActionButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  // Hover animation
  &:hover {
    background-color: #0056b3;
    box-shadow: 0 4px 16px rgba(0, 0, 255, 0.5);
  }
`;

export default Header;
