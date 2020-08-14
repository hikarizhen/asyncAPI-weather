
const handler = module.exports = {};
const { cyan, gray } = require('colors/safe');

/**
 * send measured temperature info to the broker.
 * @param {object} options
 * @param {object} options.message
 * @param {integer} options.message.payload.temperature - measured temperature.
 * @param {string} options.message.payload.sentAt - Date and time when the message was sent.
 */
handler.receiveCityMeasurement = async ({message}) => {
  // Implement your business logic here...
  console.log(cyan.underline(`receiveCityMeasurement `), gray(' begin'), '\n');
  console.log(message.payload.temperature + " is collected and will be publish to the broker.");

};
/**
 * user subscribe the channel
 * @param {object} options
 * @param {object} options.message
 * @param {integer} options.message.payload.userId - user Id.
 * @param {string} options.message.payload.sentAt - Date and time when the message was sent.
 */
handler.subscribeCityMeasurement = async ({message}) => {
  // Implement your business logic here...
  console.log(cyan.underline(`subscribeCityMeasurement `), gray(' begin'), '\n');

};
