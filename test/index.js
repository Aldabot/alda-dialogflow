const fulfillment = require('../index.js')

fulfillment("hola", "1").then(res => console.log(res[0].queryResult.fulfillmentMessages))
