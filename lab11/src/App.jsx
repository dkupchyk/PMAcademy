import './App.css';
import React, {useState} from 'react';
import {API} from "./constants";

function App() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${API.url}weather?q=${query}&units=metric&APPID=${API.key}`)
                .then(res => res.json())
                .then(result => {
                    setQuery('');
                    setWeather(result);
                    console.log(result)
                });
        }

        console.log(weather)
        console.log(Object.keys(weather).length === 0)
    }

    return (
        <div className="App">

            <div className="search-box">
                <input type="text"
                       className="search-bar"
                       placeholder="Enter city.."
                       onChange={e => setQuery(e.target.value)}
                       value={query}
                       onKeyPress={search}/>
            </div>

            <div>
                <div className="location-box">
                    <div
                        className="location">{Object.keys(weather).length === 0 ? '' : weather.name + ', ' + weather.sys.country}</div>
                    <div className="date">date</div>
                </div>

                <div className="weather-box">
                    <div
                        className="temp">{Object.keys(weather).length === 0 ? '' : Math.round(weather.main.temp) + '°c'}</div>
                    <div className="weather">{Object.keys(weather).length === 0 ? '' : weather.weather[0].main}</div>
                </div>
            </div>

        </div>
    );
}

export default App;
