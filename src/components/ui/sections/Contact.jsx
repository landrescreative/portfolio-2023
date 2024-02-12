import React from "react";
import styled from "styled-components";
import { FaArrowRightLong, FaRegPaperPlane } from "react-icons/fa6";

const Container = styled.div`
  display: grid;
  margin: 0 0px;
  grid-template-columns: repeat(12, 1fr);

  h1 {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    font-size: 22px;
    font-weight: 300;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }

  span {
    grid-column: 3 / 12;
    grid-row: 1 / 2;
    border-bottom: 2px solid #ffffff;
    transform: translateY(-55%);
  }

  .contact_container {
    min-height: 98vh;
    display: grid;
    margin: 0;
    grid-column: 1 / 13;
    justify-items: center;
    align-content: flex-end;

    @media screen and (max-width: 768px) {
      margin: 0px 0px;
    }

    h1 {
      grid-column: 1 / 13;
      text-align: center;
      font-size: 50px;
      font-weight: 800;
    }

    .contact_cta {
      display: flex;
      background-color: hsla(0, 0%, 100%, 0.2);
      border-radius: 50px;
      padding: 5px 20px;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 20px 0px;
      grid-column: 1 / 13;
      gap: 10px;

      h1 {
        font-size: 20px;
        font-weight: 300;
        text-align: center;
      }
    }

    .contact_img {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: #000;
      font-size: 30px;
      grid-column: 1 / 13;
      background-color: #fff;
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
`;

const Contact = () => {
  return (
    <Container>
      <h1>Contact</h1>
      <span></span>
      <div className="contact_container">
        <h1>Let's talk about your project</h1>
        <div className="contact_img">
          <FaRegPaperPlane />
        </div>
        <div className="contact_cta">
          <h1>landres.creative@gmail.com</h1>
          <FaArrowRightLong />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
