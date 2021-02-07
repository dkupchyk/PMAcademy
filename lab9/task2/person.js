const PersonGenderError = require("./personGenderError");

class Person {
    #name = 'NoName';
    #gender = Person.GENDER.NOT_DEFINED;

    static GENDER = {
        NOT_DEFINED: 0,
        MAN: 1,
        WOMAN: 2
    }

    constructor(name = 'NoName', gender = Person.GENDER.NOT_DEFINED) {
        this.name = name;
        this.gender = gender;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get gender() {
        return this.#gender;
    }

    set gender(gender) {
        try {
            if (!Person.#validateGender(gender)) {
                this.#gender = gender;
            }
        } catch (e) {
            console.error(e);
        }
    }

    static #validateGender = function (gender) {
        if (Object.values(Person.GENDER).indexOf(gender) === -1) {
            throw new PersonGenderError("Gender is not valid!");
        }
    }

    getInfo() {
        return `Name: ${this.name}; Gender: ${this.gender}`;
    }
}

module.exports = Person;
