import React from 'react';
import { Image } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

import "./Style/MainNavBar.scss";

export default function NavBar() {
    return(
        <div className="main-navbar-container">
            <Image src="./img/simple-house-01.jpg" />
            <div className="cover">
                <div className="logo">
                    <Image src="./img/simple-house-logo.png" />
                    <div className="logo-text">
                        <h1>Simple House</h1>
                        <h5>new restaurant template</h5>
                    </div>
                </div>
            </div>
            <div className="nav-link">
                <ul>
                    <li>
                        <NavLink exact className="link" to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact className="link" to="/about" activeClassName="active">About</NavLink>
                    </li>
                    <li>
                        <NavLink exact className="link" to="/contact" activeClassName="active">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}