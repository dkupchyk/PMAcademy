import './App.css';
import React, {useState} from 'react';
import WeatherToday from "../WeatherToday/WeatherToday";
import {search} from "../../sercives/apiCalls";
import {WeatherItem} from "../../models/WeatherItem";
import {WEATHER_TYPES} from "../../common/constants";
import WeatherFutureList from "../WeatherFutureList/WeatherFutureList";

function App() {

    const [query, setQuery] = useState('');
    const [futureWeather, setFutureWeather] = useState([]);
    const [todayWeather, setTodayWeatherItem] = useState({});
    const [background, setBackgroundImage] = useState(WEATHER_TYPES.default);


    const getWeather = async evt => {
        if (evt.key === "Enter") {
            const weather = await search(evt, query);

            if (weather) {
                setFutureWeather(initFutureWeatherList(weather.next));
                setTodayWeatherItem(initTodayWeatherItem(weather.today));
                setBackgroundImage(WEATHER_TYPES[weather.today.weather[0].main]);
            } else {
                setFutureWeather([]);
                setTodayWeatherItem({});
            }
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

    const initTodayWeatherItem = (item) => {

        return Object.keys(item).length !== 0
            ? new WeatherItem(
                query,
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
                convertDate(item.dt))
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

    const isQuerySuccessful = () => {
        return futureWeather.length !== 0 && Object.keys(todayWeather).length !== 0
    }

    return (
        <div className="App" style={{backgroundImage: `url(${background})`}}>
            <div className="weather-today">
                {isQuerySuccessful() ?  <WeatherToday weatherItem={todayWeather}/> : ''}
            </div>

            <div className="weather-future">
                <div className="search-box">
                    <input type="text"
                           className="search-bar"
                           placeholder="Enter a city.."
                           onChange={e => {
                               setQuery(e.target.value)
                           }}
                           onKeyPress={(evt) => getWeather(evt, query)}/>

                    <p className='error-message'>{isQuerySuccessful() ? '' : 'City is invalid. Try one more time.'}</p>
                </div>

                {isQuerySuccessful() ? <WeatherFutureList weatherList={futureWeather}/> : ''}
            </div>
        </div>
)
    ;
}

export default App;
