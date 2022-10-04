"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taxcategorySchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    product_tax_code: {
        type: String,
    },
    description: {
        type: String,
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
const TaxCategoryModel = (0, mongoose_1.model)('TaxCategory', taxcategorySchema);
exports.default = TaxCategoryModel;
