■准备工作：
在weather_1_1 目录下启动 yarn

$ yarn start
yarn run v1.22.4
warning package.json: No license field
$ node src/api/index.js
weatherMeasured API 1.0.0 is ready! 

🔗  MQTT adapter is connected!


■命令投入
1. mqtt pub 命令窗口
模拟各地温度收集处理

$ mqtt pub -t 'weather/1/0/100/measured' -h 'test.mosquitto.org' -m '{"temperature": 30, "sentAt": "2020-08-07T12:35:35.000Z"}'
$ mqtt pub -t 'weather/1/0/100/measured' -h 'test.mosquitto.org' -m '{"temperature": 30, "sentAt": "2020-08-07T12:35:35.000Z"}'
$ mqtt pub -t 'weather/1/0/101/measured' -h 'test.mosquitto.org' -m '{"temperature": 31, "sentAt": "2020-08-07T12:35:35.000Z"}'
$ mqtt pub -t 'weather/1/0/102/measured' -h 'test.mosquitto.org' -m '{"temperature": 32, "sentAt": "2020-08-07T12:35:35.000Z"}'
$ mqtt pub -t 'weather/1/0/100/measured' -h 'test.mosquitto.org' -m '{"temperature": 30, "sentAt": "2020-08-07T12:35:35.000Z"}'

2. mqtt sub 命令窗口1   
mqtt sub 命令窗口
模拟对地域 100 进行subscribe处理

$ mqtt -subscribe 'weather/1/0/100/measured' -h 'test.mosquitto.org' -m '{"userId": 99555, "sentAt": "2020-08-12T12:35:35.000Z"}'
{"temperature": 31, "sentAt": "2020-08-07T12:35:35.000Z"}

3. mqtt sub 命令窗口2
模拟对地域 101 进行subscribe处理

$ mqtt -subscribe 'weather/1/0/101/measured' -h 'test.mosquitto.org' -m '{"userId": 99555, "sentAt": "2020-08-12T12:35:35.000Z"}'
{"temperature": 31, "sentAt": "2020-08-07T12:35:35.000Z"}

期待结果
mqtt sub 命令窗口1 只接受来自地域 100 的气温信息。
mqtt sub 命令窗口2 只接受来自地域 101 的气温信息。

103 的气温信息因为没有进行subscribe，因此不会被接受。
