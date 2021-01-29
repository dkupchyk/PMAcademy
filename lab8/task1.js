/**

 1)

 * Реализовать функцию multiplyBy, которая будет принимать первый аргумент как
 множитель на который нужно умножить

 * каждый из переданных параметров. Подразумевается сколько угодно параметров.
 Подразумевается использование rest

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

 * pm-academy-js % node ./rest--spread--global-object/home-task/1.js

 * Looks good

 * pm-academy-js %

 *

 * "pm-academy-js %" это всего лишь начало моей строки в терминале

 *

 * */


const assert
    = require('assert');


function multiplyBy(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier)
}


assert.deepStrictEqual(multiplyBy(2, 3, 4, 5), [6, 8, 10]);

assert.deepStrictEqual(multiplyBy(10, 20, 40, 100, 200, 3), [200, 400, 1000, 2000, 30]);


console.log('Looks good');
