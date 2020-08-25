var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org');

console.log('--- Weather APP SENSOR SIMULATOR (tokyo:100) ---');

client.on('connect', function(){
    console.log('publisher.connected.');
});

// send message to broker
setInterval(function(){
    // prepare message data
    var data = {};

    // use random temperature
    data["temperature"] = Math.floor(Math.random() * (80 - 0)) + 0;;
    data["sentAt"] = "2020-08-24T12:35:35.000Z";

    // make message
    var message = JSON.stringify(data);

    // just for how to use JSON.parse
    const obj = JSON.parse(message);

    if (obj.temperature > 50) {
        console.log("invalid temperature is received. data=" + obj.temperature);
        console.log("message will NOT be send to the broker.");
    } else {
        client.publish('weather/1/0/100/measured', message);
        console.log('publisher.publish:', message);
    }
}, 10000);
