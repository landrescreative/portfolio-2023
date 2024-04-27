import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 98vw;
  height: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    margin: 0px 0px;
  }

  h1 {
    margin: 0px 10px;
    grid-column: 1 / 2;
    font-size: 22px;
    font-weight: 300;
    text-align: center;
    color: #ffffff;

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }

  span {
    width: 90%;
    text-align: center;
    border-bottom: 2px solid #ffffff;
  }
`;

const Separator = ({ separador_texto }) => {
  return (
    <Container>
      <h1>{separador_texto}</h1>
      <span></span>
    </Container>
  );
};

export default Separator;
