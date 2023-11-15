/* tslint:disable */
/* eslint-disable */
/**
 * BankWiz API
 * An API for accessing banking functionalities provided by BankWiz
 *
 * The version of the OpenAPI document: 0.6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const UserGroupRightEnum = {
    Read: 'READ',
    Write: 'WRITE',
    Admin: 'ADMIN'
} as const;
export type UserGroupRightEnum = typeof UserGroupRightEnum[keyof typeof UserGroupRightEnum];


export function UserGroupRightEnumFromJSON(json: any): UserGroupRightEnum {
    return UserGroupRightEnumFromJSONTyped(json, false);
}

export function UserGroupRightEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserGroupRightEnum {
    return json as UserGroupRightEnum;
}

export function UserGroupRightEnumToJSON(value?: UserGroupRightEnum | null): any {
    return value as any;
}

