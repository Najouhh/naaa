import React from 'react';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </>
  );
}

export default Header;
