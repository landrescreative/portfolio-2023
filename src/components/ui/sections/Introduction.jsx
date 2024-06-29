import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import Experience from "../threejs/Experience";
import mask from "../../assets/123.png";
import mask2 from "../../assets/1234.png";
import { MdTouchApp } from "react-icons/md";
import useIsMobile from "../components/useIsMobile";
import { PiCursorClickFill } from "react-icons/pi";

const Container = styled.div`
  display: grid;
  text-align: center;
  position: relative;

  .section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
  }

  .section:nth-child(1) {
    position: relative;
    color: #f2f2f2;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      background-color: #ffffff;
      color: #f2f2f2;
      -webkit-mask-image: url(${mask});
      mask-image: url(${mask});
      mask-clip: content-box;
      mask-size: 100% 100%;
      mask-repeat: no-repeat;
      // ADd Shadow

      @media screen and (max-width: 768px) {
        -webkit-mask-image: url(${mask2});
        mask-image: url(${mask2});
      }
    }
  }

  .section:nth-child(2) {
    background-color: hsla(0, 0%, 100%, 0.94);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    margin-bottom: 1rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1c1c1c;
    width: 100px;
    height: 100px;
    font-size: 3rem;
    color: #f2f2f2;
    padding: 1rem;
    cursor: pointer;
    border-radius: 50%;
    z-index: 2;
  }
`;

const Introduction = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  // First click changes the opacity of the text to 0

  const handleClick = () => {
    gsap.to(".buttontouch", {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  };

  return (
    <Container>
      <div className="section whocontainer">
        <a onClick={handleClick} className="buttontouch">
          {isMobile ? <MdTouchApp></MdTouchApp> : <PiCursorClickFill />}
        </a>
        <Experience></Experience>
      </div>
    </Container>
  );
};

export default Introduction;
