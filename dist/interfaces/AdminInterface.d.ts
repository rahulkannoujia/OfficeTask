import { ObjectId } from "mongoose";
export interface AdminInterface {
    _id: ObjectId;
    email: string;
    password: string;
    name: string;
}
