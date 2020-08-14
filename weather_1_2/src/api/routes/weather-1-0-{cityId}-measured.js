const Router = require('hermesjs/lib/router');
const router = new Router();
const weather10CityIdMeasuredHandler = require('../handlers/weather-1-0-{cityId}-measured');
module.exports = router;

/**
 * send measured temperature info to the broker.
 */
router.use('weather/1/0/:cityId/measured', async (message, next) => {
  try {
    await weather10CityIdMeasuredHandler.receiveCityMeasurement({message});
    next();
  } catch (e) {
    next(e);
  }
});
/**
 * user subscribe the channel
 */
router.useOutbound('weather/1/0/:cityId/measured', async (message, next) => {
  try {
    await weather10CityIdMeasuredHandler.subscribeCityMeasurement({message});
    next();
  } catch (e) {
    next(e);
  }
});
