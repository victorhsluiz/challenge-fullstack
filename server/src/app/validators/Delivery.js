const Joi = require('joi')

module.exports = {
  body: {
    name: Joi.string().required(),
    weight: Joi.number().required(),
    location: {
      address: Joi.string().required(),
      number: Joi.string().required(),
      complement: Joi.string().required(),
      district: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      country: Joi.string().required(),
      geolocation: {
        lat: Joi.string().required(),
        lng: Joi.string().required()
      }
    }
  }
}
