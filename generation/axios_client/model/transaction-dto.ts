/* tslint:disable */
/* eslint-disable */
/**
 * BankWiz API
 * An API for accessing banking functionalities provided by BankWiz
 *
 * The version of the OpenAPI document: 0.2.6
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
import { TransactionIndexDTO } from './transaction-index-dto';

/**
 * 
 * @export
 * @interface TransactionDTO
 */
export interface TransactionDTO {
    /**
     * 
     * @type {BankAccountIndexDTO}
     * @memberof TransactionDTO
     */
    'accountIndexDTO': BankAccountIndexDTO;
    /**
     * 
     * @type {TransactionIndexDTO}
     * @memberof TransactionDTO
     */
    'transactionIndexDTO': TransactionIndexDTO;
}

