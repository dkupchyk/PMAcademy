// const PersonGenderError = require("../task2/personGenderError");
//
// class PersonLog extends Person {
//     #logs = [];
//
//
//     constructor(name = 'NoName', gender = Person.GENDER.NOT_DEFINED) {
//         this.setName = name;
//         this.setGender = gender;
//     }
//
//     get getName() {
//         return this.#name;
//     }
//
//     set setName(name) {
//         this.#name = name;
//     }
//
//     get getGender() {
//         return this.#gender;
//     }
//
//     set setGender(gender) {
//         try {
//             if (!Person.validateGender(gender)) {
//                 this.#gender = gender;
//             }
//
//         } catch (e) {
//             console.error(e);
//         }
//     }
//
//     static validateGender(gender) {
//         if (Object.values(Person.GENDER).indexOf(gender) === -1) {
//             throw new PersonGenderError("Gender is not valid!");
//         }
//     }
//
//     getInfo() {
//         return `Name: ${this.getName}; Gender: ${this.getGender}`;
//     }
// }
//
// module.exports = Person;
