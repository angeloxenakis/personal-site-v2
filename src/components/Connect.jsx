import React from "react";
import connectImg from "../assets/angelo-and-sons.png"

const Connect = ({ darkMode }) => {
  return (
    <div className="connect-hero">
      <div className="connect-txt">
        <h1>Connect</h1>
        <p><a className={darkMode ? "link-drk" : "link"} href="https://www.linkedin.com/in/angeloxenakis/" target="_blank">Linked In</a></p>
        <p><a className={darkMode ? "link-drk" : "link"} href="https://github.com/angeloxenakis/" target="_blank">Git Hub</a></p>
        <p><a className={darkMode ? "link-drk" : "link"} href="https://medium.com/@angeloxenakis" target="_blank">Medium</a></p>
        <p><a className={darkMode ? "link-drk" : "link"} href="https://instagram.com/angeloxenakis" target="_blank">Instagram</a></p>
      </div>
      <div className="">
      <img 
        className="connect-hero-img"
        src={connectImg}
      />
      </div>
    </div>
  );
};

export default Connect;
