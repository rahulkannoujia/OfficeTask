import { NextFunction } from "express";
import { ReqInterface, ResInterface } from "../../interfaces/ReqInterface";
declare class BannerController {
    /**
        * @api {post} /api/v1/admin/banner Add Bannner
        * @apiHeader {String} App-Version Version Code 1.0.0.
        * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4Mjk0OTQ5LCJleHAiOjE2NTgzODEzNDl9.PjHH-y-fKkDRD5Zw5fA8I029Iwc1ESWxnCYszaRTEpo
        * @apiVersion 1.0.0
        * @apiName add-banner
        * @apiGroup Admin-Banner
        * @apiParam {File} photo
        * @apiParam {String} clickUrl
        * @apiParam {String} deviceType
        * @apiParamExample {json} Request-Body:
        * {
        *   "photo": FileType,
        *   "clickUrl":"bgththjyjytjhtht",
        *   "deviceType":"WEB"
        * }
        *
        * @apiSuccessExample {json} Success-Response:
        *HTTP/1.1 201 created
  {
    "status": 201,
    "statusText": "CREATED",
    "message": "banner_uploaded",
    "data": {
        "clickUrl": "dfjdjgerjrgrpggrrep",
        "photo": "banner/1658300139383-aggregation.png",
        "deviceType": "WEB",
        "isActive": true,
        "isDeleted": false,
        "_id": "62d7a6ed678ab2b95ae8d121",
        "createdAt": "2022-07-20T06:55:41.336Z",
        "updatedAt": "2022-07-20T06:55:41.336Z",
        "__v": 0
    }
}
        *
        */
    addBanner(req: ReqInterface, res: ResInterface, next: NextFunction): Promise<void>;
    /**
        * @api {get} /api/v1/admin/product Get Banner list
        * @apiHeader {String} App-Version Version Code 1.0.0.
        * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU3Njk1MzQzLCJleHAiOjE2NTc3ODE3NDN9.HAJ40QWHuL2QeXo3GVQZKziiiQHbLsq0hyuMM-SgfaY
        * @apiVersion 1.0.0
        * @apiName Get-banner-list
         * @apiGroup Admin-Banner
         * @apiSuccessExample {json} Success-Response:
         *HTTP/1.1 200 OK
      *   {
    "status": 200,
    "statusText": "SUCCESS",
    "message": "Banner list fetch successfully",
    "data": {
        "list": [
            {
                "_id": "62d7a6c9827f44cf6eac3b8e",
                "clickUrl": "dfjdjgerjrgrpggrrep",
                "photo": "banner/1658300102695-aggregation.png",
                "deviceType": "WEB",
                "isActive": true,
                "isDeleted": false,
                "createdAt": "2022-07-20T06:55:05.539Z",
                "updatedAt": "2022-07-20T06:55:05.539Z"
            },
            {
                "_id": "62d7a3c6c20f9c2535949a82",
                "clickUrl": "bgththjyjytjhtht",
                "photo": "banner/1658299332562-Rahul Kannoujia(MCE336).jpeg",
                "deviceType": "MOBILE",
                "isActive": true,
                "isDeleted": false,
                "createdAt": "2022-07-20T06:42:14.078Z",
                "updatedAt": "2022-07-20T06:42:14.078Z"
            }
        ],
        "count": 2,
        "execTime": 104
    }
}
       *
        */
    list(req: ReqInterface, res: ResInterface, next: NextFunction): Promise<void>;
    /**
    * @api {patch} /api/v1/admin/banner/_id/status Update Status Banner
    * @apiHeader {String} App-Version Version Code 1.0.0.
    * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4MzAyNzUzLCJleHAiOjE2NTgzODkxNTN9.sZHSncgjZAdM_gYbP7tIK8NTFTrAo2j10UkG4bHWhxs
    * @apiVersion 1.0.0
    * @apiName update-status-banner
    * @apiGroup Admin-Banner
    * @apiDescription pass banner _id as params
    * @apiSuccessExample {json} Success-Response:
    *HTTP/1.1 200 OK
   {
    "status": 200,
    "statusText": "SUCCESS",
    "message": "Banner update status sucessfully",
    "data": {
        "_id": "62d7a3c6c20f9c2535949a82",
        "clickUrl": "bgththjyjytjhtht",
        "photo": "banner/1658299332562-Rahul Kannoujia(MCE336).jpeg",
        "deviceType": "MOBILE",
        "isActive": false,
        "isDeleted": false,
        "createdAt": "2022-07-20T06:42:14.078Z",
        "updatedAt": "2022-07-20T06:42:14.078Z",
        "__v": 0
    }
}
    *
    */
    activeupdateStatus(req: ReqInterface, res: ResInterface, next: NextFunction): Promise<void>;
}
declare const _default: BannerController;
export default _default;
