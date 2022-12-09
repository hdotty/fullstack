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
import BookDto from './BookDto';
import PersonDto from './PersonDto';

/**
 * The BorrowDto model module.
 * @module model/BorrowDto
 * @version 1.0
 */
class BorrowDto {
    /**
     * Constructs a new <code>BorrowDto</code>.
     * @alias module:model/BorrowDto
     * @param startTime {Date} 
     */
    constructor(startTime) { 
        
        BorrowDto.initialize(this, startTime);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, startTime) { 
        obj['startTime'] = startTime;
    }

    /**
     * Constructs a <code>BorrowDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BorrowDto} obj Optional instance to populate.
     * @return {module:model/BorrowDto} The populated <code>BorrowDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BorrowDto();

            if (data.hasOwnProperty('book')) {
                obj['book'] = BookDto.constructFromObject(data['book']);
            }
            if (data.hasOwnProperty('endTime')) {
                obj['endTime'] = ApiClient.convertToType(data['endTime'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('person')) {
                obj['person'] = PersonDto.constructFromObject(data['person']);
            }
            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BorrowDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BorrowDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BorrowDto.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `book`
        if (data['book']) { // data not null
          BookDto.validateJSON(data['book']);
        }
        // validate the optional field `person`
        if (data['person']) { // data not null
          PersonDto.validateJSON(data['person']);
        }

        return true;
    }


}

BorrowDto.RequiredProperties = ["startTime"];

/**
 * @member {module:model/BookDto} book
 */
BorrowDto.prototype['book'] = undefined;

/**
 * @member {Date} endTime
 */
BorrowDto.prototype['endTime'] = undefined;

/**
 * @member {Number} id
 */
BorrowDto.prototype['id'] = undefined;

/**
 * @member {module:model/PersonDto} person
 */
BorrowDto.prototype['person'] = undefined;

/**
 * @member {Date} startTime
 */
BorrowDto.prototype['startTime'] = undefined;






export default BorrowDto;
