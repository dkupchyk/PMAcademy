import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <div>
            <Link to="/weather">
                <p>Weather</p>
            </Link>

            <Link to="/retro">
                <p>Retrospective</p>
            </Link>

            <Link to="/todos">
                <p>To do dashboard</p>
            </Link>
        </div>
    );
}

export default Navigation;
