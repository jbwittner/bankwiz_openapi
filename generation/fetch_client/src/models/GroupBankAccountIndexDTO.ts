/* tslint:disable */
/* eslint-disable */
/**
 * BankWiz API
 * An API for accessing banking functionalities provided by BankWiz
 *
 * The version of the OpenAPI document: 0.13.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BankAccountIndexDTO } from './BankAccountIndexDTO';
import {
    BankAccountIndexDTOFromJSON,
    BankAccountIndexDTOFromJSONTyped,
    BankAccountIndexDTOToJSON,
} from './BankAccountIndexDTO';
import type { GroupIndexDTO } from './GroupIndexDTO';
import {
    GroupIndexDTOFromJSON,
    GroupIndexDTOFromJSONTyped,
    GroupIndexDTOToJSON,
} from './GroupIndexDTO';

/**
 * 
 * @export
 * @interface GroupBankAccountIndexDTO
 */
export interface GroupBankAccountIndexDTO {
    /**
     * 
     * @type {GroupIndexDTO}
     * @memberof GroupBankAccountIndexDTO
     */
    groupeIndex: GroupIndexDTO;
    /**
     * 
     * @type {Array<BankAccountIndexDTO>}
     * @memberof GroupBankAccountIndexDTO
     */
    bankAccountIndexList: Array<BankAccountIndexDTO>;
}

/**
 * Check if a given object implements the GroupBankAccountIndexDTO interface.
 */
export function instanceOfGroupBankAccountIndexDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "groupeIndex" in value;
    isInstance = isInstance && "bankAccountIndexList" in value;

    return isInstance;
}

export function GroupBankAccountIndexDTOFromJSON(json: any): GroupBankAccountIndexDTO {
    return GroupBankAccountIndexDTOFromJSONTyped(json, false);
}

export function GroupBankAccountIndexDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupBankAccountIndexDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'groupeIndex': GroupIndexDTOFromJSON(json['groupeIndex']),
        'bankAccountIndexList': ((json['bankAccountIndexList'] as Array<any>).map(BankAccountIndexDTOFromJSON)),
    };
}

export function GroupBankAccountIndexDTOToJSON(value?: GroupBankAccountIndexDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'groupeIndex': GroupIndexDTOToJSON(value.groupeIndex),
        'bankAccountIndexList': ((value.bankAccountIndexList as Array<any>).map(BankAccountIndexDTOToJSON)),
    };
}

