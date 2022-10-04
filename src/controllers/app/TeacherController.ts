import { NextFunction } from "express";
import ResponseHelper from "../../helpers/ResponseHelper";
import { ReqInterface, ResInterface } from "../../interfaces/ReqInterface";
import TeacherModel from "../../models/TeacherModel";
import UserModel from "../../models/UserModel";
import TeacherService from "../../services/app/TeacherService";

import { Auth } from "../../utils/Auth";

class TeacherController {
  async signUpTeacher( req: ReqInterface,  res: ResInterface, next: NextFunction) {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const contact = req.body.contact;
      const role = req.body.role;
      const encryptedPassword = await new Auth().encryptPassword(password);
      const isExists = await TeacherModel.findOne({ email: req.body.email });
      if (isExists) {
        ResponseHelper.badRequest(res, "teacher already signUp");
      }else{
        const data = await TeacherService.teacherSignUp(
          email,
          encryptedPassword,
          contact,
          role,
          req,
          next
        );
       console.log('data check',data);
       
        if (data) {
          res.logMsg = `teacher *${data.teacher._id}*  Teacher signUp successfully`;
          return ResponseHelper.created(res, "teacher_signup", data);
        }
      }
    
    } catch (error) {
      next(error);
    }
  }
  async teacherLogin(req: ReqInterface, res: ResInterface, next: NextFunction) {
    try {
      const email = req.body.email;
      const password = req.body.password;

      const data = await TeacherService.login(email, password, res, next);

      if (data) return ResponseHelper.ok(res, "login_successfully", data);
    } catch (error) {
      next(error);
    }
  }
  async changePassword(req: ReqInterface, res: ResInterface, next: NextFunction) {
    try {
      const passwordCurrent = req.body.passwordCurrent;
      const password = req.body.password;

      const teacher: any = await TeacherModel.findById(req.user._id);

      const isPasswordCurrentCorrect = await new Auth().comparePassword(passwordCurrent, teacher.password);

      if (!isPasswordCurrentCorrect) {
        return ResponseHelper.badRequest(res, ('incorrect_password'));
      }

      const encryptedPassword = await new Auth().encryptPassword(password);

      teacher.password = encryptedPassword;
      await teacher.save();

      res.logMsg = 'teacher password changed successfully'

      return ResponseHelper.ok(res, ('teacher_password_changed'), {teacher});
    } catch (err) {
      next(err);
    }
  } async forgotPassword(req: ReqInterface, res: ResInterface, next: NextFunction) {
    try {
        const email = req.body.email;
        const teacher = await TeacherService.forgotPassword(
            email,
            res,
            next
        );

        if (teacher)
        res.logMsg = `Forgot password successfully`
            return ResponseHelper.ok(res, ('forgot_password'), { teacher });
    } catch (error) {
        next(error);
    }
}
async resetPassword(req: ReqInterface, res: ResInterface, next: NextFunction) {
  try {
    const newPassword = req.body.newPassword;
    const encryptedPassword =  await new Auth().encryptPassword(newPassword);
    const teacher = await TeacherModel.findOneAndUpdate({ email: req.body.email })
    teacher.password = encryptedPassword;
    await teacher.save();
    res.logMsg = `Reset password successfully`
    return ResponseHelper.ok(res, ('reset_password'), { teacher });
  } catch (error) {
    next(error);
  }
}

  async add(req: ReqInterface, res: ResInterface, next: NextFunction) {
    try {
      const quizName = req.body.quizName;
      const quizDescription = req.body.quizDescription;
      const owner = req.body.owner;
      const ownerEmail = req.body.ownerEmail;

      const quiz = await TeacherService.add(
        quizName,
        quizDescription,
        owner,
        ownerEmail
      );
      if (quiz) {
        res.logMsg = "Quiz added successfully";
        ResponseHelper.created(res, "quiz_created", { quiz });
      }
    } catch (error) {
      next(error);
    }
  }
  async addQuestion(req: ReqInterface, res: ResInterface, next: NextFunction) {
    try {
      const quizId = req.body.quizId;
      const questionText = req.body.questionText;
      const owner = req.body.owner;
      const options = req.body.options;
      const answer = req.body.answer;

      const question = await TeacherService.addQuestion(
        quizId,
        questionText,
        owner,
        options,
        answer
      );
      if (question) {
        res.logMsg = "Question added successfully";
        ResponseHelper.created(res, "question_created", { question });
      }
    } catch (error) {
      next(error);
    }
  }
  async deleteQuestion(
    req: ReqInterface,
    res: ResInterface,
    next: NextFunction
  ) {
    try {
      const questionId = req.params.id;
      const question = await TeacherService.delete(questionId);
      if (question) {
        res.logMsg = "Question deleted successfully";
        ResponseHelper.ok(res, "question_deleted", { question });
      }
    } catch (error) {
      next(error);
    }
  }
  async deleteQuiz(req: ReqInterface, res: ResInterface, next: NextFunction) {
    try {
      const quizId = req.params.id;
      const quiz = await TeacherService.deleteQuiz(quizId);
      if (quiz) {
        res.logMsg = "Quiz deleted successfully";
        ResponseHelper.ok(res, "quiz_deleted", { quiz });
      }
    } catch (error) {
      next(error);
    }
  }
  async getAllQuestion(
    req: ReqInterface,
    res: ResInterface,
    next: NextFunction
  ) {
    try {
      const queryString = req.query;
      const data = await TeacherService.Questionlist(queryString);

      if (data) {
        res.logMsg = `Question list fetched Successfully`;
        return ResponseHelper.ok(res, "Question_list", data);
      }
    } catch (error) {
      next(error);
    }
  }
  async viewStudent(req: ReqInterface, res: ResInterface, next: NextFunction) {
    try {
      const queryString = req.query;
      const data = await TeacherService.ViewStudent(queryString);

      if (data) {
        res.logMsg = `Student View list fetched Successfully`;
        return ResponseHelper.ok(res, "Teacher_view_student_list", data);
      }
    } catch (error) {
      next(error);
    }
  }

  async blockStudent(req: ReqInterface, res: ResInterface, next: NextFunction) {
    try {
      let studentId = req.params.id;
      let Student = await UserModel.findOne({
        _id: studentId,
      });

      if (Student.blocked) {
         ResponseHelper.badRequest(res, "teacher blocked ");//end the message teacher already blocked
      }
      Student.blocked = !Student.blocked;
      Student.save();
      res.logMsg = "Student blocked   successfully";
      return ResponseHelper.ok(res, "student_blocked_status", Student);
    } catch (error) {
      next(error);
    }
  }

  async unBlockStudent(
    req: ReqInterface,
    res: ResInterface,
    next: NextFunction
  ) {
    try {
      let studentId = req.params.id;
      let Student = await UserModel.findOne({
        _id: studentId,
      });

      if (!Student.blocked) {
         ResponseHelper.badRequest(res, "Student already unblocked");
         //end the message teacher is already unblock
      }
      Student.blocked = !Student.blocked;
      res.logMsg = "Student unblocked successfully";
      Student.save();
      res.logMsg = "Student unblocked   successfully";
      return ResponseHelper.ok(res, "student_unblocked_status", Student);
    } catch (error) {
      next(error);
    }
  }
}

export default new TeacherController();
