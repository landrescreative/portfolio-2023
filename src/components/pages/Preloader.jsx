import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Container = styled(motion.div)`
  margin: 0;
  padding: 0;
  background-color: #000000;
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000000;
  h1 {
    font-size: 2rem;
    color: #333;
    font-family: "Monsterrat", sans-serif;
    font-weight: 200;
    letter-spacing: 0.3rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export default function Preloader() {
  const location = useLocation();

  return (
    <Container
      initial={{ y: 0 }}
      animate={{ y: "-100vh" }}
      exit={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1 }}
      style={{
        display: location.pathname === "/socialmedia" ? "none" : "block",
      }}
    >
      <h1>LANDRESCREATIVE</h1>
    </Container>
  );
}
