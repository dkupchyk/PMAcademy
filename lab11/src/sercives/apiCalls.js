import {API} from "../common/constants";

const fetchData = (query) => {
    return fetch(query)
        .then(res => res.json())
        .then(result => result);
}

export const searchLonLat = (query) => fetchData(`${API.url}weather?q=${query}&units=metric&APPID=${API.key}`);

export const searchAllDays = (lat, lon) => fetchData(`${API.url}onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&cnt=7&units=metric&appid=${API.key}`);

export const search = async (evt, query) => {
    const currentWeather = await searchLonLat(query);

    if (currentWeather.cod === '404') return null

    const forecast = await searchAllDays(currentWeather.coord.lat, currentWeather.coord.lon);
    return {today: forecast.daily[0], next: forecast.daily.slice(1)};
}
