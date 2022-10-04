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
const Auth_1 = require("../../utils/Auth");
const UserModel_1 = require("../../models/UserModel");
const Email_1 = require("../../utils/Email");
// import { FirebaseDynamicLinks } from 'firebase-dynamic-links';
const axios_1 = require("axios");
class AuthService {
    /**
     * @param email {string} email of user
     * @param password {string} Encrypted password
     * @param next {NextFunction} next function
     * @return {Promise<UserInterface>} new created user
     */
    createUser(email, password, req, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserModel_1.default.create({
                    email,
                    password
                });
                user.password = undefined;
                const verifyAccountToken = yield new Auth_1.Auth().getToken({
                    id: user._id,
                    role: 'VERIFY_ACCOUNT'
                }, '1d', next);
                const endPoint = '/root/login?token=';
                const deepLinkUrl = yield this.getDeepLink(endPoint, verifyAccountToken);
                yield new Email_1.Email(email).sendVerificationEmail(deepLinkUrl);
                return { user, verifyAccountToken: verifyAccountToken };
            }
            catch (error) {
                next(error);
            }
        });
    }
    /**
     *
     * @param email {String} user email
     * @param password {Password} user password
     * @param deviceType user device type
     * @param res {ResInterface}
     * @param next {NextFunction} next function
     * @return {Promise<{admin: AdminInterface, token: string}>}
     */
    login(email, password, deviceType, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserModel_1.default.findOne({ email }).select('+password');
                if (!user) {
                    return ResponseHelper_1.default.badRequest(res, res.__('invalid_email_password'));
                }
                if (!user.isEmailVerified) {
                    const verifyAccountToken = yield new Auth_1.Auth().getToken({
                        id: user._id,
                        role: 'VERIFY_ACCOUNT'
                    }, '1d', next);
                    const endPoint = '/root/login?token=';
                    const verificationUrl = yield this.getDeepLink(endPoint, verifyAccountToken);
                    yield new Email_1.Email(user.email).sendVerificationEmail(verificationUrl);
                    return ResponseHelper_1.default.forbidden(res, res.__('email_not_verified'));
                }
                if (!user.isAccountActive) {
                    return ResponseHelper_1.default.forbidden(res, res.__('account_not_active'));
                }
                const isPasswordCorrect = yield new Auth_1.Auth().comparePassword(password, user.password);
                if (!isPasswordCorrect) {
                    return ResponseHelper_1.default.badRequest(res, res.__('invalid_email_password'));
                }
                const payload = {
                    id: user._id,
                    email: user.email,
                    deviceType,
                };
                const token = yield new Auth_1.Auth().getToken(payload, '1d', next);
                user.currentDeviceType = deviceType;
                user.lastLogin = new Date();
                yield user.save();
                user.password = undefined;
                return {
                    user,
                    token
                };
            }
            catch (error) {
                next(error);
            }
        });
    }
    /**
     *
     * @param email
     * @param req
     * @param res
     * @param next
     * @returns {Promise<string>}
     */
    forgotPassword(email, req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UserModel_1.default.findOne({ email });
            if (!user) {
                return ResponseHelper_1.default.unAuthorize(res, res.__('no_account_exist'));
            }
            const resetPasswordToken = yield new Auth_1.Auth().getToken({
                id: user._id,
                role: 'FORGOT_PASSWORD'
            }, '1h', next);
            const endPoint = '/root/reset-password?resetToken=';
            const resetUrl = yield this.getDeepLink(endPoint, resetPasswordToken);
            yield new Email_1.Email(user.email).sendForgetPasswordEmail(resetUrl);
            return resetUrl;
        });
    }
    /**
     *
     * @param password
     * @param token
     * @param res
     * @param next
     * @returns {Promise<{user: UserInterface, token: string}>}
     */
    resetPassword(password, token, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const decoded = yield new Auth_1.Auth().decodeJwt(token);
            if (decoded.role !== 'FORGOT_PASSWORD') {
                return ResponseHelper_1.default.badRequest(res, res.__('invalid_reset_token'));
            }
            const userId = decoded.id;
            const user = yield UserModel_1.default.findById(userId);
            const tokenCreatedTimeDiff = Math.floor(new Date().getTime() / 1000) - decoded.iat;
            console.log('tokenCreatedTimeDiff', tokenCreatedTimeDiff);
            if (tokenCreatedTimeDiff > 10 * 60) {
                return ResponseHelper_1.default.expired(res, res.__('reset_token_expired'));
            }
            const encryptedPassword = yield new Auth_1.Auth().encryptPassword(password);
            const payload = {
                id: user._id,
                email: user.email,
                deviceType: user.currentDeviceType,
            };
            const newToken = yield new Auth_1.Auth().getToken(payload, '1d', next);
            user.password = encryptedPassword;
            user.lastLogin = new Date();
            user.passwordChangedAt = new Date();
            yield user.save();
            user.password = undefined;
            return {
                user,
                token: newToken
            };
        });
    }
    /**
     *
     * @param token {String} verificationToken
     * @param res {ResInterface}
     * @param next {NextFunction} next function
    * @return {Promise<UserInterface>} user data
     */
    verifyAccount(token, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const decoded = yield new Auth_1.Auth().decodeJwt(token);
            if (decoded.role !== 'VERIFY_ACCOUNT') {
                return ResponseHelper_1.default.badRequest(res, res.__('invalid_verification_token'));
            }
            const userId = decoded.id;
            const user = yield UserModel_1.default.findById(userId);
            const tokenCreatedTimeDiff = Math.floor(new Date().getTime() / 1000) - decoded.iat;
            console.log('tokenCreatedTimeDiff', tokenCreatedTimeDiff);
            if (tokenCreatedTimeDiff > 10 * 60) {
                return ResponseHelper_1.default.expired(res, res.__('verification_token_expired'));
            }
            user.isEmailVerified = true;
            user.isAccountActive = true;
            yield user.save();
            user.password = undefined;
            return {
                user
            };
        });
    }
    /**
    *
    * @param user {UserInterface}
    * @param req {ReqInterface}
    * @param next {NextFunction} next function
    * @return {Promise<UserInterface>} user data
    */
    resendVerification(user, req, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const verifyAccountToken = yield new Auth_1.Auth().getToken({
                id: user._id,
                role: 'VERIFY_ACCOUNT'
            }, '1d', next);
            const endPoint = '/root/login?token=';
            const verificationUrl = yield this.getDeepLink(endPoint, verifyAccountToken);
            yield new Email_1.Email(user.email).sendVerificationEmail(verificationUrl);
            return {
                user
            };
        });
    }
    getDeepLink(endPoint, token) {
        return __awaiter(this, void 0, void 0, function* () {
            // return id;
            const link = yield (0, axios_1.default)({
                method: 'post',
                url: 'https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyDHEggHNDGlr_u3oT5wNMPzivVXESAIwE4',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    dynamicLinkInfo: {
                        domainUriPrefix: 'https://wefundus.page.link',
                        link: `http://18.232.238.91:4000${endPoint}${token}`,
                        iosInfo: {
                            iosBundleId: 'com.wefundus.mobilecoderz',
                            iosFallbackLink: 'https://staging.wefundus.com'
                        },
                        androidInfo: {
                            androidPackageName: 'com.wefundus.mobilecoderz',
                            androidFallbackLink: 'https://staging.wefundus.com'
                        },
                    },
                    suffix: {
                        option: 'SHORT',
                    },
                }
            });
            return link.data.shortLink;
        });
    }
}
exports.default = new AuthService();
