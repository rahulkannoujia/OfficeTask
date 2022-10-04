import { Document, ObjectId } from 'mongoose';

export interface QuestionInterface extends Document{
    _id?: ObjectId;
   quizId:string,
   quizText:string,
   answer:string,
   option:string[],

}