export class WeatherItem {

    constructor(location, clouds, humidity, pressure, temp, maxTemp, minTemp, feelsLike, windSpeed, windDeg, description, date) {
        this.location = location;
        this.clouds = clouds;
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
