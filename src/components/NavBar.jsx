import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as LightModeIcon } from "../assets/icons/light-mode-icon.svg";
import { ReactComponent as DarkModeIcon } from "../assets/icons/dark-mode-icon.svg";
import { ReactComponent as HomeIcon } from "../assets/icons/home-icon.svg";
import { ReactComponent as AboutIcon } from "../assets/icons/about-icon.svg";
import { ReactComponent as ResumeIcon } from "../assets/icons/resume-icon.svg";
import { ReactComponent as ConnectIcon } from "../assets/icons/connect-icon.svg";

const NavBar = ({ darkMode, handleDarkModeChange, currentPage, setPage }) => {
  const navigate = useNavigate();
  const route = useLocation();

  useEffect(() => {
    const url = route.pathname.slice(1);
    return setPage(url);
  }, []);

  const navTo = (url) => {
    console.log(url, darkMode);
    navigate(url);
    return setPage(url);
  };

  const darkModeHandler = () => {
    handleDarkModeChange(!darkMode);
    console.log(darkMode);
  };

  const btnClass = (btnTxt) => {
    const isCurrentPage = btnTxt === currentPage;
    if (isCurrentPage && !darkMode) return "nav-btn selected-btn";
    if (isCurrentPage && darkMode) return "nav-btn btn-drk selected-btn-drk";
    if (!isCurrentPage && !darkMode) return "nav-btn";
    if (!isCurrentPage && darkMode) return "nav-btn btn-drk";
  };

  const drkModeBtnClass = () => {
    if (darkMode) return "selected-btn";
  };

  return (
    <div className={darkMode ? "nav-bar nav-bar-drk" : "nav-bar"}>
      <div className="nav-btns">
        <div className={btnClass("home")} onClick={() => navTo("home")}>
          Home
        </div>
        <div className={btnClass("about")} onClick={() => navTo("about")}>
          About
        </div>
        <div className={btnClass("resume")} onClick={() => navTo("resume")}>
          Resume
        </div>
        <div className={btnClass("connect")} onClick={() => navTo("connect")}>
          Connect
        </div>
      </div>
      <div className="dark-mode-toggle">
        <div
          className={darkMode ? "light-mode-btn" : "drk-mode-btn"}
          onClick={() => darkModeHandler()}
        >
          {/* Dark Mode */}
          {darkMode ? (
            <div className="tooltip">
              <LightModeIcon className="drk-mode-icon" />
              <span className="tooltip-text">Click to enable light mode</span>
            </div>
          ) : (
            <div className="tooltip">
            <DarkModeIcon className="drk-mode-icon" />
            <span className="tooltip-text">Click to enable dark mode</span>
          </div>
          )}
        </div>
      </div>
      <div className="mobile-nav">
        <div className={btnClass("home")} onClick={() => navTo("home")}>
          <HomeIcon />
        </div>
        <div className={btnClass("about")} onClick={() => navTo("about")}>
          <AboutIcon />
        </div>
        <div className={btnClass("resume")} onClick={() => navTo("resume")}>
          <ResumeIcon />
        </div>
        <div className={btnClass("connect")} onClick={() => navTo("connect")}>
          <ConnectIcon />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
