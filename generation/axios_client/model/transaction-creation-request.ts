/* tslint:disable */
/* eslint-disable */
/**
 * BankWiz API
 * An API for accessing banking functionalities provided by BankWiz
 *
 * The version of the OpenAPI document: 0.2.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface TransactionCreationRequest
 */
export interface TransactionCreationRequest {
    /**
     * 
     * @type {number}
     * @memberof TransactionCreationRequest
     */
    'accountId': number;
    /**
     * 
     * @type {number}
     * @memberof TransactionCreationRequest
     */
    'amountInCents': number;
    /**
     * 
     * @type {string}
     * @memberof TransactionCreationRequest
     */
    'date': string;
}

