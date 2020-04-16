import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../index.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                InFinity <code><i>Rentals</i></code>
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/movies">
                        Movies
                    </NavLink>
                    <NavLink className="nav-item nav-link" to="/series">
                        TV Series
                    </NavLink>
                    <NavLink className="nav-item nav-link" to="/login">
                        Sign In
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
