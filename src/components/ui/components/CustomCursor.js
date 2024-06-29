import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { keyframes } from "styled-components";

// Make animation that makes the element rotate and repeat
// the animation infinitely

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Cursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 40px; /* Tamaño normal */
  height: 40px; /* Tamaño normal */
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.3s ease, width 0.1s ease, height 0.1s ease;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }

  &.link-hover {
    width: 100px; /* Tamaño más grande */
    height: 100px; /* Tamaño más grande */

    svg {
      font-size: 40px; /* Tamaño más grande */
      color: #f2f2f2;
      animation: ${rotate} 1s linear infinite;
    }
  }
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveringLink, setHoveringLink] = useState(false);

  const updatePosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const addLinkHover = () => setHoveringLink(true);
  const removeLinkHover = () => setHoveringLink(false);

  useEffect(() => {
    window.addEventListener("mousemove", updatePosition);
    const links = document.querySelectorAll("a");
    const buttons = document.querySelectorAll("button");

    links.forEach((link) => {
      link.addEventListener("mouseenter", addLinkHover);
      link.addEventListener("mouseleave", removeLinkHover);
    });

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", addLinkHover);
        link.removeEventListener("mouseleave", removeLinkHover);
      });
    };
  }, []);

  return (
    <Cursor
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
      className={hoveringLink ? "link-hover" : ""}
    >
      <FaStar style={{ color: "#f2f2f2" }} />
    </Cursor>
  );
};

export default CustomCursor;
