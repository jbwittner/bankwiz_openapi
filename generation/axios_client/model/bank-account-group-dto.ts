/* tslint:disable */
/* eslint-disable */
/**
 * BankWiz API
 * An API for accessing banking functionalities provided by BankWiz
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { BankAccountIndexDTO } from './bank-account-index-dto';
// May contain unused imports in some cases
// @ts-ignore
import { GroupIndexDTO } from './group-index-dto';

/**
 * 
 * @export
 * @interface BankAccountGroupDTO
 */
export interface BankAccountGroupDTO {
    /**
     * 
     * @type {GroupIndexDTO}
     * @memberof BankAccountGroupDTO
     */
    'groupIndexDTO': GroupIndexDTO;
    /**
     * 
     * @type {Array<BankAccountIndexDTO>}
     * @memberof BankAccountGroupDTO
     */
    'accountIndexDTOs': Array<BankAccountIndexDTO>;
}

