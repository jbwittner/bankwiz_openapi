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



/**
 * 
 * @export
 * @interface BankOperationCreationRequest
 */
export interface BankOperationCreationRequest {
    /**
     * 
     * @type {number}
     * @memberof BankOperationCreationRequest
     */
    'accountId': number;
    /**
     * 
     * @type {number}
     * @memberof BankOperationCreationRequest
     */
    'lineAmountDecimal': number;
    /**
     * 
     * @type {string}
     * @memberof BankOperationCreationRequest
     */
    'dateAmount': string;
}

