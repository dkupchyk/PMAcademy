import './WeatherFutureList.css';
import React from "react";
import WeatherFutureItem from "./WeatherFutureItem/WeatherFutureItem";

const WeatherFutureList = ({weatherList}) => {
    console.log(weatherList)
    return (weatherList.length !== 0)
        ? <div className="weather-future-list-container">
            {weatherList.map(item => <WeatherFutureItem key={item.date} weatherItem={item}/>)}
        </div>
        : '';
}

export default WeatherFutureList;
