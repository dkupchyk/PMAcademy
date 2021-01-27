const MONTHS = [
    {value: 0, name: "Jan"},
    {value: 1, name: "Feb"},
    {value: 2, name: "Mar"},
    {value: 3, name: "Apr"},
    {value: 4, name: "May"},
    {value: 5, name: "Jun"},
    {value: 6, name: "Jul"},
    {value: 7, name: "Aug"},
    {value: 8, name: "Sep"},
    {value: 9, name: "Nov"},
    {value: 10, name: "Oct"},
    {value: 11, name: "Dec"}
];


const convertDate = (date) => {
    const splited = date.split(' ');

    let day = splited[1];
    let month = MONTHS.find(m => m.name === splited[2]).value;
    let year = splited[3];
    let hours = splited[4];
    let min = splited[5];
    let sec = splited[6];

    return new Date(year, month, day, +hours.slice(0, -1), +min.slice(0, -1), +sec.slice(0, -1))
}
