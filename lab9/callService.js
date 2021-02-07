class CallService {
    static #callCount = 0;

    constructor() {
        return;
    }

    callMe() {
        CallService.#callCount++;
    }

    callCount() {
        return CallService.#callCount;
    }
}
