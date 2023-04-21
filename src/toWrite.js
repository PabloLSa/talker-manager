const fileSystem = require('fs').promises;

const toWrite = async (path, data) => {
  try {
    fileSystem.writeFile(path, JSON.stringify(data), (erro) => {
      if (erro) throw erro;
      console.log('suecsso');
    });

    return data;
  } catch (erro) {
    console.error(erro.message);
    throw new Error(erro.message);
  }
};

module.exports = toWrite;