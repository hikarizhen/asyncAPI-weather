asyncAPI Study

--------------
各地の気温をBrokerにPublishする。
「Fire and Forget」のことを理解する。

■ソース作成
cd weather/

$ mkdir weather
 cd weather
$ ag ../src/weatherMeasured.yaml nodejs -p server=mosquitto

必須なLibをインストールする。
$ sudo npm install colors
Password:
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN weather-measured-api@1.0.0 No repository field.
npm WARN weather-measured-api@1.0.0 No license field.

+ colors@1.4.0
added 1 package in 1.544s
$ sudo npm install hermesjs
npm WARN weather-measured-api@1.0.0 No repository field.
npm WARN weather-measured-api@1.0.0 No license field.

+ hermesjs@2.2.1
added 6 packages in 3.15s
$ sudo npm install node-yaml-config
npm WARN deprecated node-yaml-config@0.0.4: Package vulnerabilities before v0.0.6
npm WARN weather-measured-api@1.0.0 No repository field.
npm WARN weather-measured-api@1.0.0 No license field.

+ node-yaml-config@0.0.4
added 9 packages in 2.399s
$ sudo npm install dotenv
npm WARN weather-measured-api@1.0.0 No repository field.
npm WARN weather-measured-api@1.0.0 No license field.

+ dotenv@8.2.0
added 1 package in 1.072s
$ sudo npm install hermesjs-mqtt
npm WARN weather-measured-api@1.0.0 No repository field.
npm WARN weather-measured-api@1.0.0 No license field.

+ hermesjs-mqtt@2.2.0
added 73 packages in 4.195s
$ 
$ yarn start
yarn run v1.22.4
warning package.json: No license field
$ node src/api/index.js
weatherMeasured API 1.0.0 is ready! 

🔗  MQTT adapter is connected!


■別の端末で

$ mqtt pub -t 'weather/measured' -h 'test.mosquitto.org' -m '{"cityId": 1, "temperature": 35, "sentAt": "2020-08-07T12:34:32.000Z"}'
$ 

■Yarn側
$ yarn start
yarn run v1.22.4
warning package.json: No license field
$ node src/api/index.js
weatherMeasured API 1.0.0 is ready! 

🔗  MQTT adapter is connected!

← weather/measured was received:
{ cityId: 1,
  temperature: 35,
  sentAt: '2020-08-07T12:34:32.000Z' }

******** weather1.0 **************
投入コマンド

#最初のサンプルは動けるか
$ mqtt pub -t 'weather/measured' -h 'test.mosquitto.org' -m '{"cityId": 1, "temperature": 35, "sentAt": "2020-08-07T12:34:32.000Z"}'

#新規したメソッドを試す
チャネル：　'weather/1/0/:cityId/measured'
パラメータ：cityId
想定シーン：各地で測った気温をBrokerにPublishする。

$ mqtt pub -t 'weather/1/0/100/measured' -h 'test.mosquitto.org' -m '{"temperature": 35, "sentAt": "2020-08-07T12:34:32.000Z"}'
$ mqtt pub -t 'weather/1/0/101/measured' -h 'test.mosquitto.org' -m '{"temperature": 33, "sentAt": "2020-08-07T12:35:35.000Z"}'
$ mqtt pub -t 'weather/1/0/102/measured' -h 'test.mosquitto.org' -m '{"temperature": 33, "sentAt": "2020-08-07T12:35:35.000Z"}'
$ 

