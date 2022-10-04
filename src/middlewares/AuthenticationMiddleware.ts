import { NextFunction } from "express";
import ResponseHelper from "../helpers/ResponseHelper";
import { ReqInterface, ResInterface } from "../interfaces/ReqInterface";
import AdminModel from "../models/AdminModel";
import UserModel from "../models/UserModel";
import { Auth } from "../utils/Auth";

class Authentication {
    async admin(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {

            let token;
            if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
                token = req.headers.authorization.split(' ')[1];
            }

            if (!token) {
                return ResponseHelper.unAuthenticated(res, ('authentication_required'), {}, 'TOKEN_REQUIRED')
            }

            const decoded: any = await new Auth().decodeJwt(token);

            const admin: any = await AdminModel.findById(decoded.id);

            if (!admin) {
                return ResponseHelper.unAuthenticated(res, ('jwt_invalid_token'));
            }

            if (admin.passwordChangedAt && decoded.iat < admin.passwordChangedAt.getTime() / 1000) {
                return ResponseHelper.unAuthenticated(res, res.__('admin_changed_password_recently'), {}, 'OLD_PASSWORD');
            }

            req.admin = admin;
            next();

        } catch (err) {
            return next(err);
        }
    }

    async user(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {

            let token;
            if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
                token = req.headers.authorization.split(' ')[1];
            }

            if (!token) {
                return ResponseHelper.unAuthenticated(res, ('authentication_required'), {}, 'TOKEN_REQUIRED')
            }

            const decoded: any = await new Auth().decodeJwt(token);

            const user: any = await UserModel.findById(decoded.id);

            if (!user) {
                return ResponseHelper.unAuthenticated(res, ('jwt_invalid_token'));
            }

            if (user.passwordChangedAt && decoded.iat < user.passwordChangedAt.getTime() / 1000) {
                return ResponseHelper.unAuthenticated(res, ('admin_changed_password_recently'), {}, 'OLD_PASSWORD');
            }

            req.user = user;
            next();

        } catch (err) {
            return next(err);
        }
    }
}

export default new Authentication();