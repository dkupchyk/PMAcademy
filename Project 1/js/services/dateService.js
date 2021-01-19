const DateService = (function () {
    return {
        convertDateToHTML: function (date) {
            let dateArray = [0,0,0,0,0,0]
            date = date.replace(/\s/g,'')

            date = date.split('d')
            let day = date[0];

            date = date[1].split('h')
            let hours = date[0];

            date = date[1].split('m')
            let min = date[0];

            if (day.length === 1) {
                dateArray[1] = day;
            }else {
                dateArray[0] = day[0];
                dateArray[1] = day[1];
            }

            if (hours.length === 1) {
                dateArray[3] = hours;
            }else {
                dateArray[2] = hours[0];
                dateArray[3] = hours[1];
            }

            if (min.length === 1) {
                dateArray[5] = min;
            }else {
                dateArray[4] = min[0];
                dateArray[5] = min[1];
            }

            return dateArray;
        }
    };
})();
