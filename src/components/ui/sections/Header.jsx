import React from "react";
import styled from "styled-components";
import img1 from "../../assets/Paper-Profile-Pic.webp";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <HeaderText>
        <RoleText>{t("who")}</RoleText>
        <Description>{t("welcome")}</Description>
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
  padding: 1rem 0;
  text-align: center;
  background-color: #ffffff;
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
  font-size: 2.5rem;
  font-weight: 900;
  margin: 0;
  color: ${(props) => props.theme.colors.primary};
`;

const Description = styled.p`
  width: 90%;
  margin: 1rem 0;
  font-size: 3rem;
  color: #333333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export default Header;
