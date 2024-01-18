import React from "react";
import homeImg from "../assets/angelo-prayer.png"

const Home = () => {
  return (
    <div className="home-hero">
      <div className="">
        <img
          className="home-hero-img"
          src={homeImg}
        />
      </div>
      <div className="home-txt">
        <h1>Angelo Xenakis</h1>
        <p>Product Manager</p>
        <p>Scrum Master</p>
        <p>Software Engineer</p>
        <p>Bootcamp Instructor</p>
      </div>
    </div>
  );
};

export default Home;
