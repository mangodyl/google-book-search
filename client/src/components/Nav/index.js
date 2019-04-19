import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div>
                <a className="navbar-brand" href="/">
                    Google Book Search
                </a>
            </div>
            <div>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Search</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/saved">Saved</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
