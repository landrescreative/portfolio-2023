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
import profilepicture from "../assets/Paper-Profile-Pic.webp";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  return (
    <Container>
      <div className="social-user-info">
        <img className="social-img" src={profilepicture}></img>
        <h1 className="social-user">@landrescreative</h1>
        <h1 className="social-about">{t("socialTitle")}</h1>
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
            <a href="https://landrescreative.com">Portafolio Web</a>
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
          className="social-embed-iframe"
          src="https://www.youtube.com/embed/yHKBqA1yWz0?si=FUZSl-7CATVEPKpS"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </Container>
  );
};

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
  cursor: default;

  @media (min-width: 1024px) {
    height: 100vh;
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
    font-weight: 300;
    color: #1c1c1c;
  }

  .social-about {
    font-size: 18px;
    font-weight: 800;
    color: ${(props) => props.theme.colors.primary};
    padding: 0 30px;
    text-transform: uppercase;
  }

  .social-location {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 300;
    color: #1c1c1c;

    svg {
      font-size: 23px;
      color: ${(props) => props.theme.colors.primary};
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
    background-color: ${(props) => props.theme.colors.primary};
    color: #f2f2f2;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.2);
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
    box-shadow: 0 0px 24px rgba(0, 0, 0, 0.1);

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

    .social-embed-iframe {
      width: 90%;
      aspect-ratio: 16/9;
    }
  }
`;

export default SocialMedia;
