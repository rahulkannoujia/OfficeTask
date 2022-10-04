import { NextFunction } from "express";
import ResponseHelper from "../../helpers/ResponseHelper";
import { ReqInterface, ResInterface } from "../../interfaces/ReqInterface";
import TeacherModel from "../../models/TeacherModel";
import UserModel from "../../models/UserModel";
import AdminService from "../../services/admin/AdminService";



class AdminController {
  
  
  async deleteQuiz(  req: ReqInterface, res: ResInterface, next: NextFunction ) {
    try {
      const quizId = req.params.id;
      const quiz = await AdminService.deleteQuiz(quizId);
      if (quiz) {
        res.logMsg = "Quiz deleted successfully";
        ResponseHelper.ok(res, "quiz_deleted", { quiz });
      }
    } catch (error) {
      next(error);
    }
  }
  async deleteQuestion(  req: ReqInterface, res: ResInterface, next: NextFunction ) {
    try {
      const questionId = req.params.id;
      const question = await AdminService.deleteQuestion(questionId);
      if (question) {
        res.logMsg = "Question deleted successfully";
        ResponseHelper.ok(res, "question_deleted", { question });
      }
    } catch (error) {
      next(error);
    }
  }
  async getAllQuestion(req: ReqInterface, res: ResInterface, next: NextFunction) {
    try {
        const queryString = req.query;
        const data = await AdminService.questionList(queryString);

        if (data) {
            res.logMsg = `Question list fetched Successfully`;
            return ResponseHelper.ok(res, ('Question_list'), data);
        }
    } catch (error) {
        next(error)
    }
}
async getAllQuiz(req: ReqInterface, res: ResInterface, next: NextFunction) {
  try {
      const queryString = req.query;
      const data = await AdminService.quizList(queryString);

      if (data) {
          res.logMsg = `Quiz list fetched Successfully`;
          return ResponseHelper.ok(res, ('Quiz_list'), data);
      }
  } catch (error) {
      next(error)
  }
}
async ViewTeacher(req: ReqInterface, res: ResInterface, next: NextFunction) {
    try {
        const queryString = req.query;
        const data = await AdminService.viewTeacher(queryString);

        if (data) {
            res.logMsg = `teacher View list fetched Successfully`;
            return ResponseHelper.ok(res, ('Teacher_View_list'), data);
        }
    } catch (error) {
        next(error)
    }
}

  async blockTeacher(req: ReqInterface, res: ResInterface, next: NextFunction) {
    try {
      let teacherId = req.params.id;
      let teacher = await TeacherModel.findOne({
        _id: teacherId,
      });

      if (teacher.blocked) {
        // Send the message teacher already blocked
      }
      teacher.blocked = !teacher.blocked;
      teacher.save();
      res.logMsg = "Teacher blocked   successfully";
      return ResponseHelper.ok(res ,("teacher_blocked_status"), teacher);
    } catch (error) {
      next(error);
    }
  }

  async unBlockTeacher( req: ReqInterface ,res: ResInterface,  next: NextFunction)
   {
    try {
      let teacherId = req.params.id;
      let teacher = await UserModel.findOne({
        _id: teacherId,
      });

      if (!teacher.blocked) {
        // Send the message teacher is already unblock
      }
      teacher.blocked = !teacher.blocked;
      res.logMsg = "teacher unblocked successfully";
      teacher.save();
      res.logMsg = "teacher unblocked   successfully";
      return ResponseHelper.ok(res,("teacher_blocked_status"), teacher);
    } catch (error) {
      next(error);
    }
}
}

export default new AdminController();
