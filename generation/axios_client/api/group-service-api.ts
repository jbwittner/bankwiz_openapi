/* tslint:disable */
/* eslint-disable */
/**
 * BankWiz API
 * An API for accessing banking functionalities provided by BankWiz
 *
 * The version of the OpenAPI document: 0.4.3
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
import { GroupCreationRequest } from '../model';
// @ts-ignore
import { GroupIndexDTO } from '../model';
/**
 * GroupServiceApi - axios parameter creator
 * @export
 */
export const GroupServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a group
         * @param {GroupCreationRequest} groupCreationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createGroup: async (groupCreationRequest: GroupCreationRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupCreationRequest' is not null or undefined
            assertParamExists('createGroup', 'groupCreationRequest', groupCreationRequest)
            const localVarPath = `/group`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["openid", "profile", "email"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(groupCreationRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all groups of user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserGroups: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/group/groups`;
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
 * GroupServiceApi - functional programming interface
 * @export
 */
export const GroupServiceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GroupServiceApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create a group
         * @param {GroupCreationRequest} groupCreationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createGroup(groupCreationRequest: GroupCreationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupIndexDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createGroup(groupCreationRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get all groups of user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserGroups(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GroupIndexDTO>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserGroups(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GroupServiceApi - factory interface
 * @export
 */
export const GroupServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GroupServiceApiFp(configuration)
    return {
        /**
         * 
         * @summary Create a group
         * @param {GroupCreationRequest} groupCreationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createGroup(groupCreationRequest: GroupCreationRequest, options?: any): AxiosPromise<GroupIndexDTO> {
            return localVarFp.createGroup(groupCreationRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all groups of user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserGroups(options?: any): AxiosPromise<Array<GroupIndexDTO>> {
            return localVarFp.getUserGroups(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GroupServiceApi - interface
 * @export
 * @interface GroupServiceApi
 */
export interface GroupServiceApiInterface {
    /**
     * 
     * @summary Create a group
     * @param {GroupCreationRequest} groupCreationRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupServiceApiInterface
     */
    createGroup(groupCreationRequest: GroupCreationRequest, options?: AxiosRequestConfig): AxiosPromise<GroupIndexDTO>;

    /**
     * 
     * @summary Get all groups of user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupServiceApiInterface
     */
    getUserGroups(options?: AxiosRequestConfig): AxiosPromise<Array<GroupIndexDTO>>;

}

/**
 * GroupServiceApi - object-oriented interface
 * @export
 * @class GroupServiceApi
 * @extends {BaseAPI}
 */
export class GroupServiceApi extends BaseAPI implements GroupServiceApiInterface {
    /**
     * 
     * @summary Create a group
     * @param {GroupCreationRequest} groupCreationRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupServiceApi
     */
    public createGroup(groupCreationRequest: GroupCreationRequest, options?: AxiosRequestConfig) {
        return GroupServiceApiFp(this.configuration).createGroup(groupCreationRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all groups of user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupServiceApi
     */
    public getUserGroups(options?: AxiosRequestConfig) {
        return GroupServiceApiFp(this.configuration).getUserGroups(options).then((request) => request(this.axios, this.basePath));
    }
}

