import React from 'react'
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
    <ul>
    <li><NavLink to="/">home</NavLink></li>
  
    <li><NavLink to="/Contact/">Contact</NavLink></li>
    
    </ul>
    
    </>
  
  )
}

export default Header