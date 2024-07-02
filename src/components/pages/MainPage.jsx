import React from "react";
import styled from "styled-components";
import Header from "../ui/sections/Header";
import Work from "../ui/sections/Work";
import About from "../ui/sections/About";
import Contact from "../ui/sections/Contact";
import Introduction from "../ui/sections/Introduction";
import { motion } from "framer-motion";
import Services from "../ui/components/Services";

const Container = styled(motion.div)`
  margin: 0;
  padding: 0;
`;

export default function MainPage() {
  return (
    <Container>
      <Header></Header>
      <Introduction></Introduction>
      <Services></Services>
      <Work></Work>
      <About />
      <Contact />
    </Container>
  );
}
