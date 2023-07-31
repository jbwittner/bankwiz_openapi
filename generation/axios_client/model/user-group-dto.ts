/* tslint:disable */
/* eslint-disable */
/**
 * BankWiz API
 * An API for accessing banking functionalities provided by BankWiz
 *
 * The version of the OpenAPI document: 0.2.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { GroupAuthorizationEnum } from './group-authorization-enum';
// May contain unused imports in some cases
// @ts-ignore
import { UserDTO } from './user-dto';

/**
 * 
 * @export
 * @interface UserGroupDTO
 */
export interface UserGroupDTO {
    /**
     * 
     * @type {UserDTO}
     * @memberof UserGroupDTO
     */
    'user': UserDTO;
    /**
     * 
     * @type {GroupAuthorizationEnum}
     * @memberof UserGroupDTO
     */
    'authorization': GroupAuthorizationEnum;
}



