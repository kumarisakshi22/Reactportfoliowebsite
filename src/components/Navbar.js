import "./NavbarStyle.css";
import React from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);

        } else {
            setColor(false);

        }
    };
    window.addEventListener("scroll", changeColor);


    return (


        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <a to="/">Home</a>
                </li>

                <li>
                    <a to="/project">Project</a></li>
                <li>
                    <a to="/about">About</a></li>
                <li>
                    <a to="/contact">Contact</a></li>
                <li>
                    <a to="/certi">Certificates</a></li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#fff" }} />)}



            </div>
        </div>


    )
}

export default Navbar
