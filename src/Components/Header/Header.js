import React from 'react';
import "./Header.css"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <nav className="headerNav">
                    <NavLink to="/" className="catsNavLink">Все котики</NavLink>
                    <NavLink to="/favorites" className="catsNavLink">Любимые котики</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;