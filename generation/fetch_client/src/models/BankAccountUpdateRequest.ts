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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BankAccountUpdateRequest
 */
export interface BankAccountUpdateRequest {
    /**
     * 
     * @type {string}
     * @memberof BankAccountUpdateRequest
     */
    accountName?: string;
    /**
     * 
     * @type {number}
     * @memberof BankAccountUpdateRequest
     */
    baseAmountDecimal?: number;
}

/**
 * Check if a given object implements the BankAccountUpdateRequest interface.
 */
export function instanceOfBankAccountUpdateRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BankAccountUpdateRequestFromJSON(json: any): BankAccountUpdateRequest {
    return BankAccountUpdateRequestFromJSONTyped(json, false);
}

export function BankAccountUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankAccountUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountName': !exists(json, 'accountName') ? undefined : json['accountName'],
        'baseAmountDecimal': !exists(json, 'baseAmountDecimal') ? undefined : json['baseAmountDecimal'],
    };
}

export function BankAccountUpdateRequestToJSON(value?: BankAccountUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountName': value.accountName,
        'baseAmountDecimal': value.baseAmountDecimal,
    };
}

