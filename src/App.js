import MainPage from "./components/pages/MainPage";
import Navbar from "./components/ui/components/Navbar";
import Work_Page from "./components/pages/Work_Page";
import { Routes, Route, ScrollRestoration } from "react-router-dom";
import AboutMePage from "./components/pages/AboutMePage";
import SwitchLanguage from "./components/ui/components/SwitchLanguage";
import Experience from "./components/ui/threejs/Experience";
import CaseStudy from "./components/pages/CaseStudy";
import ScrollTop from "./components/ui/components/ScrollTop";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Experience></Experience>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/work" element={<Work_Page />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/veravitalize" element={<CaseStudy></CaseStudy>} />
      </Routes>
      <ScrollTop></ScrollTop>
      <SwitchLanguage></SwitchLanguage>
    </div>
  );
}

export default App;
