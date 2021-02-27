export class WeatherItem {

    constructor(location, overallWeather, humidity, pressure, temp, maxTemp, minTemp, feelsLike, windSpeed, windDeg, description, date) {
        this.location = location;
        this.overallWeather = overallWeather;
        this.humidity = humidity;
        this.pressure = pressure;
        this.temp = temp;
        this.maxTemp = maxTemp;
        this.minTemp = minTemp;
        this.feelsLike = feelsLike;
        this.windSpeed = windSpeed;
        this.windDeg = windDeg;
        this.description = description;
        this.date = date;
    }

}
