// import { NextFunction } from "express";
// import Joi = require("joi");
// import { validate } from "../../helpers/ValidateHelper";
// import { ReqInterface, ResInterface } from "../../interfaces/ReqInterface";

// class UserValidator{

//  async profile(req: ReqInterface, res: ResInterface, next: NextFunction) {
//     try {
//         const schema = Joi.object().keys({
//             profilePic:Joi.any().optional(),
//             avatar:Joi.string().optional(),
//             email: Joi.string().required(),
//             firstName: Joi.string().required(),
//             lastName: Joi.string().required(),
//             displayName:Joi.string().required(),
//             accountNumber: Joi.number().required(),
//             paypalEmail: Joi.string().required(),
//             description: Joi.string().required(),
            
//         });

//         const isValid = await validate(req.body, res, schema);

//         if (isValid) {
//             next();
//         }
//     } catch (error) {
//         next(error);
//     }
// }

// }

// export default new UserValidator();