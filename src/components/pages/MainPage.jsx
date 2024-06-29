import React from "react";
import styled from "styled-components";
import Header from "../ui/sections/Header";
import Work from "../ui/sections/Work";
import About from "../ui/sections/About";
import Contact from "../ui/sections/Contact";
import Introduction from "../ui/sections/Introduction";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  margin: 0;
  padding: 0;
`;

export default function MainPage() {
  return (
    <Container>
      <Header></Header>
      <Introduction></Introduction>
      <Work></Work>
      {/* <Separator separador_texto="ABOUT ME" /> */}
      <About />
      <Contact />
    </Container>
  );
}
