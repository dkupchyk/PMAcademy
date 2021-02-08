const Person = require("../task2/person");

class PersonLog extends Person {
    logs = [];

    constructor() {
        super();
        Object.freeze(this);
    }

    set name(name) {
        let oldName = super.name;
        super.name = name;

        if (oldName !== super.name) {
            this.addLog('name', oldName, super.name);
        }
    }

    set gender(gender) {
        let oldGender = super.gender;
        super.gender = gender;

        if (oldGender !== super.gender) {
            this.addLog('gender', oldGender, super.gender);
        }
    }

    addLog(propertyName, oldValue, newValue) {
        this.logs.push(`${propertyName}: ${oldValue} ${newValue}`);
    }

    printLogs() {
        return this.logs;
    }
}

module.exports = PersonLog;
