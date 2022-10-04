import { Document, ObjectId } from 'mongoose';
/**
 * Interface that represent User
 * @interface
 */
export interface UserInterface extends Document {
    _id?: ObjectId;
    email: string;
    password: string;
    name: string;
    isEmailVerified: boolean;
    currentDeviceToken: string;
    currentDeviceId: string;
    isAccountActive: boolean;
    currentDeviceType: DeviceType;
    lastLogin: Date;
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
export declare enum DeviceType {
    web = "WEB",
    ios = "IOS",
    android = "ANDROID"
}
export {};
