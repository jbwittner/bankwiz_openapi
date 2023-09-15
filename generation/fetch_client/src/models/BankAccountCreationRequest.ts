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
 * @interface BankAccountCreationRequest
 */
export interface BankAccountCreationRequest {
    /**
     * 
     * @type {number}
     * @memberof BankAccountCreationRequest
     */
    groupId: number;
    /**
     * 
     * @type {string}
     * @memberof BankAccountCreationRequest
     */
    accountName: string;
    /**
     * 
     * @type {number}
     * @memberof BankAccountCreationRequest
     */
    baseAmountDecimal: number;
}

/**
 * Check if a given object implements the BankAccountCreationRequest interface.
 */
export function instanceOfBankAccountCreationRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "groupId" in value;
    isInstance = isInstance && "accountName" in value;
    isInstance = isInstance && "baseAmountDecimal" in value;

    return isInstance;
}

export function BankAccountCreationRequestFromJSON(json: any): BankAccountCreationRequest {
    return BankAccountCreationRequestFromJSONTyped(json, false);
}

export function BankAccountCreationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankAccountCreationRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'groupId': json['groupId'],
        'accountName': json['accountName'],
        'baseAmountDecimal': json['baseAmountDecimal'],
    };
}

export function BankAccountCreationRequestToJSON(value?: BankAccountCreationRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'groupId': value.groupId,
        'accountName': value.accountName,
        'baseAmountDecimal': value.baseAmountDecimal,
    };
}

