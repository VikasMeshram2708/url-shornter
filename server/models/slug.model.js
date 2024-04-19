const Joi = require("joi");

const SlugSchema = Joi.object({
  url: Joi.string().uri().required(),
});

module.exports = SlugSchema;
