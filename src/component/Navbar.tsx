import React from "react";
import Router from "../providers/Router";
import "../styles/Navbar.css";
import bowser1 from "../styles/images/bowser1.png";

function Navbar() {
    return <div className="navbar">
        <div>
            <img src={bowser1} />
        </div>
        <div className="navbar-middle">
            <div>
                <h2>Web Bowser Minigames</h2>
            </div>
            <div className="navbar-inside">
                <h3>Games</h3>
                &nbsp;
                <h3>Contact</h3>
            </div>
        </div>
        <div>
            <img src={bowser1} />
        </div>
    </div>
};

export default Navbar;