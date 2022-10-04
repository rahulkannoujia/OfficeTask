import { Router } from "express";
import AdminRoutes from "./admin/AdminRoutes";
import AuthRoutes from "./admin/AuthRoutes";
import StudentRouter from "./app/StudentRouter";
import TeacherRouter from "./app/TeacherRouter";


class Routes {
  public router: Router;
  constructor() {
    this.router = Router();
    this.app();
    this.admin();
  }

  app() {
    this.router.use('/app/auth', StudentRouter);
    this.router.use('/app/auth',TeacherRouter);
   
  }

  admin() {
    this.router.use('/admin/auth',AuthRoutes)
    this.router.use('/admin',AdminRoutes)
   
  }

}
export default new Routes().router;