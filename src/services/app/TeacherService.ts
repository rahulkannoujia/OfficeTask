import { NextFunction } from "express";
import { QuestionInterface } from "../../interfaces/QuestionInterface";
import { QuizInterface } from "../../interfaces/QuizInterface";
import { ReqInterface, ResInterface } from "../../interfaces/ReqInterface";
import QuestionModel from "../../models/QuestionModel";
import QuizModel from "../../models/QuizModel";
import { Auth } from "../../utils/Auth";
import TeacherModel from "../../models/TeacherModel";
import { TeacherInterface } from "../../interfaces/TeacherInterface";
import ResponseHelper from "../../helpers/ResponseHelper";
import { ApiFeatures } from "../../utils/ApiFeatures";
import UserModel from "../../models/UserModel";
import { UserInterface } from "../../interfaces/UserInterface";






class TeacherService{
    async teacherSignUp(
        email: string,
        password: string,
        contact:number,
        role:string,
        req: ReqInterface,
        next: NextFunction
    ): Promise<{ teacher: TeacherInterface } | void> {
        try {
            const teacher = await TeacherModel.create({
                email,
                password,
                contact,
                role,
                req,
                next
            });

            teacher.password = undefined;

              return {teacher} ;
           

            
        } catch (error) {
            next(error);
        }
    } 
    async login(
        email: string,
        password: string,
        res: ResInterface,
        next: NextFunction
    ): Promise<{ teacher: TeacherInterface, token: string } | void> {
        try {
            const teacher = await TeacherModel.findOne({ email });

            if (!teacher) {
                return ResponseHelper.badRequest(res, res.__('invalid_email_password'));
            }

            const isPasswordCorrect = await new Auth().comparePassword(password, teacher.password);

            if (!isPasswordCorrect) {
                return ResponseHelper.badRequest(res, res.__('invalid_email_password'));
            }


            const payload = {
                id: teacher._id,
                email: teacher.email,
            }

            const token = await new Auth().getToken(
                payload,
                '1d',
                next
            );

            teacher.password = undefined;

            return {
                teacher,
                token
            }

        } catch (error) {
            next(error);
        }
    }
    async forgotPassword(
        email: string,
        res: ResInterface,
        next: NextFunction
    ): Promise<string | void> {
        try {
            const user = await TeacherModel.findOne({ email });
            if (!user) {
                return ResponseHelper.unAuthorize(res, ('no_account_exist'));
            }
            return ;
        } catch (error) {
            next(error);
        }
    }

    async add(
        quizName: string,
        quizDescription:string,
        owner:string,
        ownerEmail:string
    ): Promise<QuizInterface> {
        const newCategory: QuizInterface = await QuizModel.create({ quizName,quizDescription,owner,ownerEmail  });
        return newCategory;
    }
   
        async addQuestion(
            quizId: string,
            questionText:string,
            owner:string,
            options:[],
            answer:string
            
        ): Promise<QuestionInterface> {
            const  newQuestion: QuestionInterface = await QuestionModel.create({ quizId,questionText,owner,options,answer  });
            return  newQuestion;
        }
        async delete(
            id: string,
        ): Promise<QuestionInterface> {
            const deletedQuestion: QuestionInterface = await QuestionModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
            return deletedQuestion;
}
async deleteQuiz(
    id: string,
): Promise<QuizInterface> {
    const deletedQuiz: QuizInterface = await QuizModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return deletedQuiz;
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
async ViewStudent(
    queryString: any
): Promise<{ count: number, list: UserInterface[] }> {
    const countQuery = UserModel.find({ isDeleted: false });
    const countFeature = new ApiFeatures(countQuery, queryString)
        .getCount();

    const lisQuery = UserModel.find({ isDeleted: false });
    const listFeature = new ApiFeatures(lisQuery, queryString)
        .fieldsLimiting()
        .pagination();

    const count = await countFeature.query;
    const list = await listFeature.query;

    return { list, count };
}
}
export default new TeacherService();