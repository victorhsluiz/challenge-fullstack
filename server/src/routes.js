const express = require('express')
const validate = require('express-validation')
const handle = require('express-async-handler')

const routes = express.Router()

const controllers = require('./app/controllers')
const validators = require('./app/validators')

routes.get('/deliveries', handle(controllers.DeliveryController.index))
routes.post(
  '/deliveries',
  validate(validators.Delivery),
  handle(controllers.DeliveryController.store)
)
routes.delete('/deliveries', handle(controllers.DeliveryController.destroy))

module.exports = routes
