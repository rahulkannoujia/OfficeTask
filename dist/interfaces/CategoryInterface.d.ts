import { Document, ObjectId } from 'mongoose';
export interface CategoryInterface extends Document {
    _id?: ObjectId;
    name: string;
    image: string;
    productSold: number;
    isActive: Boolean;
    isDeleted: Boolean;
}
