import React from "react";
import Router from "../providers/Router";
import "../styles/Navbar.css";
import bowser1 from "../styles/images/bowser1.png";

function Navbar() {
    return <div>
        <div className="navbar">
            <div className="navbar-section">
                <img src={bowser1} alt="Left" className="navbar-img" />
            </div>
            <div className="navbar-center">
                <span className="navbar-text">Web Bowser Minigames</span>
            </div>
            <div className="navbar-center-right">
                <div className="dropdown">
                    <button className="dropbtn">Games ᵥ</button>
                    <div className="dropdown-content">
                        <a href="#">Game 1</a>
                        <a href="#">Game 2</a>
                        <a href="#">Game 3</a>
                    </div>
                </div>
                &nbsp; &nbsp;
                <div className="dropdown">
                    <button className="dropbtn">Contacts ᵥ</button>
                    <div className="dropdown-content">
                        <a href="#">Contact 1</a>
                        <a href="#">Contact 2</a>
                    </div>
                </div>
            </div>
            <div className="navbar-section">
                <img src={bowser1} alt="Right" className="navbar-img" id="upside-down-image-navbar" />
            </div>
        </div>
    </div>
};

export default Navbar;