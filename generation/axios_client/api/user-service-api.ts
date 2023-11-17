/* tslint:disable */
/* eslint-disable */
/**
 * BankWiz API
 * An API for accessing banking functionalities provided by BankWiz
 *
 * The version of the OpenAPI document: 0.8.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { UserDTO } from '../model';
/**
 * UserServiceApi - axios parameter creator
 * @export
 */
export const UserServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Checks if the user is registered, and registers her if not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkRegistration: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/checkregistration`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["openid", "profile", "email"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get the current user information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentUserInfo: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["openid", "profile", "email"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserServiceApi - functional programming interface
 * @export
 */
export const UserServiceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserServiceApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Checks if the user is registered, and registers her if not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkRegistration(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkRegistration(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get the current user information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCurrentUserInfo(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCurrentUserInfo(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserServiceApi - factory interface
 * @export
 */
export const UserServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserServiceApiFp(configuration)
    return {
        /**
         * 
         * @summary Checks if the user is registered, and registers her if not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkRegistration(options?: any): AxiosPromise<UserDTO> {
            return localVarFp.checkRegistration(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get the current user information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentUserInfo(options?: any): AxiosPromise<UserDTO> {
            return localVarFp.getCurrentUserInfo(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserServiceApi - interface
 * @export
 * @interface UserServiceApi
 */
export interface UserServiceApiInterface {
    /**
     * 
     * @summary Checks if the user is registered, and registers her if not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserServiceApiInterface
     */
    checkRegistration(options?: AxiosRequestConfig): AxiosPromise<UserDTO>;

    /**
     * 
     * @summary Get the current user information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserServiceApiInterface
     */
    getCurrentUserInfo(options?: AxiosRequestConfig): AxiosPromise<UserDTO>;

}

/**
 * UserServiceApi - object-oriented interface
 * @export
 * @class UserServiceApi
 * @extends {BaseAPI}
 */
export class UserServiceApi extends BaseAPI implements UserServiceApiInterface {
    /**
     * 
     * @summary Checks if the user is registered, and registers her if not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserServiceApi
     */
    public checkRegistration(options?: AxiosRequestConfig) {
        return UserServiceApiFp(this.configuration).checkRegistration(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get the current user information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserServiceApi
     */
    public getCurrentUserInfo(options?: AxiosRequestConfig) {
        return UserServiceApiFp(this.configuration).getCurrentUserInfo(options).then((request) => request(this.axios, this.basePath));
    }
}

