import './WeatherToday.css';
import React from "react";

const WeatherToday = ({location, temperature, overallWeather}) => {
    return <div className="container">

        <div className="row">
            <div className="temperature">{temperature}</div>
            <div className="col location-box">
                <div className="location">{location}</div>
                <div className="date">date</div>
            </div>
        </div>

        <div className="weather-details-box">
            <div className="weather">{overallWeather}</div>
        </div>
    </div>
}

export default WeatherToday;
