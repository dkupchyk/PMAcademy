export class WeatherItem {

    constructor(location, overallWeather, humidity, pressure, temp, maxTemp, minTemp, description, date) {
        this.location = location;
        this.overallWeather = overallWeather;
        this.humidity = humidity;
        this.temp = temp;
        this.maxTemp = maxTemp;
        this.minTemp = minTemp;
        this.description = description;
        this.date = date;
    }
    
}
