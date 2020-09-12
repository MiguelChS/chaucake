const express = require('express');
const serviceMP = require('./serviceMercadoPago');

const app = express();
app.set('view engine', 'pug');

const html = __dirname + '/index.html';
app.get('/', (_, res) => {
  res.render('index')
});

app.get('/pagar', (_, res) => {
  serviceMP().
    then((response) => {
      res.render('pago', { id: response.body.id })
    })
    .catch((err) => {
      res.status(500).json(err);
    })
})
const port = process.env.PORT || 3001;
app.listen(port);