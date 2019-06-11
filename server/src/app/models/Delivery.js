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
    address: {
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    },
    complement: {
      type: String,
      required: true
    },
    district: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    geolocation: {
      lat: {
        type: String,
        required: true
      },
      lng: {
        type: String,
        required: true
      }
    }
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Delivery', DeliverySchema)
