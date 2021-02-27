import './App.css';
import React, {useState} from 'react';
import WeatherToday from "../WeatherToday/WeatherToday";
import {search} from "../../sercives/apiCalls";

// feels_like: -3.21
// humidity: 93
// pressure: 1019
// temp: 2.71
// temp_max: 3.33
// temp_min: 2.22


// description: "overcast clouds"
// icon: "04n"
// id: 804
// main: "Clouds"


function App() {
    let weather = {};

    const [todayWeather, setTodayWeather] = useState({});
    const [futureWeather, setFutureWeather] = useState({});

    let query = '';

    const getWeather = async evt => {
        if (evt.key === "Enter") {
            const weather = await search(evt, query);
            console.log(weather.todayWeather)

            setTodayWeather(weather.todayWeather);
            setFutureWeather(weather.futureWeather);
        }
    }

    return (
        <div className="App">

            <div className="weather-today">
                <WeatherToday
                    location={Object.keys(todayWeather).length === 0 ? '' : todayWeather.name + ', ' + todayWeather.sys.country}
                    temperature={Object.keys(todayWeather).length === 0 ? '' : Math.round(todayWeather.main.temp) + '°c'}
                    overallWeather={Object.keys(todayWeather).length === 0 ? '' : todayWeather.weather[0].main}/>
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
