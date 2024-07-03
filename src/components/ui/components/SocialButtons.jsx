import React from "react";
import styled from "styled-components";
import {
  FaInstagram,
  FaBehance,
  FaGithub,
  FaLinkedinIn,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;

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
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 5px;
    padding: 2px;
    height: 100%;
    opacity: 0;
    text-decoration: none;
    transition: all 0.1s ease-in-out;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 34px;
      align-self: center;
      color: #000000;
      text-decoration: none;
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
      <a className="icon" href="https://wa.me/525510492408">
        <FaWhatsapp />
      </a>
      <a className="icon" href="https://www.instagram.com/landrescreative/">
        <FaInstagram />
      </a>
      <a className="icon" href="https://www.behance.net/luishernandez303">
        <FaBehance />
      </a>
      <a className="icon" href="https://github.com/landrescreative">
        <FaGithub />
      </a>
      <a className="icon" href="https://www.linkedin.com/in/landrescreative/">
        <FaLinkedin />
      </a>
    </Container>
  );
};

export default SocialButtons;
