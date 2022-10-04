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
const ProductConstant_1 = require("../../constants/ProductConstant");
const S3Constant_1 = require("../../constants/S3Constant");
const ProductModel_1 = require("../../models/ProductModel");
const ApiFeatures_1 = require("../../utils/ApiFeatures");
const FileUpload_1 = require("../../utils/FileUpload");
const sharp = require("sharp");
const fs = require("fs");
class ProductService {
    add(productData) {
        return __awaiter(this, void 0, void 0, function* () {
            productData.sku = yield this.generateSku();
            const newProduct = yield ProductModel_1.default.create(productData);
            return newProduct;
        });
    }
    /**
     *
     * @returns {Promise<string>} unique product sku
     */
    generateSku() {
        return __awaiter(this, void 0, void 0, function* () {
            let code = this.getCode();
            const isCodeExist = yield ProductModel_1.default.exists({ sku: code });
            if (isCodeExist) {
                code = yield this.generateSku();
            }
            return code;
        });
    }
    /**
     *
     * @returns {String} a 10 digits code
     */
    getCode() {
        let digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let code = '';
        for (let i = 0; i < 10; i++) {
            code += digits[Math.floor(Math.random() * 36)];
        }
        return code;
    }
    /**
     *
     * @param productId product id of
     * @param photos
     * @param coverPhoto
     * @returns
     */
    uploadImage(productId, photos, coverPhoto) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield ProductModel_1.default.findById(productId);
            let coverPhotoUrl = product.coverPhoto;
            if (coverPhoto) {
                coverPhotoUrl = yield this.uploadCoverPhoto(coverPhoto, productId);
            }
            const photosUrl = yield this.uploadPhotos(photos, productId);
            return yield ProductModel_1.default.findByIdAndUpdate(productId, {
                coverPhoto: coverPhotoUrl,
                photos: photosUrl
            }, {
                new: true
            });
        });
    }
    /**
     *
     * @param photos
     * @param productId
     * @returns
     */
    uploadPhotos(photos, productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const photosUrl = [];
            if (Array.isArray(photos)) {
                for (const photo of photos) {
                    photosUrl.push(yield this.uploadPhoto(photo, productId));
                }
            }
            else {
                photosUrl.push(yield this.uploadPhoto(photos, productId));
            }
            return photosUrl;
        });
    }
    /**
     * @description upload a photo on s3
     * @param photo
     * @param productId
     * @returns
     */
    uploadPhoto(photo, productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const directoryPhoto = `${S3Constant_1.S3_DIRECTORY.product}/${productId}/photos`;
            const fileName = `${photo.originalFilename}`;
            return yield new FileUpload_1.FileUpload().uploadFileOnS3(photo, directoryPhoto, fileName);
        });
    }
    /**
     * @description upload cover photo
     * @param coverPhoto
     * @param productId
     * @returns
     */
    uploadCoverPhoto(coverPhoto, productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const directoryCover = `${S3Constant_1.S3_DIRECTORY.product}/${productId}/cover-photo`;
            const coverPhotoExtension = this.getFileExtension(coverPhoto.mimetype);
            const fileName = `default.${coverPhotoExtension}`;
            const coverPhotoUrl = yield new FileUpload_1.FileUpload().uploadFileOnS3(coverPhoto, directoryCover, fileName);
            yield this.uploadImageCopy(coverPhoto, directoryCover);
            return coverPhotoUrl;
        });
    }
    /**
        *
        * @param file
        * @param directory
        * @returns
        * @description Upload cover photo different sizes on s3
        */
    uploadImageCopy(file, directory) {
        return __awaiter(this, void 0, void 0, function* () {
            const imageConfiguration = ProductConstant_1.IMAGE_SIZES;
            for (const imgConfig of imageConfiguration) {
                const buffer = fs.readFileSync(file.filepath);
                const resizedImage = yield sharp(buffer)
                    .resize(imgConfig.width, imgConfig.height)
                    .toFormat("jpeg")
                    .toBuffer()
                    .then((res) => {
                    return res;
                });
                yield new FileUpload_1.FileUpload().uploadFileOnS3(file, directory, `${imgConfig.width}x${imgConfig.height}.jpeg`, resizedImage);
            }
            return true;
        });
    }
    /**
       *
       * @param coverPhoto
       * @param productId
       * @returns
       * @description change cover photo different sizes on s3
       */
    changeCoverPhoto(coverPhoto, productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const coverPhotoUrl = yield this.uploadCoverPhoto(coverPhoto, productId);
            const product = yield ProductModel_1.default.findByIdAndUpdate(productId, { coverPhoto: coverPhotoUrl }, { new: true });
            return product;
        });
    }
    getFileExtension(mimetype) {
        return mimetype.split('/')[1];
    }
    /**
      * @param queryString
      * @returns
      */
    list(queryString) {
        return __awaiter(this, void 0, void 0, function* () {
            const countQuery = ProductModel_1.default.find({ isDeleted: false });
            const countFeature = new ApiFeatures_1.ApiFeatures(countQuery, queryString)
                .filtering()
                .searching(['name'])
                .getCount();
            const lisQuery = ProductModel_1.default.find({ isDeleted: false });
            const listFeature = new ApiFeatures_1.ApiFeatures(lisQuery, queryString)
                .filtering()
                .searching(['name'])
                .sorting('-createdAt')
                .fieldsLimiting()
                .pagination();
            const count = yield countFeature.query;
            const list = yield listFeature.query;
            return { list, count };
        });
    }
    /**
        *
        * @param id {String} product id for edit product
        * @returns {Promise<ProductInterface>} edit product
        */
    edit(productData, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const editProduct = yield ProductModel_1.default.findByIdAndUpdate(id, productData);
            return editProduct;
        });
    }
    /**
        *
        * @param id {String} product id for deleting product
        * @returns {Promise<ProductInterface>} deleted product
        */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedProduct = yield ProductModel_1.default.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
            return deletedProduct;
        });
    }
    /**
       *
       * @param id {String} product id for delete productId
       * @param id {String} coverPhotoUrl for deleted coverphotoUrl
       * @returns {Promise<ProductInterface>} deleteCoverImage
       */
    deleteCoverImage(id, coverPhotoUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            yield new FileUpload_1.FileUpload().removeFileFromS3(coverPhotoUrl);
            const deleteCoverImage = yield ProductModel_1.default.findOneAndUpdate({ _id: id }, { isDeleted: true, coverPhoto: '' });
            return deleteCoverImage;
        });
    }
    deletePhoto(id, photoUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            yield new FileUpload_1.FileUpload().removeFileFromS3(photoUrl);
            const product = yield ProductModel_1.default.findById(id);
            product.photos = product.photos.filter(e => e !== photoUrl);
            yield product.save();
            return product;
        });
    }
    fetchProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            return { product: yield ProductModel_1.default.findById(productId) };
        });
    }
}
exports.default = new ProductService();
