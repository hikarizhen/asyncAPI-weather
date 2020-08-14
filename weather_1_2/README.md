# weatherMeasured API

■ソースを生成する。
$ cd weather_1_2
$ ag ../src/weatherMeasured_1_2.yaml nodejs -p server=mosquitto
Done! ✨


■必須なライブラリをインストールする。
$ sudo npm install colors
$ sudo npm install hermesjs
$ sudo npm install node-yaml-config
$ sudo npm install dotenv
$ sudo npm install hermesjs-mqtt
$ sudo npm i asyncapi-validator

yarn start
yarn run v1.22.4
warning package.json: No license field
$ node src/api/index.js
weatherMeasured API 1.0.0 is ready! 

🔗  MQTT adapter is connected!

■試験用mqtt コマンド

$ mqtt pub -t 'weather/1/0/100/measured' -h 'test.mosquitto.org' -m '{"temperature": 51, "sentAt": "2020-08-07T12:35:35.000Z"}'

$ mqtt -subscribe 'weather/1/0/100/measured' -h 'test.mosquitto.org' -m '{"userId": 99555, "sentAt": "2020-08-12T12:35:35.000Z"}'
{"temperature": 52, "sentAt": "2020-08-07T12:35:35.000Z"}


----- business test -----
 ■mqtt コマンド投入
 mqtt pub -t 'weather/1/0/100/measured' -h 'test.mosquitto.org' -m '{"temperature": 32, "sentAt": "2020-08-07T12:35:35.000Z"}'
 mqtt pub -t 'weather/1/0/100/measured' -h 'test.mosquitto.org' -m '{"temperature": 52, "sentAt": "2020-08-07T12:35:35.000Z"}'
 mqtt pub -t 'weather/1/0/100/measured' -h 'test.mosquitto.org' -m '{"temperature": -52, "sentAt": "2020-08-07T12:35:35.000Z"}'
 
 
 ■APP　コンソール
 32 is collected and will be publish to the broker.
we are living well.
← weather/1/0/100/measured was received:
{ temperature: 52, sentAt: '2020-08-07T12:35:35.000Z' }
receiveCityMeasurement   begin 

52 is collected and will be publish to the broker.
well , can you burn it?
← weather/1/0/100/measured was received:
{ temperature: 52, sentAt: '2020-08-07T12:35:35.000Z' }
receiveCityMeasurement   begin 

52 is collected and will be publish to the broker.
well , can you burn it?
← weather/1/0/100/measured was received:
{ temperature: -52, sentAt: '2020-08-07T12:35:35.000Z' }
receiveCityMeasurement   begin 

-52 is collected and will be publish to the broker.
well , every thing will be frozen.
