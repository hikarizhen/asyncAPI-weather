var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org');

console.log('--- Weather APP USER SIMULATOR (tokyo) ---');

client.on('connect', function(){
    console.log('subscriber.connected.');
});

//
var topicsub = 'weather/1/0/100/measured';

console.log('I wanna to know the weather of TOKYO. [city code:100]');

client.subscribe(topicsub, function(err, granted){
    console.log('subscriber.subscribed.');
});

client.on('message', function(topic, message){
    //console.log('subscriber.on.message', 'topic:', topic, 'message:', message.toString());
    const obj = JSON.parse(message);
    console.log('temperature -> ' + obj.temperature);
    if (obj.temperature > 20 && obj.temperature < 30) {
        console.log('feels good!');
    }
    else if (obj.temperature >= 30 && obj.temperature <40) {
        console.log('It is hot!');
    }
    else if (obj.temperature >= 40) {
        console.log('I will be burned!');
    }
    else if (obj.temperature <= 20) {
        console.log('feels cold');
    }
    else {
        console.log('I can not understand the value of the temprature.');
    }
});
