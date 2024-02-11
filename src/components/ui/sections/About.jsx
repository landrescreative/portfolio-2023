import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  margin: 0 0px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(7, 1fr);

  h1 {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    font-size: 22px;
    font-weight: 300;
    text-align: center;
    align-self: center;

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }

  span {
    grid-column: 3 / 12;
    grid-row: 1 / 2;
    border-bottom: 2px solid #ffffff;
    transform: translateY(-55%);
    text-align: center;
    align-self: center;
  }

  .about {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-column: 1 / 13;
    grid-row: 3 / 6;
    justify-items: center;
    align-content: center;
  }

  .about_img {
    margin: 0px;
    grid-column: 2 / 5;
    width: 100%;
    text-align: center;

    @media (max-width: 768px) {
      grid-column: 1 / 13;
      margin: 0px;
    }
  }

  .about_texts {
    display: flex;
    grid-column: 6 / 9;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      grid-column: 1 / 13;
    }
  }

  .about_texts_container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
      align-items: center;
    }

    h1 {
      align-self: flex-start;
      font-size: 18px;
      color: #5d5d5d;

      @media (max-width: 768px) {
        align-self: center;
      }
    }

    p {
      max-width: 80%;
    }
  }
`;

const About = () => {
  return (
    <Container>
      <h1>About</h1>
      <span></span>
      <div className="about">
        <div className="about_img">IMAGEN</div>
        <div className="about_texts">
          <div className="about_texts_container">
            <h1>ABOUT ME</h1>
            <p>
              UI/UX Designer and Developer based on México. Student of Design,
              Animation and Digital Art. I love to combine my knowledge of
              design and 3D Modeling with my coding experience to help people to
              show their products online. Love to create visual experiences and
              creative freatures.
            </p>
            <h1>CV</h1>
            <a>Resume</a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
