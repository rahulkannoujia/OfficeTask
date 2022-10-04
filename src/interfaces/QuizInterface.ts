import { Document, ObjectId } from 'mongoose';

export interface QuizInterface extends Document{
    _id?: ObjectId;
   quizName:string,
   quizDescription:string,
   owner:string,
   ownerEmail:string,

}