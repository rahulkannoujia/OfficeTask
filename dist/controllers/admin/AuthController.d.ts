import { NextFunction } from "express";
import { ReqInterface, ResInterface } from "../../interfaces/ReqInterface";
declare class AuthController {
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
    login(req: ReqInterface, res: ResInterface, next: NextFunction): Promise<void>;
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
    changePassword(req: ReqInterface, res: ResInterface, next: NextFunction): Promise<void>;
}
declare const _default: AuthController;
export default _default;
