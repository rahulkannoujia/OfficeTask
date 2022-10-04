import { Document, ObjectId } from "mongoose";

/**
 * Interface that represent Teacher
 * @interface
 */
export interface TeacherInterface extends Document {
  _id?: ObjectId;
  email: string;
  password: string;
  contact: number;
  role: string;
  blocked: boolean;
  createdAt: Date;
  updateAt: Date;
 
 
}


