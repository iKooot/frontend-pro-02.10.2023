const { celebrate, Joi, Segments } = require("celebrate");

const createItemValidation = celebrate({
  [Segments.BODY]: Joi.object({
    value: Joi.string().required(),
    date: Joi.date().iso(),
  }),
});

const updateItemValidation = celebrate({
  [Segments.BODY]: Joi.object({
    id: Joi.string().required(),
    value: Joi.string().required(),
    date: Joi.date().iso(),
  }),
});

const itemParamValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().required(),
  },
});

module.exports = {
  createItemValidation,
  updateItemValidation,
  itemParamValidation,
};
