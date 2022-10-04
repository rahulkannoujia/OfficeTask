"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CategoryController_1 = require("../../controllers/app/CategoryController");
class CategoryRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
    }
    getRoutes() {
        this.router.get('/', CategoryController_1.default.categoryList);
        this.router.get('/list', CategoryController_1.default.categoryListAll);
        this.router.get('/:id', CategoryController_1.default.subcategoryList);
    }
}
exports.default = new CategoryRouter().router;
