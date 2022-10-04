

import { Schema, model } from 'mongoose';
import { TeacherInterface } from '../interfaces/TeacherInterface';


const teacherSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    role: {
        type: String
    },
    blocked: {
        type: Boolean,
        default: false

    },

}, { timestamps: true });



const TeacherModel = model<TeacherInterface>('teacher', teacherSchema);
export default TeacherModel;