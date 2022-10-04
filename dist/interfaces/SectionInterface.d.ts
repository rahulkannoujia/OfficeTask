import { Document, ObjectId } from 'mongoose';
export interface SectionInterface extends Document {
    _id?: ObjectId;
    category: ObjectId;
    subcategory: ObjectId;
    name: string;
    image: string;
    isActive: Boolean;
    isDeleted: Boolean;
}
