import {API} from "../common/constants";


export const searchWeather = (evt, query) => {
    return fetch(`${API.url}weather?q=${query}&units=metric&APPID=${API.key}`)
        .then(res => res.json())
        .then(result => result);
}

export const searchNext7Days = (evt, lat, lon, tadayWeatherExists) => {
    if(tadayWeatherExists){
        return fetch(`${API.url}find?lat=${lat}&lon=${lon}&cnt=7&appid=${API.key}`)
            .then(res => res.json())
            .then(result => result);
    }
}

export const search = async (evt, query) => {
        const todayWeather = await searchWeather(evt, query);
        const futureWeather = await searchNext7Days(evt, todayWeather.coord.lat, todayWeather.coord.lon, Object.keys(todayWeather).length !== 0);

        return { todayWeather, futureWeather }

}
