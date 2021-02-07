const Person = require("./personLog");

const person1 = new Person();
console.log(person1.getInfo());

const person2 = new Person('John', Person.GENDER.MAN);
console.log(person2.getInfo());

const person3 = new Person('Emma', 2);
console.log(person3.getInfo());

const person4 = new Person('Dan', 7);
console.log(person4.getInfo());
