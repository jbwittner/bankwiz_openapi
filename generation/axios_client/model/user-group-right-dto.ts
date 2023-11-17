/* tslint:disable */
/* eslint-disable */
/**
 * BankWiz API
 * An API for accessing banking functionalities provided by BankWiz
 *
 * The version of the OpenAPI document: 0.8.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { UserDTO } from './user-dto';
// May contain unused imports in some cases
// @ts-ignore
import { UserGroupRightEnum } from './user-group-right-enum';

/**
 * 
 * @export
 * @interface UserGroupRightDTO
 */
export interface UserGroupRightDTO {
    /**
     * 
     * @type {string}
     * @memberof UserGroupRightDTO
     */
    'id': string;
    /**
     * 
     * @type {UserDTO}
     * @memberof UserGroupRightDTO
     */
    'user': UserDTO;
    /**
     * 
     * @type {UserGroupRightEnum}
     * @memberof UserGroupRightDTO
     */
    'right': UserGroupRightEnum;
}



