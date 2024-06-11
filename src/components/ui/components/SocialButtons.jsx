import React from "react";
import styled from "styled-components";
import {
  FaInstagram,
  FaBehance,
  FaGithub,
  FaLinkedinIn,
  FaLinkedin,
} from "react-icons/fa6";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  a {
    margin: 0 5px;
    color: #1c1c1c;
    font-size: 28px;
    transition: all 0.1s ease-in-out;
    decoration: none;
  }

  .overlay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    top: 0;
    width: 100%;
    background-color: hsla(0, 0%, 0%, 1);
    border-radius: 5px;
    padding: 2px;
    height: 100%;
    opacity: 0;
    text-decoration: none;
    transition: all 0.1s ease-in-out;

    a {
      font-size: 34px;
      align-self: center;
      color: #000000;
      text-decoration: none;
      margin: 0 5px;
    }

    span {
      color: #f2f2f2;
      font-size: 14px;
      text-align: center;
      text-decoration: none;
    }
  }

  .icon {
    position: aboluste;
  }

  .icon:hover {
    transition: all 0.1s ease-in-out;
    color: #2d56ff;
  }

  .icon:hover .overlay {
    opacity: 1;
  }
`;

const SocialButtons = () => {
  return (
    <Container>
      <a className="icon" href="https://www.instagram.com/landrescreative/">
        <FaInstagram />
        <div className="overlay">
          <span>Instagram</span>
        </div>
      </a>
      <a className="icon" href="https://www.behance.net/luishernandez303">
        <FaBehance />
        <div className="overlay">
          <span>Behance</span>
        </div>
      </a>
      <a className="icon" href="https://github.com/landrescreative">
        <FaGithub />
        <div className="overlay">
          <span>Github</span>
        </div>
      </a>
      <a className="icon" href="https://www.linkedin.com/in/landrescreative/">
        <FaLinkedin />
        <div className="overlay">
          <span>Linkedin</span>
        </div>
      </a>
    </Container>
  );
};

export default SocialButtons;
