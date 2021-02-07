/**

 3)

 * Реализовать функцию extendWith, которая будет принимать аргументом два
 объекта {} и объединять их в один, где первый

 * объект имеет больше приоритет с точки зрения одинаковых полей чем второй
 (смотрите примеры assert).

 *

 * Note: запускать в среде Node.js v14.14.0

 *

 * pm-academy-js % node -v

 * v10.15.3

 * pm-academy-js % nvm use 14

 * Now using node v14.14.0 (npm v6.14.8)

 *

 * Note 2: нижний assert должен заканчиваться успешно, например:

 *

 * pm-academy-js % node ./rest--spread--global-object/home-task/3.js

 * Looks good

 * pm-academy-js %

 *

 * "pm-academy-js %" это всего лишь начало моей строки в терминале

 *

 * */


const assert
    = require('assert');


function extendWith(obj1, obj2) {
    return {...obj2, ...obj1};
    // let newObj = {...obj1};
    // for (const key in obj2) {
    //     if (!newObj.hasOwnProperty(key)) {
    //         newObj[key] = obj2[key];
    //     }
    // }
    // return newObj;
}

module.exports = { extendWith };

assert.deepStrictEqual(extendWith(
    {
        flatWhite: ['doppio', 'hot', 'milk'],
        isValid: true
    },

    {
        isValid: false,
        additionalProp: {thisIsGoodProp: 123}
    }
    ),

    {
        flatWhite: ['doppio', 'hot', 'milk'],
        isValid: true,
        additionalProp: {thisIsGoodProp: 123}
    }
);


assert.deepStrictEqual(extendWith(
    {
        isValid: false,
        myMax: 9990
    },

    {
        isValidos: false,
        myMin: 8999
    }
    ),

    {
        isValid: false,
        myMax: 9990,
        isValidos: false,
        myMin: 8999
    }
);


console.log('Looks good');
