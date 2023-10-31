/* tslint:disable */
/* eslint-disable */
/**
 * BankWiz API
 * An API for accessing banking functionalities provided by BankWiz
 *
 * The version of the OpenAPI document: 0.3.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GroupAuthorizationEnum } from './GroupAuthorizationEnum';
import {
    GroupAuthorizationEnumFromJSON,
    GroupAuthorizationEnumFromJSONTyped,
    GroupAuthorizationEnumToJSON,
} from './GroupAuthorizationEnum';
import type { UserDTO } from './UserDTO';
import {
    UserDTOFromJSON,
    UserDTOFromJSONTyped,
    UserDTOToJSON,
} from './UserDTO';

/**
 * 
 * @export
 * @interface UserGroupDTO
 */
export interface UserGroupDTO {
    /**
     * 
     * @type {UserDTO}
     * @memberof UserGroupDTO
     */
    user: UserDTO;
    /**
     * 
     * @type {GroupAuthorizationEnum}
     * @memberof UserGroupDTO
     */
    authorization: GroupAuthorizationEnum;
}

/**
 * Check if a given object implements the UserGroupDTO interface.
 */
export function instanceOfUserGroupDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "user" in value;
    isInstance = isInstance && "authorization" in value;

    return isInstance;
}

export function UserGroupDTOFromJSON(json: any): UserGroupDTO {
    return UserGroupDTOFromJSONTyped(json, false);
}

export function UserGroupDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserGroupDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': UserDTOFromJSON(json['user']),
        'authorization': GroupAuthorizationEnumFromJSON(json['authorization']),
    };
}

export function UserGroupDTOToJSON(value?: UserGroupDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': UserDTOToJSON(value.user),
        'authorization': GroupAuthorizationEnumToJSON(value.authorization),
    };
}

