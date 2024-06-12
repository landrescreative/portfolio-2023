import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import {
  FaInstagram,
  FaBehance,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import profilepicture from "../assets/Paper-Profile-Pic.jpg";
import backgroundImg from "../assets/LightBlue-Blue-Pink.png";

const SocialMedia = () => {
  function copyToClipboard() {
    var cta = document.getElementsByClassName("emailbutton")[0];
    cta.innerHTML = "Copiado!";
    cta.style.color = "#1c1c1c";
    cta.style.backgroundColor = "#ffffff";

    setTimeout(() => {
      cta.innerHTML = "Email";
      cta.style.color = "#ffffff";
      cta.style.backgroundColor = "#5e17eb";
    }, 3000);

    navigator.clipboard.writeText("landres.creative@gmail.com");
  }

  return (
    <Container>
      <div className="social-user-info">
        <img className="social-img" src={profilepicture}></img>
        <h1 className="social-user">@landrescreative</h1>
        <h1 className="social-about">
          Luis Andrés | Diseñador y Desarrollador Web
        </h1>
        <h1 className="social-location">
          {" "}
          <FaLocationDot> </FaLocationDot> Mexico
        </h1>
        <div className="social-contact-buttons">
          <a
            href="https://wa.me/525510492408"
            className="social-contact-button"
          >
            <FaWhatsapp></FaWhatsapp>WhatsApp
          </a>
          <a
            onClick={copyToClipboard}
            className="social-contact-button emailbutton"
          >
            <MdEmail></MdEmail> Email
          </a>
        </div>
      </div>
      <div className="social-buttons">
        <button className="social-button">
          <div className="social-button-icons portfolio">
            <FaUser className="icon"></FaUser>
          </div>
          <div className="social-button-span">
            <a href="https://landrescreative.tech">Portafolio Web</a>
          </div>
        </button>
        <button className="social-button">
          <div className="social-button-icons instagram">
            <FaInstagram className="icon"></FaInstagram>{" "}
          </div>
          <div className="social-button-span">
            <a href="https://www.instagram.com/landrescreative/">Instagram</a>
          </div>
        </button>
        <button className="social-button">
          <div className="social-button-icons behance">
            <FaBehance className="icon"></FaBehance>{" "}
          </div>
          <div className="social-button-span">
            <a href="https://www.behance.net/luishernandez303">Behance</a>
          </div>
        </button>
        <button className="social-button">
          <div className="social-button-icons linkedin">
            <FaLinkedin className="icon"></FaLinkedin>{" "}
          </div>
          <div className="social-button-span">
            <a href="https://www.linkedin.com/in/landrescreative/">Linkedin</a>
          </div>
        </button>
        <button className="social-button">
          <div className="social-button-icons twitter">
            <FaTwitter className="icon"></FaTwitter>{" "}
          </div>
          <div className="social-button-span">
            <a href="https://x.com/landrescreative">Twitter</a>
          </div>
        </button>
        <button className="social-button">
          <div className="social-button-icons youtube">
            <FaYoutube className="icon"></FaYoutube>{" "}
          </div>
          <div className="social-button-span">
            <a href="https://www.youtube.com/@landrescreative">YouTube</a>
          </div>
        </button>
      </div>
      <div className="social-embed">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/yHKBqA1yWz0?si=FUZSl-7CATVEPKpS"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div class="blob"></div>
    </Container>
  );
};

const animate = keyframes`
  0% {
    translate: 40% -25%;
    border-radius: 60% 40% 30% 70% / 100% 85% 92% 74%;
  }
  50% {
    translate: 0% 100%;
    border-radius: 20% 71% 47% 70% / 81% 15% 22% 54%;
    rotate: 41deg;
    scale: 1.15;
  }
  100% {
    translate: -45% 39%;
    border-radius: 100% 75% 92% 74% / 60% 80% 30% 70%;
    rotate: -60deg;
    scale: 1.05;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100vw;
  padding: 20px 0;
  text-align: center;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  position: relative;

  @media (min-width: 1024px) {
    height: 100vh;
  }

  .blob {
    position: absolute;
    opacity: 0.2;
    width: 400px;
    aspect-ratio: 1/1;
    animation: ${animate} 10s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite
      alternate forwards;
    filter: blur(60px);
    z-index: 1;
    background: linear-gradient(
      47deg,
      rgba(45, 86, 255, 1) 40%,
      rgba(255, 0, 110, 1) 55%,
      rgba(255, 0, 110, 1) 100%
    );
  }

  .social-user-info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 2;
  }

  .social-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  .social-user {
    font-size: 20px;
    font-weight: 400;
    font-family: "Garet";
    color: #1c1c1c;
  }

  .social-about {
    font-size: 18px;
    font-weight: 600;
    font-family: "Garet";
    color: #2d56ff;
    padding: 0 30px;
    text-transform: uppercase;
  }

  .social-location {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 400;
    font-family: "Garet";
    color: #1c1c1c;

    svg {
      font-size: 23px;
      color: #2d56ff;
      margin-right: 5px;
    }
  }

  // SOCIAL CONTACT

  .social-contact-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  .social-contact-button {
    margin: 10px;
    padding: 10px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #2d56ff;
    color: #f2f2f2;
    text-decoration: none;
    font-weight: 600;
    font-family: "Garet";
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    outline: none;
    transition: all 0.2s;

    svg {
      margin-right: 5px;
      font-size: 18px;
    }
  }

  //////////////////////////

  // LINK BUTTONS
  .social-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    z-index: 2;
  }

  .social-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    margin: 10px 0;
    border-radius: 12px;
    background-color: #ffffff;
    border: none;
    cursor: pointer;
    box-shadow: 0 0px 10px rgba(50, 0, 100, 0.2);

    .social-button-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25%;
      height: 100%;
      transform: scale(1.2);
      transition: 0.5s;
      border-radius: 5px;

      &:hover {
        background-color: #1c1c1c;
        color: #fff;
      }
    }

    .social-button-icons.portfolio {
      background-color: #1c1c1c;
    }

    .social-button-icons.instagram {
      background: -moz-linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
      );
      background: -webkit-linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
      );
      background: linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    }

    .social-button-icons.behance {
      background-color: #1769ff;
    }

    .social-button-icons.linkedin {
      background-color: #0077b5;
    }

    .social-button-icons.twitter {
      background-color: #00acee;
    }

    .social-button-icons.youtube {
      background-color: #ff0000;
    }

    .icon {
      color: #fff;
      font-size: 2rem;
    }
  }

  .social-button-span {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
      outline: none;

      font-size: 20px;
      letter-spacing: 1px;
      font-weight: 400;
      font-family: "Garet";
      color: #1c1c1c;
    }
  }

  .social-embed {
    width: 100%;
    height: 100%;
    padding: 22px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default SocialMedia;
