import { Link, NavLink } from "react-router-dom";

import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="h-24 bg-teal-600 p-4 flex gap-8 justify-between items-center">
      <Link to="/">
        <img className="h-16" src={logo} alt="" />
      </Link>
      <div className="flex gap-8">
        <NavLink
          className={({ isActive }) =>
            `hover:text-white ${
              isActive
                ? "underline underline-offset-8 text-white"
                : " text-teal-800"
            }`
          }
          to="about">
          About
        </NavLink>
        {/* TODO: Verander dit in een custom NavLink component zoals MyButton */}
        <NavLink
          className={({ isActive }) =>
            `hover:text-white ${
              isActive
                ? "underline underline-offset-8 text-white"
                : " text-teal-800"
            }`
          }
          to="contact">
          Contact
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `hover:text-white ${
              isActive
                ? "underline underline-offset-8 text-white"
                : " text-teal-800"
            }`
          }
          to="favorites">
          Favorieten
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `hover:text-white ${
              isActive
                ? "underline underline-offset-8 text-white"
                : " text-teal-800"
            }`
          }
          to="users">
          Gebruikers
        </NavLink>
      </div>

      {/* <a href="/">Home</a>
      <a href="/about">About</a> */}
    </div>
  );
};

export default Header;
