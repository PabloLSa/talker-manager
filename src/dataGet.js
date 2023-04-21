const toRead = require('./toRead');

const dataGet = async (file) => {
  const data = await toRead(file);
  return data;
};

module.exports = dataGet;