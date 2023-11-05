import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-content: center;
  justify-content: center;

  div {
    grid-column: 1 / 2;
    grid-row: 2 / 4;
    text-align: center;
  }
`;

const Header = () => {
  return (
    <Container>
      <div>
        <h1>Hello, i'm Alex. 🤚</h1>
        <h1>Creative Developer.</h1>
      </div>
    </Container>
  );
};

export default Header;
