import React from "react";

import { ReactComponent as DownLoadIcon} from "../assets/icons/download-icon.svg"
import { ReactComponent as DownLoadIconDrk} from "../assets/icons/download-icon-drk.svg"

const Resume = ({ darkMode }) => {
  return (
    <div className="resume-hero">
      <div className="resume-txt">
        <h1 className="resume-title">Resume</h1>
        <h4 className="resume-subtitle">Angelo Xenakis // angeloxenakis@gmail.com // 346-262-5807</h4>
        <div className="resume-content">
          <div className="resume-left">
            <h2>Experience</h2>
            <div className="experience-segment">
              <h4 className="experience-title">Web Developer // EOG Resources // 04/2022 - 07/2023</h4>
              <li className="experience-point">Development and maintenance of in-house ticketing systems, request access systems, and various other internal tools for teams across the company.</li>
              <li className="experience-point">Products built with C#/.NET backend, SQL database and Vue frontend with some projects in React.</li>
            </div>
            <div className="experience-segment">
              <h4 className="experience-title">Software Engineering Apprenticeship // JP Morgan Chase // 10/2021 - 04/2022</h4>
              <li className="experience-point">Development of API infrastructure supporting automated processes for auto-payments and collections. </li>
              <li className="experience-point">Big data collection, manipulation, organization, and storage through a series of Java microservices. </li>
              <li className="experience-point">DevOps maintenance of CI/CD pipeline built on Jenkins. Migration of applications from on premise platform to AWS.</li>
            </div>
            <div className="experience-segment">
              <h4 className="experience-title">Lead Instructor - Software Engineering  // Flatiron School // 07/2020 - 10/2021</h4>
              <li className="experience-point">Facilitation of full stack React, Redux, & Rails course curriculum. Responsible for daily lectures, group coding activities, publishing assignments, and proctoring student testing. Assisted students in troubleshooting individual issues as well as understanding larger programming concepts.</li>
            </div>
            <div className="experience-segment">
              <h4 className="experience-title">Product Designer & Scrum Master // Goco.io // 04/2019 - 04/2020</h4>
              <li className="experience-point">Spec creation with a heavy emphasis on design, laying out functionality and user experience for features on the product roadmap.</li>
              <li className="experience-point">Facilitation of the scrum process, tracking feature progress to completion and keeping lines of communication open between internal teams and external investors.</li>
            </div>
            <div className="experience-segment">
              <h4 className="experience-title">Jr Product Manager // Xola // 10/2016 - 04/2019</h4>
              <li className="experience-point">Feature research, documentation, lofi design, and spec creation with rooming and management of product backlog and user feedback.</li>
              <li className="experience-point">Working with all relevant stakeholders to ensure features solve real problems and meet the needs of users.</li>
              <li className="experience-point">Lead and facilitate scrum rituals.</li>
            </div>
          </div>
          <div className="resume-right">
						<h2>Education & Certifications</h2>
            <li className="experience-point"><strong>Flatiron School</strong> - Fifteen Week Immersive Bootcamp: Full stack React, Redux, & Ruby on Rails</li>
            <li className="experience-point"><strong>Austin Coding Academy</strong> - Eight Week Bootcamp: Intro to Frontend with CSS/HTML/JS</li>
            <li className="experience-point"><strong>PSM I</strong> - Professional Scrum Master certification from www.scrum.org</li>
						<h2>Skills</h2>
            <li className="experience-point"><strong>Product & Project Management:</strong> Agile and Scrum implementation, backlog management, design/spec creation, product refinement, data analysis, training & coaching.</li>
            <li className="experience-point"><strong>Technical:</strong> Java, Spark, C#/.NET, Ruby on Rails, SQL, JavaScript, React, Vue</li>
            <button className={darkMode ? "download-btn-drk" : "download-btn"}>
              { darkMode ? <DownLoadIconDrk className="download-icon" /> : <DownLoadIcon className="download-icon" />} Click to download resume (pdf)
            </button>
					</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
