import React from "react";
import "./Sidebar.css";
import logo1 from "../../images/logo-white.png";

// import Logo from "../../images/logo-white.svg";
const sidebar = () => {
  return (
    <nav>
      <div className="logo12">
        <img src={logo1} alt="" />
      </div>
      <div className="top">
        <h2>box</h2>
      </div>
      <div className="middle">
        <h3>home</h3>
        <h3>Deshboard</h3>
        <h3>Wallet</h3>
        <h3>News</h3>
        <h3>Stock & Fund</h3>
      </div>
      <div className="down">
        <h3>Our Community</h3>
        <h3>Setting</h3>
        <h3>contact</h3>
      </div>
    </nav>
  );
};

export default sidebar;
