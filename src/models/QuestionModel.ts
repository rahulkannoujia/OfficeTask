
import { Schema, model } from 'mongoose';
import { QuestionInterface } from "../interfaces/QuestionInterface";
const questionSchema =  new Schema({
    quizId: {
        type: String,
        required: true
    },
    
    questionText:{
        type: String, 
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    options:{
        type  :Array,
        default:[]
    }
}, { timestamps: true });
const QuestionModel = model<QuestionInterface>('question', questionSchema);
export default QuestionModel;
