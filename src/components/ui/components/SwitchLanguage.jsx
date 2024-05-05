import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d4d4d4;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  color: #000;
  font-size: 1.2rem;
  border-radius: 50px;

  button {
    border-radius: 50%;
    border: none;
    background-color: #d4d4d4;
    padding: 1rem 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 200;

    &:hover {
      font-weight: 600;
      background-color: #ffffff;
    }
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
