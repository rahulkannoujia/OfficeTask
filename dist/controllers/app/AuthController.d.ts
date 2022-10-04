import { NextFunction } from "express";
import { ReqInterface, ResInterface } from "../../interfaces/ReqInterface";
declare class AuthController {
    /**
        * @api {post} /api/v1/app/auth/signup Sign up
        * @apiHeader {String} App-Version Version Code 1.0.0.
        * @apiVersion 1.0.0
        * @apiName signup
        * @apiGroup App-Auth
        *
        * @apiParam {String} email Email Id.
        * @apiParam {String} password
        *
        * @apiParamExample {json} Request-Body:
        *    {
        *        "email": "pukhraj1@mailinator.com",
        *        "password": "Test@1234"
        *    }
        *
        * @apiSuccessExample {json} Success-Response:
        *{"status":201,"message":"User Sign up successfully","execTime":167,"data":{"user":{"email":"pukhraj1@mailinator.com","isEmailVerified":false,"isAccountActive":false,"_id":"62c2bf3302eb83542c409e24","__v":0},   "verifyAccountToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2ZlMzc4MjIxYzgwNjU3NTViNjM5YyIsInJvbGUiOiJWRVJJRllfQUNDT1VOVCIsImlhdCI6MTY1Nzc5MTM1MiwiZXhwIjoxNjU3ODc3NzUyfQ.cH4FsJNZUaKQUH590MwqHXUqR4Eh8GNpJmxrNvvI7QA",}}
        * @apiErrorExample {json} Error-Response1:
        *{"status":409,"statusText":"CONFLICT","message":"User already exists","data":{}}
        *
        */
    signUp(req: ReqInterface, res: ResInterface, next: NextFunction): Promise<void>;
    /**
        * @api {post} /api/v1/app/auth/login Log in
        * @apiHeader {String} App-Version Version Code 1.0.0.
        * @apiVersion 1.0.0
        * @apiName login
        * @apiGroup App-Auth
        *
        * @apiParam {String} email Email Id.
        * @apiParam {String} password
        * @apiParam {String} loginType 'WEB'|'ANDROID'|'IOS'
        *
        * @apiParamExample {json} Request-Body:
        *    {
        *        "email": "pukhraj1@mailinator.com",
        *        "password": "Test@1234",
        *        "deviceType": "IOS"
        *    }
        *
        * @apiSuccessExample {json} Success-Response:
        *{"status":200,"statusText":"SUCCESS","message":"Login successfully","data":{"user":{"_id":"62c2bf3302eb83542c409e24","email":"pukhraj1@mailinator.com","isEmailVerified":false,"isAccountActive":false,"__v":0,"currentDeviceType":"IOS"},"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzJiZjMzMDJlYjgzNTQyYzQwOWUyNCIsImVtYWlsIjoicHVraHJhajFAbWFpbGluYXRvci5jb20iLCJkZXZpY2VUeXBlIjoiSU9TIiwiaWF0IjoxNjU2OTMzMDMxLCJleHAiOjE2NTcwMTk0MzF9.dj3KwQ3o4XY1Zqv5dpv4LbZstURHL_O8BbXa7IYQiP0","execTime":169}}
        * @apiErrorExample {json} Error-Response1:
        *{"status":400,"statusText":"BAD_REQUEST","message":"Invalid email or password","data":{}}
        *
        */
    login(req: ReqInterface, res: ResInterface, next: NextFunction): Promise<void>;
    /**
        * @api {post} /api/v1/app/auth/forgot-password Forgot password
        * @apiHeader {String} [App-Version] Version Code 1.0.0.
        * @apiHeader {String} deviceType 'WEB'|'ANDROID'|'IOS'
        * @apiVersion 1.0.0
        * @apiName forgot-password
        * @apiGroup App-Auth
        *
        * @apiParam {String} email Email Id.
        *
        * @apiParamExample {json} Request-Body:
        *    {
        *        "email": "pukhraj1@mailinator.com",
        *    }
        *
        * @apiSuccessExample {json} Success-Response:
        *  {"status":200,"statusText":"SUCCESS","message":"Password reset link sent to your email.","data":{"resetUrl":"http://localhost/reset-password?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmYzZTg1MDk5MTIzYTdjNDYwMTMyMyIsInJvbGUiOiJGT1JHT1RfUEFTU1dPUkQiLCJpYXQiOjE2NTY5Mzc5MjgsImV4cCI6MTY1NjkzODUyOH0.jVOTnoqzXqJvWPpvqCHvLIXSe3ag4aLRavaYvLnlkHQ","execTime":45}}
        * @apiErrorExample {json} Error-Response1:
        * {"status":403,"statusText":"FORBIDDEN","message":"No account exists with this email","data":{}}
        *
        */
    forgotPassword(req: ReqInterface, res: ResInterface, next: NextFunction): Promise<void>;
    /**
        * @api {post} /api/v1/app/auth/reset-password Reset password
        * @apiHeader {String} App-Version Version Code 1.0.0.
        * @apiHeader {String} deviceType 'WEB'|'ANDROID'|'IOS'
        * @apiVersion 1.0.0
        * @apiName reset-password
        * @apiGroup App-Auth
        *
        * @apiParam {String} password Email Id.
        * @apiParam {String} resetToken
        *
        * @apiParamExample {json} Request-Body:
        *    {
                "resetToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmYzZTg1MDk5MTIzYTdjNDYwMTMyMyIsInJvbGUi,
                "password": "Test@1234"
            }
        *
        * @apiSuccessExample {json} Success-Response:
        *  {"status":200,"statusText":"SUCCESS","message":"Password reset successfully","data":{"user":{"_id":"62bf3e85099123a7c4601323","email":"pukhraj@mailinator.com","isEmailVerified":false,"isAccountActive":false,"__v":0},"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmYzZTg1MDk5MTIzYTdjNDYwMTMyMyIsImVtYWlsIjoicHVraHJhakBtYWlsaW5hdG9yLmNvbSIsImlhdCI6MTY1Njk0MTY2MiwiZXhwIjoxNjU3MDI4MDYyfQ.IlInnF61OUgNdFeoA5ZbdJkgbiWmGrZnBEQx8n8qxrQ","execTime":157}}
        * @apiErrorExample {json} Error-Response1:
        * {"status":400,"statusText":"BAD_REQUEST","message":"Invalid reset token","data":{}}
        *@apiErrorExample {json} Error-Response
        *{"status":401,"message":"Token Expired, please logIn again"}
        */
    resetPassword(req: ReqInterface, res: ResInterface, next: NextFunction): Promise<void>;
    /**
        * @api {patch} /api/v1/app/auth/verify-account Verify Account
        * @apiHeader {String} App-Version Version Code 1.0.0.
        * @apiHeader {String} deviceType 'WEB'|'ANDROID'|'IOS'
        * @apiVersion 1.0.0
        * @apiName Verify-Account
        * @apiGroup App-Auth
        *
        *
        * @apiParamExample {json} Request-Body:
        *    {
                "verifyAccountToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmYzZTg1MDk5MTIzYTdjNDYwMTMyMyIsInJvbGUi"
            }
        *
        * @apiSuccessExample {json} Success-Response:
        *  {"status":200,"statusText":"SUCCESS","message":"Account verified successfully","data":{"user":{"_id":"62ce9d6b201f67d39d8c4e98","email":"sumit.vishwakarma@mobilecoderz.com","isEmailVerified":true,"isAccountActive":true,"__v":0},"execTime":81}}
        * @apiErrorExample {json} Error-Response1:
        * {"status":400,"statusText":"BAD_REQUEST","message":"Invalid verification token","data":{}}
        *@apiErrorExample {json} Error-Response
        *{"status":401,"message":"Token Expired"}
        */
    verifyAccount(req: ReqInterface, res: ResInterface, next: NextFunction): Promise<void>;
    /**
        * @api {post} /api/v1/app/auth/resend-verification Resend Verification Link
        * @apiHeader {String} App-Version Version Code 1.0.0.
        * @apiHeader {String} deviceType 'WEB'|'ANDROID'|'IOS'
        * @apiVersion 1.0.0
        * @apiName Resend-Verification-Link
        * @apiGroup App-Auth
        *
        *
        * @apiParamExample {json} Request-Body:
        *    {
                "email": "test@gmail.com"
            }
        *
        * @apiSuccessExample {json} Success-Response:
        *  {"status":200,"statusText":"SUCCESS","message":"Verification link sent successfully on your mail","data":{"user":{"_id":"62ce9d6b201f67d39d8c4e98","email":"test@gmail.com.com","isEmailVerified":true,"isAccountActive":true,"__v":0},"execTime":78}}
        * @apiErrorExample {json} Error-Response1:
        * {"status":400,"statusText":"BAD_REQUEST","message":"Invalid Email","data":{}}
        */
    resendVerification(req: ReqInterface, res: ResInterface, next: NextFunction): Promise<void>;
}
declare const _default: AuthController;
export default _default;
