const express = require('express');
const generateToken = require('../ultil');
const loginValidation = require('../middlewares/loginValidation');

const routers = express.Router();

routers.post('/', loginValidation, async (req, res) => 
res.status(200).json({ token: generateToken() }));

module.exports = routers;