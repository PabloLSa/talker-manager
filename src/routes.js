const express = require('express');
const dataGet = require('./dataGet');
const { path } = require('./path');

const routers = express.Router();

routers.get('/', async (_req, res) => res.status(200).json(await dataGet(path)));

routers.get('/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await dataGet(path);
  const talker = talkers.find((tk) => tk.id === +id);
  if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  res.status(200).json(talker);
});

module.exports = routers;