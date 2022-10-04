"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const sectionSchema = new mongoose_1.Schema({
    category: {
        type: mongoose_1.Types.ObjectId,
        required: true
    },
    subcategory: {
        type: mongoose_1.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: String,
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
sectionSchema.index({ category: 1, subcategory: 1 });
const SectionModel = (0, mongoose_1.model)('Section', sectionSchema);
exports.default = SectionModel;
