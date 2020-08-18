試験するときの画面キャプチャです。

■検証ツールの使用


■asyncapi/parser

$ sudo npm install @asyncapi/parser

  const parser = require('@asyncapi/parser');
  const doc = await parser.parseUrl('https://github.com/hikarizhen/asyncAPI-weather/blob/master/weather_1_2/asyncapi.yaml');
  console.log(doc.info().title());
  
❗  parser.parseUrl is not a function
    at Object.handler.onCityMeasured (/Users/jinghuizhen/asyncAPI/weather_1_2/src/api/handlers/weather-measured.js:24:28)
    at AsyncFunction


■ asyncapi-validator

$ sudo npm i asyncapi-validator


← weather/1/0/100/measured was received:
{ temperature: -52, sentAt: '2020-08-07T12:35:35.000Z' }
receiveCityMeasurement   begin 

-52 is collected and will be publish to the broker.
well , every thing will be frozen.
❗  msgIdentifier "x-custom-key" does not exist
at getMessagesForOperation (/Users/jinghuizhen/asyncAPI/weather_1_2/node_modules/asyncapi-validator/src/ValidatorFactory.js:63:15)


