import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import Work_Page from "../../pages/Work_Page";
import AboutMePage from "../../pages/AboutMePage";
import CaseStudy from "../../pages/CaseStudy";

function RoutesWithAnimation() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<MainPage />} />
      <Route path="/work" element={<Work_Page />} />
      <Route path="/about" element={<AboutMePage />} />
      <Route path="/veravitalize" element={<CaseStudy></CaseStudy>} />
    </Routes>
  );
}

export default RoutesWithAnimation;
