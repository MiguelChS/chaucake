const mercadopago = require('mercadopago');

mercadopago.configure({
  access_token: 'TEST-7195311052469025-091220-7efe395e31e0824004fa0528cc6b854d-85326083'
});

let preference = {
  items: [{
    title: 'chauCake',
    unit_price: 1700,
    quantity: 1
  }]
}

module.exports = function () {
  return mercadopago.preferences.create(preference)
}