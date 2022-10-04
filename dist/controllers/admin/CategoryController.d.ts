import { NextFunction } from "express";
import { ReqInterface, ResInterface } from "../../interfaces/ReqInterface";
declare class CategoryController {
    /**
        * @api {post} /api/v1/admin/category Add Category
        * @apiHeader {String} App-Version Version Code 1.0.0.
        * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........
        * @apiVersion 1.0.0
        * @apiName add-category
        * @apiGroup Admin-Category
        *
        * @apiParam {String} name
        * @apiParam {String} image
        *
        * @apiParamExample {json} Request-Body:
        * {
        *   "name": "Men's Fashion",
        *    "image": "category/1657093091432-test9.png"
        * }
        *
        * @apiSuccessExample {json} Success-Response:
        *HTTP/1.1 200 OK
        *{
        *        "status": 201,
        *        "statusText": "CREATED",
        *        "message": "Category created successfully",
        *            "data": {
        *                "category": {
        *                    "name": "Men's Fashion",
        *                    "image": "category/1657093091432-test9.png",
        *                    "isActive": true,
        *                    "isDeleted": false,
        *                    "_id": "62c529be6208e8fd5ceeda28",
        *                    "createdAt": "2022-07-06T06:20:46.771Z",
        *                    "updatedAt": "2022-07-06T06:20:46.771Z",
        *                    "__v": 0
        *                },
        *                "execTime": 94
        *            }
        *        }
        *
        */
    add(req: ReqInterface, res: ResInterface, next: NextFunction): Promise<void>;
    /**
    * @api {put} /api/v1/admin/category Upload Category Image
    * @apiHeader {String} App-Version Version Code 1.0.0.
    * @apiVersion 1.0.0
    * @apiName upload-image
    * @apiGroup Admin-Category
    *
    * @apiParam {File} image.
    *
    *
    * @apiSuccessExample {json} Success-Response:
    *     HTTP/1.1 200 OK
    *    {"status":201,"statusText":"CREATED","message":"Image uploaded successfully","data":{"url":"category/1657018612759-test9.png"}}
    *
    */
    uploadImage(req: ReqInterface, res: ResInterface, next: NextFunction): Promise<void>;
    /**
    * @api {patch} /api/v1/admin/category/_id Update Category
    * @apiHeader {String} App-Version Version Code 1.0.0.
    * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........
    * @apiVersion 1.0.0
    * @apiName update-category
    * @apiGroup Admin-Category
    *
    * @apiDescription pass category _id as params
    * @apiParam {String} name name of category
    * @apiParam {String} image image url of category
    *
    * @apiSuccessExample {json} Success-Response:
    *HTTP/1.1 200 OK
    *{
    *        "status": 200,
    *        "statusText": "SUCCESS",
    *        "message": "Category updated successfully",
    *            "data": {
    *                "category": {
    *                    "_id": "62c3f223f65d83b1b59d0f60",
    *                    "name": "test7",
    *                    "image": "test7",
    *                    "isActive": true,
    *                    "isDeleted": true,
    *                    "createdAt": "2022-07-05T08:11:15.831Z",
    *                    "updatedAt": "2022-07-05T08:11:15.831Z",
    *                    "__v": 0
    *                },
    *                "execTime": 75
    *            }
    *        }
    *
    */
    update(req: ReqInterface, res: ResInterface, next: NextFunction): Promise<void>;
    /**
    * @api {delete} /api/v1/admin/category/_id Delete Category
    * @apiHeader {String} App-Version Version Code 1.0.0.
    * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........
    * @apiVersion 1.0.0
    * @apiName delete-category
    * @apiGroup Admin-Category
    * @apiDescription pass category _id as params
    * @apiSuccessExample {json} Success-Response:
    *HTTP/1.1 200 OK
    *{
    *    "status": 200,
    *    "statusText": "SUCCESS",
    *    "message": "Category deleted successfully",
    *        "data": {
    *            "category": {
    *                "_id": "62c3f223f65d83b1b59d0f60",
    *                "name": "test7",
    *                "image": "test7",
    *                "isActive": true,
    *                "isDeleted": true,
    *                "createdAt": "2022-07-05T08:11:15.831Z",
    *                "updatedAt": "2022-07-05T08:11:15.831Z",
    *                "__v": 0
    *            },
    *            "execTime": 79
    *        }
    *    }
    *
    */
    delete(req: ReqInterface, res: ResInterface, next: NextFunction): Promise<void>;
    /**
   * @api {get} /api/v1/admin/category/_id Get Category
   * @apiHeader {String} App-Version Version Code 1.0.0.
   * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........
   * @apiVersion 1.0.0
   * @apiName Get-category
   * @apiGroup Admin-Category
   * @apiDescription pass category _id as params
   * @apiSuccessExample {json} Success-Response:
   *HTTP/1.1 200 OK
   *{
   *     "status": 200,
   *     "statusText": "SUCCESS",
   *     "message": "Category fetched successfully",
   *     "data": {
   *         "category": {
   *             "_id": "62c3f223f65d83b1b59d0f60",
   *             "name": "test7",
   *             "image": "test7",
   *             "isActive": true,
   *             "isDeleted": true,
   *             "createdAt": "2022-07-05T08:11:15.831Z",
   *             "updatedAt": "2022-07-05T08:11:15.831Z",
   *             "__v": 0
   *         },
   *     }
   *     }
   *
   */
    findCategory(req: ReqInterface, res: ResInterface, next: NextFunction): Promise<void>;
    /**
     * @api {get} /api/v1/admin/category Get Category list
     * @apiHeader {String} App-Version Version Code 1.0.0.
     * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........
     * @apiVersion 1.0.0
     * @apiName Get-category-list
      * @apiGroup Admin-Category
      * @apiSuccessExample {json} Success-Response:
      *HTTP/1.1 200 OK
   *   {
   *    "status": 200,
   *    "statusText": "SUCCESS",
   *    "message": "Category list get successfully",
   *    "data": {
   *        "list": [
   *            {
   *                "_id": "62c6a900437247fa040492c9",
   *                "name": "Men's Fashion",
   *                "image": "category/1657103792052-test3.jpeg",
   *                "isActive": true,
   *                "isDeleted": false,
   *                "createdAt": "2022-07-07T09:36:00.816Z",
   *                "updatedAt": "2022-07-07T09:36:00.816Z"
   *            },
   *            {
   *                "_id": "62c565ce198c336e57acf4a7",
   *                "name": "Women's Fashion",
   *                "image": "category/1657103792052-test3.jpeg",
   *                "isActive": true,
   *                "isDeleted": false,
   *                "createdAt": "2022-07-06T10:37:02.361Z",
   *                "updatedAt": "2022-07-06T10:37:02.361Z"
   *            }
   *        ],
   *        "count": 2,
   *        "execTime": 126
   *    }
   *  }
      *
      */
    list(req: ReqInterface, res: ResInterface, next: NextFunction): Promise<void>;
    addTaxCategories(req: ReqInterface, res: ResInterface, next: NextFunction): Promise<void>;
    /**
   * @api {patch} /api/v1/admin/category/_id/status Update Status Category
   * @apiHeader {String} App-Version Version Code 1.0.0.
   * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4NDAxNzE4LCJleHAiOjE2NTg0ODgxMTh9.XD0OhucPIiCOyEEmAu7xUAaI1VdtiE6WgU8NOk_FpWU
   * @apiVersion 1.0.0
   * @apiName update-status-category
   * @apiGroup Admin-Category
   * @apiDescription pass category _id as params
   * @apiSuccessExample {json} Success-Response:
   *HTTP/1.1 200 OK
  {
  {
   "status": 200,
   "statusText": "SUCCESS",
   "message": "category_update",
   "data": {
       "_id": "62c565ce198c336e57acf4a7",
       "name": "Women's Fashion",
       "image": "category/1657103792052-test3.jpeg",
       "isActive": false,
       "isDeleted": false,
       "createdAt": "2022-07-06T10:37:02.361Z",
       "updatedAt": "2022-07-06T10:37:02.361Z",
       "__v": 0
   }
}
*
   */
    activeupdateStatus(req: ReqInterface, res: ResInterface, next: NextFunction): Promise<void>;
    /**
     * @api {get} /api/v1/admin/category/tax/categorylist Get Tax Category list
     * @apiHeader {String} App-Version Version Code 1.0.0.
     * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........
     * @apiVersion 1.0.0
     * @apiName Get-tax-category-list
      * @apiGroup Admin-Tax
      * @apiSuccessExample {json} Success-Response:
      *HTTP/1.1 200 OK
      * {
      *     "status": 200,
      *     "statusText": "SUCCESS",
      *     "message": "Category list get successfully",
      *     "data": [
      *         {
      *             "_id": "62d8e798fa500418c5d0ae23",
      *             "name": "Hair Loss Products - Medicated",
      *             "product_tax_code": "51182001A0001",
      *             "description": "Topical foams, creams, gels, etc. that prevent hair loss and promote hair regrowth.  These products contain a \"drug facts\" panel or a statement of active ingredients.  This code is intended for sales directly to end consumers that are NOT healthcare providers.",
      *             "createdAt": "2022-07-21T05:43:52.487Z",
      *             "updatedAt": "2022-07-21T05:43:52.487Z",
      *             "__v": 0
      *         },
      *         {
      *             "_id": "62d8e798fa500418c5d0ae24",
      *             "name": "Children's Books",
      *             "product_tax_code": "35010001",
      *             "description": "Children's books including picture books, painting, drawing, and activity books.",
      *             "createdAt": "2022-07-21T05:43:52.487Z",
      *             "updatedAt": "2022-07-21T05:43:52.488Z",
      *             "__v": 0
      *         },
      *         {
      *             "_id": "62d8e798fa500418c5d0ae25",
      *             "name": "Restocking Fee",
      *             "product_tax_code": "93151599A0000",
      *             "description": "A separately stated charge for a return or cancellation of merchandise where the entire original sales price is refunded or credited to the customer.  The restocking fee is normally charged to compensate the seller for costs related to returning the merchandise to the seller’s inventory",
      *             "createdAt": "2022-07-21T05:43:52.488Z",
      *             "updatedAt": "2022-07-21T05:43:52.488Z",
      *             "__v": 0
      *         },
      *         {
      *             "_id": "62d8e798fa500418c5d0ae26",
      *             "name": "Bibles",
      *             "product_tax_code": "81121",
      *             "description": "Bibles",
      *             "createdAt": "2022-07-21T05:43:52.488Z",
      *             "updatedAt": "2022-07-21T05:43:52.488Z",
      *             "__v": 0
      *         }
      *    ]
      * }
      */
    getTaxCategories(req: ReqInterface, res: ResInterface, next: NextFunction): Promise<void>;
}
declare const _default: CategoryController;
export default _default;
