const PersonGenderError = require("./personGenderError");

class Person {
    #name = 'NoName'
    #gender = Person.GENDER.NOT_DEFINED

    static GENDER = {
        NOT_DEFINED: 0,
        MAN: 1,
        WOMAN: 2
    }

    constructor(name = 'NoName', gender = Person.GENDER.NOT_DEFINED) {
        this.setName = name;
        this.setGender = gender;
    }

    get getName() {
        return this.#name;
    }

    set setName(name) {
        this.#name = name;
    }

    get getGender() {
        return this.#gender;
    }

    set setGender(gender) {
        try {
            if (!Person.validateGender(gender)) {
                this.#gender = gender;
            }

        } catch (e) {
            console.error(e);
        }
    }

    static validateGender(gender) {
        if (Object.values(Person.GENDER).indexOf(gender) === -1) {
            throw new PersonGenderError("Gender is not valid!");
        }
    }

    getInfo() {
        return `Name: ${this.getName}; Gender: ${this.getGender}`;
    }
}

module.exports = Person;
