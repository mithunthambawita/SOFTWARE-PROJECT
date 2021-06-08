//validation
const Joi = require('@hapi/joi');
const { valid } = require('@hapi/joi');

//Register vallidation
const registerValidation = (data) =>{
const schema = Joi.object({
    firstName: Joi.string().min(4).required(),
    lastName: Joi.string().min(4).required(),
    mobileNumber: Joi.string().min(6).required(),
    // personalAddress: Joi.string().min(6).required(),
    bankDetails: Joi.string().min(2).required(),
    nationalId: Joi.string().min(6).required(),
    accountNumber: Joi.string().min(4).required(),
    accountName:Joi.string().min(4).required(),
    email: Joi.string().min(6).required().email(),
    userName: Joi.string().min(4).required(),
    passWord: Joi.string().min(6).required(),
    confirmPassWord: Joi.string().min(6).required()
  });

  return schema.validate(data);
}

//Login validation
const loginValidation = (data) =>{
const schema = Joi.object({
       
        email: Joi.string().min(6).required().email(),
        passWord: Joi.string().min(6).required(),
        
      });
    
      return schema.validate(data);
    }

//Feedback validation    
    const feedbackValidation = (data) =>{
    const schema = Joi.object({
      name: Joi.string().min(4).required(),
      email: Joi.string().min(4).required(),
      feedback: Joi.string().min(6).required(),
      selectedOption: Joi.string().min(6).required()
    });
    return schema.validate(data);
    }

//Login validation
const profileValidation = (data) =>{
  const schema = Joi.object({
         
    personalAddress: Joi.string().min(6).required()
          
        });
      
        return schema.validate(data);
      }


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.feedbackValidation = feedbackValidation;
module.exports.profileValidation = profileValidation;