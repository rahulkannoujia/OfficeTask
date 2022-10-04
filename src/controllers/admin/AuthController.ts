import { NextFunction } from "express";
import ResponseHelper from "../../helpers/ResponseHelper";
import { ReqInterface, ResInterface } from "../../interfaces/ReqInterface";
import AdminModel from "../../models/AdminModel";
import AuthService from "../../services/admin/AuthService";

import { Auth } from "../../utils/Auth";

class AuthController {

//   static async createAdmin() {
//     try {
//         let isAdmin = await AdminModel.findOne({ email: 'admin@myapp.com' });
//         if (isAdmin) {
//             console.log('Admin Exist');
//         }
//         else {
//             const encryptedPassword = await Auth.encryptPassword();
//             isAdmin = await AdminModel.create({
//                 email: 'admin@myapp.com',
//                 password: encryptedPassword
//             });
//             console.log('Admin created')
//         }
//     } catch (err) {
//         console.log(err);
//     }
// };
  
  async login(req: ReqInterface, res: ResInterface, next: NextFunction) {
    try {
      const email = req.body.email;
      const password = req.body.password;

      const data = await AuthService.login(
        email,
        password,
        res,
        next
      );

      if (data)
        return ResponseHelper.ok(res, res.__('login_successfully'), data);


    } catch (error) {
      next(error);
    }
  }



  

  async changePassword(req: ReqInterface, res: ResInterface, next: NextFunction) {
    try {
      const passwordCurrent = req.body.passwordCurrent;
      const password = req.body.password;

      const admin: any = await AdminModel.findById(req.admin._id);

      const isPasswordCurrentCorrect = await new Auth().comparePassword(passwordCurrent, admin.password);

      if (!isPasswordCurrentCorrect) {
        return ResponseHelper.badRequest(res, res.__('incorrect_password'));
      }

      const encryptedPassword = await new Auth().encryptPassword(password);

      admin.password = encryptedPassword;
      await admin.save();

      res.logMsg = 'Admin password changed successfully'

      return ResponseHelper.ok(res, res.__('admin_password_changed'), {});
    } catch (err) {
      next(err);
    }
  }

}

export default new AuthController();