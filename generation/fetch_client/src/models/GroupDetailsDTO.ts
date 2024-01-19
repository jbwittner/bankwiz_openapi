/* tslint:disable */
/* eslint-disable */
/**
 * BankWiz API
 * An API for accessing banking functionalities provided by BankWiz
 *
 * The version of the OpenAPI document: 0.14.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UserGroupRightDTO } from './UserGroupRightDTO';
import {
    UserGroupRightDTOFromJSON,
    UserGroupRightDTOFromJSONTyped,
    UserGroupRightDTOToJSON,
} from './UserGroupRightDTO';

/**
 * 
 * @export
 * @interface GroupDetailsDTO
 */
export interface GroupDetailsDTO {
    /**
     * 
     * @type {string}
     * @memberof GroupDetailsDTO
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof GroupDetailsDTO
     */
    groupName: string;
    /**
     * 
     * @type {Array<UserGroupRightDTO>}
     * @memberof GroupDetailsDTO
     */
    usersRights: Array<UserGroupRightDTO>;
}

/**
 * Check if a given object implements the GroupDetailsDTO interface.
 */
export function instanceOfGroupDetailsDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "groupName" in value;
    isInstance = isInstance && "usersRights" in value;

    return isInstance;
}

export function GroupDetailsDTOFromJSON(json: any): GroupDetailsDTO {
    return GroupDetailsDTOFromJSONTyped(json, false);
}

export function GroupDetailsDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupDetailsDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'groupName': json['groupName'],
        'usersRights': ((json['usersRights'] as Array<any>).map(UserGroupRightDTOFromJSON)),
    };
}

export function GroupDetailsDTOToJSON(value?: GroupDetailsDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'groupName': value.groupName,
        'usersRights': ((value.usersRights as Array<any>).map(UserGroupRightDTOToJSON)),
    };
}

