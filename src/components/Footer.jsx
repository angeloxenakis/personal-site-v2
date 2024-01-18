import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <div className="footer">
      <div className="footer-txt"><a className={darkMode ? "hidden-link-drk" : "hidden-link"} href="/style-guide">Built</a> in React.js by me, Angelo Xenakis</div>
    </div>
  );
};

export default Footer;
