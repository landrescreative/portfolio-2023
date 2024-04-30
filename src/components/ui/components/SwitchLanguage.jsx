import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  color: #000;
  font-size: 1.2rem;

  button {
    border: none;
    background-color: #fff;
    padding: 1rem 1.5rem;
  }
`;

export default function SwitchLanguage() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleEnglish = () => {
    changeLanguage("en");
  };

  const handleSpanish = () => {
    changeLanguage("es");
  };

  return (
    <Container>
      <button onClick={handleEnglish}>EN</button>
      <span> / </span>
      <button onClick={handleSpanish}>ES</button>
    </Container>
  );
}
