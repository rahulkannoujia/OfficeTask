"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthRoutes_1 = require("./admin/AuthRoutes");
const CategoryRoutes_1 = require("./admin/CategoryRoutes");
const CategoryRouter_1 = require("./app/CategoryRouter");
const SubcategoryRoutes_1 = require("./admin/SubcategoryRoutes");
const SectionRoutes_1 = require("./admin/SectionRoutes");
const AuthRouter_1 = require("./app/AuthRouter");
const ProductRoutes_1 = require("./admin/ProductRoutes");
const ProductRouter_1 = require("./app/ProductRouter");
const BannerRoutes_1 = require("./admin/BannerRoutes");
const BannerRouter_1 = require("./app/BannerRouter");
class Routes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.app();
        this.admin();
    }
    app() {
        this.router.use('/app/auth', AuthRouter_1.default);
        this.router.use('/app/category', CategoryRouter_1.default);
        this.router.use('/app/product', ProductRouter_1.default);
        this.router.use('/app/banner', BannerRouter_1.default);
    }
    admin() {
        this.router.use('/admin/auth', AuthRoutes_1.default);
        this.router.use('/admin/category', CategoryRoutes_1.default);
        this.router.use('/admin/subcategory', SubcategoryRoutes_1.default);
        this.router.use('/admin/section', SectionRoutes_1.default);
        this.router.use('/admin/product', ProductRoutes_1.default);
        this.router.use('/admin/banner', BannerRoutes_1.default);
    }
}
exports.default = new Routes().router;
