/**

 4)

 * Реализовать функцию extendWithEndless, которая будет принимать сколько угодно
 аргументов, но последний будет

 * выступать главным и переписывать все предыдущие с точки зрения одинаковых
 параметров (смотрите примеры assert).

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

 * pm-academy-js % node ./rest--spread--global-object/home-task/4.js

 * Looks good

 * pm-academy-js %

 *

 * "pm-academy-js %" это всего лишь начало моей строки в терминале

 *

 * */


const assert
    = require('assert');


function extendWithEndless() {

// Implementation

}


assert.deepStrictEqual(extendWithEndless(
    {flatWhite: ['doppio', 'hot', 'milk'], isValid: true},

    {
        isValid:
            false,
        additionalProp: {thisIsGoodProp: 123}
    },

    {
        prop3:
            true
    },

    {
        prop4:
            true
    },

    {
        isValid:
            [false, false]
    },
    ),

    {

        flatWhite: ['doppio', 'hot', 'milk'],

        isValid: [false, false],

        additionalProp: {thisIsGoodProp: 123},

        prop3: true,

        prop4: true

    }
);


console.log('Looks good');
