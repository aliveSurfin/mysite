import React from 'react'
import {
    BrowserRouter as Router,

    Link
  } from "react-router-dom";
function Header() {
    return (
        <header>header
            <Link to="/a">A</Link>
            <Link to="/b">B</Link>
            <Link to="/c">C</Link>
            <Link to="/d">D</Link>

        </header>
    )
}

export default Header
