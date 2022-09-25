import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";

function isNavLinkActive(isActive) {
  isActive = isActive.isActive;
  return {
    color: isActive ? "#0fa3b1" : "#fffffc",
    borderColor: isActive ? "#0fa3b1" : "#0c0c0c",
  };
}
function Header() {
  return (
    <header>
      <div className="nav-header">
        <NavLink end to="/" style={isNavLinkActive}>
          Home
        </NavLink>
        <NavLink to="/resume" style={isNavLinkActive}>
          Resume
        </NavLink>
        <NavLink to="/blog" style={isNavLinkActive}>
          Blog
        </NavLink>
        <NavLink to="/projects" style={isNavLinkActive}>
          Projects
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
