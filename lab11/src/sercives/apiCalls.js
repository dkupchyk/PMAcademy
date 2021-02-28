import {API} from "../common/constants";


export const searchLonLat = (evt, query) => {
    return fetch(`${API.url}weather?q=${query}&units=metric&APPID=${API.key}`)
        .then(res => res.json())
        .then(result => result);
}

export const searchAllDays = (evt, lat, lon, tadayWeatherExists) => {
    if (tadayWeatherExists) {
        return fetch(`${API.url}onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&cnt=7&units=metric&appid=${API.key}`)
            .then(res => res.json())
            .then(result => result);
    }
}

export const search = async (evt, query) => {
    const currentWeather = await searchLonLat(evt, query);

    if (currentWeather.cod === '404') return null

    const forecast = await searchAllDays(evt, currentWeather.coord.lat, currentWeather.coord.lon, Object.keys(currentWeather).length !== 0);
    return {today: forecast.daily[0], next: forecast.daily.slice(1)};
}
