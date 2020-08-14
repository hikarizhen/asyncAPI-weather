const Hermes = require('hermesjs');
const app = new Hermes();
const { cyan, gray } = require('colors/safe');
const buffer2string = require('./middlewares/buffer2string');
const string2json = require('./middlewares/string2json');
const json2string = require('./middlewares/json2string');
const logger = require('./middlewares/logger');
const errorLogger = require('./middlewares/error-logger');
const config = require('../lib/config');
const MqttAdapter = require('hermesjs-mqtt');
const weatherMeasured = require('./routes/weather-measured.js');
const weather10CityIdMeasured = require('./routes/weather-1-0-{cityId}-measured.js');

app.addAdapter(MqttAdapter, config.broker.mqtt);

app.use(buffer2string);
app.use(string2json);
app.use(logger);

// Channels
app.use(weatherMeasured);
app.use(weather10CityIdMeasured);
app.useOutbound(weather10CityIdMeasured);

app.use(errorLogger);
app.useOutbound(logger);
app.useOutbound(json2string);

app
  .listen()
  .then((adapters) => {
    console.log(cyan.underline(`${config.app.name} ${config.app.version}`), gray('is ready!'), '\n');
    adapters.forEach(adapter => {
      console.log('🔗 ', adapter.name(), gray('is connected!'));
    });
  })
  .catch(console.error);
