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
import type { UserGroupRightEnum } from './UserGroupRightEnum';
import {
    UserGroupRightEnumFromJSON,
    UserGroupRightEnumFromJSONTyped,
    UserGroupRightEnumToJSON,
} from './UserGroupRightEnum';

/**
 * 
 * @export
 * @interface AddUserGroupRequest
 */
export interface AddUserGroupRequest {
    /**
     * 
     * @type {string}
     * @memberof AddUserGroupRequest
     */
    userId: string;
    /**
     * 
     * @type {UserGroupRightEnum}
     * @memberof AddUserGroupRequest
     */
    right: UserGroupRightEnum;
}

/**
 * Check if a given object implements the AddUserGroupRequest interface.
 */
export function instanceOfAddUserGroupRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "right" in value;

    return isInstance;
}

export function AddUserGroupRequestFromJSON(json: any): AddUserGroupRequest {
    return AddUserGroupRequestFromJSONTyped(json, false);
}

export function AddUserGroupRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddUserGroupRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': json['userId'],
        'right': UserGroupRightEnumFromJSON(json['right']),
    };
}

export function AddUserGroupRequestToJSON(value?: AddUserGroupRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'right': UserGroupRightEnumToJSON(value.right),
    };
}

