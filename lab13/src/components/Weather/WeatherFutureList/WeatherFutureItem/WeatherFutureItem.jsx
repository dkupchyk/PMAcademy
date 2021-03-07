import React from "react";

import './WeatherFutureItem.css';

const WeatherFutureItem = ({weatherItem}) => {
    return <div className="weather-future-item-container">
        <div className="row">
            <p className="temperature">{weatherItem.maxTemp}</p>
            <p className="date">{weatherItem.date}</p>
        </div>
    </div>;
}

export default WeatherFutureItem;
