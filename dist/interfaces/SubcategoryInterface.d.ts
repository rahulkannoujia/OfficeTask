import { Document, ObjectId } from 'mongoose';
export interface SubCategoryInterface extends Document {
    _id?: ObjectId;
    category: ObjectId;
    name: string;
    image: string;
    isActive: Boolean;
    isDeleted: Boolean;
}
