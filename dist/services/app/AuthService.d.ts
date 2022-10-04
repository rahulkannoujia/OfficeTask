import { ReqInterface, ResInterface } from '../../interfaces/ReqInterface';
import { DeviceType } from '../../interfaces/UserInterface';
import { NextFunction } from 'express';
import { UserInterface } from "../../interfaces/UserInterface";
declare class AuthService {
    /**
     * @param email {string} email of user
     * @param password {string} Encrypted password
     * @param next {NextFunction} next function
     * @return {Promise<UserInterface>} new created user
     */
    createUser(email: string, password: string, req: ReqInterface, next: NextFunction): Promise<{
        user: UserInterface;
        verifyAccountToken: string;
    } | void>;
    /**
     *
     * @param email {String} user email
     * @param password {Password} user password
     * @param deviceType user device type
     * @param res {ResInterface}
     * @param next {NextFunction} next function
     * @return {Promise<{admin: AdminInterface, token: string}>}
     */
    login(email: string, password: string, deviceType: DeviceType, res: ResInterface, next: NextFunction): Promise<{
        user: UserInterface;
        token: string;
    } | void>;
    /**
     *
     * @param email
     * @param req
     * @param res
     * @param next
     * @returns {Promise<string>}
     */
    forgotPassword(email: string, req: ReqInterface, res: ResInterface, next: NextFunction): Promise<string | void>;
    /**
     *
     * @param password
     * @param token
     * @param res
     * @param next
     * @returns {Promise<{user: UserInterface, token: string}>}
     */
    resetPassword(password: string, token: string, res: ResInterface, next: NextFunction): Promise<{
        user: UserInterface;
        token: string;
    } | void>;
    /**
     *
     * @param token {String} verificationToken
     * @param res {ResInterface}
     * @param next {NextFunction} next function
    * @return {Promise<UserInterface>} user data
     */
    verifyAccount(token: string, res: ResInterface, next: NextFunction): Promise<{
        user: UserInterface;
    } | void>;
    /**
    *
    * @param user {UserInterface}
    * @param req {ReqInterface}
    * @param next {NextFunction} next function
    * @return {Promise<UserInterface>} user data
    */
    resendVerification(user: UserInterface, req: ReqInterface, next: NextFunction): Promise<{
        user: UserInterface;
    } | void>;
    getDeepLink(endPoint: string, token: string): Promise<string>;
}
declare const _default: AuthService;
export default _default;
