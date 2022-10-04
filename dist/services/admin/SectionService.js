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
const SectionModel_1 = require("../../models/SectionModel");
const SubcategoryModel_1 = require("../../models/SubcategoryModel");
const ApiFeatures_1 = require("../../utils/ApiFeatures");
class SectionService {
    /**
     *
     * @param category category id
     * @param subcategory subcategory id
     * @param name section name
     * @param res {Promise<SectionInterface>}
     */
    add(category, subcategory, name, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const isExist = yield SubcategoryModel_1.default.findOne({ category, _id: subcategory, isDeleted: false });
            if (isExist) {
                return yield SectionModel_1.default.create({ category, subcategory, name });
            }
            return ResponseHelper_1.default.badRequest(res, res.__('invalid_category_subcategory'), { category, subcategory });
        });
    }
    /**
    *
    * @param id {String} section id for fetching section
    * @returns {Promise<SectionInterface>} section data by id
    */
    getSectionData(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const getSectionData = yield SectionModel_1.default.findById(id);
            return getSectionData;
        });
    }
    /**
     *
     * @param sectionId {String} section id for updating section
     * @param category {String} category id
     * @param subcategory {String} subcategory id
     * @param name {String} name of section
     * @param res response Object
     * @returns {Promise<SectionInterface>} update section object
     */
    update(sectionId, category, subcategory, name, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const isExist = yield SubcategoryModel_1.default.findOne({ category, _id: subcategory, isDeleted: false });
            if (isExist) {
                return yield SectionModel_1.default.findByIdAndUpdate(sectionId, {
                    category,
                    subcategory,
                    name
                }, { new: true });
            }
            return ResponseHelper_1.default.badRequest(res, res.__('invalid_category_subcategory'), { category, subcategory });
        });
    }
    /**
     *
     * @param id {String} section id for deleting section
     * @returns {Promise<SectionInterface>} deleted section
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedSection = yield SectionModel_1.default.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
            return deletedSection;
        });
    }
    /**
    *
    * @param queryString req query object
    * @params subcategory id of subcategory
    * @returns
    */
    list(queryString, subcategory) {
        return __awaiter(this, void 0, void 0, function* () {
            const countQuery = SectionModel_1.default.find({ isDeleted: false, subcategory });
            const countFeature = new ApiFeatures_1.ApiFeatures(countQuery, queryString)
                .filtering()
                .searching(['name'])
                .getCount();
            const lisQuery = SectionModel_1.default.find({ isDeleted: false, subcategory });
            const listFeature = new ApiFeatures_1.ApiFeatures(lisQuery, queryString)
                .filtering()
                .searching(['name'])
                .sorting('-createdAt')
                .fieldsLimiting()
                .pagination();
            const count = yield countFeature.query;
            const list = yield listFeature.query;
            return { count, list };
        });
    }
}
exports.default = new SectionService();
