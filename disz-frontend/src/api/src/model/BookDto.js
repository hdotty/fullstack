/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BorrowDto from './BorrowDto';

/**
 * The BookDto model module.
 * @module model/BookDto
 * @version 1.0
 */
class BookDto {
    /**
     * Constructs a new <code>BookDto</code>.
     * @alias module:model/BookDto
     * @param author {String} 
     * @param category {String} 
     * @param title {String} 
     */
    constructor(author, category, title) { 
        
        BookDto.initialize(this, author, category, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, author, category, title) { 
        obj['author'] = author;
        obj['category'] = category;
        obj['title'] = title;
    }

    /**
     * Constructs a <code>BookDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BookDto} obj Optional instance to populate.
     * @return {module:model/BookDto} The populated <code>BookDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BookDto();

            if (data.hasOwnProperty('author')) {
                obj['author'] = ApiClient.convertToType(data['author'], 'String');
            }
            if (data.hasOwnProperty('bookId')) {
                obj['bookId'] = ApiClient.convertToType(data['bookId'], 'Number');
            }
            if (data.hasOwnProperty('borrows')) {
                obj['borrows'] = ApiClient.convertToType(data['borrows'], [BorrowDto]);
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BookDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BookDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BookDto.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['author'] && !(typeof data['author'] === 'string' || data['author'] instanceof String)) {
            throw new Error("Expected the field `author` to be a primitive type in the JSON string but got " + data['author']);
        }
        if (data['borrows']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['borrows'])) {
                throw new Error("Expected the field `borrows` to be an array in the JSON data but got " + data['borrows']);
            }
            // validate the optional field `borrows` (array)
            for (const item of data['borrows']) {
                BorrowDto.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['category'] && !(typeof data['category'] === 'string' || data['category'] instanceof String)) {
            throw new Error("Expected the field `category` to be a primitive type in the JSON string but got " + data['category']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }

        return true;
    }


}

BookDto.RequiredProperties = ["author", "category", "title"];

/**
 * @member {String} author
 */
BookDto.prototype['author'] = undefined;

/**
 * @member {Number} bookId
 */
BookDto.prototype['bookId'] = undefined;

/**
 * @member {Array.<module:model/BorrowDto>} borrows
 */
BookDto.prototype['borrows'] = undefined;

/**
 * @member {String} category
 */
BookDto.prototype['category'] = undefined;

/**
 * @member {String} title
 */
BookDto.prototype['title'] = undefined;






export default BookDto;
