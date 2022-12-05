import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <div className="n-left">
        <h1>logo</h1>
      </div> */}
      <div className="n-right">
        <h3 to="/">Searchbar</h3>
        <h3 to="/Create">notification</h3>
        <h3 to="/About">profile</h3>
      </div>
    </div>
  );
};

export default Navbar;
