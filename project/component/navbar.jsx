import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/cal">Caculator</a></li>
        <li><a href="https://github.com/Supakarn000/OOP-Project">Github</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
