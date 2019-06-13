const mongoose = require('mongoose')

const DeliverySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  location: {
    address: String,
    number: String,
    complement: String,
    district: String,
    city: String,
    state: String,
    country: String,
    lat: String,
    lng: String
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Delivery', DeliverySchema)
