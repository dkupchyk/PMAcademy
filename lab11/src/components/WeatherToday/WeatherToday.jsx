import './WeatherToday.css';
import React from "react";

const WeatherToday = ({location, temperature, overallWeather}) => {
    return <div className="container">

        <div className="location-box">
            <div
                className="location">{location}</div>
            <div className="date">date</div>
        </div>

        <div className="weather-box">
            <div
                className="temp">{temperature}</div>
            <div className="weather">{overallWeather}</div>
        </div>
    </div>
}

export default WeatherToday;
