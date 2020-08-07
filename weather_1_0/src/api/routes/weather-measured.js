const Router = require('hermesjs/lib/router');
const router = new Router();
const weatherMeasuredHandler = require('../handlers/weather-measured');
module.exports = router;

/**
 * send measured temperature info to the broker.
 */
router.use('weather/measured', async (message, next) => {
  try {
    await weatherMeasuredHandler.onCityMeasured({message});
    next();
  } catch (e) {
    next(e);
  }
});
