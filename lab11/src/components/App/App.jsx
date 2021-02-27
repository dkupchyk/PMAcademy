import './App.css';
import React, {useState} from 'react';
import WeatherToday from "../WeatherToday/WeatherToday";
import {search} from "../../sercives/apiCalls";
import {WeatherItem} from "../../models/WeatherItem";
import {WEATHER_TYPES} from "../../common/constants";

function App() {

    const [futureWeather, setFutureWeather] = useState({});
    const [todayWeatherItem, setTodayWeatherItem] = useState({});
    const [background, setBackgroundImage] = useState(WEATHER_TYPES.default);

    let query = '';

    const getWeather = async evt => {
        if (evt.key === "Enter") {
            const weather = await search(evt, query);

            setFutureWeather(weather.futureWeather);
            setTodayWeatherItem(initWeatherItem(weather.todayWeather));
            setBackgroundImage(WEATHER_TYPES[weather.todayWeather.weather[0].main]);
        }
    }

    const initWeatherItem = (todayWeather) => {
        return Object.keys(todayWeather).length !== 0
            ? new WeatherItem(
                todayWeather.name + ', ' + todayWeather.sys.country,
                todayWeather.weather[0].main,
                todayWeather.main.humidity,
                todayWeather.main.pressure,
                Math.round(todayWeather.main.temp),
                Math.round(todayWeather.main.temp_max),
                Math.round(todayWeather.main.temp_min),
                Math.round(todayWeather.main.feels_like),
                todayWeather.wind.speed,
                todayWeather.wind.deg,
                todayWeather.weather[0].description,
                new Date().toLocaleDateString())
            : '';
    }


    console.log(background)

    return (
        <div className="App" style={{backgroundImage: `url(${background})`}}>
            <div className="weather-today">
                <WeatherToday weatherItem={todayWeatherItem}/>
            </div>

            <div className="weather-future-list">
                <div className="search-box">
                    <input type="text"
                           className="search-bar"
                           placeholder="Enter city.."
                           onChange={e => {
                               query = e.target.value
                           }}
                           onKeyPress={(evt) => getWeather(evt, query)}/>
                </div>
            </div>
        </div>
    );
}

export default App;
