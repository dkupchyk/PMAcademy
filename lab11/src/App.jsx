import './App.css';
import React from 'react';
import {API} from "./constants";

function App() {

    let query = '';
    let weather = {};

    const  searchWeather = evt => {
        return fetch(`${API.url}weather?q=${query}&units=metric&APPID=${API.key}`)
            .then(res => res.json())
            .then(result => {
                query = '';
                return result;
            });
    }

    const searchNext7 = evt => {
        if(Object.keys(weather).length !== 0){
            fetch(`${API.url}find?lat=${weather.coord.lat}&lon=${weather.coord.lon}&cnt=7&appid=${API.key}`)
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    return result;
                });
        }
    }

    const search = async evt => {
        if (evt.key === "Enter") {
            weather = await searchWeather(evt);
            console.log(weather)
            searchNext7(evt);
        }
    }

    return (
        <div className="App">

            <div className="search-box">
                <input type="text"
                       className="search-bar"
                       placeholder="Enter city.."
                       onChange={e => {query = e.target.value}}
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
