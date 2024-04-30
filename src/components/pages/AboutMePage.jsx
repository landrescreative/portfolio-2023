import React from "react";
import styled from "styled-components";
import About from "../ui/sections/About";
import Contact from "../ui/sections/Contact";
import SocialButtons from "../ui/components/SocialButtons";

export default function AboutMePage() {
  return (
    <div>
      <About />
      <Contact></Contact>
      <SocialButtons></SocialButtons>
    </div>
  );
}
