import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  color: #000;
  font-size: 1.2rem;
  border-radius: 50px;

  button {
    border-radius: 50px;
    border: none;
    background-color: #ffff;
    padding: 1rem 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 200;

    &:hover {
      font-weight: 600;
      background-color: black;
      color: #ffff;
    }
  }
`;

export default function SwitchLanguage() {
  const { i18n } = useTranslation();

  const animateText = () => {
    // Select all the H1 in the entire document
    const h1 = document.querySelectorAll("h1");

    // Loop through all the H1 and change his background color
    h1.forEach((h) => {
      h.style.transition = "all 1s ease";
      h.style.opacity = "0";
    });

    setTimeout(() => {
      h1.forEach((h) => {
        h.style.opacity = "1";
      });
    }, 2000);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleEnglish = () => {
    animateText();
    setTimeout(() => {
      changeLanguage("en");
    }, 2000);
  };

  const handleSpanish = () => {
    animateText();
    setTimeout(() => {
      changeLanguage("es");
    }, 2000);
  };

  return (
    <Container>
      <button onClick={handleEnglish}>EN</button>
      <span> / </span>
      <button onClick={handleSpanish}>ES</button>
    </Container>
  );
}
