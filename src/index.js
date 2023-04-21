const express = require('express');
const routers = require('./routes');

const app = express();
app.use(express.json());
// start project 
const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3001';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', routers);

app.listen(PORT, () => {
  console.log('Online');
});
