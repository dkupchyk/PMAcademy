import './App.css';
import React, {useState} from 'react';
import WeatherToday from "../WeatherToday/WeatherToday";
import {search} from "../../sercives/apiCalls";
import {WeatherItem} from "../../models/WeatherItem";

function App() {

    const [futureWeather, setFutureWeather] = useState({});
    const [todayWeatherItem, setTodayWeatherItem] = useState({});

    let query = '';

    const getWeather = async evt => {
        if (evt.key === "Enter") {
            const weather = await search(evt, query);

            setFutureWeather(weather.futureWeather);
            setTodayWeatherItem(initWeatherItem(weather.todayWeather));
        }
    }

    const initWeatherItem = (todayWeather) => {
        console.log(todayWeather)
        return Object.keys(todayWeather).length !== 0
            ? new WeatherItem(
                todayWeather.name + ', ' + todayWeather.sys.country,
                todayWeather.weather.overallWeather,
                todayWeather.main.humidity,
                todayWeather.main.pressure,
                Math.round(todayWeather.main.temp),
                Math.round(todayWeather.main.max_temp),
                Math.round(todayWeather.main.min_temp),
                Math.round(todayWeather.main.feels_like),
                todayWeather.weather.description,
                new Date().toLocaleDateString())
            : '----------';
    }

    return (
        <div className="App">

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
