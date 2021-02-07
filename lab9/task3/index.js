const PersonLog = require("./personLog");

const person1 = new PersonLog();

person1.name = 'Dan';
person1.gender = 1;

person1.name = 'Emma';
person1.gender = 2;
person1.gender = 2;
person1.gender = 6;

console.log(person1.printLogs());
