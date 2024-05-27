import React from "react";
import styled from "styled-components";
import Header from "../ui/sections/Header";
import Work from "../ui/sections/Work";
import About from "../ui/sections/About";
import Contact from "../ui/sections/Contact";
import Introduction from "../ui/sections/Introduction";
import Separator from "../ui/components/Separator";
import SocialButtons from "../ui/components/SocialButtons";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  margin: 0;
  padding: 0;
`;

export default function MainPage() {
  return (
    <Container
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 2 }}
    >
      <Header></Header>
      <Introduction></Introduction>
      <Separator separador_texto="WORK" />
      <Work></Work>
      <Separator separador_texto="CONTACT" />
      <Contact />
    </Container>
  );
}
