
import { Schema, model } from 'mongoose';
import { UserInterface } from '../interfaces/UserInterface';

const userSchema = new Schema({
    contact: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    score: {
        type: Number,
        default:0,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String
    },
    blocked: {
        type: Boolean,
         default: false,
    
},
 
}, { timestamps: true });



const UserModel = model<UserInterface>('user', userSchema);
export default UserModel;