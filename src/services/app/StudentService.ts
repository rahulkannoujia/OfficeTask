import { NextFunction } from "express";
import ResponseHelper from "../../helpers/ResponseHelper";
import { QuestionInterface } from "../../interfaces/QuestionInterface";
import { QuizInterface } from "../../interfaces/QuizInterface";
import { ReqInterface, ResInterface } from "../../interfaces/ReqInterface";
import { UserInterface } from "../../interfaces/UserInterface";
import QuestionModel from "../../models/QuestionModel";
import QuizModel from "../../models/QuizModel";
import UserModel from "../../models/UserModel";
import { ApiFeatures } from "../../utils/ApiFeatures";
import { Auth } from "../../utils/Auth";

/**
     * 
     * @param queryString 
     * @returns 
     */
class StudentService {
    /**
  * @param email {string} email of user
  * @param password {string} Encrypted password
  * @param next {NextFunction} next function
  * @return {Promise<UserInterface>} new created user
  */
    async studentSignUp(
        email: string,
        password: string,
        contact: number,
        role: string,
        req: ReqInterface,
        next: NextFunction
    ): Promise<{ user: UserInterface } | void> {
        try {
            const user = await UserModel.create({
                email,
                password,
                contact,
                role,
                req,
                next
            });

            user.password = undefined;

            return { user };



        } catch (error) {
            next(error);
        }
    }
    async login(
        email: string,
        password: string,
        res: ResInterface,
        next: NextFunction
    ): Promise<{ student: UserInterface, token: string } | void> {
        try {
            const student = await UserModel.findOne({ email });

            if (!student) {
                return ResponseHelper.badRequest(res, res.__('invalid_email_password'));
            }

            const isPasswordCorrect = await new Auth().comparePassword(password, student.password);

            if (!isPasswordCorrect) {
                return ResponseHelper.badRequest(res, res.__('invalid_email_password'));
            }


            const payload = {
                id: student._id,
                email: student.email,
            }

            const token = await new Auth().getToken(
                payload,
                '1d',
                next
            );

            student.password = undefined;

            return {
                student,
                token
            }

        } catch (error) {
            next(error);
        }
    }

    /**
     * 
     * @param email 
     * @param req 
     * @param res 
     * @param next 
     * @returns {Promise<string>}
     */


    async forgotPassword(
        email: string,
        res: ResInterface,
        next: NextFunction
    ): Promise<string | void> {
        try {
            const user = await UserModel.findOne({ email });
            if (!user) {
                return ResponseHelper.unAuthorize(res, ('no_account_exist'));
            }
            return ;
        } catch (error) {
            next(error);
        }
    }




    /**
     * 
     * @param password 
     * @param token 
     * @param res 
     * @param next 
     * @returns {Promise<{user: UserInterface, token: string}>}
     */

    
    async Quizlist(
        queryString: any
    ): Promise<{ count: number, list: QuizInterface[] }> {
        const countQuery = QuizModel.find({ isDeleted: false });
        const countFeature = new ApiFeatures(countQuery, queryString)
            .getCount();

        const lisQuery = QuizModel.find({ isDeleted: false });
        const listFeature = new ApiFeatures(lisQuery, queryString)
            .fieldsLimiting()
            .pagination();

        const count = await countFeature.query;
        const list = await listFeature.query;

        return { list, count };
    }
    async Questionlist(
      
        queryString: any
    ): Promise<{ count: number, list: QuestionInterface[] }> {
        const countQuery = QuestionModel.find({ isDeleted: false });
        const countFeature = new ApiFeatures(countQuery, queryString)
            .getCount();

        const lisQuery = QuestionModel.find({ isDeleted: false });
        const listFeature = new ApiFeatures(lisQuery, queryString)
            .fieldsLimiting()
            .pagination();

        const count = await countFeature.query;
        const list = await listFeature.query;

        return { list, count };
    }

}
export default new StudentService();