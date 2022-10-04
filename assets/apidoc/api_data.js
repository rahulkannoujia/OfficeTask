define({ "api": [
  {
    "type": "post",
    "url": "/api/app/admin/change-password",
    "title": "Change Password",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "change-password",
    "group": "Admin-Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwordCurrent",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": 200,\n   \"message\": \"password changed successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n       \"status\": 400,\n       \"message\": \"Invalid password\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/AuthController.ts",
    "groupTitle": "Admin-Auth"
  },
  {
    "type": "post",
    "url": "/api/v1/admin/auth/login",
    "title": "Log In",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "login",
    "group": "Admin-Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        \"status\": 200,\n        \"data\": {\n          \"admin\": {\n                  \"email\": \"admin@wefundus.com\",\n                  \"_id\": \"615bdfd735a0fd20a8d80d02\",\n                  \"name\": \"We Fund us\",\n                  \"createdAt\": \"2021-10-05T05:17:11.254Z\"\n                },\n                \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9UyZmViNDFkOGU1NDZ.....\"\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n       \"status\": 400,\n       \"message\": \"Incorrect email or password\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/AuthController.ts",
    "groupTitle": "Admin-Auth"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/banner",
    "title": "Get Banner list",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU3Njk1MzQzLCJleHAiOjE2NTc3ODE3NDN9.HAJ40QWHuL2QeXo3GVQZKziiiQHbLsq0hyuMM-SgfaY</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Get-banner-list",
    "group": "Admin-Banner",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"Banner list fetch successfully\",\n    \"data\": {\n        \"list\": [\n            {\n                \"_id\": \"62d7a6c9827f44cf6eac3b8e\",\n                \"clickUrl\": \"dfjdjgerjrgrpggrrep\",\n                \"photo\": \"banner/1658300102695-aggregation.png\",\n                \"deviceType\": \"WEB\",\n                \"isActive\": true,\n                \"isDeleted\": false,\n                \"createdAt\": \"2022-07-20T06:55:05.539Z\",\n                \"updatedAt\": \"2022-07-20T06:55:05.539Z\"\n            },\n            {\n                \"_id\": \"62d7a3c6c20f9c2535949a82\",\n                \"clickUrl\": \"bgththjyjytjhtht\",\n                \"photo\": \"banner/1658299332562-Rahul Kannoujia(MCE336).jpeg\",\n                \"deviceType\": \"MOBILE\",\n                \"isActive\": true,\n                \"isDeleted\": false,\n                \"createdAt\": \"2022-07-20T06:42:14.078Z\",\n                \"updatedAt\": \"2022-07-20T06:42:14.078Z\"\n            }\n        ],eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDkzODExMDgyMDE1MGUzODI5MjgxOCIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4NzI3MTk1LCJleHAiOjE2NTg4MTM1OTV9.BRs-O4Sy8VzrwW4RdhQXem6rHHLlAXf9WzWVkF2QIxgime\": 104\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/BannerController.ts",
    "groupTitle": "Admin-Banner"
  },
  {
    "type": "post",
    "url": "/api/v1/admin/banner",
    "title": "Add Banner",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4Mjk0OTQ5LCJleHAiOjE2NTgzODEzNDl9.PjHH-y-fKkDRD5Zw5fA8I029Iwc1ESWxnCYszaRTEpo</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "add-banner",
    "group": "Admin-Banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "photo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clickUrl",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n  \"photo\": FileType,\n  \"clickUrl\":\"bgththjyjytjhtht\",\n  \"deviceType\":\"WEB\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 created\n  {\n    \"status\": 201,\n    \"statusText\": \"CREATED\",\n    \"message\": \"banner_uploaded\",\n    \"data\": {\n        \"clickUrl\": \"dfjdjgerjrgrpggrrep\",\n        \"photo\": \"banner/1658300139383-aggregation.png\",\n        \"deviceType\": \"WEB\",\n        \"isActive\": true,\n        \"isDeleted\": false,\n        \"_id\": \"62d7a6ed678ab2b95ae8d121\",\n        \"createdAt\": \"2022-07-20T06:55:41.336Z\",\n        \"updatedAt\": \"2022-07-20T06:55:41.336Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/BannerController.ts",
    "groupTitle": "Admin-Banner"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/banner/_id/edit",
    "title": "Edit Banner",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4Mjk0OTQ5LCJleHAiOjE2NTgzODEzNDl9.PjHH-y-fKkDRD5Zw5fA8I029Iwc1ESWxnCYszaRTEpo</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "edit-banner",
    "group": "Admin-Banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "photo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clickUrl",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n  \"photo\": FileType,\n  \"clickUrl\":\"fkgkfkjgjbhgjgojrohjtpohjtohpjh\",\n  \"deviceType\":\"MOBILE\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 success\n      {\n        \"status\": 200,\n        \"statusText\": \"SUCCESS\",\n        \"message\": \"Banner edited successfully\",\n        \"data\": {\n            \"banner\": {\n                \"_id\": \"62d8f7558ecb874779972d57\",\n                \"clickUrl\": \"fkgkfkjgjbhgjgojrohjtpohjtohpjh\",\n                \"photo\": \"banner/1658744160299-aggregation.png\",\n                \"deviceType\": \"MOBILE\",\n                \"isActive\": true,\n                \"isDeleted\": false,\n                \"createdAt\": \"2022-07-21T06:51:01.706Z\",\n                \"updatedAt\": \"2022-07-21T06:51:01.706Z\",\n                \"__v\": 0\n            },\n            \"execTime\": 2053\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/BannerController.ts",
    "groupTitle": "Admin-Banner"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/banner/_id/status",
    "title": "Update Status Banner",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4MzAyNzUzLCJleHAiOjE2NTgzODkxNTN9.sZHSncgjZAdM_gYbP7tIK8NTFTrAo2j10UkG4bHWhxs</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "update-status-banner",
    "group": "Admin-Banner",
    "description": "<p>pass banner _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"Banner update status sucessfully\",\n    \"data\": {\n        \"_id\": \"62d7a3c6c20f9c2535949a82\",\n        \"clickUrl\": \"bgththjyjytjhtht\",\n        \"photo\": \"banner/1658299332562-Rahul Kannoujia(MCE336).jpeg\",\n        \"deviceType\": \"MOBILE\",\n        \"isActive\": false,\n        \"isDeleted\": false,\n        \"createdAt\": \"2022-07-20T06:42:14.078Z\",\n        \"updatedAt\": \"2022-07-20T06:42:14.078Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/BannerController.ts",
    "groupTitle": "Admin-Banner"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/category/_id",
    "title": "Get Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Get-category",
    "group": "Admin-Category",
    "description": "<p>pass category _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"Category fetched successfully\",\n    \"data\": {\n        \"category\": {\n            \"_id\": \"62c3f223f65d83b1b59d0f60\",\n            \"name\": \"test7\",\n            \"image\": \"test7\",\n            \"isActive\": true,\n            \"isDeleted\": true,\n            \"createdAt\": \"2022-07-05T08:11:15.831Z\",\n            \"updatedAt\": \"2022-07-05T08:11:15.831Z\",\n            \"__v\": 0\n        },\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/CategoryController.ts",
    "groupTitle": "Admin-Category"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/category",
    "title": "Get Category list",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Get-category-list",
    "group": "Admin-Category",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n   \"status\": 200,\n   \"statusText\": \"SUCCESS\",\n   \"message\": \"Category list get successfully\",\n   \"data\": {\n       \"list\": [\n           {\n               \"_id\": \"62c6a900437247fa040492c9\",\n               \"name\": \"Men's Fashion\",\n               \"image\": \"category/1657103792052-test3.jpeg\",\n               \"isActive\": true,\n               \"isDeleted\": false,\n               \"createdAt\": \"2022-07-07T09:36:00.816Z\",\n               \"updatedAt\": \"2022-07-07T09:36:00.816Z\"\n           },\n           {\n               \"_id\": \"62c565ce198c336e57acf4a7\",\n               \"name\": \"Women's Fashion\",\n               \"image\": \"category/1657103792052-test3.jpeg\",\n               \"isActive\": true,\n               \"isDeleted\": false,\n               \"createdAt\": \"2022-07-06T10:37:02.361Z\",\n               \"updatedAt\": \"2022-07-06T10:37:02.361Z\"\n           }\n       ],\n       \"count\": 2,\n       \"execTime\": 126\n   }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/CategoryController.ts",
    "groupTitle": "Admin-Category"
  },
  {
    "type": "post",
    "url": "/api/v1/admin/category",
    "title": "Add Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "add-category",
    "group": "Admin-Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n  \"name\": \"Men's Fashion\",\n   \"image\": \"category/1657093091432-test9.png\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n       \"status\": 201,\n       \"statusText\": \"CREATED\",\n       \"message\": \"Category created successfully\",\n           \"data\": {\n               \"category\": {\n                   \"name\": \"Men's Fashion\",\n                   \"image\": \"category/1657093091432-test9.png\",\n                   \"isActive\": true,\n                   \"isDeleted\": false,\n                   \"_id\": \"62c529be6208e8fd5ceeda28\",\n                   \"createdAt\": \"2022-07-06T06:20:46.771Z\",\n                   \"updatedAt\": \"2022-07-06T06:20:46.771Z\",\n                   \"__v\": 0\n               },\n               \"execTime\": 94\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/CategoryController.ts",
    "groupTitle": "Admin-Category"
  },
  {
    "type": "delete",
    "url": "/api/v1/admin/category/_id",
    "title": "Delete Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "delete-category",
    "group": "Admin-Category",
    "description": "<p>pass category _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": 200,\n   \"statusText\": \"SUCCESS\",\n   \"message\": \"Category deleted successfully\",\n       \"data\": {\n           \"category\": {\n               \"_id\": \"62c3f223f65d83b1b59d0f60\",\n               \"name\": \"test7\",\n               \"image\": \"test7\",\n               \"isActive\": true,\n               \"isDeleted\": true,\n               \"createdAt\": \"2022-07-05T08:11:15.831Z\",\n               \"updatedAt\": \"2022-07-05T08:11:15.831Z\",\n               \"__v\": 0\n           },\n           \"execTime\": 79\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/CategoryController.ts",
    "groupTitle": "Admin-Category"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/category/_id",
    "title": "Update Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "update-category",
    "group": "Admin-Category",
    "description": "<p>pass category _id as params</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of category</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>image url of category</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n       \"status\": 200,\n       \"statusText\": \"SUCCESS\",\n       \"message\": \"Category updated successfully\",\n           \"data\": {\n               \"category\": {\n                   \"_id\": \"62c3f223f65d83b1b59d0f60\",\n                   \"name\": \"test7\",\n                   \"image\": \"test7\",\n                   \"isActive\": true,\n                   \"isDeleted\": true,\n                   \"createdAt\": \"2022-07-05T08:11:15.831Z\",\n                   \"updatedAt\": \"2022-07-05T08:11:15.831Z\",\n                   \"__v\": 0\n               },\n               \"execTime\": 75\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/CategoryController.ts",
    "groupTitle": "Admin-Category"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/category/_id/status",
    "title": "Update Status Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4NDAxNzE4LCJleHAiOjE2NTg0ODgxMTh9.XD0OhucPIiCOyEEmAu7xUAaI1VdtiE6WgU8NOk_FpWU</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "update-status-category",
    "group": "Admin-Category",
    "description": "<p>pass category _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n   {\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"category_update\",\n    \"data\": {\n        \"_id\": \"62c565ce198c336e57acf4a7\",\n        \"name\": \"Women's Fashion\",\n        \"image\": \"category/1657103792052-test3.jpeg\",\n        \"isActive\": false,\n        \"isDeleted\": false,\n        \"createdAt\": \"2022-07-06T10:37:02.361Z\",\n        \"updatedAt\": \"2022-07-06T10:37:02.361Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/CategoryController.ts",
    "groupTitle": "Admin-Category"
  },
  {
    "type": "put",
    "url": "/api/v1/admin/category",
    "title": "Upload Category Image",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "upload-image",
    "group": "Admin-Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image.",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\"status\":201,\"statusText\":\"CREATED\",\"message\":\"Image uploaded successfully\",\"data\":{\"url\":\"category/1657018612759-test9.png\"}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/CategoryController.ts",
    "groupTitle": "Admin-Category"
  },
  {
    "type": "delete",
    "url": "/api/v1/admin/product/_id",
    "title": "Delete Product",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Delete_Product",
    "group": "Admin-Product",
    "description": "<p>pass product _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n   {\n    {\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"Product deleted succesfully\",\n    \"data\": {\n        \"product\": {\n            \"_id\": \"62ce65a3aa1ac7033c583ec9\",\n            \"name\": \"Watercooler\",\n            \"sku\": \"QL8E9T9JJG\",\n            \"price\": 50000,\n            \"categoryId\": \"62c565ce198c336e57acf4a7\",\n            \"categoryName\": \"Electronics\",\n            \"subcategoryName\": \"Digital\",\n            \"subcategoryId\": \"62cbf77a217ec71559014f5d\",\n            \"author\": \"samsung\",\n            \"stock\": 56,\n            \"description\": \"this is very amazing\",\n            \"regularPrice\": 40000,\n            \"salePrice\": 45000,\n            \"taxClass\": \"abc\",\n            \"taxStatus\": \"acceepted\",\n            \"stockQuantity\": 45,\n            \"allowBackOrders\": true,\n            \"lowStockThreshold\": 34,\n            \"soldIndividualStock\": 677,\n            \"weight\": 500,\n            \"weightUnit\": \"gjjgg\",\n            \"dimensions\": \"vfjdfjf\",\n            \"shippingClass\": \"firstclass\",\n            \"upSells\": true,\n            \"crossSells\": true,\n            \"color\": \"blue\",\n            \"material\": \"fjfgjj\",\n            \"purchasedNote\": \"gfknfk\",\n            \"menuOrder\": \"htgt\",\n            \"isReviewEnabled\": true,\n            \"adminCommissionType\": \"defg\",\n            \"adminCommission\": 890,\n            \"cashbackTypes\": [\n                {\n                    \"cashbackType\": \"rtgphhh\",\n                    \"_id\": \"62ce65a3aa1ac7033c583eca\"\n                }\n            ],\n            \"photos\": [],\n            \"__v\": 0,\n            \"isDeleted\": true\n        },\n        \"execTime\": 67\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/ProductController.ts",
    "groupTitle": "Admin-Product"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/product",
    "title": "Get Product list",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU3Njk1MzQzLCJleHAiOjE2NTc3ODE3NDN9.HAJ40QWHuL2QeXo3GVQZKziiiQHbLsq0hyuMM-SgfaY</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Get-product-list",
    "group": "Admin-Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n  {\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"product_list\",\n    \"data\": {\n        \"list\": [\n            {\n                \"isActive\": true,\n                \"_id\": \"62cfb67426bd109f9ae2d7cf\",\n                \"name\": \"Mobile\",\n                \"sku\": \"XUUW1V49R9\",\n                \"price\": 50000,\n                \"categoryId\": \"62c565ce198c336e57acf4a7\",\n                \"categoryName\": \"Electronics\",\n                \"subcategoryName\": \"Digital\",\n                \"subcategoryId\": \"62cbf77a217ec71559014f5d\",\n                \"author\": \"samsung\",\n                \"stock\": 56,\n                \"description\": \"this is very amazing\",\n                \"regularPrice\": 40000,\n                \"salePrice\": 45000,\n                \"taxClass\": \"abc\",\n                \"taxStatus\": \"acceepted\",\n                \"stockQuantity\": 45,\n                \"allowBackOrders\": true,\n                \"lowStockThreshold\": 34,\n                \"soldIndividualStock\": 677,\n                \"weight\": 500,\n                \"weightUnit\": \"gjjgg\",\n                \"dimensions\": \"vfjdfjf\",\n                \"shippingClass\": \"firstclass\",\n                \"upSells\": true,\n                \"crossSells\": true,\n                \"color\": \"blue\",\n                \"material\": \"fjfgjj\",\n                \"purchasedNote\": \"gfknfk\",\n                \"menuOrder\": \"htgt\",\n                \"isReviewEnabled\": true,\n                \"adminCommissionType\": \"defg\",\n                \"adminCommission\": 890,\n                \"isDeleted\": false,\n                \"cashbackTypes\": [\n                    {\n                        \"cashbackType\": \"rtgphhh\",\n                        \"_id\": \"62cfb67426bd109f9ae2d7d0\"\n                    }\n                ],\n                \"photos\": [],\n                \"coverPhoto\": \"product/62cfb67426bd109f9ae2d7cf/cover-photo/default.png\"\n            },\n            {\n                \"isActive\": true,\n                \"_id\": \"62cfb9dc26bd109f9ae2d7dd\",\n                \"name\": \"tablefan\",\n                \"sku\": \"S7XKETDN6G\",\n                \"price\": 50000,\n                \"categoryId\": \"62c565ce198c336e57acf4a7\",\n                \"categoryName\": \"Electronics\",\n                \"subcategoryName\": \"Digital\",\n                \"subcategoryId\": \"62cbf77a217ec71559014f5d\",\n                \"author\": \"samsung\",\n                \"stock\": 56,\n                \"description\": \"this is very amazing\",\n                \"regularPrice\": 40000,\n                \"salePrice\": 45000,\n                \"taxClass\": \"abc\",\n                \"taxStatus\": \"acceepted\",\n                \"stockQuantity\": 45,\n                \"allowBackOrders\": true,\n                \"lowStockThreshold\": 34,\n                \"soldIndividualStock\": 677,\n                \"weight\": 500,\n                \"weightUnit\": \"gjjgg\",\n                \"dimensions\": \"vfjdfjf\",\n                \"shippingClass\": \"firstclass\",\n                \"upSells\": true,\n                \"crossSells\": true,\n                \"color\": \"blue\",\n                \"material\": \"fjfgjj\",\n                \"purchasedNote\": \"gfknfk\",\n                \"menuOrder\": \"htgt\",\n                \"isReviewEnabled\": true,\n                \"adminCommissionType\": \"defg\",\n                \"adminCommission\": 890,\n                \"isDeleted\": false,\n                \"cashbackTypes\": [\n                    {\n                        \"cashbackType\": \"rtgphhh\",\n                        \"_id\": \"62d1088d6b016289b16830dd\"\n                    }\n                ],\n                \"photos\": [\n                    \"product/62cfb9dc26bd109f9ae2d7dd/photos/annie-spratt-ncQ2sguVlgo-unsplash.jpg\"\n                ],\n                \"coverPhoto\": \"product/62cfb9dc26bd109f9ae2d7dd/cover-photo/default.jpeg\"\n            },\n            {\n                \"_id\": \"62d673902c91e3167bfd75fc\",\n                \"name\": \"Tesla Car\",\n                \"sku\": \"BYJB1GP0VI\",\n                \"price\": 50000,\n                \"categoryId\": \"62c565ce198c336e57acf4a7\",\n                \"categoryName\": \"Electronics\",\n                \"subcategoryName\": \"Digital\",\n                \"subcategoryId\": \"62cbf77a217ec71559014f5d\",\n                \"author\": \"peter\",\n                \"stock\": 56,\n                \"description\": \"this is very amazing\",\n                \"regularPrice\": 450000,\n                \"salePrice\": 40000,\n                \"taxClass\": \"firstclass\",\n                \"taxStatus\": \"acceepted\",\n                \"stockQuantity\": 45,\n                \"allowBackOrders\": true,\n                \"lowStockThreshold\": 34,\n                \"soldIndividualStock\": 677,\n                \"weight\": 500,\n                \"weightUnit\": \"kilogram\",\n                \"dimensions\": \"2d\",\n                \"shippingClass\": \"firstclass\",\n                \"upSells\": true,\n                \"crossSells\": true,\n                \"color\": \"blue\",\n                \"material\": \"copper\",\n                \"purchasedNote\": \"gfknfk\",\n                \"menuOrder\": \"tltmt\",\n                \"isReviewEnabled\": true,\n                \"adminCommissionType\": \"paytm\",\n                \"adminCommission\": 890,\n                \"isDeleted\": false,\n                \"isActive\": true,\n                \"cashbackTypes\": [\n                    {\n                        \"cashbackType\": \"rtgphhh\",\n                        \"_id\": \"62d673902c91e3167bfd75fd\"\n                    }\n                ],\n                \"photos\": []\n            }\n        ],\n        \"count\": 4,\n        \"execTime\": 468\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/ProductController.ts",
    "groupTitle": "Admin-Product"
  },
  {
    "type": "post",
    "url": "/api/v1/admin/product",
    "title": "Add Product",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU3NjkxMjY4LCJleHAiOjE2NTc3Nzc2Njh9.JmW836-NhCtMxWtkD3ezP4aRidSLshjTIgzhIkMYe3w</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "add-product",
    "group": "Admin-Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcategoryId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcategoryName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stock",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "regularPrice",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "salesPrice",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taxClass",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taxStatus",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stockQuantity",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "allowBackOrders",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lowstockThreshold",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "soldIndividualStock",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "weightUnit",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dimension",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shippingClass",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "upSells",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "crossSells",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "material",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "purchaseNote",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "menuOrder",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isReviewEnabled",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adminCommissionType",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "adminCommission",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sectionName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "cashbackTypes",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": " {\n             \"name\":\"Tesla Car\",-\n            \"price\":50000,\n            \"categoryId\":\"62c565ce198c336e57acf4a7\",\n            \"subcategoryId\":\"62cbf77a217ec71559014f5d\",\n            \"categoryName\":\"Electronics\",\n            \"subcategoryName\":\"Digital\",\n            \"author\":\"peter\",\n            \"sectionName\":\"B\",\n            \"stock\":56,\n            \"description\":\"this is very amazing\",\n            \"regularPrice\":\"450000\",\n            \"salePrice\":40000,\n            \"taxClass\":\"firstclass\",\n            \"taxStatus\":\"acceepted\",\n            \"stockQuantity\":45,\n            \"allowBackOrders\":true,\n            \"lowStockThreshold\":34,\n            \"soldIndividualStock\":677,\n            \"weight\":500,\n            \"weightUnit\":\"kilogram\",\n            \"dimensions\":\"2d\",\n            \"shippingClass\":\"firstclass\",\n            \"upSells\":true,\n            \"crossSells\":true,\n            \"color\":\"blue\",\n            \"material\":\"copper\",\n            \"purchasedNote\":\"gfknfk\",\n            \"menuOrder\":\"tltmt\",\n            \"isReviewEnabled\":true,\n            \"adminCommissionType\":\"paytm\",\n            \"adminCommission\":\"890\",\n           \"cashbackTypes\":[{\"cashbackType\":\"rtgphhh\",\"amout\":4500}]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 201,\n    \"statusText\": \"CREATED\",\n    \"message\": \"product_created\",\n    \"data\": {\n        \"product\": {\n            \"name\": \"Tesla Car\",\n            \"sku\": \"BYJB1GP0VI\",\n            \"price\": 50000,\n            \"categoryId\": \"62c565ce198c336e57acf4a7\",\n            \"categoryName\": \"Electronics\",\n            \"subcategoryName\": \"Digital\",\n            \"subcategoryId\": \"62cbf77a217ec71559014f5d\",\n            \"author\": \"peter\",\n            \"stock\": 56,\n            \"description\": \"this is very amazing\",\n            \"regularPrice\": 450000,\n            \"salePrice\": 40000,\n            \"taxClass\": \"firstclass\",\n            \"taxStatus\": \"acceepted\",\n            \"stockQuantity\": 45,\n            \"allowBackOrders\": true,\n            \"lowStockThreshold\": 34,\n            \"soldIndividualStock\": 677,\n            \"weight\": 500,\n            \"weightUnit\": \"kilogram\",\n            \"dimensions\": \"2d\",\n            \"shippingClass\": \"firstclass\",\n            \"upSells\": true,\n            \"crossSells\": true,\n            \"color\": \"blue\",\n            \"material\": \"copper\",\n            \"purchasedNote\": \"gfknfk\",\n            \"menuOrder\": \"tltmt\",\n            \"isReviewEnabled\": true,\n            \"adminCommissionType\": \"paytm\",\n            \"adminCommission\": 890,\n            \"isDeleted\": false,\n            \"isActive\": true,\n            \"cashbackTypes\": [\n                {\n                    \"cashbackType\": \"rtgphhh\",\n                    \"_id\": \"62d673902c91e3167bfd75fd\"\n                }\n            ],\n            \"photos\": [],\n            \"_id\": \"62d673902c91e3167bfd75fc\",\n            \"__v\": 0\n        },\n        \"execTime\": 103\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/ProductController.ts",
    "groupTitle": "Admin-Product"
  },
  {
    "type": "put",
    "url": "/api/v1/admin/product/_id",
    "title": "Change CoverPhoto Product",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "change-coverImage",
    "group": "Admin-Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "coverPhot",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\"status\":200,\"statusText\":\"SUCCESS\",\"message\":\"coverPhoto_uploaded\",\"data\":{\"product\":{\"_id\":\"62cfb67426bd109f9ae2d7cf\",\"name\":\"Mobile\",\"sku\":\"XUUW1V49R9\",\"price\":50000,\"categoryId\":\"62c565ce198c336e57acf4a7\",\"categoryName\":\"Electronics\",\"subcategoryName\":\"Digital\",\"subcategoryId\":\"62cbf77a217ec71559014f5d\",\"author\":\"samsung\",\"stock\":56,\"description\":\"this is very amazing\",\"regularPrice\":40000,\"salePrice\":45000,\"taxClass\":\"abc\",\"taxStatus\":\"acceepted\",\"stockQuantity\":45,\"allowBackOrders\":true,\"lowStockThreshold\":34,\"soldIndividualStock\":677,\"weight\":500,\"weightUnit\":\"gjjgg\",\"dimensions\":\"vfjdfjf\",\"shippingClass\":\"firstclass\",\"upSells\":true,\"crossSells\":true,\"color\":\"blue\",\"material\":\"fjfgjj\",\"purchasedNote\":\"gfknfk\",\"menuOrder\":\"htgt\",\"isReviewEnabled\":true,\"adminCommissionType\":\"defg\",\"adminCommission\":890,\"isDeleted\":false,\"cashbackTypes\":[{\"cashbackType\":\"rtgphhh\",\"_id\":\"62cfb67426bd109f9ae2d7d0\"}],\"photos\":[],\"__v\":1,\"coverPhoto\":\"product/62cfb67426bd109f9ae2d7cf/cover-photo/default.png\"},\"execTime\":11064}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/ProductController.ts",
    "groupTitle": "Admin-Product"
  },
  {
    "type": "put",
    "url": "/api/v1/admin/product/edit/id",
    "title": "Edit Product",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU3Nzk4NTU4LCJleHAiOjE2NTc4ODQ5NTh9.8K6BRcRLY49xmeAx-nHYRh12QclyhA6YF2A0RBypjdQ</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "edit-product",
    "group": "Admin-Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcategoryId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcategoryName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stock",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "regularPrice",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "salesPrice",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taxClass",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taxStatus",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stockQuantity",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "allowBackOrders",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lowstockThreshold",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "soldIndividualStock",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "weightUnit",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dimension",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shippingClass",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "upSells",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "crossSells",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "material",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "purchaseNote",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "menuOrder",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isReviewEnabled",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adminCommissionType",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "adminCommission",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sectionName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "cashbackTypes",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n   \"name\":\"tablefan\",\n             \"categoryId\":\"62c565ce198c336e57acf4a7\",\n             \"subcategoryId\":\"62cbf77a217ec71559014f5d\",\n             \"categoryName\":\"Electronics\",\n             \"subcategoryName\":\"Digital\",\n             \"author\":\"samsung\",\n             \"sectionName\":\"B\",\n             \"stock\":56,\n             \"description\":\"this is very amazing\",\n             \"regularPrice\":\"40000\",\n             \"salePrice\":45000,\n             \"taxClass\":\"abc\",\n             \"taxStatus\":\"acceepted\",\n             \"stockQuantity\":45,\n             \"allowBackOrders\":true,\n             \"lowStockThreshold\":34,\n             \"soldIndividualStock\":677,\n             \"weight\":500,\n             \"weightUnit\":\"gjjgg\",\n             \"dimensions\":\"vfjdfjf\",\n             \"shippingClass\":\"firstclass\",\n             \"upSells\":true,\n             \"crossSells\":true,\n             \"color\":\"blue\",\n             \"material\":\"fjfgjj\",\n             \"purchasedNote\":\"gfknfk\",\n             \"menuOrder\":\"htgt\",\n             \"isReviewEnabled\":true,\n             \"adminCommissionType\":\"defg\",\n             \"adminCommission\":\"890\",\n             \"cashbackTypes\":[{\"cashbackType\":\"rtgphhh\"}]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{{\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"Product edited sucessfully\",\n    \"data\": {\n        \"product\": {\n            \"_id\": \"62cfb9dc26bd109f9ae2d7dd\",\n            \"name\": \"tablefan\",\n            \"sku\": \"S7XKETDN6G\",\n            \"price\": 50000,\n            \"categoryId\": \"62c565ce198c336e57acf4a7\",\n            \"categoryName\": \"Electronics\",\n            \"subcategoryName\": \"Digital\",\n            \"subcategoryId\": \"62cbf77a217ec71559014f5d\",\n            \"author\": \"samsung\",\n            \"stock\": 56,\n            \"description\": \"this is very amazing\",\n            \"regularPrice\": 40000,\n            \"salePrice\": 45000,\n            \"taxClass\": \"abc\",\n            \"taxStatus\": \"acceepted\",\n            \"stockQuantity\": 45,\n            \"allowBackOrders\": true,\n            \"lowStockThreshold\": 34,\n            \"soldIndividualStock\": 677,\n            \"weight\": 500,\n            \"weightUnit\": \"gjjgg\",\n            \"dimensions\": \"vfjdfjf\",\n            \"shippingClass\": \"firstclass\",\n            \"upSells\": true,\n            \"crossSells\": true,\n            \"color\": \"blue\",\n            \"material\": \"fjfgjj\",\n            \"purchasedNote\": \"gfknfk\",\n            \"menuOrder\": \"htgt\",\n            \"isReviewEnabled\": true,\n            \"adminCommissionType\": \"defg\",\n            \"adminCommission\": 890,\n            \"isDeleted\": false,\n            \"cashbackTypes\": [\n                {\n                    \"cashbackType\": \"rtgphhh\",\n                    \"_id\": \"62d009eede7a9024103daed4\"\n                }\n            ],\n            \"photos\": [\n                \"product/62cfb9dc26bd109f9ae2d7dd/photos/annie-spratt-ncQ2sguVlgo-unsplash.jpg\"\n            ],\n            \"__v\": 0,\n            \"coverPhoto\": \"product/62cfb9dc26bd109f9ae2d7dd/cover-photo/default.jpeg\"\n        },\n        \"execTime\": 83\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/ProductController.ts",
    "groupTitle": "Admin-Product"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/product/_id/status",
    "title": "Update Status Product",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDkzODExMDgyMDE1MGUzODI5MjgxOCIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4NDAyODU4LCJleHAiOjE2NTg0ODkyNTh9.OdgFA-wyMD82itAqPFaLdPGh-HitGUA9ft9l_vGWcDo</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "update-status-product",
    "group": "Admin-Product",
    "description": "<p>pass product _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n   \"status\": 200,\n   \"statusText\": \"SUCCESS\",\n   \"message\": \"Product update status  successfully\",\n   \"data\": {\n       \"_id\": \"62d7cccc86616ebe475db688\",\n       \"name\": \"samsung\",\n       \"sku\": \"54JI1QD9BL\",\n       \"categoryId\": \"62d0136cff9b93f5383b08b1\",\n       \"categoryName\": \"does nt updated trying 32\",\n       \"subcategoryName\": \"testinggg\",\n       \"subcategoryId\": \"62d15e22ff9b93f5383b5815\",\n       \"author\": \"testedd\",\n       \"stock\": 3400,\n       \"description\": \"testeddddd\",\n       \"regularPrice\": 1000,\n       \"salePrice\": 2000,\n       \"taxClass\": \"testedd\",\n       \"taxStatus\": \"accepted\",\n       \"stockQuantity\": 2000,\n       \"allowBackOrders\": true,\n       \"lowStockThreshold\": 300,\n       \"soldIndividualStock\": 2000,\n       \"weight\": 24,\n       \"weightUnit\": \"kg\",\n       \"dimensions\": \"3dimensions\",\n       \"shippingClass\": \"2000\",\n       \"upSells\": true,\n       \"crossSells\": false,\n       \"color\": \"red\",\n       \"material\": \"teteddddd\",\n       \"purchasedNote\": \"testedd\",\n       \"menuOrder\": \"testedd\",\n       \"isReviewEnabled\": true,\n       \"adminCommissionType\": \"tetedd\",\n       \"adminCommission\": 200,\n       \"isDeleted\": false,\n       \"isActive\": false,\n       \"cashbackTypes\": [\n           {\n               \"cashbackType\": \"IndividualUser\",\n               \"amount\": 1000,\n               \"_id\": \"62d7d698c075177dd13a9006\"\n           },\n           {\n               \"cashbackType\": \"GoldCashback\",\n               \"amount\": 5000,\n               \"_id\": \"62d7d698c075177dd13a9007\"\n           },\n           {\n               \"cashbackType\": \"BronzeCashback\",\n               \"amount\": 3000,\n               \"_id\": \"62d7d698c075177dd13a9008\"\n           },\n           {\n               \"cashbackType\": \"SilverCashback\",\n               \"amount\": 6000,\n               \"_id\": \"62d7d698c075177dd13a9009\"\n           }\n       ],\n       \"photos\": [\n           \"product/62d7cccc86616ebe475db688/photos/download.jpeg\",\n           \"product/62d7cccc86616ebe475db688/photos/download (1).jpeg\",\n           \"product/62d7cccc86616ebe475db688/photos/profile.png\"\n       ],\n       \"__v\": 0,\n       \"coverPhoto\": \"product/62d7cccc86616ebe475db688/cover-photo/default.jpeg\",\n       \"sectionName\": \"tesedd checkingg\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/ProductController.ts",
    "groupTitle": "Admin-Product"
  },
  {
    "type": "put",
    "url": "/api/v1/admin/product/_id",
    "title": "Upload Product Image",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "upload-image",
    "group": "Admin-Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image.",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\"status\":201,\"statusText\":\"CREATED\",\"message\":\"photo_uploaded\",\"data\":{\"product\":{\"_id\":\"62ce65a3aa1ac7033c583ec9\",\"name\":\"Watercooler\",\"sku\":\"QL8E9T9JJG\",\"price\":50000,\"categoryId\":\"62c565ce198c336e57acf4a7\",\"categoryName\":\"Electronics\",\"subcategoryName\":\"Digital\",\"subcategoryId\":\"62cbf77a217ec71559014f5d\",\"author\":\"samsung\",\"stock\":56,\"description\":\"this is very amazing\",\"regularPrice\":40000,\"salePrice\":45000,\"taxClass\":\"abc\",\"taxStatus\":\"acceepted\",\"stockQuantity\":45,\"allowBackOrders\":true,\"lowStockThreshold\":34,\"soldIndividualStock\":677,\"weight\":500,\"weightUnit\":\"gjjgg\",\"dimensions\":\"vfjdfjf\",\"shippingClass\":\"firstclass\",\"upSells\":true,\"crossSells\":true,\"color\":\"blue\",\"material\":\"fjfgjj\",\"purchasedNote\":\"gfknfk\",\"menuOrder\":\"htgt\",\"isReviewEnabled\":true,\"adminCommissionType\":\"defg\",\"adminCommission\":890,\"cashbackTypes\":[{\"cashbackType\":\"rtgphhh\",\"_id\":\"62ce65a3aa1ac7033c583eca\"}],\"photos\":[\"product/62ce65a3aa1ac7033c583ec9/photos/wefundUS.png\"],\"__v\":0,\"isDeleted\":true,\"coverPhoto\":\"product/62ce65a3aa1ac7033c583ec9/cover-photo/default.png\"},\"execTime\":12430}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/ProductController.ts",
    "groupTitle": "Admin-Product"
  },
  {
    "type": "delete",
    "url": "/api/v1/admin/section/_id",
    "title": "Delete Section",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Delete_Section",
    "group": "Admin-Section",
    "description": "<p>pass section _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"statusText\": \"SUCCESS\",\n\"message\": \"Section deleted successfully\",\n\"data\": {\n    \"section\": {\n       \"_id\": \"62c6a9725336da285a65cc84\",\n       \"category\": \"62c6a900437247fa040492c9\",\n       \"subcategory\": \"62c6a92d437247fa040492ce\",\n       \"name\": \"mandresss\",\n       \"isActive\": true,\n      \"isDeleted\": false,\n      \"createdAt\": \"2022-07-07T09:37:54.016Z\",\n     \"updatedAt\": \"2022-07-07T09:37:54.016Z\",\n       \"__v\": 0\n   },\n   \"execTime\": 63\n}\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SectionController.ts",
    "groupTitle": "Admin-Section"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/section/_id",
    "title": "Get section",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Get-Section",
    "group": "Admin-Section",
    "description": "<p>pass section _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"statusText\": \"SUCCESS\",\n\"message\": \"Section list get successfully\",\n\"data\": {\n*   \"section\": {\n       \"_id\": \"62c57985e157e053e48266ce\",\n       \"category\": \"62c565ce198c336e57acf4a7\",\n       \"subcategory\": \"62c57716f96069e70cf20b57\",\n       \"name\": \"dresses\",\n       \"isActive\": true,\n       \"isDeleted\": false,\n       \"createdAt\": \"2022-07-06T12:01:09.501Z\",\n      \"updatedAt\": \"2022-07-06T12:01:09.501Z\",\n      \"__v\": 0\n },\n  \"execTime\": 88\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SectionController.ts",
    "groupTitle": "Admin-Section"
  },
  {
    "type": "post",
    "url": "/api/v1/admin/section",
    "title": "Add Section",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "add-section",
    "group": "Admin-Section",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcategory",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n       \"category\": \"62c565ce198c336e57acf4a7\",\n       \"subcategory\": \"62c57716f96069e70cf20b57\",\n       \"name\": \"dresses\"\n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n       \"status\": 201,\n       \"statusText\": \"CREATED\",\n       \"message\": \"Section created successfully\",\n       \"data\": {\n           \"section\": {\n               \"category\": \"62c565ce198c336e57acf4a7\",\n               \"subcategory\": \"62c57716f96069e70cf20b57\",\n               \"name\": \"dresses\",\n               \"isActive\": true,\n               \"isDeleted\": false,\n               \"_id\": \"62c57985e157e053e48266ce\",\n               \"createdAt\": \"2022-07-06T12:01:09.501Z\",\n               \"updatedAt\": \"2022-07-06T12:01:09.501Z\",\n               \"__v\": 0\n           },\n           \"execTime\": 159\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SectionController.ts",
    "groupTitle": "Admin-Section"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/section/_id",
    "title": "Get Section List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "list-section",
    "group": "Admin-Section",
    "description": "<p>pass subcategory _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n  \"status\": 200,\n  \"statusText\": \"SUCCESS\",\n  \"message\": \"Section list get successfully\",\n  \"data\": {\n      \"list\": [\n          {\n              \"_id\": \"62c6a963437247fa040492d4\",\n              \"category\": \"62c6a900437247fa040492c9\",\n              \"subcategory\": \"62c6a92d437247fa040492ce\",\n              \"name\": \"man dresss\",\n              \"isActive\": true,\n              \"isDeleted\": false,\n              \"createdAt\": \"2022-07-07T09:37:39.752Z\",\n              \"updatedAt\": \"2022-07-07T09:37:39.752Z\"\n          }\n      ],\n      \"count\": 1,\n      \"execTime\": 100\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SectionController.ts",
    "groupTitle": "Admin-Section"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/section/_id",
    "title": "Update section",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "update-section",
    "group": "Admin-Section",
    "description": "<p>pass section _id as params</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcategory",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n       \"category\": \"62c565ce198c336e57acf4a7\",\n       \"subcategory\": \"62c57716f96069e70cf20b57\",\n       \"name\": \"dresses\"\n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n       \"status\": 201,\n       \"statusText\": \"SUCCESS\",\n       \"message\": \"Section updated successfully\",\n       \"data\": {\n           \"section\": {\n               \"category\": \"62c565ce198c336e57acf4a7\",\n               \"subcategory\": \"62c57716f96069e70cf20b57\",\n               \"name\": \"dresses\",\n               \"isActive\": true,\n               \"isDeleted\": false,\n               \"_id\": \"62c57985e157e053e48266ce\",\n               \"createdAt\": \"2022-07-06T12:01:09.501Z\",\n               \"updatedAt\": \"2022-07-06T12:01:09.501Z\",\n               \"__v\": 0\n           },\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SectionController.ts",
    "groupTitle": "Admin-Section"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/section/_id/status",
    "title": "Update Status Section",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4NDAxMDc2LCJleHAiOjE2NTg0ODc0NzZ9.zvsp9yJKoXl9FUfp76BxnG3fDbUCVeRUNqf8jqQbBgw</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "update-status-section",
    "group": "Admin-Section",
    "description": "<p>pass section _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"section_update\",\n    \"data\": {\n        \"_id\": \"62c57985e157e053e48266ce\",\n        \"category\": \"62c565ce198c336e57acf4a7\",\n        \"subcategory\": \"62c57716f96069e70cf20b57\",\n        \"name\": \"dresses\",\n        \"isActive\": false,\n        \"isDeleted\": false,\n        \"createdAt\": \"2022-07-06T12:01:09.501Z\",\n        \"updatedAt\": \"2022-07-06T12:01:09.501Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SectionController.ts",
    "groupTitle": "Admin-Section"
  },
  {
    "type": "delete",
    "url": "/api/v1/admin/subcategory/_id",
    "title": "Delete Subcategory",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Delete_Subcategory",
    "group": "Admin-SubCategory",
    "description": "<p>pass subcategory _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\"status\":201,\"statusText\":\"SUCCESS\",\"message\":\"Subcategory Deleted\",\"data\":{\"subcategory\":{\"_id\":\"62c4211e5c4a60984a062837\",\"name\":\"Gajodhar\",\"category\":\"62bfe0cf17bbe6f6672739f3\",\"image\":\"jack.jpg\",\"isActive\":true,\"isDeleted\":true,\"createdAt\":\"2022-07-05T11:31:42.330Z\",\"updatedAt\":\"2022-07-05T11:31:42.330Z\",\"__v\":0},\"execTime\":59}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SubcategoryController.ts",
    "groupTitle": "Admin-SubCategory"
  },
  {
    "type": "post",
    "url": "/api/v1/admin/subcategory/",
    "title": "Add Subcategory",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "add-subcategory",
    "group": "Admin-SubCategory",
    "description": "<p>pass required value as params</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\"status\":201,\"statusText\":\"CREATED\",\"message\":\"SubCategory created successfully\",\"data\":{\"subcategory\":{\"name\":\"Subcategory1\",\"category\":\"62bfe0cf17bbe6f6672739f3\",\"image\":\"subcat.jpg\",\"isActive\":true,\"isDeleted\":false,\"_id\":\"62c52786e666528d21bf6fd3\",\"createdAt\":\"2022-07-06T06:11:18.600Z\",\"updatedAt\":\"2022-07-06T06:11:18.600Z\",\"__v\":0},\"execTime\":106}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SubcategoryController.ts",
    "groupTitle": "Admin-SubCategory"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/subcategory/_id",
    "title": "Get SubCategory List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "list-section",
    "group": "Admin-SubCategory",
    "description": "<p>pass category _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": 200,\n   \"statusText\": \"SUCCESS\",\n   \"message\": \"Subcategory List successfully\",\n   \"data\": {\n       \"count\": 1,\n       \"list\": [\n           {\n               \"_id\": \"62c6a92d437247fa040492ce\",\n               \"name\": \"men's Clothings\",\n               \"category\": \"62c6a900437247fa040492c9\",\n               \"image\": \"category/1657103792052-test3.jpeg\",\n               \"isActive\": true,\n               \"isDeleted\": false,\n               \"createdAt\": \"2022-07-07T09:36:45.907Z\",\n               \"updatedAt\": \"2022-07-07T09:36:45.907Z\"\n           }\n       ],\n   }\n}\n   *",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SubcategoryController.ts",
    "groupTitle": "Admin-SubCategory"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/subcategory/_id",
    "title": "Update Subcategory",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "update-category",
    "group": "Admin-SubCategory",
    "description": "<p>pass required value as params</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\"status\":201,\"statusText\":\"UPDATED\",\"message\":\"SubCategory updated successfully\",\"data\":{\"subcategory\":{\"name\":\"Subcategory1\",\"category\":\"62bfe0cf17bbe6f6672739f3\",\"image\":\"subcat.jpg\",\"isActive\":true,\"isDeleted\":false,\"_id\":\"62c52786e666528d21bf6fd3\",\"createdAt\":\"2022-07-06T06:11:18.600Z\",\"updatedAt\":\"2022-07-06T06:11:18.600Z\",\"__v\":0},\"execTime\":106}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SubcategoryController.ts",
    "groupTitle": "Admin-SubCategory"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/subcategory/_id/status",
    "title": "Update Status SubCategory",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4NDAxNzE4LCJleHAiOjE2NTg0ODgxMTh9.XD0OhucPIiCOyEEmAu7xUAaI1VdtiE6WgU8NOk_FpWU</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "update-status-subcategory",
    "group": "Admin-SubCategory",
    "description": "<p>pass subcategory _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"Subcategory update status successfully\",\n    \"data\": {\n        \"_id\": \"62c6a92d437247fa040492ce\",\n        \"name\": \"men's Clothings\",\n        \"category\": \"62c6a92d437247fa040492ce\",\n        \"image\": \"category/1657103792052-test3.jpeg\",\n        \"isActive\": false,\n        \"isDeleted\": false,\n        \"createdAt\": \"2022-07-07T09:36:45.907Z\",\n        \"updatedAt\": \"2022-07-07T09:36:45.907Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SubcategoryController.ts",
    "groupTitle": "Admin-SubCategory"
  },
  {
    "type": "put",
    "url": "/api/v1/admin/subcategory",
    "title": "Upload Category Image",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "upload-image",
    "group": "Admin-SubCategory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image.",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\"status\":201,\"statusText\":\"CREATED\",\"message\":\"Image uploaded successfully\",\"data\":{\"url\":\"subcategory/1657018612759-test9.png\"}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/SubcategoryController.ts",
    "groupTitle": "Admin-SubCategory"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/category/tax/categorylist",
    "title": "Get Tax Category list",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Get-tax-category-list",
    "group": "Admin-Tax",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"Category list get successfully\",\n    \"data\": [\n        {\n            \"_id\": \"62d8e798fa500418c5d0ae23\",\n            \"name\": \"Hair Loss Products - Medicated\",\n            \"product_tax_code\": \"51182001A0001\",\n            \"description\": \"Topical foams, creams, gels, etc. that prevent hair loss and promote hair regrowth.  These products contain a \\\"drug facts\\\" panel or a statement of active ingredients.  This code is intended for sales directly to end consumers that are NOT healthcare providers.\",\n            \"createdAt\": \"2022-07-21T05:43:52.487Z\",\n            \"updatedAt\": \"2022-07-21T05:43:52.487Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"62d8e798fa500418c5d0ae24\",\n            \"name\": \"Children's Books\",\n            \"product_tax_code\": \"35010001\",\n            \"description\": \"Children's books including picture books, painting, drawing, and activity books.\",\n            \"createdAt\": \"2022-07-21T05:43:52.487Z\",\n            \"updatedAt\": \"2022-07-21T05:43:52.488Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"62d8e798fa500418c5d0ae25\",\n            \"name\": \"Restocking Fee\",\n            \"product_tax_code\": \"93151599A0000\",\n            \"description\": \"A separately stated charge for a return or cancellation of merchandise where the entire original sales price is refunded or credited to the customer.  The restocking fee is normally charged to compensate the seller for costs related to returning the merchandise to the seller’s inventory\",\n            \"createdAt\": \"2022-07-21T05:43:52.488Z\",\n            \"updatedAt\": \"2022-07-21T05:43:52.488Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"62d8e798fa500418c5d0ae26\",\n            \"name\": \"Bibles\",\n            \"product_tax_code\": \"81121\",\n            \"description\": \"Bibles\",\n            \"createdAt\": \"2022-07-21T05:43:52.488Z\",\n            \"updatedAt\": \"2022-07-21T05:43:52.488Z\",\n            \"__v\": 0\n        }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/CategoryController.ts",
    "groupTitle": "Admin-Tax"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/user/_id",
    "title": "Get UserById",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Get-user",
    "group": "Admin-User",
    "description": "<p>pass user _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"User fetched successfully\",\n    \"data\": {\n        \"user\": {\n            \"_id\": \"62daa7c9df7ccbd75ff90c18\",\n            \"email\": \"rahul@123gmail.com\",\n            \"isEmailVerified\": true,\n            \"isAccountActive\": true,\n            \"__v\": 0,\n            \"accountNumber\": 37378731355699,\n            \"avatar\": \"user-profiles/1658497014545-mobilebanner4.jpeg\",\n            \"description\": \"bnkbnkbnkbrkbr\",\n            \"displayName\": \"rahulkannoujia\",\n            \"firstName\": \"ankit\",\n            \"lastName\": \"kannoujia\",\n            \"name\": \"ankit kannoujia\",\n            \"paypalEmail\": \"rahul@127gmail.com\"\n        },\n        \"execTime\": 71\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/UserController.ts",
    "groupTitle": "Admin-User"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/user",
    "title": "Get User List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "list-user",
    "group": "Admin-User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n  {\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"User list fetched successfully\",\n    \"data\": {\n        \"count\": 127,\n        \"list\": [\n            {\n                \"_id\": \"62d8ef88c075177dd13aa9bd\",\n                \"email\": \"chandranshurajsingh@gmail.com\",\n                \"isEmailVerified\": true,\n                \"isAccountActive\": true\n            },\n            {\n                \"_id\": \"62da57b132cd49d7e9350cbb\",\n                \"email\": \"rajat1010114@yopmail.com\",\n                \"isEmailVerified\": false,\n                \"isAccountActive\": false\n            },\n            {\n                \"_id\": \"62d016d1ff9b93f5383b097f\",\n                \"email\": \"freed@free.commd\",\n                \"isEmailVerified\": false,\n                \"isAccountActive\": false\n            },\n            {\n                \"_id\": \"62d6898ef055ab9d06da8aee\",\n                \"email\": \"vishwa92.piyush1@gmail.com\",\n                \"isEmailVerified\": true,\n                \"isAccountActive\": true\n            },\n            {\n                \"_id\": \"62d01e3aff9b93f5383b0bf6\",\n                \"email\": \"kamal@test.com\",\n                \"isEmailVerified\": false,\n                \"isAccountActive\": false\n            },\n             ],\n        \"execTime\": 111\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/UserController.ts",
    "groupTitle": "Admin-User"
  },
  {
    "type": "patch",
    "url": "/api/v1/admin/banner/_id/status",
    "title": "Update Status User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4MzAyNzUzLCJleHAiOjE2NTgzODkxNTN9.sZHSncgjZAdM_gYbP7tIK8NTFTrAo2j10UkG4bHWhxs</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "update-status-user",
    "group": "Admin-User",
    "description": "<p>pass user _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"User update status  successfully\",\n    \"data\": {\n        \"_id\": \"62da8824e31ab7106372ba3d\",\n        \"email\": \"sumit@123gmail.com\",\n        \"isEmailVerified\": true,\n        \"isAccountActive\": false,\n        \"__v\": 0,\n        \"accountNumber\": 37378731355699,\n        \"avatar\": \"user-profiles/1658494399265-mobilebanner3.jpeg\",\n        \"description\": \"gjrogjojtobjtobjtobjtojbtobjto[btro\",\n        \"displayName\": \"rahulkannoujia\",\n        \"facebookProfileUrl\": \"glgflfbfbfblfbflb\",\n        \"firstName\": \"sumit\",\n        \"instagramUsername\": \"gejggjrgjrjfjfoooooooooog\",\n        \"lastName\": \"kannoujia\",\n        \"linkedinProfileUrl\": \"dvvfvvvfvblbflbfb\",\n        \"name\": \"sumit kannoujia\",\n        \"paypalEmail\": \"rahul@127gmail.com\",\n        \"twitterUsername\": \"qwertyuiofbkfbgkbb\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/admin/UserController.ts",
    "groupTitle": "Admin-User"
  },
  {
    "type": "post",
    "url": "/api/v1/app/auth/resend-verification",
    "title": "Resend Verification Link",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'ANDROID'|'IOS'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Resend-Verification-Link",
    "group": "App-Auth",
    "parameter": {
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n             \"email\": \"test@gmail.com\"\n         }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\":200,\"statusText\":\"SUCCESS\",\"message\":\"Verification link sent successfully on your mail\",\"data\":{\"user\":{\"_id\":\"62ce9d6b201f67d39d8c4e98\",\"email\":\"test@gmail.com.com\",\"isEmailVerified\":true,\"isAccountActive\":true,\"__v\":0},\"execTime\":78}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response1:",
          "content": "{\"status\":400,\"statusText\":\"BAD_REQUEST\",\"message\":\"Invalid Email\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/AuthController.ts",
    "groupTitle": "App-Auth"
  },
  {
    "type": "patch",
    "url": "/api/v1/app/auth/verify-account",
    "title": "Verify Account",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'ANDROID'|'IOS'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Verify-Account",
    "group": "App-Auth",
    "parameter": {
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n             \"verifyAccountToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmYzZTg1MDk5MTIzYTdjNDYwMTMyMyIsInJvbGUi\"\n         }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\":200,\"statusText\":\"SUCCESS\",\"message\":\"Account verified successfully\",\"data\":{\"user\":{\"_id\":\"62ce9d6b201f67d39d8c4e98\",\"email\":\"sumit.vishwakarma@mobilecoderz.com\",\"isEmailVerified\":true,\"isAccountActive\":true,\"__v\":0},\"execTime\":81}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response1:",
          "content": "{\"status\":400,\"statusText\":\"BAD_REQUEST\",\"message\":\"Invalid verification token\",\"data\":{}}",
          "type": "json"
        },
        {
          "title": "Error-Response",
          "content": "{\"status\":401,\"message\":\"Token Expired\"}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/AuthController.ts",
    "groupTitle": "App-Auth"
  },
  {
    "type": "post",
    "url": "/api/v1/app/auth/forgot-password",
    "title": "Forgot password",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'ANDROID'|'IOS'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "forgot-password",
    "group": "App-Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n    \"email\": \"pukhraj1@mailinator.com\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\":200,\"statusText\":\"SUCCESS\",\"message\":\"Password reset link sent to your email.\",\"data\":{\"resetUrl\":\"http://localhost/reset-password?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmYzZTg1MDk5MTIzYTdjNDYwMTMyMyIsInJvbGUiOiJGT1JHT1RfUEFTU1dPUkQiLCJpYXQiOjE2NTY5Mzc5MjgsImV4cCI6MTY1NjkzODUyOH0.jVOTnoqzXqJvWPpvqCHvLIXSe3ag4aLRavaYvLnlkHQ\",\"execTime\":45}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response1:",
          "content": "{\"status\":403,\"statusText\":\"FORBIDDEN\",\"message\":\"No account exists with this email\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/AuthController.ts",
    "groupTitle": "App-Auth"
  },
  {
    "type": "post",
    "url": "/api/v1/app/auth/login",
    "title": "Log in",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "login",
    "group": "App-Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "loginType",
            "description": "<p>'WEB'|'ANDROID'|'IOS'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n    \"email\": \"pukhraj1@mailinator.com\",\n    \"password\": \"Test@1234\",\n    \"deviceType\": \"IOS\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\":200,\"statusText\":\"SUCCESS\",\"message\":\"Login successfully\",\"data\":{\"user\":{\"_id\":\"62c2bf3302eb83542c409e24\",\"email\":\"pukhraj1@mailinator.com\",\"isEmailVerified\":false,\"isAccountActive\":false,\"__v\":0,\"currentDeviceType\":\"IOS\"},\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzJiZjMzMDJlYjgzNTQyYzQwOWUyNCIsImVtYWlsIjoicHVraHJhajFAbWFpbGluYXRvci5jb20iLCJkZXZpY2VUeXBlIjoiSU9TIiwiaWF0IjoxNjU2OTMzMDMxLCJleHAiOjE2NTcwMTk0MzF9.dj3KwQ3o4XY1Zqv5dpv4LbZstURHL_O8BbXa7IYQiP0\",\"execTime\":169}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response1:",
          "content": "{\"status\":400,\"statusText\":\"BAD_REQUEST\",\"message\":\"Invalid email or password\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/AuthController.ts",
    "groupTitle": "App-Auth"
  },
  {
    "type": "post",
    "url": "/api/v1/app/auth/reset-password",
    "title": "Reset password",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'ANDROID'|'IOS'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "reset-password",
    "group": "App-Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Email Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resetToken",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n             \"resetToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmYzZTg1MDk5MTIzYTdjNDYwMTMyMyIsInJvbGUi,\n             \"password\": \"Test@1234\"\n         }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\":200,\"statusText\":\"SUCCESS\",\"message\":\"Password reset successfully\",\"data\":{\"user\":{\"_id\":\"62bf3e85099123a7c4601323\",\"email\":\"pukhraj@mailinator.com\",\"isEmailVerified\":false,\"isAccountActive\":false,\"__v\":0},\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmYzZTg1MDk5MTIzYTdjNDYwMTMyMyIsImVtYWlsIjoicHVraHJhakBtYWlsaW5hdG9yLmNvbSIsImlhdCI6MTY1Njk0MTY2MiwiZXhwIjoxNjU3MDI4MDYyfQ.IlInnF61OUgNdFeoA5ZbdJkgbiWmGrZnBEQx8n8qxrQ\",\"execTime\":157}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response1:",
          "content": "{\"status\":400,\"statusText\":\"BAD_REQUEST\",\"message\":\"Invalid reset token\",\"data\":{}}",
          "type": "json"
        },
        {
          "title": "Error-Response",
          "content": "{\"status\":401,\"message\":\"Token Expired, please logIn again\"}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/AuthController.ts",
    "groupTitle": "App-Auth"
  },
  {
    "type": "post",
    "url": "/api/v1/app/auth/signup",
    "title": "Sign up",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "signup",
    "group": "App-Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Body: ",
          "content": "{\n    \"email\": \"pukhraj1@mailinator.com\",\n    \"password\": \"Test@1234\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\":201,\"message\":\"User Sign up successfully\",\"execTime\":167,\"data\":{\"user\":{\"email\":\"pukhraj1@mailinator.com\",\"isEmailVerified\":false,\"isAccountActive\":false,\"_id\":\"62c2bf3302eb83542c409e24\",\"__v\":0},   \"verifyAccountToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2ZlMzc4MjIxYzgwNjU3NTViNjM5YyIsInJvbGUiOiJWRVJJRllfQUNDT1VOVCIsImlhdCI6MTY1Nzc5MTM1MiwiZXhwIjoxNjU3ODc3NzUyfQ.cH4FsJNZUaKQUH590MwqHXUqR4Eh8GNpJmxrNvvI7QA\",}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response1:",
          "content": "{\"status\":409,\"statusText\":\"CONFLICT\",\"message\":\"User already exists\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/AuthController.ts",
    "groupTitle": "App-Auth"
  },
  {
    "type": "get",
    "url": "/api/v1/app/banner",
    "title": "Banner listing",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "search",
    "group": "App-Banner",
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "{\n      \"status\": 200,\n      \"statusText\": \"SUCCESS\",\n      \"message\": \"Banner list\",\n      \"data\": {\n          \"banners\": [\n              {\n                  \"_id\": \"62d8f7558ecb874779972d57\",\n                  \"clickUrl\": \"ffogbrfogfrbfbbb\",\n                  \"photo\": \"banner/1658386260254-Slider_01.png\",\n                  \"deviceType\": \"WEB\",\n                  \"isActive\": true,\n                  \"isDeleted\": false,\n                  \"createdAt\": \"2022-07-21T06:51:01.706Z\",\n                  \"updatedAt\": \"2022-07-21T06:51:01.706Z\",\n                  \"__v\": 0\n              }\n          ],\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/BannerController.ts",
    "groupTitle": "App-Banner"
  },
  {
    "type": "get",
    "url": "/api/v1/app/category",
    "title": "Category List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "category-list",
    "group": "App-Category",
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "{\n      \"status\": 200,\n      \"statusText\": \"SUCCESS\",\n      \"message\": \"Category list get successfully\",\n      \"data\": {\n          \"categories\": [\n              {\n                  \"_id\": \"62c565ce198c336e57acf4a7\",\n                  \"name\": \"Women's Fashion\",\n                  \"image\": \"category/1657103792052-test3.jpeg\"\n              }\n          ],\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/CategoryController.ts",
    "groupTitle": "App-Category"
  },
  {
    "type": "get",
    "url": "/api/v1/app/category/list",
    "title": "Category List All",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "category-list-all",
    "group": "App-Category",
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "{\n      \"status\": 200,\n      \"statusText\": \"SUCCESS\",\n      \"message\": \"Category list get successfully\",\n      \"data\": {\n          \"categories\": [\n              {\n                  \"_id\": \"62c565ce198c336e57acf4a7\",\n                  \"name\": \"Women's Fashion\",\n                  \"createdAt\": \"2022-07-06T10:37:02.361Z\",\n                  \"updatedAt\": \"2022-07-06T10:37:02.361Z\",\n                  \"subcategories\": [\n                      {\n                          \"_id\": \"62c57716f96069e70cf20b57\",\n                          \"name\": \"Women's Clothings\",\n                          \"category\": \"62c565ce198c336e57acf4a7\",\n                          \"createdAt\": \"2022-07-06T11:50:46.672Z\",\n                          \"updatedAt\": \"2022-07-06T11:50:46.672Z\",\n                          \"sections\": [\n                              {\n                                  \"_id\": \"62c57985e157e053e48266ce\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62c57716f96069e70cf20b57\",\n                                  \"name\": \"dresses\",\n                                  \"createdAt\": \"2022-07-06T12:01:09.501Z\",\n                                  \"updatedAt\": \"2022-07-06T12:01:09.501Z\"\n                              }\n                          ]\n                      },\n                      {\n                          \"_id\": \"62cbf6f7217ec71559014f10\",\n                          \"name\": \"Women Shoes\",\n                          \"category\": \"62c565ce198c336e57acf4a7\",\n                          \"createdAt\": \"2022-07-11T10:09:59.139Z\",\n                          \"updatedAt\": \"2022-07-11T10:09:59.139Z\",\n                          \"sections\": [\n                              {\n                                  \"_id\": \"62cbf717217ec71559014f16\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf6f7217ec71559014f10\",\n                                  \"name\": \"section\",\n                                  \"createdAt\": \"2022-07-11T10:10:31.469Z\",\n                                  \"updatedAt\": \"2022-07-11T10:10:31.469Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf71d217ec71559014f1c\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf6f7217ec71559014f10\",\n                                  \"name\": \"section2\",\n                                  \"createdAt\": \"2022-07-11T10:10:37.202Z\",\n                                  \"updatedAt\": \"2022-07-11T10:10:37.202Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf721217ec71559014f22\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf6f7217ec71559014f10\",\n                                  \"name\": \"section3\",\n                                  \"createdAt\": \"2022-07-11T10:10:41.907Z\",\n                                  \"updatedAt\": \"2022-07-11T10:10:41.907Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf728217ec71559014f28\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf6f7217ec71559014f10\",\n                                  \"name\": \"section4\",\n                                  \"createdAt\": \"2022-07-11T10:10:48.625Z\",\n                                  \"updatedAt\": \"2022-07-11T10:10:48.625Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf72e217ec71559014f2e\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf6f7217ec71559014f10\",\n                                  \"name\": \"section5\",\n                                  \"createdAt\": \"2022-07-11T10:10:54.059Z\",\n                                  \"updatedAt\": \"2022-07-11T10:10:54.059Z\"\n                              }\n                          ]\n                      },\n                      {\n                          \"_id\": \"62cbf741217ec71559014f33\",\n                          \"name\": \"Plus Size\",\n                          \"category\": \"62c565ce198c336e57acf4a7\",\n                          \"createdAt\": \"2022-07-11T10:11:13.554Z\",\n                          \"updatedAt\": \"2022-07-11T10:11:13.554Z\",\n                          \"sections\": [\n                              {\n                                  \"_id\": \"62cbf752217ec71559014f39\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf741217ec71559014f33\",\n                                  \"name\": \"section1\",\n                                  \"createdAt\": \"2022-07-11T10:11:30.687Z\",\n                                  \"updatedAt\": \"2022-07-11T10:11:30.687Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf757217ec71559014f3f\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf741217ec71559014f33\",\n                                  \"name\": \"section2\",\n                                  \"createdAt\": \"2022-07-11T10:11:35.803Z\",\n                                  \"updatedAt\": \"2022-07-11T10:11:35.803Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf75d217ec71559014f45\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf741217ec71559014f33\",\n                                  \"name\": \"section3\",\n                                  \"createdAt\": \"2022-07-11T10:11:41.428Z\",\n                                  \"updatedAt\": \"2022-07-11T10:11:41.428Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf764217ec71559014f4b\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf741217ec71559014f33\",\n                                  \"name\": \"section4\",\n                                  \"createdAt\": \"2022-07-11T10:11:48.132Z\",\n                                  \"updatedAt\": \"2022-07-11T10:11:48.132Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf769217ec71559014f51\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf741217ec71559014f33\",\n                                  \"name\": \"section5\",\n                                  \"createdAt\": \"2022-07-11T10:11:53.945Z\",\n                                  \"updatedAt\": \"2022-07-11T10:11:53.945Z\"\n                              }\n                          ]\n                      },\n                      {\n                          \"_id\": \"62cbf77a217ec71559014f5d\",\n                          \"name\": \"Women's bottems\",\n                          \"category\": \"62c565ce198c336e57acf4a7\",\n                          \"createdAt\": \"2022-07-11T10:12:10.631Z\",\n                          \"updatedAt\": \"2022-07-11T10:12:10.631Z\",\n                          \"sections\": [\n                              {\n                                  \"_id\": \"62cbf78d217ec71559014f63\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf77a217ec71559014f5d\",\n                                  \"name\": \"bottems 1\",\n                                  \"createdAt\": \"2022-07-11T10:12:29.933Z\",\n                                  \"updatedAt\": \"2022-07-11T10:12:29.933Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf792217ec71559014f69\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf77a217ec71559014f5d\",\n                                  \"name\": \"bottems 2\",\n                                  \"createdAt\": \"2022-07-11T10:12:34.558Z\",\n                                  \"updatedAt\": \"2022-07-11T10:12:34.558Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf799217ec71559014f6f\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf77a217ec71559014f5d\",\n                                  \"name\": \"bottems 3\",\n                                  \"createdAt\": \"2022-07-11T10:12:41.492Z\",\n                                  \"updatedAt\": \"2022-07-11T10:12:41.492Z\"\n                              }\n                          ]\n                      },\n                      {\n                          \"_id\": \"62cbf7a9217ec71559014f74\",\n                          \"name\": \"Women's Top\",\n                          \"category\": \"62c565ce198c336e57acf4a7\",\n                          \"createdAt\": \"2022-07-11T10:12:57.423Z\",\n                          \"updatedAt\": \"2022-07-11T10:12:57.423Z\",\n                          \"sections\": [\n                              {\n                                  \"_id\": \"62cbf7b8217ec71559014f7a\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf7a9217ec71559014f74\",\n                                  \"name\": \"Top 1\",\n                                  \"createdAt\": \"2022-07-11T10:13:12.001Z\",\n                                  \"updatedAt\": \"2022-07-11T10:13:12.001Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf7bd217ec71559014f80\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf7a9217ec71559014f74\",\n                                  \"name\": \"Top 2\",\n                                  \"createdAt\": \"2022-07-11T10:13:17.058Z\",\n                                  \"updatedAt\": \"2022-07-11T10:13:17.058Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf7c1217ec71559014f86\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf7a9217ec71559014f74\",\n                                  \"name\": \"Top 3\",\n                                  \"createdAt\": \"2022-07-11T10:13:21.776Z\",\n                                  \"updatedAt\": \"2022-07-11T10:13:21.776Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf7c6217ec71559014f8c\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf7a9217ec71559014f74\",\n                                  \"name\": \"Top 4\",\n                                  \"createdAt\": \"2022-07-11T10:13:26.753Z\",\n                                  \"updatedAt\": \"2022-07-11T10:13:26.753Z\"\n                              }\n                          ]\n                      },\n                      {\n                          \"_id\": \"62cbf82d217ec71559014fa8\",\n                          \"name\": \"Women's Jwellary\",\n                          \"category\": \"62c565ce198c336e57acf4a7\",\n                          \"createdAt\": \"2022-07-11T10:15:09.993Z\",\n                          \"updatedAt\": \"2022-07-11T10:15:09.993Z\",\n                          \"sections\": [\n                              {\n                                  \"_id\": \"62cbf83d217ec71559014fb5\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf82d217ec71559014fa8\",\n                                  \"name\": \"jw 4\",\n                                  \"createdAt\": \"2022-07-11T10:15:25.741Z\",\n                                  \"updatedAt\": \"2022-07-11T10:15:25.741Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf843217ec71559014fbb\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf82d217ec71559014fa8\",\n                                  \"name\": \"jw 1\",\n                                  \"createdAt\": \"2022-07-11T10:15:31.089Z\",\n                                  \"updatedAt\": \"2022-07-11T10:15:31.089Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf848217ec71559014fcf\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf82d217ec71559014fa8\",\n                                  \"name\": \"jw 2\",\n                                  \"createdAt\": \"2022-07-11T10:15:36.169Z\",\n                                  \"updatedAt\": \"2022-07-11T10:15:36.169Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf84c217ec71559014fdc\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf82d217ec71559014fa8\",\n                                  \"name\": \"jw 3\",\n                                  \"createdAt\": \"2022-07-11T10:15:40.621Z\",\n                                  \"updatedAt\": \"2022-07-11T10:15:40.621Z\"\n                              },\n                              {\n                                  \"_id\": \"62cbf851217ec71559014fe2\",\n                                  \"category\": \"62c565ce198c336e57acf4a7\",\n                                  \"subcategory\": \"62cbf82d217ec71559014fa8\",\n                                  \"name\": \"jw 4\",\n                                  \"createdAt\": \"2022-07-11T10:15:45.399Z\",\n                                  \"updatedAt\": \"2022-07-11T10:15:45.399Z\"\n                              }\n                          ]\n                      }\n                  ]\n              },\n          ],\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/CategoryController.ts",
    "groupTitle": "App-Category"
  },
  {
    "type": "get",
    "url": "/api/v1/app/category/_id",
    "title": "Sub Category List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "subcategory-list",
    "group": "App-Category",
    "description": "<p>pass category _id as params</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "{\n      \"status\": 200,\n      \"statusText\": \"SUCCESS\",\n      \"message\": \"Subcategory List\",\n      \"data\": {\n          \"subcategories\": [\n              {\n                  \"_id\": \"62c57716f96069e70cf20b57\",\n                  \"name\": \"Women's Clothings\",\n                  \"category\": \"62c565ce198c336e57acf4a7\",\n                  \"createdAt\": \"2022-07-06T11:50:46.672Z\",\n                  \"updatedAt\": \"2022-07-06T11:50:46.672Z\",\n                  \"sections\": [\n                      {\n                          \"_id\": \"62c57985e157e053e48266ce\",\n                          \"category\": \"62c565ce198c336e57acf4a7\",\n                          \"subcategory\": \"62c57716f96069e70cf20b57\",\n                          \"name\": \"dresses\",\n                          \"createdAt\": \"2022-07-06T12:01:09.501Z\",\n                          \"updatedAt\": \"2022-07-06T12:01:09.501Z\"\n                      }\n                  ]\n              }\n          ],\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/CategoryController.ts",
    "groupTitle": "App-Category"
  },
  {
    "type": "get",
    "url": "/api/v1/app/product/list?page=1&limit=10",
    "title": "Product List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "list",
    "group": "App-Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>page no default 1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>default 20</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "category",
            "description": "<p>category id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "subcategory",
            "description": "<p>subcategory id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "section",
            "description": "<p>section id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "{\n      \"status\": 200,\n      \"statusText\": \"SUCCESS\",\n      \"message\": \"Product fetched successfully\",\n      \"data\": {\n              \"count\": 4,\n              \"products\": [\n                  {\n                      \"_id\": \"62cfb67426bd109f9ae2d7cf\",\n                      \"name\": \"Mobile\",\n                      \"sku\": \"XUUW1V49R9\",\n                      \"price\": 50000,\n                      \"categoryId\": \"62c565ce198c336e57acf4a7\",\n                      \"categoryName\": \"Electronics\",\n                      \"subcategoryName\": \"Digital\",\n                      \"subcategoryId\": \"62cbf77a217ec71559014f5d\",\n                      \"author\": \"samsung\",\n                      \"stock\": 56,\n                      \"description\": \"this is very amazing\",\n                      \"regularPrice\": 40000,\n                      \"salePrice\": 45000,\n                      \"taxClass\": \"abc\",\n                      \"taxStatus\": \"acceepted\",\n                      \"stockQuantity\": 45,\n                      \"allowBackOrders\": true,\n                      \"lowStockThreshold\": 34,\n                      \"soldIndividualStock\": 677,\n                      \"weight\": 500,\n                      \"weightUnit\": \"gjjgg\",\n                      \"dimensions\": \"vfjdfjf\",\n                      \"shippingClass\": \"firstclass\",\n                      \"upSells\": true,\n                      \"crossSells\": true,\n                      \"color\": \"blue\",\n                      \"material\": \"fjfgjj\",\n                      \"purchasedNote\": \"gfknfk\",\n                      \"menuOrder\": \"htgt\",\n                      \"isReviewEnabled\": true,\n                      \"adminCommissionType\": \"defg\",\n                      \"adminCommission\": 890,\n                      \"cashbackTypes\": [\n                          {\n                              \"cashbackType\": \"rtgphhh\",\n                              \"_id\": \"62cfb67426bd109f9ae2d7d0\"\n                          }\n                      ],\n                      \"photos\": [\n                          \"product/62cfb67426bd109f9ae2d7cf/photos/Sample-png-image-500kb.png\"\n                      ],\n                      \"__v\": 0,\n                      \"coverPhoto\": \"product/62cfb67426bd109f9ae2d7cf/cover-photo/default.jpeg\"\n                  }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/ProductController.ts",
    "groupTitle": "App-Product"
  },
  {
    "type": "get",
    "url": "/api/v1/app/product/search?search='text'",
    "title": "Product Search",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>'WEB'|'IOS'|'ANDROID'</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "search",
    "group": "App-Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "{\n      \"status\": 200,\n      \"statusText\": \"SUCCESS\",\n      \"message\": \"Product list\",\n      \"data\": {\n          \"products\": [\n              {\n                  \"_id\": \"62cfb67426bd109f9ae2d7cf\",\n                  \"name\": \"Mobile\",\n                  \"weight\": 500,\n                  \"coverPhoto\": \"product/62cfb67426bd109f9ae2d7cf/cover-photo/default.jpeg\"\n              }\n          ],\n          \"execTime\": 36\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/ProductController.ts",
    "groupTitle": "App-Product"
  },
  {
    "type": "post",
    "url": "api/v1/app/user/edit-profile",
    "title": "Edit Profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "edit_profile",
    "group": "App-User",
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "        {\n    \"status\": 200,\n    \"statusText\": \"SUCCESS\",\n    \"message\": \"UserProfile added successfully\",\n    \"data\": {\n        \"_id\": \"62daa7c9df7ccbd75ff90c18\",\n        \"email\": \"rahul@123gmail.com\",\n        \"isEmailVerified\": true,\n        \"isAccountActive\": true,\n        \"__v\": 0,\n        \"accountNumber\": 37378731355699,\n        \"avatar\": \"user-profiles/1658497014545-mobilebanner4.jpeg\",\n        \"description\": \"bnkbnkbnkbrkbr\",\n        \"displayName\": \"rahulkannoujia\",\n        \"firstName\": \"ankit\",\n        \"lastName\": \"kannoujia\",\n        \"name\": \"ankit kannoujia\",\n        \"paypalEmail\": \"rahul@127gmail.com\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/UserController.ts",
    "groupTitle": "App-User"
  },
  {
    "type": "patch",
    "url": "api/v1/app/user/edit-profile",
    "title": "Update Social",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "update_social",
    "group": "App-User",
    "success": {
      "examples": [
        {
          "title": "Success-Response-1:",
          "content": "{\"status\":200,\"statusText\":\"SUCCESS\",\"message\":\"User social update sucessfully\",\"data\":{\"user\":{\"_id\":\"62da9df4db527e1edf7525e1\",\"email\":\"rahul@123gmail.com\",\"isEmailVerified\":true,\"isAccountActive\":true,\"__v\":0,\"accountNumber\":37378731355699,\"avatar\":\"user-profiles/1658494688479-mobilebanner3.jpeg\",\"description\":\"gjrogjojtobjtobjtobjtojbtobjto[btro\",\"displayName\":\"rahulkannoujia\",\"firstName\":\"sumit\",\"lastName\":\"kannoujia\",\"name\":\"sumit kannoujia\",\"paypalEmail\":\"rahul@127gmail.com\",\"facebookProfileUrl\":\"glgflfbfbfblfbflb\",\"instagramUsername\":\"gejggjrgjrjfjfoooooooooog\",\"linkedinProfileUrl\":\"dvvfvvvfvblbflbfb\",\"twitterUsername\":\"qwertyuiofbkfbgkbb\"},\"execTime\":61}}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/app/UserController.ts",
    "groupTitle": "App-User"
  }
] });
