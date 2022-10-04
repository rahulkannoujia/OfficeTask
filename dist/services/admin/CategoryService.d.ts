import { CategoryInterface } from "../../interfaces/CategoryInterface";
import { TaxCategoryInterface } from "../../interfaces/TaxCategoryInterface";
import { ObjectId } from 'mongoose';
declare class CategoryService {
    /**
     *
     * @param name {string} name of category
     * @param image {string} absolute path of category image
     * @returns category {Promise<CategoryInterface>} new added category
     */
    add(name: string, image: string): Promise<CategoryInterface>;
    /**
     *
     * @param image {File} image to be uploaded
     * @param directory {String} image directory name
     * @returns {Promise<{url: string}>} uploaded image base path
     */
    uploadImage(image: any, directory: string): Promise<{
        url: string;
    }>;
    /** @param id {String} category id for updating category
    * @param name name of category
    * @param image image url of category
    * @returns {Promise<CategoryInterface>} updated category
    */
    update(id: string, name: string, image: string): Promise<CategoryInterface>;
    /**
     *
     * @param id {String} category id for deleting category
     * @returns {Promise<CategoryInterface>} deleted category
     */
    delete(id: string): Promise<CategoryInterface>;
    /**
    *
    * @param id {String} category id for fetching category
    * @returns {Promise<CategoryInterface>} category data by id
    */
    findCategory(id: string | ObjectId): Promise<CategoryInterface>;
    /**
     *
     * @param queryString
     * @returns
     */
    list(queryString: any): Promise<{
        count: number;
        list: CategoryInterface[];
    }>;
    addTaxCategories(): Promise<TaxCategoryInterface>;
    /**
    *
    * @returns {Promise<TaxCategoryInterface>} Tax category data list
    */
    getTaxCategories(): Promise<TaxCategoryInterface>;
}
declare const _default: CategoryService;
export default _default;
