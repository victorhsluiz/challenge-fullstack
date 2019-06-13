const Joi = require('joi')

module.exports = {
  body: {
    name: Joi.string().required(),
    weight: Joi.number().required(),
    location: {
      address: Joi.string(),
      number: Joi.string(),
      complement: Joi.string(),
      district: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      country: Joi.string(),
      geolocation: {
        lat: Joi.string(),
        lng: Joi.string()
      }
    }
  }
}
