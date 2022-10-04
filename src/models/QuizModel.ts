import { QuizInterface } from "../interfaces/QuizInterface";
import { Schema, model } from 'mongoose';

const quizSchema = new Schema({ 
    quizName: {
        type: String,
        required: true
    },
    quizDescription: {
        type: String,
        required: true
    },
    upload:{
        type: Boolean,
         default: false
    },
    owner: {
        type: String,
    },
    ownerEmail: {
        type: String,
    }
}, { timestamps: true });
const QuizModel = model<QuizInterface>('quiz', quizSchema);
export default QuizModel;
