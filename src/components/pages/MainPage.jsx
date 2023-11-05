import React from "react";
import styled from "styled-components";
import Header from "../ui/Header";

const Container = styled.div`
  margin: 0;
  padding: 0;
`;

export default function MainPage() {
  return (
    <Container>
      <Header></Header>
    </Container>
  );
}
