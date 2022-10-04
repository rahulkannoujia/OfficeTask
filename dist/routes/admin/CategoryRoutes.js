"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CategoryController_1 = require("../../controllers/admin/CategoryController");
const AuthenticationMiddleware_1 = require("../../middlewares/AuthenticationMiddleware");
const FileUploadMiddleware_1 = require("../../middlewares/FileUploadMiddleware");
const CategoryValidator_1 = require("../../validators/admin/CategoryValidator");
class CategoryRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
        this.getRoutes();
        this.putRoutes();
    }
    postRoutes() {
        this.router.post('/', AuthenticationMiddleware_1.default.admin, CategoryValidator_1.default.add, CategoryController_1.default.add);
    }
    patchRoutes() {
        this.router.patch('/:id', AuthenticationMiddleware_1.default.admin, CategoryValidator_1.default.update, CategoryController_1.default.update);
        this.router.patch('/:id/status', AuthenticationMiddleware_1.default.admin, CategoryController_1.default.activeupdateStatus);
    }
    getRoutes() {
        this.router.get('/', AuthenticationMiddleware_1.default.admin, CategoryController_1.default.list);
        this.router.get('/:id', AuthenticationMiddleware_1.default.admin, CategoryController_1.default.findCategory);
        this.router.get('/tax/categorylist', AuthenticationMiddleware_1.default.admin, CategoryController_1.default.getTaxCategories);
        // this.router.get(
        //     '/tax/category',
        //     Authentication.admin,
        //     CategoryController.taxCategoryList
        // );
    }
    deleteRoutes() {
        this.router.delete('/:id', AuthenticationMiddleware_1.default.admin, CategoryController_1.default.delete);
    }
    putRoutes() {
        this.router.put('/', AuthenticationMiddleware_1.default.admin, FileUploadMiddleware_1.default.upload, CategoryController_1.default.uploadImage);
    }
}
exports.default = new CategoryRoutes().router;
