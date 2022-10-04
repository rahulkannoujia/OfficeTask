"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ResponseHelper_1 = require("../../helpers/ResponseHelper");
const AdminModel_1 = require("../../models/AdminModel");
const AuthService_1 = require("../../services/admin/AuthService");
const Auth_1 = require("../../utils/Auth");
class AuthController {
    /**
      * @api {post} /api/v1/admin/auth/login Log In
      * @apiHeader {String} App-Version Version Code 1.0.0.
      * @apiVersion 1.0.0
      * @apiName login
      * @apiGroup Admin-Auth
      *
      * @apiParam {String} email Email Id.
      * @apiParam {String} password
      *
      * @apiSuccessExample {json} Success-Response:
      *     HTTP/1.1 200 OK
      *     {
              "status": 200,
              "data": {
                "admin": {
                        "email": "admin@wefundus.com",
                        "_id": "615bdfd735a0fd20a8d80d02",
                        "name": "We Fund us",
                        "createdAt": "2021-10-05T05:17:11.254Z"
                      },
                      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9UyZmViNDFkOGU1NDZ....."
                  }
              }
      *
      * @apiErrorExample {json} Error-Response:
      * HTTP/1.1 400 Bad Request
      *  {
      *        "status": 400,
      *        "message": "Incorrect email or password"
      *  }
      *
      *
      */
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const email = req.body.email;
                const password = req.body.password;
                const data = yield AuthService_1.default.login(email, password, res, next);
                if (data)
                    return ResponseHelper_1.default.ok(res, res.__('login_successfully'), data);
            }
            catch (error) {
                next(error);
            }
        });
    }
    /**
        * @api {post} /api/app/admin/change-password Change Password
        * @apiHeader {String} App-Version Version Code 1.0.0.
        * @apiVersion 1.0.0
        * @apiName change-password
        * @apiGroup Admin-Auth
        *
        * @apiParam {String} passwordCurrent
        * @apiParam {String} password
        *
        * @apiSuccessExample {json} Success-Response:
        *     HTTP/1.1 200 OK
        *     {
        *        "status": 200,
        *        "message": "password changed successfully"
        *     }
        *
        * @apiErrorExample {json} Error-Response:
        * HTTP/1.1 400 Bad Request
        *  {
        *        "status": 400,
        *        "message": "Invalid password"
        *  }
        *
        *
        **/
    changePassword(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const passwordCurrent = req.body.passwordCurrent;
                const password = req.body.password;
                const admin = yield AdminModel_1.default.findById(req.admin._id);
                const isPasswordCurrentCorrect = yield new Auth_1.Auth().comparePassword(passwordCurrent, admin.password);
                if (!isPasswordCurrentCorrect) {
                    return ResponseHelper_1.default.badRequest(res, res.__('incorrect_password'));
                }
                const encryptedPassword = yield new Auth_1.Auth().encryptPassword(password);
                admin.password = encryptedPassword;
                yield admin.save();
                res.logMsg = 'Admin password changed successfully';
                return ResponseHelper_1.default.ok(res, res.__('admin_password_changed'), {});
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = new AuthController();
