import './WeatherToday.css';
import React from "react";

const WeatherToday = ({weatherItem}) => {
    return <div className="container">

            <div className="row weather-main-box">
                <div className="temperature">
                    <span className="temperature-number">{weatherItem.temp}</span>°c
                </div>
                <div className="col location-box">
                    <div className="location">{weatherItem.location}</div>
                    <div className="date">{weatherItem.date}</div>
                </div>
            </div>

            <div className="weather-details-box">

                <div className="row">
                    <p>Clouds</p>
                    <p>{weatherItem.clouds}%</p>
                </div>


                <div className="row">
                    <div className="icon-container">
                        {/*<img src=`http://openweathermap.org/img/w/${code}.png` alt="icon" />*/}
                        <p>Maximum temperature</p>
                    </div>
                    <p>{weatherItem.maxTemp}°c</p>
                </div>

                <div className="row">
                    <p>Minimum temperature</p>
                    <p>{weatherItem.minTemp}°c</p>
                </div>

                <div className="row">
                    <p>Feels like</p>
                    <p>{weatherItem.feelsLike}°c</p>
                </div>

                <div className="row">
                    <p>Humidity</p>
                    <p>{weatherItem.humidity}%</p>
                </div>

                <div className="row">
                    <p>Pressure</p>
                    <p>{weatherItem.pressure}</p>
                </div>

                <div className="row">
                    <p>Wind speed</p>
                    <p>{weatherItem.windSpeed}</p>
                </div>

                <div className="row">
                    <p>Wind degree</p>
                    <p>{weatherItem.windDeg}</p>
                </div>

            </div>
        </div>;
}

export default WeatherToday;
