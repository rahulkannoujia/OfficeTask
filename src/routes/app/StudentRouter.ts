import { Router } from "express";
import StudentController from "../../controllers/app/StudentController";
import AuthenticationMiddleware from "../../middlewares/AuthenticationMiddleware";

class StudentRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.postRoutes();
    this.getRoutes();
  }
postRoutes(){
    this.router.post(
        '/signUp',
        StudentController.signUp
    )
    this.router.post(
        '/login',
        StudentController.login
    )
    this.router.post(
      '/change-password',
      AuthenticationMiddleware.user,
      StudentController.changePassword
    )
    this.router.post(
      '/forgot-password',
      AuthenticationMiddleware.user,
      StudentController.forgotPassword
    )
    this.router.post(
      '/reset-password',
      AuthenticationMiddleware.user,
      StudentController.resetPassword
    )

}
  getRoutes() {
    this.router.get(
      "/quiz",
      AuthenticationMiddleware.user,
      StudentController.getAllQuiz
    );
    this.router.get(
      "/:id/question",
      AuthenticationMiddleware.user,
      StudentController.getAllQuestion
    );
  }
}
export default new StudentRouter().router;
