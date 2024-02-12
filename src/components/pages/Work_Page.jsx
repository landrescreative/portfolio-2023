import React from "react";
import Navbar from "../ui/components/Navbar";
import Gallery from "../ui/components/Gallery";
import styled from "styled-components";
import Footer from "../ui/sections/Footer";

export default function Work_Page() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
      color: #9c9c9c;
      font-size: 1.5rem;
      font-weight: 100;
      margin: 1rem;
      text-align: center;
    }
  `;

  return (
    <Container>
      <h1>-UI/UX -</h1>
      <Gallery />
      <h1>-3D & Motion Graphics-</h1>
      <Gallery />
      <h1>-Branding-</h1>
      <Gallery />
      <Footer />
    </Container>
  );
}
