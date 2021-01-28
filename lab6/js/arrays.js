const toNumArray = (array) => {
    return array.value.split(",").map(Number);
}

const findIndexes = (array, value) => [array.indexOf(value), array.lastIndexOf(value)];

const intersection = (array1, array2) => array1.filter(value => array2.includes(value));

const insertion = (array1, array2, index) => {
    return index === 0
        ? [...array2, ...array1.slice(0)]
        : [...array1.slice(0, index), ...array2, ...array1.slice(index + 1)];
}

const orderByID = function (array) {
    return array.sort(function (a, b) {
        return b.id - a.id
    })
}

const orderByRegDate = function (array) {
    return array.sort(function (a, b) {
        return convertDate(b.registrationDate) - convertDate(a.registrationDate)
    })
}
