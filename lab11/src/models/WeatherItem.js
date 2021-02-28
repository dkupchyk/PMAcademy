import {MONTHS, WEEK_DAYS} from "../common/constants";

export class WeatherItem {

    constructor(location, clouds, humidity, pressure, temp, maxTemp, minTemp, feelsLike, windSpeed, windDeg, description, date) {
        this.location = location;
        this.clouds = clouds + '%';
        this.humidity = humidity + '%';
        this.pressure = pressure;
        this.temp = Math.round(temp) + '°c';
        this.maxTemp = Math.round(maxTemp) + '°c';
        this.minTemp = Math.round(minTemp) + '°c';
        this.feelsLike = Math.round(feelsLike) + '°c';
        this.windSpeed = windSpeed;
        this.windDeg = windDeg;
        this.description = description;
        this.date = this.convertDate(date);
    }

    convertDate = (UNIX_timestamp) => {
        const a = new Date(UNIX_timestamp * 1000);

        const year = a.getFullYear();
        const month = MONTHS[a.getMonth()];
        const date = a.getDate();
        const dateOfWeek = WEEK_DAYS[a.getDay()];

        return `${dateOfWeek}, ${date} ${month} ${year}`;
    }
}
