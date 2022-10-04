"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductController_1 = require("../../controllers/app/ProductController");
class ProductRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
    }
    getRoutes() {
        this.router.get('/search', ProductController_1.default.productSearch);
        this.router.get('/list', ProductController_1.default.productList);
    }
}
exports.default = new ProductRouter().router;
