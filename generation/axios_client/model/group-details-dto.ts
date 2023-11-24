/* tslint:disable */
/* eslint-disable */
/**
 * BankWiz API
 * An API for accessing banking functionalities provided by BankWiz
 *
 * The version of the OpenAPI document: 0.10.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { UserGroupRightDTO } from './user-group-right-dto';

/**
 * 
 * @export
 * @interface GroupDetailsDTO
 */
export interface GroupDetailsDTO {
    /**
     * 
     * @type {string}
     * @memberof GroupDetailsDTO
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof GroupDetailsDTO
     */
    'groupName': string;
    /**
     * 
     * @type {Array<UserGroupRightDTO>}
     * @memberof GroupDetailsDTO
     */
    'usersRights': Array<UserGroupRightDTO>;
}

