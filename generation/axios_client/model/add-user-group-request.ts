/* tslint:disable */
/* eslint-disable */
/**
 * BankWiz API
 * An API for accessing banking functionalities provided by BankWiz
 *
 * The version of the OpenAPI document: 0.11.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { UserGroupRightEnum } from './user-group-right-enum';

/**
 * 
 * @export
 * @interface AddUserGroupRequest
 */
export interface AddUserGroupRequest {
    /**
     * 
     * @type {string}
     * @memberof AddUserGroupRequest
     */
    'userId': string;
    /**
     * 
     * @type {UserGroupRightEnum}
     * @memberof AddUserGroupRequest
     */
    'right': UserGroupRightEnum;
}



