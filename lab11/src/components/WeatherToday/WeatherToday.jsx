import './WeatherToday.css';
import React from "react";
import {ICONS} from "../../common/constants";

const CharacteristicContainer = ({iconPath, text, value}) => {
    return <div className="row">
        <div className="icon-container">
            <img src={iconPath} alt="icon"/>
            <p>{text}</p>
        </div>
        <p>{value}</p>
    </div>;
}

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
            <CharacteristicContainer iconPath={ICONS.CLOUDS} text="Clouds" value={weatherItem.clouds + '%'}/>
            <CharacteristicContainer iconPath={ICONS.MAX_TEMP} text="Maximum temperature" value={weatherItem.maxTemp + '°c'}/>
            <CharacteristicContainer iconPath={ICONS.MIN_TEMP} text="Minimum temperature" value={weatherItem.minTemp + '°c'}/>
            <CharacteristicContainer iconPath={ICONS.AVG_TEMP} text="Feels like" value={weatherItem.feelsLike + '°c'}/>
            <CharacteristicContainer iconPath={ICONS.HUMIDITY} text="Humidity" value={weatherItem.humidity + '%'}/>
            <CharacteristicContainer iconPath={ICONS.PRESSURE} text="Pressure" value={weatherItem.pressure}/>
            <CharacteristicContainer iconPath={ICONS.WIND} text="Wind speed" value={weatherItem.windSpeed}/>
            <CharacteristicContainer iconPath={ICONS.WIND} text="Wind degree" value={weatherItem.windDeg}/>
        </div>
    </div>;
}

export default WeatherToday;
