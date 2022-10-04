import { Router } from "express";
import TeacherController from "../../controllers/app/TeacherController";
import AuthenticationMiddleware from "../../middlewares/AuthenticationMiddleware";

class TeacherRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.postRoutes();
    this.getRoutes();
    this.patchRoutes();
    this.deleteRoutes();
  }

  postRoutes() {
    this.router.post(
      '/teacher-signUp',
      TeacherController.signUpTeacher
    )
    this.router.post(
      '/login',
      TeacherController.teacherLogin

    )
    this.router.post(
      '/change-password',
      TeacherController.changePassword

    )
    this.router.post(
      '/forgot-password',
      TeacherController.forgotPassword

    )
    this.router.post(
      '/reset-password',
      TeacherController.resetPassword

    )
    this.router.post(
      '/create-quiz',
      AuthenticationMiddleware.user,
      TeacherController.add
    )
    this.router.post(
      '/add-question',
      AuthenticationMiddleware.user,
      TeacherController.addQuestion
    )
  }
  getRoutes() {
    this.router.get(
      "/",
      AuthenticationMiddleware.user,

    );
    this.router.get(
      "/question",
      AuthenticationMiddleware.user,
      TeacherController.getAllQuestion

    );
    this.router.get(
      '/viewStudent',
      TeacherController.viewStudent

    )
  }
  patchRoutes() {
    this.router.patch(
      '/:id/block',
      AuthenticationMiddleware.user,
      TeacherController.blockStudent
    )
    this.router.patch(
      '/:id/unblock',
      AuthenticationMiddleware.user,
      TeacherController.unBlockStudent
    )
  }
  deleteRoutes() {
    this.router.delete(
      '/:id',
      AuthenticationMiddleware.user,
      TeacherController.deleteQuestion
    )
    this.router.delete(
      '/:id/deletequiz',
      AuthenticationMiddleware.user,
      TeacherController.deleteQuiz
    )
  }
}
export default new TeacherRouter().router;
