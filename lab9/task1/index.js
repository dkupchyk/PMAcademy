const {CallService, callCountAll} = require("./callService");

// Creating instances of the class
const callService1 = new CallService();
const callService2 = new CallService();
const callService3 = new CallService();
const callService4 = new CallService();
const callService5 = new CallService();

const callServices = [callService1, callService2, callService3, callService4, callService5]

// Checking if call count is equal to 0 as it wasn`t called yet
callCountAll(callServices);

// Calling call service for the first time
callService1.callMe();
callCountAll(callServices);

// Calling call service 1000 times
for (let i = 0; i < 1000; i++) {
    let randomIndex = Math.floor(Math.random() * callServices.length);
    callServices[randomIndex].callMe();
}

callCountAll(callServices);

