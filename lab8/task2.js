/**

 2)

 * Реализовать функцию flatWhite, которая будет принимать двумерный массив и
 делать из него одномерный.

 * Подразумевается использование rest

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

 * pm-academy-js % node ./rest--spread--global-object/home-task/2.js

 * Looks good

 * pm-academy-js %

 *

 * "pm-academy-js %" это всего лишь начало моей строки в терминале

 *

 * */


const assert
    = require('assert');


function flatWhite(array) {
    return [].concat(...array);

}


assert.deepStrictEqual(flatWhite(['doppio', ['hot'], 'milk']), ['doppio', 'hot', 'milk']);

assert.deepStrictEqual(flatWhite([['espresso', 'hot'], 'milk']), ['espresso', 'hot', 'milk']);


console.log('Looks good');
