import {WEATHER_API} from "../common/constants";
import {fetchData} from "./apiCalls";

export const searchLonLat = (query) => fetchData(`${WEATHER_API.url}weather?q=${query}&units=metric&APPID=${WEATHER_API.key}`);

export const searchAllDays = (lat, lon) => fetchData(`${WEATHER_API.url}onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&cnt=7&units=metric&appid=${WEATHER_API.key}`);

export const search = async (query) => {
    const currentWeather = await searchLonLat(query);

    if (currentWeather.cod === '404') return null

    const forecast = await searchAllDays(currentWeather.coord.lat, currentWeather.coord.lon);
    return {today: forecast.daily[0], next: forecast.daily.slice(1)};
}
