import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="Navbar">
          <ul className="navitmes">
            <li>
              <NavLink
                to="/"
                // className={({ isActive }) =>
                //   `Navbar ${isActive ? "color: Yellow" : "background: #00ff26"}`
                // }
                className={"Navbar"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={"Navbar"}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={"Navbar"}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
