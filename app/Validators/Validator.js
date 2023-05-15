import Joi from '@hapi/joi';

export default {


  userCreate: Joi.object().keys({
    name:Joi.string().required(),
    email: Joi.string().required(),
    mobileNumber: Joi.string().required(),
    gender : Joi.string().required(),
    age: Joi.string().required()
  }),

  userUpdate: Joi.object().keys({
    id: Joi.string().required(),
    name:Joi.string(),
    email: Joi.string(),
    mobileNumber: Joi.string(),
    gender : Joi.string(),
    age: Joi.string()
  }),

  deleteUpdate: Joi.object().keys({
    id: Joi.string().required()
  }),

    
};
