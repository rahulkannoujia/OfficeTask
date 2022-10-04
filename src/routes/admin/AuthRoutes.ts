import { Router } from "express";
import AuthController from "../../controllers/admin/AuthController";
import AuthenticationMiddleware from "../../middlewares/AuthenticationMiddleware";
import AuthValidator from "../../validators/admin/AuthValidator";



class AuthRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.postRoutes();
        this.patchRoutes();
    }

    postRoutes() {
        this.router.post(
            '/login',
            AuthValidator.login,
            AuthController.login
        );

        this.router.post(
            '/change-password',
            AuthenticationMiddleware.admin,
            AuthValidator.changePassword,
            AuthController.changePassword
        );
    }

    patchRoutes() {
       
    }
}

export default new AuthRoutes().router;