/* tslint:disable */
/* eslint-disable */
/**
 * BankWiz API
 * An API for accessing banking functionalities provided by BankWiz
 *
 * The version of the OpenAPI document: 0.2.2
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
import { BankOperationIndexDTO } from './bank-operation-index-dto';

/**
 * 
 * @export
 * @interface BankOperationDTO
 */
export interface BankOperationDTO {
    /**
     * 
     * @type {BankAccountIndexDTO}
     * @memberof BankOperationDTO
     */
    'accountIndexDTO': BankAccountIndexDTO;
    /**
     * 
     * @type {BankOperationIndexDTO}
     * @memberof BankOperationDTO
     */
    'accountLineIndexDTO': BankOperationIndexDTO;
}

