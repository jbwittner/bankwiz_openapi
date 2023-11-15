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


import * as runtime from '../runtime';
import type {
  UserDTO,
} from '../models/index';
import {
    UserDTOFromJSON,
    UserDTOToJSON,
} from '../models/index';

/**
 * UserServiceApi - interface
 * 
 * @export
 * @interface UserServiceApiInterface
 */
export interface UserServiceApiInterface {
    /**
     * 
     * @summary Checks if the user is registered, and registers her if not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserServiceApiInterface
     */
    checkRegistrationRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDTO>>;

    /**
     * Checks if the user is registered, and registers her if not.
     */
    checkRegistration(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDTO>;

    /**
     * 
     * @summary Get the current user information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserServiceApiInterface
     */
    getCurrentUserInfoRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDTO>>;

    /**
     * Get the current user information
     */
    getCurrentUserInfo(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDTO>;

}

/**
 * 
 */
export class UserServiceApi extends runtime.BaseAPI implements UserServiceApiInterface {

    /**
     * Checks if the user is registered, and registers her if not.
     */
    async checkRegistrationRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDTO>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["openid", "profile", "email"]);
        }

        const response = await this.request({
            path: `/user/checkregistration`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDTOFromJSON(jsonValue));
    }

    /**
     * Checks if the user is registered, and registers her if not.
     */
    async checkRegistration(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDTO> {
        const response = await this.checkRegistrationRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get the current user information
     */
    async getCurrentUserInfoRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDTO>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["openid", "profile", "email"]);
        }

        const response = await this.request({
            path: `/user`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDTOFromJSON(jsonValue));
    }

    /**
     * Get the current user information
     */
    async getCurrentUserInfo(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDTO> {
        const response = await this.getCurrentUserInfoRaw(initOverrides);
        return await response.value();
    }

}
