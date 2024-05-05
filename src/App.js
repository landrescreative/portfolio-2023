import MainPage from "./components/pages/MainPage";
import Navbar from "./components/ui/components/Navbar";
import Work_Page from "./components/pages/Work_Page";
import { Routes, Route } from "react-router-dom";
import AboutMePage from "./components/pages/AboutMePage";
import SwitchLanguage from "./components/ui/components/SwitchLanguage";
import Experience from "./components/ui/threejs/Experience";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Experience></Experience>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/work" element={<Work_Page />} />
        <Route path="/about" element={<AboutMePage />} />
      </Routes>
      <SwitchLanguage></SwitchLanguage>
    </div>
  );
}

export default App;
