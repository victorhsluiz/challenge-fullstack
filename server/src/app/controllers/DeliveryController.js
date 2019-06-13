const Delivery = require('../models/Delivery')

class DeliveryController {
  async index (req, res) {
    const deliveries = await Delivery.find()
    const totals = await Delivery.aggregate([
      {
        $group: {
          _id: 1,
          total_weight: { $sum: '$weight' },
          count: { $sum: 1 }
        }
      }
    ])
    return res.json({ deliveries, totals })
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
