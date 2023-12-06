/* tslint:disable */
/* eslint-disable */
/**
 * BankWiz API
 * An API for accessing banking functionalities provided by BankWiz
 *
 * The version of the OpenAPI document: 0.11.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface BankAccountCreationRequest
 */
export interface BankAccountCreationRequest {
    /**
     * 
     * @type {string}
     * @memberof BankAccountCreationRequest
     */
    'bankAccountName': string;
    /**
     * 
     * @type {string}
     * @memberof BankAccountCreationRequest
     */
    'groupId': string;
    /**
     * 
     * @type {number}
     * @memberof BankAccountCreationRequest
     */
    'decimalBaseAmount': number;
}

