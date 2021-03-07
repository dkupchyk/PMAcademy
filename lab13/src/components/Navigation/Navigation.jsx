import React from 'react';
import {NavLink} from 'react-router-dom';

import './Navigation.css';

function Navigation() {
    return (
        <ul className="navigation">
            <NavLink to="/weather" activeClassName="nav-link-selected" className="nav-link">Weather</NavLink>

            <NavLink to="/retro" activeClassName="nav-link-selected" className="nav-link">Retrospective</NavLink>

            <NavLink to="/todos" activeClassName="nav-link-selected" className="nav-link">To do</NavLink>
        </ul>
    );
}

export default Navigation;
