import React from "react";
import styled from "styled-components";
import Header from "../ui/sections/Header";
import Work from "../ui/sections/Work";
import About from "../ui/sections/About";
import Contact from "../ui/sections/Contact";
import Introduction from "../ui/sections/Introduction";
import { motion } from "framer-motion";
import Services from "../ui/components/Services";
import TechSlider from "../ui/components/TechSlider";

const Separator = styled.div`
  height: 1px;
  background: #ddd; /* Puedes cambiar el color según tu diseño */
  margin: 20px 0; /* Ajusta el margen según el espacio que quieras entre los componentes */
`;

const Container = styled(motion.div)`
  margin: 0;
  padding: 0;
`;

export default function MainPage() {
  return (
    <Container>
      <Header></Header>
      <Introduction></Introduction>
      <TechSlider></TechSlider>
      <Separator />
      <Services></Services>
      <Separator />
      <Work></Work>
      <Separator />
      <About />
      <Separator />
      <Contact />
    </Container>
  );
}
