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

import { exists, mapValues } from '../runtime';
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
    bankAccountName: string;
    /**
     * 
     * @type {string}
     * @memberof BankAccountCreationRequest
     */
    groupId: string;
    /**
     * 
     * @type {number}
     * @memberof BankAccountCreationRequest
     */
    decimalBaseAmount: number;
}

/**
 * Check if a given object implements the BankAccountCreationRequest interface.
 */
export function instanceOfBankAccountCreationRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "bankAccountName" in value;
    isInstance = isInstance && "groupId" in value;
    isInstance = isInstance && "decimalBaseAmount" in value;

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
        
        'bankAccountName': json['bankAccountName'],
        'groupId': json['groupId'],
        'decimalBaseAmount': json['decimalBaseAmount'],
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
        
        'bankAccountName': value.bankAccountName,
        'groupId': value.groupId,
        'decimalBaseAmount': value.decimalBaseAmount,
    };
}
