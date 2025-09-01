// const joi = require('joi');

// const signupvalidation = (req,res,next)=>{
//     const Schema = joi.object({
//         firstname: joi.string().min(3).max(30).required(),
//         lastname: joi.string().min(3).max(30).required(),
//         enrolmentno: joi.string().min(3).max(30).required(),
//         course: joi.string().required(),
//         semester: joi.string().required(),
//         email: joi.string().email().required(),
//         password: joi.string().min(6).required()
//     });
//     const {error} = Schema.validate(req.body);
//     if(error){
//         return res.status(400).json({message: "bad request",error});
//     }
//     next();
// }

// const loginvalidation = (req,res,next)=>{
//     const Schema = joi.object({
//         email: joi.string().email().required(),
//         password: joi.string().min(6).required()
//     });
//     const {error} = Schema.validate(req.body);
//     if(error){
//         return res.status(400).json({message: "bad request",error});
//     }
//     next();
// }
// module.exports={
//     signupvalidation,
//     loginvalidation
// }