import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="h-24 bg-teal-600 p-4 flex gap-8 justify-between items-center">
      <Link to="/">
        <img className="h-16" src={logo} alt="" />
      </Link>
      <div className="flex gap-8">
        <Link to="about">About</Link>
      </div>

      {/* <a href="/">Home</a>
      <a href="/about">About</a> */}
    </div>
  );
};

export default Header;
