import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Connect from "./components/Connect";
import StyleGuide from "./components/StyleGuide";
import Footer from "./components/Footer";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import "./App.css";

function App() {
  const [currentPage, setPage] = useState("home");
  const [darkMode, toggleDarkMode] = useState(true);

  const handleDarkModeChange = (value) => {
    localStorage.setItem("darkMode", value);
    toggleDarkMode(value);
  };

  useEffect(() => {
    if (localStorage.darkMode === "true" || !!localStorage.darkMode) {
      toggleDarkMode(true);
    }
    if (localStorage.darkMode === "false") {
      toggleDarkMode(false);
    }
  }, []);

  return (
    <div className={darkMode ? "App App-drk" : "App"}>
        <BrowserRouter>
        <div className={darkMode ? "main-container-drk" : "main-container"}>
          <NavBar
            darkMode={darkMode}
            handleDarkModeChange={handleDarkModeChange}
            currentPage={currentPage}
            setPage={setPage}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="resume" element={<Resume darkMode={darkMode} />} />
            <Route path="connect" element={<Connect darkMode={darkMode} />} />
            <Route path="style-guide" element={<StyleGuide />} />
          </Routes>
          <Footer
            darkMode={darkMode}
            handleDarkModeChange={handleDarkModeChange}
          />
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
