export class WeatherItem {

    constructor(location, clouds, humidity, pressure, temp, maxTemp, minTemp, feelsLike, windSpeed, windDeg, description, date) {
        this.location = location;
        this.clouds = clouds;
        this.humidity = humidity;
        this.pressure = pressure;
        this.temp = Math.round(temp);
        this.maxTemp = Math.round(maxTemp);
        this.minTemp = Math.round(minTemp);
        this.feelsLike = Math.round(feelsLike);
        this.windSpeed = windSpeed;
        this.windDeg = windDeg;
        this.description = description;
        this.date = this.convertDate(date);
    }

    convertDate = (UNIX_timestamp) => {
        let a = new Date(UNIX_timestamp * 1000);
        // var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        // var year = a.getFullYear();
        // var month = months[a.getMonth()];
        // var date = a.getDate();
        // var hour = a.getHours();
        // var min = a.getMinutes();
        // var sec = a.getSeconds();
        // var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        // return time;

        return a.toDateString();
    }

}
