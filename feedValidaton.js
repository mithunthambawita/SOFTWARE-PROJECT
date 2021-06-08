//validation
const Joi = require('@hapi/joi');
const { valid } = require('@hapi/joi');



//Feedback validation    
const feedbackValidation = (data) =>{
    const schema = Joi.object({
      name: Joi.string().min(4).required(),
      email: Joi.string().min(4).required(),
      feedback: Joi.string().min(6).required(),
      selectedOption: Joi.string().min(2).required()
    });
    return schema.validate(data);
    }
    
    module.exports.feedbackValidation = feedbackValidation;