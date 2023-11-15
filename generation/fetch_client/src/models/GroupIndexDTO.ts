/* tslint:disable */
/* eslint-disable */
/**
 * BankWiz API
 * An API for accessing banking functionalities provided by BankWiz
 *
 * The version of the OpenAPI document: 0.6.2
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
 * @interface GroupIndexDTO
 */
export interface GroupIndexDTO {
    /**
     * 
     * @type {string}
     * @memberof GroupIndexDTO
     */
    groupId: string;
    /**
     * 
     * @type {string}
     * @memberof GroupIndexDTO
     */
    groupName: string;
}

/**
 * Check if a given object implements the GroupIndexDTO interface.
 */
export function instanceOfGroupIndexDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "groupId" in value;
    isInstance = isInstance && "groupName" in value;

    return isInstance;
}

export function GroupIndexDTOFromJSON(json: any): GroupIndexDTO {
    return GroupIndexDTOFromJSONTyped(json, false);
}

export function GroupIndexDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupIndexDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'groupId': json['groupId'],
        'groupName': json['groupName'],
    };
}

export function GroupIndexDTOToJSON(value?: GroupIndexDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'groupId': value.groupId,
        'groupName': value.groupName,
    };
}

