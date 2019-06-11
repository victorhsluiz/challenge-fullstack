const Delivery = require('../models/Delivery')

class DeliveryController {
  async index (req, res) {
    const deliveries = await Delivery.find()

    return res.json(deliveries)
  }

  async store (req, res) {
    const delivery = await Delivery.create(req.body)
    return res.json(delivery)
  }

  async destroy (req, res) {
    await Delivery.deleteMany()

    return res.send()
  }
}

module.exports = new DeliveryController()
