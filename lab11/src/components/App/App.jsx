import './App.css';

import React, {useState} from 'react';
import WeatherToday from "../WeatherToday/WeatherToday";
import {search} from "../../sercives/apiCalls";
import {WeatherItem} from "../../models/WeatherItem";
import {WEATHER_TYPES, INVALID_CITY_MESSAGE} from "../../common/constants";
import WeatherFutureList from "../WeatherFutureList/WeatherFutureList";

function App() {

    const [query, setQuery] = useState('');
    const [error, setError] = useState('');

    const [futureWeather, setFutureWeather] = useState([]);
    const [todayWeather, setTodayWeatherItem] = useState({});
    const [background, setBackgroundImage] = useState(WEATHER_TYPES.default);

    const getWeather = async evt => {
        if (evt.key === "Enter") {
            const weather = await search(evt, query);

            if (!weather) return resetData();

            const newFutureWeather = initFutureWeatherList(weather.next);
            const newTodayWeather = initTodayWeatherItem(weather.today);
            const newBackground = WEATHER_TYPES[weather.today.weather[0].main];

            updateData(newFutureWeather, newTodayWeather, newBackground);
        }
    }

    const updateData = (newFutureWeather, newTodayWeather, newBackground, newError) => {
        setFutureWeather(newFutureWeather);
        setTodayWeatherItem(newTodayWeather);
        setBackgroundImage(newBackground);
        setError(newError);
    }

    const resetData = () => updateData([], {}, background, INVALID_CITY_MESSAGE);

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

    const isQuerySuccessful = () => futureWeather.length !== 0 && Object.keys(todayWeather).length !== 0;

    return (<div className="App" style={{backgroundImage: `url(${background})`}}>
            <div className="weather-today">
                {isQuerySuccessful() ? <WeatherToday weatherItem={todayWeather}/> : ''}
            </div>

            <div className="weather-future">
                <div className="search-box">
                    <input type="text"
                           className="search-bar"
                           placeholder="Enter a city and press enter.."
                           onChange={e => setQuery(e.target.value)}
                           onKeyPress={(evt) => getWeather(evt, query)}/>

                    <p className='error-message'>{error}</p>
                </div>

                {isQuerySuccessful() ? <WeatherFutureList weatherList={futureWeather}/> : ''}
            </div>
        </div>
    );
}

export default App;
