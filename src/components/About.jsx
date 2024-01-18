import React from "react";
import aboutImg1 from "../assets/angelo-guitar.png"
import aboutImg2 from "../assets/angelo-skating.png"
import aboutImg3 from "../assets/angelo-kickboxing.png"



const About = () => {
  return (
      <div className="about-hero">
        <div className="about-imgs">
          <img
            className="about-img"
            src={aboutImg1}
          />
          <img
            className="about-img"
            src={aboutImg2}
          />
          <img
            className="about-img"
            src={aboutImg3}
          />
        </div>
        <div className="about-txt">
          <h1>About</h1>
          <p>
            Hello, I'm Angelo. I'm a young professional and family man from Houston, Texas with a breadth of experience in building software. I've spent time as a scrum master, product manager, and engineer to gain a full understanding of each aspect and role in the development cycle. I'm passionate about building software and creating things that I personally like to spend time with.
          </p>
          {/* <p>P.S. If you find the secret link on this site you can view its style guide. ;)</p> */}
        </div>
      </div>
  );
};

export default About;
