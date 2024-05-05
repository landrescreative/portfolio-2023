import React from "react";
import styled from "styled-components";
import Header from "../ui/sections/Header";
import Work from "../ui/sections/Work";
import About from "../ui/sections/About";
import Contact from "../ui/sections/Contact";
import Introduction from "../ui/sections/Introduction";
import Separator from "../ui/components/Separator";
import SocialButtons from "../ui/components/SocialButtons";

const Container = styled.div`
  margin: 0;
  padding: 0;
`;

export default function MainPage() {
  return (
    <Container>
      <Header></Header>
      <Introduction></Introduction>
      <Separator separador_texto="WORK" />
      <Work></Work>
      <Separator separador_texto="CONTACT" />
      <Contact />
      <SocialButtons />
    </Container>
  );
}
