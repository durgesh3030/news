import React from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <Navbar />
      </div>
      <div className="right">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
