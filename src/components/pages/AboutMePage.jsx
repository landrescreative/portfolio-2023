import React from "react";
import styled from "styled-components";
import About from "../ui/sections/About";
import Contact from "../ui/sections/Contact";
import SocialButtons from "../ui/components/SocialButtons";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export default function AboutMePage() {
  return (
    <Container>
      <About />

      <div>
        <Contact></Contact>
        <SocialButtons></SocialButtons>
      </div>
    </Container>
  );
}
