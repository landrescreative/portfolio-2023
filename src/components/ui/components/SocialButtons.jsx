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
    color: #ffffff;
    font-size: 28px;
    transition: all 0.1s ease-in-out;
    decoration: none;
  }

  .overlay {
    position: relative;
    top: 0;
    width: 100%;
    background-color: hsla(0, 0%, 100%, 0.6);
    border-radius: 5px;
    padding: 2px;
    height: 100%;
    opacity: 0;
    transition: all 0.1s ease-in-out;

    span {
      color: #ffffff;
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
    color: #a3a3a3;
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
      <a className="icon" href="https://www.behance.net/landrescreative">
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
