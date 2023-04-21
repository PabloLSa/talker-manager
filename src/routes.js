const express = require('express');
const dataGet = require('./dataGet');
const { path } = require('./path');
const routers = express.Router();

routers.get('/', async (_req, res) => res.status(200).json(await dataGet(path)));

module.exports = routers;