import { Document, ObjectId } from "mongoose";

/**
 * Interface that represent User
 * @interface
 */
export interface UserInterface extends Document {
  _id?: ObjectId;
  email: string;
  password: string;
  contact: number;
  role: string;
  blocked: boolean;
  createdAt: Date;
  updateAt: Date;
  passwordChangedAt: Date;
  deviceInfo: DeviceInfo[];
}

/**
 *  Interface for that represent Device Info.
 * @interface
 */
interface DeviceInfo {
  deviceId: string;
  deviceToken: string;
  deviceType: DeviceType;
}

export enum DeviceType {
  web = "WEB",
  ios = "IOS",
  android = "ANDROID",
}
