console.error ("*** 開始 ***")

var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function () {
    client.subscribe('weather/1/0/100/measured')
})

client.on('message', function (topic, message) {
  // message is Buffer
    console.log(message.toString())
})
