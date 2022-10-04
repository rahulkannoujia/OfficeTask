

import { QuestionInterface } from "../../interfaces/QuestionInterface";
import { QuizInterface } from "../../interfaces/QuizInterface";
import { UserInterface } from "../../interfaces/UserInterface";
import QuestionModel from "../../models/QuestionModel";
import QuizModel from "../../models/QuizModel";
import TeacherModel from "../../models/TeacherModel";
import { ApiFeatures } from "../../utils/ApiFeatures";

class UserService{

     /**
    * @description listing of user
    * @param queryString req query object
    * @params User id of user
    * @returns 
    */

    async list(
        queryString: any,
        user: string
    ): Promise<{ count: number, list: UserInterface[] }> {
        const countQuery = TeacherModel.find({ isDeleted: false, user });
        const countFeature = new ApiFeatures(countQuery, queryString)
            .getCount();

        const lisQuery = TeacherModel.find({ isDeleted: false, user });
        const listFeature = new ApiFeatures(lisQuery, queryString)
            .pagination();

        const count = await countFeature.query;
        const list = await listFeature.query;

        return { count, list };
    }
     
    async quizList(
        queryString: any,
        
    ): Promise<{ count: number, list: UserInterface[] }> {
        const countQuery = QuizModel.find({ isDeleted: false });
        const countFeature = new ApiFeatures(countQuery, queryString)
            .getCount();

        const lisQuery = QuizModel.find({ isDeleted: false });
        const listFeature = new ApiFeatures(lisQuery, queryString)
            .pagination();

        const count = await countFeature.query;
        const list = await listFeature.query;

        return { count, list };
    }
     
    async questionList(
        queryString: any,
       
    ): Promise<{ count: number, list: UserInterface[] }> {
        const countQuery = QuestionModel.find({ isDeleted: false });
        const countFeature = new ApiFeatures(countQuery, queryString)
            .getCount();

        const lisQuery = QuestionModel.find({ isDeleted: false });
        const listFeature = new ApiFeatures(lisQuery, queryString)
            .pagination();

        const count = await countFeature.query;
        const list = await listFeature.query;

        return { count, list };
    }
    async viewTeacher(
        queryString: any,
       
    ): Promise<{ count: number, list: UserInterface[] }> {
        const countQuery = TeacherModel.find({ isDeleted: false });
        const countFeature = new ApiFeatures(countQuery, queryString)
            .getCount();

        const lisQuery = TeacherModel.find({ isDeleted: false });
        const listFeature = new ApiFeatures(lisQuery, queryString)
            .pagination();

        const count = await countFeature.query;
        const list = await listFeature.query;

        return { count, list };
    }

    async deleteQuiz(
        id: string,
    ): Promise<QuizInterface> {
        const deletedQuiz: QuizInterface = await QuestionModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
        return deletedQuiz;
    }
    
    async deleteQuestion(
        id: string,
    ): Promise<QuestionInterface> {
        const deletedQuestion: QuestionInterface = await QuestionModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
        return deletedQuestion;
    }
}
export default new UserService();