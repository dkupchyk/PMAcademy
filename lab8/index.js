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


function multiplyBy() {

// Implementation

}


assert.deepStrictEqual(multiplyBy(2, 3, 4, 5), [6, 8, 10]);

assert.deepStrictEqual(multiplyBy(10, 20, 40, 100, 200, 3), [200, 400, 1000, 2000, 30]);


console.log('Looks good');


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


function flatWhite() {

// Implementation

}


assert.deepStrictEqual(flatWhite(['doppio', ['hot'], 'milk']), ['doppio', 'hot', 'milk']);

assert.deepStrictEqual(flatWhite([['espresso', 'hot'], 'milk']), ['espresso', 'hot', 'milk']);


console.log('Looks good');

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


function extendWith() {

// Implementation

}


assert.deepStrictEqual(extendWith(

    { flatWhite: ['doppio', 'hot', 'milk'], isValid: true },

    { isValid:
            false,
        additionalProp: { thisIsGoodProp: 123 } }

    ),

    { flatWhite: ['doppio', 'hot', 'milk'], isValid: true, additionalProp: { thisIsGoodProp: 123 } }

);


assert.deepStrictEqual(extendWith(

    { isValid:
            false,
        myMax: 9990 },

    { isValidos: false, myMin: 8999 }

    ),

    { isValid:
            false,
        myMax: 9990, isValidos: false, myMin: 8999 }

);


console.log('Looks good');


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

    { flatWhite: ['doppio', 'hot', 'milk'], isValid: true },

    { isValid:
            false,
        additionalProp: { thisIsGoodProp: 123 } },

    { prop3:
            true },

    { prop4:
            true },

    { isValid:
            [false, false] },

    ),

    {

        flatWhite: ['doppio', 'hot', 'milk'],

        isValid: [false, false],

        additionalProp: { thisIsGoodProp: 123 },

        prop3: true,

        prop4: true

    }

);


console.log('Looks good');




