/* tslint:disable */
/* eslint-disable */
/**
 * BankWiz API
 * An API for accessing banking functionalities provided by BankWiz
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @enum {string}
 */

export const GroupAuthorizationEnum = {
    Read: 'READ',
    Write: 'WRITE',
    Admin: 'ADMIN'
} as const;

export type GroupAuthorizationEnum = typeof GroupAuthorizationEnum[keyof typeof GroupAuthorizationEnum];



