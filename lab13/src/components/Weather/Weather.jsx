import React, {useState} from 'react';

import './Weather.css';

import {search} from "../../sercives/weatherApiCalls";
import {WeatherItem} from "../../models/WeatherItem";
import WeatherToday from "./WeatherToday/WeatherToday";
import WeatherFutureList from "./WeatherFutureList/WeatherFutureList";
import InputField from "../../common/InputField/InputField";

function Weather() {

    const [query, setQuery] = useState('');
    const [futureWeather, setFutureWeather] = useState(null);
    const [todayWeather, setTodayWeatherItem] = useState({});

    const getWeather = async (query) => {
        setQuery(query);

        const weather = await search(query);

        if (!weather) return resetData();

        const newFutureWeather = initFutureWeatherList(weather.next);
        const newTodayWeather = initTodayWeatherItem(weather.today);

        updateData(newFutureWeather, newTodayWeather);
    }

    const updateData = (newFutureWeather, newTodayWeather) => {
        setFutureWeather(newFutureWeather);
        setTodayWeatherItem(newTodayWeather);
    }

    const resetData = () => updateData([], {});

    const createWeatherItem = (item) => {
        return new WeatherItem(
            query,
            item.clouds,
            item.humidity,
            item.pressure,
            item.temp.day,
            item.temp.max,
            item.temp.min,
            item.feels_like.day,
            item.wind_speed,
            item.wind_deg,
            item.weather[0].description,
            item.dt)
    }

    const initTodayWeatherItem = (item) => createWeatherItem(item);

    const initFutureWeatherList = (futureWeatherList) => futureWeatherList.map(item => createWeatherItem(item));

    const isQuerySuccessful = () => futureWeather && futureWeather.length !== 0 && Object.keys(todayWeather).length !== 0;

    return (<div className="component-wrapper weather-container">
            <div className="weather-today">
                {isQuerySuccessful() ? <WeatherToday weatherItem={todayWeather}/> : ''}
            </div>

            <div className="weather-future">
                <InputField buttonFunction={getWeather} buttonText="Search" textValue="" placeholder="Enter a city..."/>
                {futureWeather ? (isQuerySuccessful() ?
                    <WeatherFutureList weatherList={futureWeather}/> : 'City is invalid. Try again.') : ''}
            </div>
        </div>
    );
}

export default Weather;
