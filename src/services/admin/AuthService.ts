import { NextFunction } from "express";
import ResponseHelper from "../../helpers/ResponseHelper";
import { AdminInterface } from "../../interfaces/AdminInterface";
import { ResInterface } from "../../interfaces/ReqInterface";

import AdminModel from "../../models/AdminModel";
import { Auth } from "../../utils/Auth";

 class AuthService {
     async createAdmin() {
        try {
            let isAdmin = await AdminModel.findOne({ email: 'admin@123gmail.com' });
            if (isAdmin) {
                console.log('Admin Exist');
            }
            else {
                const encryptedPassword = await new Auth().encryptPassword('admin123');
                isAdmin = await AdminModel.create({
                    email: 'admin@123gmail.com',
                    password: encryptedPassword
                });
                console.log('Admin created')
            }
        } catch (err) {
            console.log(err);
        }
    };
    
    /**
     * 
     * @param email {String} user email
     * @param password {Password} user password
     * @param res {ResInterface} 
     * @param next {NextFunction} next function
     * @return {Promise<{admin: AdminInterface, token: string}>}
     */
    async login(
        email: string,
        password: string,
        res: ResInterface,
        next: NextFunction
    ): Promise<{ admin: AdminInterface, token: string } | void> {
        try {
            const admin = await AdminModel.findOne({ email });

            if (!admin) {
                return ResponseHelper.badRequest(res, res.__('invalid_email_password'));
            }

            const isPasswordCorrect = await new Auth().comparePassword(password, admin.password);

            if (!isPasswordCorrect) {
                return ResponseHelper.badRequest(res, res.__('invalid_email_password'));
            }


            const payload = {
                id: admin._id,
                email: admin.email,
            }

            const token = await new Auth().getToken(
                payload,
                '1d',
                next
            );

            admin.password = undefined;

            return {
                admin,
                token
            }

        } catch (error) {
            next(error);
        }
    }


 }

 export default new AuthService();