class CallService {
    static #callCount = 0;

    constructor() {
        console.log("Call service instant was created");
    }

    callMe() {
        CallService.#callCount++;
    }

    callCount() {
        return `Call count: ${CallService.#callCount}`;
    }
}

const callCountAll = (callServices) => {
    console.log()
    callServices.forEach(service => {
        console.log(service.callCount());
    })
}

module.exports = {CallService, callCountAll};
