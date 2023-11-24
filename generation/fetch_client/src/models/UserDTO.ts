/* tslint:disable */
/* eslint-disable */
/**
 * BankWiz API
 * An API for accessing banking functionalities provided by BankWiz
 *
 * The version of the OpenAPI document: 0.10.0
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
 * @interface UserDTO
 */
export interface UserDTO {
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    email: string;
}

/**
 * Check if a given object implements the UserDTO interface.
 */
export function instanceOfUserDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "email" in value;

    return isInstance;
}

export function UserDTOFromJSON(json: any): UserDTO {
    return UserDTOFromJSONTyped(json, false);
}

export function UserDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'email': json['email'],
    };
}

export function UserDTOToJSON(value?: UserDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'email': value.email,
    };
}

