const express = require('express');
const generateToken = require('../ultil');

const routers = express.Router();

routers.post('/', async (req, res) => {
  const { email, password } = req.body;

  if ([email].includes(undefined)) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if ([password].includes(undefined)) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }

  return res.status(200).json({ token: generateToken() });
});

module.exports = routers;