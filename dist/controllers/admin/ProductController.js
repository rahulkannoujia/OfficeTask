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
const ProductService_1 = require("../../services/admin/ProductService");
class ProductController {
    /**
        * @api {post} /api/v1/admin/product Add Product
        * @apiHeader {String} App-Version Version Code 1.0.0.
        * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU3NjkxMjY4LCJleHAiOjE2NTc3Nzc2Njh9.JmW836-NhCtMxWtkD3ezP4aRidSLshjTIgzhIkMYe3w
        * @apiVersion 1.0.0
        * @apiName add-product
        * @apiGroup Admin-Product
        * @apiParam {String} name
        * @apiParam {Number} price
        * @apiParam {String} categoryId
        * @apiParam {String} subcategoryId
        * @apiParam {String} categoryName
        * @apiParam {String} subcategoryName
        * @apiParam {String} author
        * @apiParam {String} stock
        * @apiParam {String} description
        * @apiParam {String} regularPrice
        * @apiParam {Number} salesPrice
        * @apiParam {String} taxClass
        * @apiParam {String} taxStatus
        * @apiParam {Number} stockQuantity
        * @apiParam {Boolean} allowBackOrders
        * @apiParam {Number} lowstockThreshold
        * @apiParam {Number}  soldIndividualStock
        * @apiParam {Number} weight
        * @apiParam {String} weightUnit
        * @apiParam {String} dimension
        * @apiParam {String} shippingClass
        * @apiParam {Boolean} upSells
        * @apiParam {Boolean} crossSells
        * @apiParam {String} color
        * @apiParam {String} material
        * @apiParam {String} purchaseNote
        * @apiParam {String} menuOrder
        * @apiParam {Boolean} isReviewEnabled
        * @apiParam {String} adminCommissionType
        * @apiParam {Number} adminCommission
        * @apiParam {String} productId
        * @apiParam {String} sectionName
        * @apiParam {Array} cashbackTypes
        * @apiParamExample {json} Request-Body:
        *  {
             "name":"Tesla Car",-
            "price":50000,
            "categoryId":"62c565ce198c336e57acf4a7",
            "subcategoryId":"62cbf77a217ec71559014f5d",
            "categoryName":"Electronics",
            "subcategoryName":"Digital",
            "author":"peter",
            "sectionName":"B",
            "stock":56,
            "description":"this is very amazing",
            "regularPrice":"450000",
            "salePrice":40000,
            "taxClass":"firstclass",
            "taxStatus":"acceepted",
            "stockQuantity":45,
            "allowBackOrders":true,
            "lowStockThreshold":34,
            "soldIndividualStock":677,
            "weight":500,
            "weightUnit":"kilogram",
            "dimensions":"2d",
            "shippingClass":"firstclass",
            "upSells":true,
            "crossSells":true,
            "color":"blue",
            "material":"copper",
            "purchasedNote":"gfknfk",
            "menuOrder":"tltmt",
            "isReviewEnabled":true,
            "adminCommissionType":"paytm",
            "adminCommission":"890",
           "cashbackTypes":[{"cashbackType":"rtgphhh","amout":4500}]
}
        *
        * @apiSuccessExample {json} Success-Response:
        *HTTP/1.1 200 OK
        *{
    "status": 201,
    "statusText": "CREATED",
    "message": "product_created",
    "data": {
        "product": {
            "name": "Tesla Car",
            "sku": "BYJB1GP0VI",
            "price": 50000,
            "categoryId": "62c565ce198c336e57acf4a7",
            "categoryName": "Electronics",
            "subcategoryName": "Digital",
            "subcategoryId": "62cbf77a217ec71559014f5d",
            "author": "peter",
            "stock": 56,
            "description": "this is very amazing",
            "regularPrice": 450000,
            "salePrice": 40000,
            "taxClass": "firstclass",
            "taxStatus": "acceepted",
            "stockQuantity": 45,
            "allowBackOrders": true,
            "lowStockThreshold": 34,
            "soldIndividualStock": 677,
            "weight": 500,
            "weightUnit": "kilogram",
            "dimensions": "2d",
            "shippingClass": "firstclass",
            "upSells": true,
            "crossSells": true,
            "color": "blue",
            "material": "copper",
            "purchasedNote": "gfknfk",
            "menuOrder": "tltmt",
            "isReviewEnabled": true,
            "adminCommissionType": "paytm",
            "adminCommission": 890,
            "isDeleted": false,
            "isActive": true,
            "cashbackTypes": [
                {
                    "cashbackType": "rtgphhh",
                    "_id": "62d673902c91e3167bfd75fd"
                }
            ],
            "photos": [],
            "_id": "62d673902c91e3167bfd75fc",
            "__v": 0
        },
        "execTime": 103
    }
}
        *
        */
    add(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productData = {
                    name: req.body.name.toString(),
                    categoryId: req.body.categoryId.toString(),
                    categoryName: req.body.categoryName,
                    subcategoryId: req.body.subcategoryId,
                    subcategoryName: req.body.subcategoryName,
                    author: req.body.author,
                    stock: req.body.stock,
                    description: req.body.description,
                    regularPrice: req.body.regularPrice,
                    salePrice: req.body.salePrice,
                    taxClass: req.body.taxClass,
                    taxClassCode: req.body.taxClassCode,
                    taxStatus: req.body.taxStatus,
                    stockQuantity: req.body.stockQuantity,
                    allowBackOrders: req.body.allowBackOrders,
                    lowStockThreshold: req.body.lowStockThreshold,
                    soldIndividualStock: req.body.soldIndividualStock,
                    weight: req.body.weight,
                    weightUnit: req.body.weightUnit,
                    dimensions: req.body.dimensions,
                    shippingClass: req.body.shippingClass,
                    upSells: req.body.upSells,
                    crossSells: req.body.crossSells,
                    color: req.body.color,
                    material: req.body.material,
                    purchasedNote: req.body.purchasedNote,
                    menuOrder: req.body.menuOrder,
                    isReviewEnabled: req.body.isReviewEnabled,
                    adminCommissionType: req.body.adminCommissionType,
                    adminCommission: req.body.adminCommission,
                    productId: req.body.productId,
                    sectionName: req.body.sectionName,
                    cashbackTypes: req.body.cashbackTypes,
                };
                const product = yield ProductService_1.default.add(productData);
                if (product) {
                    res.logMsg = 'Product added successfully';
                    ResponseHelper_1.default.created(res, res.__('product_created'), { product });
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
    /**
        * @api {get} /api/v1/admin/product Get Product list
        * @apiHeader {String} App-Version Version Code 1.0.0.
        * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU3Njk1MzQzLCJleHAiOjE2NTc3ODE3NDN9.HAJ40QWHuL2QeXo3GVQZKziiiQHbLsq0hyuMM-SgfaY
        * @apiVersion 1.0.0
        * @apiName Get-product-list
         * @apiGroup Admin-Product
         * @apiSuccessExample {json} Success-Response:
         *HTTP/1.1 200 OK
      *   {
      *   {
    "status": 200,
    "statusText": "SUCCESS",
    "message": "product_list",
    "data": {
        "list": [
            {
                "isActive": true,
                "_id": "62cfb67426bd109f9ae2d7cf",
                "name": "Mobile",
                "sku": "XUUW1V49R9",
                "price": 50000,
                "categoryId": "62c565ce198c336e57acf4a7",
                "categoryName": "Electronics",
                "subcategoryName": "Digital",
                "subcategoryId": "62cbf77a217ec71559014f5d",
                "author": "samsung",
                "stock": 56,
                "description": "this is very amazing",
                "regularPrice": 40000,
                "salePrice": 45000,
                "taxClass": "abc",
                "taxStatus": "acceepted",
                "stockQuantity": 45,
                "allowBackOrders": true,
                "lowStockThreshold": 34,
                "soldIndividualStock": 677,
                "weight": 500,
                "weightUnit": "gjjgg",
                "dimensions": "vfjdfjf",
                "shippingClass": "firstclass",
                "upSells": true,
                "crossSells": true,
                "color": "blue",
                "material": "fjfgjj",
                "purchasedNote": "gfknfk",
                "menuOrder": "htgt",
                "isReviewEnabled": true,
                "adminCommissionType": "defg",
                "adminCommission": 890,
                "isDeleted": false,
                "cashbackTypes": [
                    {
                        "cashbackType": "rtgphhh",
                        "_id": "62cfb67426bd109f9ae2d7d0"
                    }
                ],
                "photos": [],
                "coverPhoto": "product/62cfb67426bd109f9ae2d7cf/cover-photo/default.png"
            },
            {
                "isActive": true,
                "_id": "62cfb9dc26bd109f9ae2d7dd",
                "name": "tablefan",
                "sku": "S7XKETDN6G",
                "price": 50000,
                "categoryId": "62c565ce198c336e57acf4a7",
                "categoryName": "Electronics",
                "subcategoryName": "Digital",
                "subcategoryId": "62cbf77a217ec71559014f5d",
                "author": "samsung",
                "stock": 56,
                "description": "this is very amazing",
                "regularPrice": 40000,
                "salePrice": 45000,
                "taxClass": "abc",
                "taxStatus": "acceepted",
                "stockQuantity": 45,
                "allowBackOrders": true,
                "lowStockThreshold": 34,
                "soldIndividualStock": 677,
                "weight": 500,
                "weightUnit": "gjjgg",
                "dimensions": "vfjdfjf",
                "shippingClass": "firstclass",
                "upSells": true,
                "crossSells": true,
                "color": "blue",
                "material": "fjfgjj",
                "purchasedNote": "gfknfk",
                "menuOrder": "htgt",
                "isReviewEnabled": true,
                "adminCommissionType": "defg",
                "adminCommission": 890,
                "isDeleted": false,
                "cashbackTypes": [
                    {
                        "cashbackType": "rtgphhh",
                        "_id": "62d1088d6b016289b16830dd"
                    }
                ],
                "photos": [
                    "product/62cfb9dc26bd109f9ae2d7dd/photos/annie-spratt-ncQ2sguVlgo-unsplash.jpg"
                ],
                "coverPhoto": "product/62cfb9dc26bd109f9ae2d7dd/cover-photo/default.jpeg"
            },
            {
                "_id": "62d673902c91e3167bfd75fc",
                "name": "Tesla Car",
                "sku": "BYJB1GP0VI",
                "price": 50000,
                "categoryId": "62c565ce198c336e57acf4a7",
                "categoryName": "Electronics",
                "subcategoryName": "Digital",
                "subcategoryId": "62cbf77a217ec71559014f5d",
                "author": "peter",
                "stock": 56,
                "description": "this is very amazing",
                "regularPrice": 450000,
                "salePrice": 40000,
                "taxClass": "firstclass",
                "taxStatus": "acceepted",
                "stockQuantity": 45,
                "allowBackOrders": true,
                "lowStockThreshold": 34,
                "soldIndividualStock": 677,
                "weight": 500,
                "weightUnit": "kilogram",
                "dimensions": "2d",
                "shippingClass": "firstclass",
                "upSells": true,
                "crossSells": true,
                "color": "blue",
                "material": "copper",
                "purchasedNote": "gfknfk",
                "menuOrder": "tltmt",
                "isReviewEnabled": true,
                "adminCommissionType": "paytm",
                "adminCommission": 890,
                "isDeleted": false,
                "isActive": true,
                "cashbackTypes": [
                    {
                        "cashbackType": "rtgphhh",
                        "_id": "62d673902c91e3167bfd75fd"
                    }
                ],
                "photos": []
            }
        ],
        "count": 4,
        "execTime": 468
    }
}
         *
         */
    list(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const queryString = req.query;
                const data = yield ProductService_1.default.list(queryString);
                if (data) {
                    res.logMsg = 'Product list fetch successfully';
                    return ResponseHelper_1.default.ok(res, res.__('product_list'), data);
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
    /**
   * @api {put} /api/v1/admin/product/_id Upload Product Image
   * @apiHeader {String} App-Version Version Code 1.0.0.
   * @apiVersion 1.0.0
   * @apiName upload-image
   * @apiGroup Admin-Product
   * @apiParam {File} image.
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *    {"status":201,"statusText":"CREATED","message":"photo_uploaded","data":{"product":{"_id":"62ce65a3aa1ac7033c583ec9","name":"Watercooler","sku":"QL8E9T9JJG","price":50000,"categoryId":"62c565ce198c336e57acf4a7","categoryName":"Electronics","subcategoryName":"Digital","subcategoryId":"62cbf77a217ec71559014f5d","author":"samsung","stock":56,"description":"this is very amazing","regularPrice":40000,"salePrice":45000,"taxClass":"abc","taxStatus":"acceepted","stockQuantity":45,"allowBackOrders":true,"lowStockThreshold":34,"soldIndividualStock":677,"weight":500,"weightUnit":"gjjgg","dimensions":"vfjdfjf","shippingClass":"firstclass","upSells":true,"crossSells":true,"color":"blue","material":"fjfgjj","purchasedNote":"gfknfk","menuOrder":"htgt","isReviewEnabled":true,"adminCommissionType":"defg","adminCommission":890,"cashbackTypes":[{"cashbackType":"rtgphhh","_id":"62ce65a3aa1ac7033c583eca"}],"photos":["product/62ce65a3aa1ac7033c583ec9/photos/wefundUS.png"],"__v":0,"isDeleted":true,"coverPhoto":"product/62ce65a3aa1ac7033c583ec9/cover-photo/default.png"},"execTime":12430}}
   *
   */
    uploadImage(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productId = req.params.id;
                const photos = req.files.photos;
                const coverPhoto = req.files.coverPhoto;
                if (!photos)
                    return ResponseHelper_1.default.badRequest(res, res.__('photo_is_required'));
                const product = yield ProductService_1.default.uploadImage(productId, photos, coverPhoto);
                if (product) {
                    res.logMsg = 'Product image uploaded successfully';
                    return ResponseHelper_1.default.created(res, res.__('photo_uploaded'), { product });
                }
                else {
                    return ResponseHelper_1.default.serverError(res, res.__('s3_error'));
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
    /**
      * @api {put} /api/v1/admin/product/_id Change CoverPhoto Product
      * @apiHeader {String} App-Version Version Code 1.0.0.
      * @apiVersion 1.0.0
      * @apiName change-coverImage
      * @apiGroup Admin-Product
      * @apiParam {File} coverPhot
      * @apiSuccessExample {json} Success-Response:
      *     HTTP/1.1 200 OK
      *   {"status":200,"statusText":"SUCCESS","message":"coverPhoto_uploaded","data":{"product":{"_id":"62cfb67426bd109f9ae2d7cf","name":"Mobile","sku":"XUUW1V49R9","price":50000,"categoryId":"62c565ce198c336e57acf4a7","categoryName":"Electronics","subcategoryName":"Digital","subcategoryId":"62cbf77a217ec71559014f5d","author":"samsung","stock":56,"description":"this is very amazing","regularPrice":40000,"salePrice":45000,"taxClass":"abc","taxStatus":"acceepted","stockQuantity":45,"allowBackOrders":true,"lowStockThreshold":34,"soldIndividualStock":677,"weight":500,"weightUnit":"gjjgg","dimensions":"vfjdfjf","shippingClass":"firstclass","upSells":true,"crossSells":true,"color":"blue","material":"fjfgjj","purchasedNote":"gfknfk","menuOrder":"htgt","isReviewEnabled":true,"adminCommissionType":"defg","adminCommission":890,"isDeleted":false,"cashbackTypes":[{"cashbackType":"rtgphhh","_id":"62cfb67426bd109f9ae2d7d0"}],"photos":[],"__v":1,"coverPhoto":"product/62cfb67426bd109f9ae2d7cf/cover-photo/default.png"},"execTime":11064}}
      *
      */
    changeCoverImage(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.files.coverPhoto);
                const productId = req.params.id;
                const coverPhoto = req.files.coverPhoto;
                if (!coverPhoto)
                    return ResponseHelper_1.default.badRequest(res, res.__('coverphoto_is_required'));
                const product = yield ProductService_1.default.changeCoverPhoto(coverPhoto, productId);
                if (product) {
                    res.logMsg = 'Product coverPhoto uploaded successfully';
                    return ResponseHelper_1.default.ok(res, res.__('coverPhoto_uploaded'), { product });
                }
                else {
                    return ResponseHelper_1.default.serverError(res, res.__('s3_error'));
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
    /**
        * @api {put} /api/v1/admin/product/edit/id Edit Product
        * @apiHeader {String} App-Version Version Code 1.0.0.
        * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU3Nzk4NTU4LCJleHAiOjE2NTc4ODQ5NTh9.8K6BRcRLY49xmeAx-nHYRh12QclyhA6YF2A0RBypjdQ
        * @apiVersion 1.0.0
        * @apiName edit-product
        * @apiGroup Admin-Product
        * @apiParam {String} name
        * @apiParam {Number} price
        * @apiParam {String} categoryId
        * @apiParam {String} subcategoryId
        * @apiParam {String} categoryName
        * @apiParam {String} subcategoryName
        * @apiParam {String} author
        * @apiParam {String} stock
        * @apiParam {String} description
        * @apiParam {String} regularPrice
        * @apiParam {Number} salesPrice
        * @apiParam {String} taxClass
        * @apiParam {String} taxStatus
        * @apiParam {Number} stockQuantity
        * @apiParam {Boolean} allowBackOrders
        * @apiParam {Number} lowstockThreshold
        * @apiParam {Number}  soldIndividualStock
        * @apiParam {Number} weight
        * @apiParam {String} weightUnit
        * @apiParam {String} dimension
        * @apiParam {String} shippingClass
        * @apiParam {Boolean} upSells
        * @apiParam {Boolean} crossSells
        * @apiParam {String} color
        * @apiParam {String} material
        * @apiParam {String} purchaseNote
        * @apiParam {String} menuOrder
        * @apiParam {Boolean} isReviewEnabled
        * @apiParam {String} adminCommissionType
        * @apiParam {Number} adminCommission
        * @apiParam {String} productId
        * @apiParam {String} sectionName
        * @apiParam {Array} cashbackTypes
        * @apiParamExample {json} Request-Body:
        * {
        *    "name":"tablefan",
             "categoryId":"62c565ce198c336e57acf4a7",
             "subcategoryId":"62cbf77a217ec71559014f5d",
             "categoryName":"Electronics",
             "subcategoryName":"Digital",
             "author":"samsung",
             "sectionName":"B",
             "stock":56,
             "description":"this is very amazing",
             "regularPrice":"40000",
             "salePrice":45000,
             "taxClass":"abc",
             "taxStatus":"acceepted",
             "stockQuantity":45,
             "allowBackOrders":true,
             "lowStockThreshold":34,
             "soldIndividualStock":677,
             "weight":500,
             "weightUnit":"gjjgg",
             "dimensions":"vfjdfjf",
             "shippingClass":"firstclass",
             "upSells":true,
             "crossSells":true,
             "color":"blue",
             "material":"fjfgjj",
             "purchasedNote":"gfknfk",
             "menuOrder":"htgt",
             "isReviewEnabled":true,
             "adminCommissionType":"defg",
             "adminCommission":"890",
             "cashbackTypes":[{"cashbackType":"rtgphhh"}]
              * }
        *
        * @apiSuccessExample {json} Success-Response:
        *HTTP/1.1 200 OK
        *{{
    "status": 200,
    "statusText": "SUCCESS",
    "message": "Product edited sucessfully",
    "data": {
        "product": {
            "_id": "62cfb9dc26bd109f9ae2d7dd",
            "name": "tablefan",
            "sku": "S7XKETDN6G",
            "price": 50000,
            "categoryId": "62c565ce198c336e57acf4a7",
            "categoryName": "Electronics",
            "subcategoryName": "Digital",
            "subcategoryId": "62cbf77a217ec71559014f5d",
            "author": "samsung",
            "stock": 56,
            "description": "this is very amazing",
            "regularPrice": 40000,
            "salePrice": 45000,
            "taxClass": "abc",
            "taxStatus": "acceepted",
            "stockQuantity": 45,
            "allowBackOrders": true,
            "lowStockThreshold": 34,
            "soldIndividualStock": 677,
            "weight": 500,
            "weightUnit": "gjjgg",
            "dimensions": "vfjdfjf",
            "shippingClass": "firstclass",
            "upSells": true,
            "crossSells": true,
            "color": "blue",
            "material": "fjfgjj",
            "purchasedNote": "gfknfk",
            "menuOrder": "htgt",
            "isReviewEnabled": true,
            "adminCommissionType": "defg",
            "adminCommission": 890,
            "isDeleted": false,
            "cashbackTypes": [
                {
                    "cashbackType": "rtgphhh",
                    "_id": "62d009eede7a9024103daed4"
                }
            ],
            "photos": [
                "product/62cfb9dc26bd109f9ae2d7dd/photos/annie-spratt-ncQ2sguVlgo-unsplash.jpg"
            ],
            "__v": 0,
            "coverPhoto": "product/62cfb9dc26bd109f9ae2d7dd/cover-photo/default.jpeg"
        },
        "execTime": 83
    }
}
 **/
    edit(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productData = {
                    name: req.body.name.toString(),
                    categoryId: req.body.categoryId.toString(),
                    categoryName: req.body.categoryName,
                    subcategoryId: req.body.subcategoryId,
                    subcategoryName: req.body.subcategoryName,
                    author: req.body.author,
                    stock: req.body.stock,
                    description: req.body.description,
                    regularPrice: req.body.regularPrice,
                    salePrice: req.body.salePrice,
                    taxClass: req.body.taxClass,
                    taxStatus: req.body.taxStatus,
                    taxClassCode: req.body.taxClassCode,
                    stockQuantity: req.body.stockQuantity,
                    allowBackOrders: req.body.allowBackOrders,
                    lowStockThreshold: req.body.lowStockThreshold,
                    soldIndividualStock: req.body.soldIndividualStock,
                    weight: req.body.weight,
                    weightUnit: req.body.weightUnit,
                    dimensions: req.body.dimensions,
                    shippingClass: req.body.shippingClass,
                    upSells: req.body.upSells,
                    crossSells: req.body.crossSells,
                    color: req.body.color,
                    material: req.body.material,
                    purchasedNote: req.body.purchasedNote,
                    menuOrder: req.body.menuOrder,
                    isReviewEnabled: req.body.isReviewEnabled,
                    adminCommissionType: req.body.adminCommissionType,
                    adminCommission: req.body.adminCommission,
                    productId: req.body.productId,
                    sectionName: req.body.sectionName,
                    cashbackTypes: req.body.cashbackTypes,
                };
                console.log(productData);
                const product = yield ProductService_1.default.edit(productData, req.params.id);
                if (product) {
                    res.logMsg = 'Product edited successfully';
                    ResponseHelper_1.default.ok(res, res.__('product_edited'), { product });
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
    /**
      * @api {delete} /api/v1/admin/product/_id Delete Product
      * @apiHeader {String} App-Version Version Code 1.0.0.
      * @apiHeader {String} Authorization
      * @apiVersion 1.0.0
      * @apiName Delete Product
      * @apiGroup Admin-Product
      * @apiDescription pass product _id as params
      * @apiSuccessExample {json} Success-Response:
      *HTTP/1.1 200 OK
      *
   {
    {
    "status": 200,
    "statusText": "SUCCESS",
    "message": "Product deleted succesfully",
    "data": {
        "product": {
            "_id": "62ce65a3aa1ac7033c583ec9",
            "name": "Watercooler",
            "sku": "QL8E9T9JJG",
            "price": 50000,
            "categoryId": "62c565ce198c336e57acf4a7",
            "categoryName": "Electronics",
            "subcategoryName": "Digital",
            "subcategoryId": "62cbf77a217ec71559014f5d",
            "author": "samsung",
            "stock": 56,
            "description": "this is very amazing",
            "regularPrice": 40000,
            "salePrice": 45000,
            "taxClass": "abc",
            "taxStatus": "acceepted",
            "stockQuantity": 45,
            "allowBackOrders": true,
            "lowStockThreshold": 34,
            "soldIndividualStock": 677,
            "weight": 500,
            "weightUnit": "gjjgg",
            "dimensions": "vfjdfjf",
            "shippingClass": "firstclass",
            "upSells": true,
            "crossSells": true,
            "color": "blue",
            "material": "fjfgjj",
            "purchasedNote": "gfknfk",
            "menuOrder": "htgt",
            "isReviewEnabled": true,
            "adminCommissionType": "defg",
            "adminCommission": 890,
            "cashbackTypes": [
                {
                    "cashbackType": "rtgphhh",
                    "_id": "62ce65a3aa1ac7033c583eca"
                }
            ],
            "photos": [],
            "__v": 0,
            "isDeleted": true
        },
        "execTime": 67
    }
}
      *
      */
    delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productId = req.params.id;
                const product = yield ProductService_1.default.delete(productId);
                if (product) {
                    res.logMsg = 'Product deleted successfully';
                    ResponseHelper_1.default.ok(res, res.__('product_deleted'), { product });
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
    deleteCoverImage(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('req.params', req.params);
                const productId = req.params.id;
                const coverPhoto = req.query.coverPhoto;
                const product = yield ProductService_1.default.deleteCoverImage(productId, coverPhoto);
                if (product) {
                    res.logMsg = 'Product deleted successfully';
                    ResponseHelper_1.default.ok(res, res.__('product_deleted'), { product });
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
    deletePhoto(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('req.params', req.params);
                const productId = req.params.id;
                const photos = req.query.photos;
                const product = yield ProductService_1.default.deletePhoto(productId, photos);
                if (product) {
                    res.logMsg = 'ProductPhoto deleted successfully';
                    ResponseHelper_1.default.ok(res, res.__('product_deleted'), { product });
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
    fetchProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productId = req.params.id;
                const data = yield ProductService_1.default.fetchProduct(productId);
                if (data) {
                    res.logMsg = 'Product details fetch successfully';
                    return ResponseHelper_1.default.ok(res, res.__('product_details'), data);
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
    /**
   * @api {patch} /api/v1/admin/product/_id/status Update Status Product
   * @apiHeader {String} App-Version Version Code 1.0.0.
   * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDkzODExMDgyMDE1MGUzODI5MjgxOCIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4NDAyODU4LCJleHAiOjE2NTg0ODkyNTh9.OdgFA-wyMD82itAqPFaLdPGh-HitGUA9ft9l_vGWcDo
   * @apiVersion 1.0.0
   * @apiName update-status-product
   * @apiGroup Admin-Product
   * @apiDescription pass product _id as params
   * @apiSuccessExample {json} Success-Response:
   *HTTP/1.1 200 OK
  {
   "status": 200,
   "statusText": "SUCCESS",
   "message": "Product update status  successfully",
   "data": {
       "_id": "62d7cccc86616ebe475db688",
       "name": "samsung",
       "sku": "54JI1QD9BL",
       "categoryId": "62d0136cff9b93f5383b08b1",
       "categoryName": "does nt updated trying 32",
       "subcategoryName": "testinggg",
       "subcategoryId": "62d15e22ff9b93f5383b5815",
       "author": "testedd",
       "stock": 3400,
       "description": "testeddddd",
       "regularPrice": 1000,
       "salePrice": 2000,
       "taxClass": "testedd",
       "taxStatus": "accepted",
       "stockQuantity": 2000,
       "allowBackOrders": true,
       "lowStockThreshold": 300,
       "soldIndividualStock": 2000,
       "weight": 24,
       "weightUnit": "kg",
       "dimensions": "3dimensions",
       "shippingClass": "2000",
       "upSells": true,
       "crossSells": false,
       "color": "red",
       "material": "teteddddd",
       "purchasedNote": "testedd",
       "menuOrder": "testedd",
       "isReviewEnabled": true,
       "adminCommissionType": "tetedd",
       "adminCommission": 200,
       "isDeleted": false,
       "isActive": false,
       "cashbackTypes": [
           {
               "cashbackType": "IndividualUser",
               "amount": 1000,
               "_id": "62d7d698c075177dd13a9006"
           },
           {
               "cashbackType": "GoldCashback",
               "amount": 5000,
               "_id": "62d7d698c075177dd13a9007"
           },
           {
               "cashbackType": "BronzeCashback",
               "amount": 3000,
               "_id": "62d7d698c075177dd13a9008"
           },
           {
               "cashbackType": "SilverCashback",
               "amount": 6000,
               "_id": "62d7d698c075177dd13a9009"
           }
       ],
       "photos": [
           "product/62d7cccc86616ebe475db688/photos/download.jpeg",
           "product/62d7cccc86616ebe475db688/photos/download (1).jpeg",
           "product/62d7cccc86616ebe475db688/photos/profile.png"
       ],
       "__v": 0,
       "coverPhoto": "product/62d7cccc86616ebe475db688/cover-photo/default.jpeg",
       "sectionName": "tesedd checkingg"
   }
}
   *
   */
    activeupdateStatus(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let productId = req.params.id;
                let Product = yield ProductModel_1.default.findOne({
                    "_id": productId
                });
                Product.isActive = !Product.isActive;
                Product.save();
                res.logMsg = 'Product update status  successfully';
                return ResponseHelper_1.default.ok(res, res.__('product_change_status'), Product);
            }
            catch (error) {
                next(error);
            }
        });
    }
    ;
    test(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // await ProductModel.updateMany({}, { createdAt: new Date(), updatedAt: new Date() });
                // await CategoryModel.updateMany({}, { productSold: 0 })
                res.send('ok');
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = new ProductController();
