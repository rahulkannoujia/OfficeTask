import { NextFunction } from "express";
import ResponseHelper from "../../helpers/ResponseHelper";
import { ReqInterface, ResInterface } from "../../interfaces/ReqInterface";
import UserModel from "../../models/UserModel";
import StudentService from "../../services/app/StudentService";
import { Auth } from "../../utils/Auth";


class StudentController{
    async signUp(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const contact=req.body.contact;
            const role= req.body.role;
            const encryptedPassword = await new Auth().encryptPassword(password);  
            const isExists = await UserModel.findOne({ email: req.body.email });
            if (isExists) {
              ResponseHelper.badRequest(res, "student already signUp");
            }else{
            const data = await StudentService.studentSignUp(
                email,
                encryptedPassword,
                contact,
                role,
                req,
                next
            );
            
            if (data) {
                res.logMsg = `user *${data.user._id}*  Student signUp successfully`;
                return ResponseHelper.created(res, ('student_signUp'), data)

            }
          }
        } catch (error) {
            next(error);
        }
    }
    async login(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
          const email = req.body.email;
          const password = req.body.password;
    
          const data = await StudentService.login(
            email,
            password,
            res,
            next
          );
    
          if (data)
            return ResponseHelper.ok(res, ('login_successfully'), data);
    
    
        } catch (error) {
          next(error);
        }
      }
    
      async changePassword(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
          const passwordCurrent = req.body.passwordCurrent;
          const password = req.body.password;
    
          const student: any = await UserModel.findById(req.user._id);
    
          const isPasswordCurrentCorrect = await new Auth().comparePassword(passwordCurrent, student.password);
    
          if (!isPasswordCurrentCorrect) {
            return ResponseHelper.badRequest(res, ('incorrect_password'));
          }
    
          const encryptedPassword = await new Auth().encryptPassword(password);
    
          student.password = encryptedPassword;
          await student.save();
    
          res.logMsg = 'Student password changed successfully'
    
          return ResponseHelper.ok(res, ('student_password_changed'), {student});
        } catch (err) {
          next(err);
        }
      }
      async forgotPassword(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const email = req.body.email;
            const user = await StudentService.forgotPassword(
                email,
                res,
                next
            );

            if (user)
            res.logMsg = `Forgot password successfully`
                return ResponseHelper.ok(res, ('forgot_password'), { user });
        } catch (error) {
            next(error);
        }
    }

    async resetPassword(req: ReqInterface, res: ResInterface, next: NextFunction) {
      try {
        const newPassword = req.body.newPassword;
        const encryptedPassword =  await new Auth().encryptPassword(newPassword);
        const student = await UserModel.findOneAndUpdate({ email: req.body.email })
        student.password = encryptedPassword;
        await student.save();
        res.logMsg = `Reset password successfully`
        return ResponseHelper.ok(res, ('reset_password'), { student });
      } catch (error) {
        next(error);
      }
    }
    
    async getAllQuiz(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const queryString = req.query;
            const data = await StudentService. Quizlist(queryString);

            if (data) {
                res.logMsg = `Quiz list fetched successfully`;
                return ResponseHelper.ok(res, ('quiz_list'), data);
            }
        } catch (error) {
            next(error)
        }
    }
    async getAllQuestion(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const queryString = req.query;
            const data = await StudentService.Questionlist(queryString);

            if (data) {
                res.logMsg = `Question list fetched Successfully`;
                return ResponseHelper.ok(res, ('question_list'), data);
            }
        } catch (error) {
            next(error)
        }
    }
   
   
}
export default new StudentController();