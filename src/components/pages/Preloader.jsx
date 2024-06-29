import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const elementsToLoad = document.querySelectorAll("img, video");
    const totalElements = elementsToLoad.length;
    let loadedElements = 0;

    const handleLoad = () => {
      loadedElements++;
      if (loadedElements === totalElements) {
        setLoading(false);
      }
    };

    elementsToLoad.forEach((element) => {
      if (element.tagName === "IMG" && element.complete) {
        handleLoad();
      } else if (element.tagName === "VIDEO") {
        element.addEventListener("loadeddata", handleLoad);
      } else {
        element.addEventListener("load", handleLoad);
      }
    });

    return () => {
      elementsToLoad.forEach((element) => {
        if (element.tagName === "VIDEO") {
          element.removeEventListener("loadeddata", handleLoad);
        } else {
          element.removeEventListener("load", handleLoad);
        }
      });
    };
  }, []);

  return (
    <PreloaderContainer loading={loading}>
      <DarkBackground />
      <Spinner />
      <AnimatedText>LANDRESCREATIVE</AnimatedText>
    </PreloaderContainer>
  );
};

// Styled Components
const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
  pointer-events: ${(props) => (props.loading ? "auto" : "none")};
  opacity: ${(props) => (props.loading ? "1" : "0")};
  transition: opacity 0.5s ease;
`;

const DarkBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
`;

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 16px solid rgba(255, 255, 255, 0.3);
  border-top: 16px solid #fff;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${css`
      ${spinAnimation}`} 2s linear infinite;
`;

const textGradient = keyframes`
  0% {
    background-position: 200% 50%;
  }
  100% {
    background-position: -200% 50%;
  }
`;

const AnimatedText = styled.h2`
  margin-top: 20px;
  font-size: 24px;
  color: transparent;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.7;
  pointer-events: none;
  background: linear-gradient(90deg, #fff, #000);
  background-size: 400% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${css`
      ${textGradient}`} 2s ease-in-out infinite;
`;

export default Preloader;
