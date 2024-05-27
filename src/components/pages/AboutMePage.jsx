import React from "react";
import styled from "styled-components";
import About from "../ui/sections/About";
import Contact from "../ui/sections/Contact";
import SocialButtons from "../ui/components/SocialButtons";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export default function AboutMePage() {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <About />

      <div>
        <Contact></Contact>
      </div>
    </Container>
  );
}
