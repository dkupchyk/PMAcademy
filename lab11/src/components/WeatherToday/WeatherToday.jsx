import './WeatherToday.css';
import React from "react";

const WeatherToday = ({weatherItem}) => {
    console.log(weatherItem)
    return (Object.keys(weatherItem).length !== 0)
        ? <div className="container">

            <div className="row weather-main-box">
                <div className="temperature">
                    <span className="temperature-number">{weatherItem.temp}</span>°c</div>
                <div className="col location-box">
                    <div className="location">{weatherItem.location}</div>
                    <div className="date">{weatherItem.date}</div>
                </div>
            </div>

            <div className="weather-details-box">
                <div className="weather">{weatherItem.overallWeather}</div>
            </div>
        </div>
        : '';
}

export default WeatherToday;
