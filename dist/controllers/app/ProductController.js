"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ResponseHelper_1 = require("../../helpers/ResponseHelper");
const ProductModel_1 = require("../../models/ProductModel");
const mongoose_1 = require("mongoose");
class ProductController {
    /**
        * @api {get} /api/v1/app/product/search?search='text' Product Search
        * @apiHeader {String} App-Version Version Code 1.0.0.
        * @apiHeader {String} deviceType 'WEB'|'IOS'|'ANDROID'
        * @apiVersion 1.0.0
        * @apiName search
        * @apiGroup App-Product
        *
        * @apiSuccessExample {json} Success-Response-1:
        *  {
        *        "status": 200,
        *        "statusText": "SUCCESS",
        *        "message": "Product list",
        *        "data": {
        *            "products": [
        *                {
        *                    "_id": "62cfb67426bd109f9ae2d7cf",
        *                    "name": "Mobile",
        *                    "weight": 500,
        *                    "coverPhoto": "product/62cfb67426bd109f9ae2d7cf/cover-photo/default.jpeg"
        *                }
        *            ],
        *            "execTime": 36
        *        }
        *    }
        *
        */
    productSearch(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const queryString = req.query;
                const search = queryString.search;
                const match = {
                    isDeleted: false,
                };
                if (search) {
                    match.name = { '$regex': search };
                }
                const products = yield ProductModel_1.default.find(match, { name: 1, weight: 1, coverPhoto: 1, salePrice: 1, weightUnit: 1 }).limit(20);
                return ResponseHelper_1.default.ok(res, res.__('product_search_list'), { products });
            }
            catch (error) {
                next(error);
            }
        });
    }
    /**
            * @api {get} /api/v1/app/product/list?page=1&limit=10 Product List
            * @apiHeader {String} App-Version Version Code 1.0.0.
            * @apiHeader {String} deviceType 'WEB'|'IOS'|'ANDROID'
            * @apiVersion 1.0.0
            * @apiName list
            * @apiGroup App-Product
            * @apiParam {Number} page page no default 1
            * @apiParam {Number} limit default 20
            * @apiParam {String} [category] category id
            * @apiParam {String} [subcategory] subcategory id
            * @apiParam {String} [section] section id
            * @apiSuccessExample {json} Success-Response-1:
            *  {
            *        "status": 200,
            *        "statusText": "SUCCESS",
            *        "message": "Product fetched successfully",
            *        "data": {
            *                "count": 4,
            *                "products": [
            *                    {
            *                        "_id": "62cfb67426bd109f9ae2d7cf",
            *                        "name": "Mobile",
            *                        "sku": "XUUW1V49R9",
            *                        "price": 50000,
            *                        "categoryId": "62c565ce198c336e57acf4a7",
            *                        "categoryName": "Electronics",
            *                        "subcategoryName": "Digital",
            *                        "subcategoryId": "62cbf77a217ec71559014f5d",
            *                        "author": "samsung",
            *                        "stock": 56,
            *                        "description": "this is very amazing",
            *                        "regularPrice": 40000,
            *                        "salePrice": 45000,
            *                        "taxClass": "abc",
            *                        "taxStatus": "acceepted",
            *                        "stockQuantity": 45,
            *                        "allowBackOrders": true,
            *                        "lowStockThreshold": 34,
            *                        "soldIndividualStock": 677,
            *                        "weight": 500,
            *                        "weightUnit": "gjjgg",
            *                        "dimensions": "vfjdfjf",
            *                        "shippingClass": "firstclass",
            *                        "upSells": true,
            *                        "crossSells": true,
            *                        "color": "blue",
            *                        "material": "fjfgjj",
            *                        "purchasedNote": "gfknfk",
            *                        "menuOrder": "htgt",
            *                        "isReviewEnabled": true,
            *                        "adminCommissionType": "defg",
            *                        "adminCommission": 890,
            *                        "cashbackTypes": [
            *                            {
            *                                "cashbackType": "rtgphhh",
            *                                "_id": "62cfb67426bd109f9ae2d7d0"
            *                            }
            *                        ],
            *                        "photos": [
            *                            "product/62cfb67426bd109f9ae2d7cf/photos/Sample-png-image-500kb.png"
            *                        ],
            *                        "__v": 0,
            *                        "coverPhoto": "product/62cfb67426bd109f9ae2d7cf/cover-photo/default.jpeg"
            *                    }
            *    }
            *
            */
    productList(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let page = Number(req.query.page) || 1;
                let limit = Number(req.query.limit) || 20;
                let skip = (page - 1) * limit;
                const match = {
                    'isDeleted': false
                };
                const category = req.query.category;
                const subcategory = req.query.subcategory;
                const section = req.query.section;
                if (category)
                    match.category = new mongoose_1.Types.ObjectId(category);
                if (subcategory)
                    match.subcategory = new mongoose_1.Types.ObjectId(subcategory);
                if (section)
                    match.section = new mongoose_1.Types.ObjectId(section);
                const aggregate = [
                    {
                        '$match': match
                    },
                    {
                        '$facet': {
                            'count': [
                                {
                                    '$count': 'count'
                                }
                            ],
                            'products': [
                                {
                                    '$skip': skip
                                },
                                {
                                    '$limit': limit
                                },
                                {
                                    '$project': {
                                        'isDeleted': 0
                                    }
                                }
                            ]
                        }
                    },
                    {
                        '$project': {
                            'count': {
                                '$first': '$count.count'
                            },
                            'products': '$products'
                        }
                    }
                ];
                const data = yield ProductModel_1.default.aggregate(aggregate);
                return ResponseHelper_1.default.ok(res, res.__('product_list'), data[0]);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = new ProductController();
