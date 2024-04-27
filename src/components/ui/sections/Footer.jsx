import React from "react";
import styled from "styled-components";
import Contact from "./Contact";
import SocialButtons from "../components/SocialButtons";

export default function Footer() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
  `;

  return (
    <Container>
      <Contact />
      <SocialButtons />
    </Container>
  );
}
