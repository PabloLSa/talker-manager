const fileSystem = require('fs').promises;

const toRead = async (path) => {
  try {

    const file = await fileSystem.readFile(path);
    return JSON.parse(file);

  } catch (erro) {
    console.error(erro.message);
    throw new Error(erro.message);
  }

};

module.exports = toRead;