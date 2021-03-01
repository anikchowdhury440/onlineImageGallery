import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss"

const Navbar = () => {
    return(
        <nav className="nav-wrapper header darken-3">
            <div>
                <ul className = "right">
                    <li><NavLink to = "/" className = "home options">Home</NavLink></li>
                    <li><NavLink to = "/upload" className = "options">Upload Image</NavLink></li>
                    <li><NavLink to = "/search" className = "options">Search Image</NavLink></li>
                </ul>
            </div>
        </nav>
        
    )
}

export default Navbar