import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="flex-container">
        <div>Home</div>
        <Link to="/about">
          <div>About</div>
        </Link>
        <div>Contact</div>
      </div>
    </div>
  );
};
export default Footer;
