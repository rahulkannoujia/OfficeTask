import { Router } from "express";
import AdminController from "../../controllers/admin/AdminController";
import AuthenticationMiddleware from "../../middlewares/AuthenticationMiddleware";

class AdminRoutes {
    public router: Router;
    constructor() {
        this.router = Router();
        this.getRoutes();
        this.patchRoutes();
        this.deleteRoutes();

    }
    getRoutes() {
        this.router.get(
            '/see-teacher',
            AuthenticationMiddleware.admin,
            AdminController.ViewTeacher


        );
        this.router.get(
            '/question',
            AuthenticationMiddleware.admin,
            AdminController.getAllQuestion


        );
        this.router.get(
            '/quiz',
            AuthenticationMiddleware.admin,
            AdminController.getAllQuiz


        );
    }
    patchRoutes() {
        this.router.patch(
            '/:id/block',
            AuthenticationMiddleware.admin,
            AdminController.blockTeacher

        );
        this.router.patch(
            '/:id/unblock',
            AuthenticationMiddleware.admin,
            AdminController.unBlockTeacher

        );

    }
    deleteRoutes() {
        this.router.delete(
            '/:id/quiz',
            AuthenticationMiddleware.admin,
            AdminController.deleteQuiz
        );
        this.router.delete(
            '/:id/question',
            AuthenticationMiddleware.admin,
            AdminController.deleteQuestion
        );
    }
}

export default new AdminRoutes().router;