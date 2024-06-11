import MainPage from "./components/pages/MainPage";
import Navbar from "./components/ui/components/Navbar";
import Work_Page from "./components/pages/Work_Page";
import { Routes, Route, ScrollRestoration } from "react-router-dom";
import AboutMePage from "./components/pages/AboutMePage";
import SwitchLanguage from "./components/ui/components/SwitchLanguage";
import Experience from "./components/ui/threejs/Experience";
import CaseStudy from "./components/pages/CaseStudy";
import ScrollTop from "./components/ui/components/ScrollTop";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Preloader from "./components/pages/Preloader";
import SocialMedia from "./components/pages/SocialMedia";

function App() {
  const location = useLocation();

  return (
    <div>
      {/* <Preloader></Preloader> */}
      <Navbar></Navbar>

      <Routes location={location} key={location.key}>
        <Route path="/" element={<MainPage />} />
        <Route path="/work" element={<Work_Page />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/veravitalize" element={<CaseStudy></CaseStudy>} />
        <Route path="/socialmedia" element={<SocialMedia></SocialMedia>} />
      </Routes>
      <ScrollTop></ScrollTop>
      <SwitchLanguage></SwitchLanguage>
    </div>
  );
}

export default App;
