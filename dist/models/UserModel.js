"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserInterface_1 = require("../interfaces/UserInterface");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    isEmailVerified: {
        type: Boolean,
        required: true,
        default: false
    },
    isAccountActive: {
        type: Boolean,
        required: true,
        default: false
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    currentDeviceToken: {
        type: String,
    },
    currentDeviceId: {
        type: String,
    },
    currentDeviceType: {
        type: String,
        enum: UserInterface_1.DeviceType
    },
    passwordChangedAt: {
        type: Date,
    }
});
userSchema.index({ email: 1 }, { unique: true });
const UserModel = (0, mongoose_1.model)('user', userSchema);
exports.default = UserModel;
