const express = require('express');
const dataGet = require('../dataGet');
const path = require('../path');
const toWrite = require('../toWrite');
const authorization = require('../middlewares/authorization');
const nameValidation = require('../middlewares/name');
const ageValidation = require('../middlewares/age');
const talkValidation = require('../middlewares/talk');
const watched = require('../middlewares/watchedAt');
const talkRate = require('../middlewares/rate');

const routers = express.Router();

routers.get('/', async (_req, res) => res.status(200).json(await dataGet(path)));

routers.get('/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await dataGet(path);
  const talker = talkers.find((tk) => tk.id === +id);
  if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  res.status(200).json(talker);
});

routers.put('/:id', 
authorization, 
nameValidation, 
ageValidation, 
talkValidation,
watched,
talkRate,
async (req, res) => {
  const { id } = req.params;
  const talkerEdit = await dataGet(path);
  const indexTalker = talkerEdit.findIndex((talker) => talker.id === Number(id));
  if (indexTalker === -1) {
    return res.status(404).json({
      message: 'Pessoa palestrante não encontrada',
    });
  }
  const editedTalker = { id: talkerEdit[indexTalker].id, ...req.body,
  };
  talkerEdit[indexTalker] = editedTalker;
  await toWrite(path, talkerEdit);
  return res.status(200).json(editedTalker);
});

routers.post('/', 
authorization, 
nameValidation, 
ageValidation, 
talkValidation,
watched,
talkRate,

async (req, res) => {
  const { name, age, talk } = req.body;
  const talkers = await dataGet(path);
  const id = talkers[talkers.length - 1].id + 1;
  const newPerson = {
    name,
    age,
    id,
    talk,
  };
 const updateTalkers = [...talkers, newPerson];
await toWrite(path, updateTalkers);
return res.status(201).json(newPerson);
});

module.exports = routers;