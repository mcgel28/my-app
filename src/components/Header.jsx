import React from "react";
import logo from "../images/logo.png"
import me from "../images/me.jpg"
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import '../App.css'
import TypingEffect from "../redux/TypingEffect";



function Header() {

    return (
            <div id="header-section">
                <div id="navigation-section">
                    <div className="container">
                        <nav className="navigation">
                            <img className="logo" src={logo} alt="logo.png"/>
                                <ul className="menu">
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#portfolio">Portfolio</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <div className="hero">
                        <div className="hero-text">
                            <p>Hi, I'm Adrian</p>
                            <h1>Front-End<br /><TypingEffect /></h1>
                                <div className="soocial-icons">
                                    <div className="icon-container">
                                    <a className="icon" href="https://www.facebook.com/xyion.gel" alt="facebook"><FaFacebook /></a>
                                    <a className="icon "href="https://www.linkedin.com/in/adrianmiguelarellano/" alt="linkedin"><IoLogoLinkedin /></a>
                                    <a className="icon" href="https://github.com/mcgel28" alt="github"><IoLogoGithub /></a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img className="me" src={me} alt="img of Adrian"/>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Header;