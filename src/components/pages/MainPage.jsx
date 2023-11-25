import React from "react";
import styled from "styled-components";
import Header from "../ui/sections/Header";
import Work from "../ui/sections/Work";
import About from "../ui/sections/About";
import Contact from "../ui/sections/Contact";

const Container = styled.div`
  margin: 0;
  padding: 0;
`;

export default function MainPage() {
  return (
    <Container>
      <Header></Header>
      <Work></Work>
      <About></About>
      <Contact />
    </Container>
  );
}
