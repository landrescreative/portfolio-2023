import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  margin: 0 0px;
  grid-template-columns: repeat(12, 1fr);

  h1 {
    grid-column: 1 / 3;
    font-size: 22px;
    font-weight: 300;
    text-align: center;
  }

  span {
    grid-column: 3 / 12;
    transform: translateY(-50%);
    border-bottom: 2px solid #ffffff;
  }

  .gallery {
    grid-column: 1 / 13;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(calc(30%), 1fr));
    grid-gap: 10px;
    margin: 15px 10px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(auto-fit, minmax(calc(80%), 1fr));
      margin: 15px 0;
    }

    .thumbnails {
      aspect-ratio: 1/1;
      background-color: #f2f2f2;
      position: relative;

      .overlay {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: hsla(0, 0%, 0%, 0.4);
        transition: opacity 0.2s ease;
        color: #ffffff;
        opacity: 0;
        backdrop-filter: blur(5px);

        a {
          text-decoration: underline;
        }
      }

      &:hover .overlay {
        opacity: 1;
      }
    }
  }
`;

const Work = () => {
  return (
    <Container>
      <h1>Work</h1>
      <span></span>
      <div className="gallery">
        <div className="thumbnails">
          <div className="overlay">
            <h1>Project Name</h1>
            <p>Project Description</p>
            <a>View Project</a>
          </div>
          <img></img>
        </div>
        <div className="thumbnails">
          <div className="overlay">
            <h1>Project Name</h1>
            <p>Project Description</p>
            <a>View Project</a>
          </div>
          <img></img>
        </div>
        <div className="thumbnails">
          <div className="overlay">
            <h1>Project Name</h1>
            <p>Project Description</p>
            <a>View Project</a>
          </div>
          <img></img>
        </div>
        <div className="thumbnails">
          <div className="overlay">
            <h1>Project Name</h1>
            <p>Project Description</p>
            <a>View Project</a>
          </div>
          <img></img>
        </div>
        <div className="thumbnails">
          <div className="overlay">
            <h1>Project Name</h1>
            <p>Project Description</p>
            <a>View Project</a>
          </div>
          <img></img>
        </div>
        <div className="thumbnails">
          <div className="overlay">
            <h1>Project Name</h1>
            <p>Project Description</p>
            <a>View Project</a>
          </div>
          <img></img>
        </div>
      </div>
    </Container>
  );
};

export default Work;
