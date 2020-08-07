
const handler = module.exports = {};

/**
 * send measured temperature info to the broker.
 * @param {object} options
 * @param {object} options.message
 * @param {integer} options.message.payload.temperature - measured temperature.
 * @param {string} options.message.payload.sentAt - Date and time when the message was sent.
 */
handler.receiveCityMeasurement = async ({message}) => {
  // Implement your business logic here...
};
