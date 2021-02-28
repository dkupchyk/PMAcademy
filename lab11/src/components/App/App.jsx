import './App.css';
import React, {useState} from 'react';
import WeatherToday from "../WeatherToday/WeatherToday";
import {search} from "../../sercives/apiCalls";
import {WeatherItem} from "../../models/WeatherItem";
import {WEATHER_TYPES} from "../../common/constants";
import WeatherFutureList from "../WeatherFutureList/WeatherFutureList";

function App() {

    const [futureWeather, setFutureWeather] = useState([]);
    const [todayWeatherItem, setTodayWeatherItem] = useState({});
    const [background, setBackgroundImage] = useState(WEATHER_TYPES.default);

    let query = '';

    const getWeather = async evt => {
        if (evt.key === "Enter") {
            const weather = await search(evt, query);

            setFutureWeather(initFutureWeatherList(weather.next));
            setTodayWeatherItem(initTodayWeatherItem(weather.today));
            setBackgroundImage(WEATHER_TYPES[weather.today.weather[0].main]);
        }
    }

    const convertDate = (UNIX_timestamp) => {
        var a = new Date(UNIX_timestamp * 1000);
        // var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        // var year = a.getFullYear();
        // var month = months[a.getMonth()];
        // var date = a.getDate();
        // var hour = a.getHours();
        // var min = a.getMinutes();
        // var sec = a.getSeconds();
        // var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        // return time;

        return a.toDateString();
    }

    const initTodayWeatherItem = (todayWeather) => {

        console.log(todayWeather)

        return Object.keys(todayWeather).length !== 0
            ? new WeatherItem(
                query,
                todayWeather.clouds,
                todayWeather.humidity,
                todayWeather.pressure,
                Math.round(todayWeather.temp.day),
                Math.round(todayWeather.temp.max),
                Math.round(todayWeather.temp.min),
                Math.round(todayWeather.feels_like.day),
                todayWeather.wind_speed,
                todayWeather.wind_deg,
                todayWeather.weather[0].description,
                convertDate(todayWeather.dt))
            : '';
    }

    const initFutureWeatherList = (futureWeatherList) => {
        let arr = []

        if (futureWeatherList.length !== 0) {
            futureWeatherList.forEach(item => {
                arr.push(new WeatherItem(
                    null,
                    item.clouds,
                    item.humidity,
                    item.pressure,
                    Math.round(item.temp.day),
                    Math.round(item.temp.max),
                    Math.round(item.temp.min),
                    Math.round(item.feels_like.day),
                    item.wind_speed,
                    item.wind_deg,
                    item.weather[0].description,
                    convertDate(item.dt)));
            })
        }

        return arr;
    }

    return (
        <div className="App" style={{backgroundImage: `url(${background})`}}>
            <div className="weather-today">
                <WeatherToday weatherItem={todayWeatherItem}/>
            </div>

            <div className="weather-future">
                <div className="search-box">
                    <input type="text"
                           className="search-bar"
                           placeholder="Enter city.."
                           onChange={e => {
                               query = e.target.value
                           }}
                           onKeyPress={(evt) => getWeather(evt, query)}/>
                </div>

                <WeatherFutureList weatherList={futureWeather}/>
            </div>
        </div>
    );
}

export default App;
