/* tslint:disable */
/* eslint-disable */
/**
 * BankWiz API
 * An API for accessing banking functionalities provided by BankWiz
 *
 * The version of the OpenAPI document: 0.8.0
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
import { AddUserGroupRequest } from '../model';
// @ts-ignore
import { GroupCreationRequest } from '../model';
// @ts-ignore
import { GroupDetailsDTO } from '../model';
// @ts-ignore
import { GroupIndexDTO } from '../model';
// @ts-ignore
import { UserGroupRightDTO } from '../model';
/**
 * GroupServiceApi - axios parameter creator
 * @export
 */
export const GroupServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add user to group
         * @param {string} groupId Group ID
         * @param {AddUserGroupRequest} addUserGroupRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addUserGroup: async (groupId: string, addUserGroupRequest: AddUserGroupRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('addUserGroup', 'groupId', groupId)
            // verify required parameter 'addUserGroupRequest' is not null or undefined
            assertParamExists('addUserGroup', 'addUserGroupRequest', addUserGroupRequest)
            const localVarPath = `/group/{groupId}/user`
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(addUserGroupRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
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
         * @summary Delete user from a group
         * @param {string} groupId Group ID
         * @param {string} userId User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUserFromGroup: async (groupId: string, userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('deleteUserFromGroup', 'groupId', groupId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('deleteUserFromGroup', 'userId', userId)
            const localVarPath = `/group/{groupId}/user/{userId}`
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)))
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * @summary Get a group details
         * @param {string} id Group ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroupDetails: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getGroupDetails', 'id', id)
            const localVarPath = `/group/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * @summary Add user to group
         * @param {string} groupId Group ID
         * @param {AddUserGroupRequest} addUserGroupRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addUserGroup(groupId: string, addUserGroupRequest: AddUserGroupRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserGroupRightDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addUserGroup(groupId, addUserGroupRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
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
         * @summary Delete user from a group
         * @param {string} groupId Group ID
         * @param {string} userId User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteUserFromGroup(groupId: string, userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteUserFromGroup(groupId, userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get a group details
         * @param {string} id Group ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGroupDetails(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupDetailsDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroupDetails(id, options);
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
         * @summary Add user to group
         * @param {string} groupId Group ID
         * @param {AddUserGroupRequest} addUserGroupRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addUserGroup(groupId: string, addUserGroupRequest: AddUserGroupRequest, options?: any): AxiosPromise<UserGroupRightDTO> {
            return localVarFp.addUserGroup(groupId, addUserGroupRequest, options).then((request) => request(axios, basePath));
        },
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
         * @summary Delete user from a group
         * @param {string} groupId Group ID
         * @param {string} userId User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUserFromGroup(groupId: string, userId: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteUserFromGroup(groupId, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get a group details
         * @param {string} id Group ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroupDetails(id: string, options?: any): AxiosPromise<GroupDetailsDTO> {
            return localVarFp.getGroupDetails(id, options).then((request) => request(axios, basePath));
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
     * @summary Add user to group
     * @param {string} groupId Group ID
     * @param {AddUserGroupRequest} addUserGroupRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupServiceApiInterface
     */
    addUserGroup(groupId: string, addUserGroupRequest: AddUserGroupRequest, options?: AxiosRequestConfig): AxiosPromise<UserGroupRightDTO>;

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
     * @summary Delete user from a group
     * @param {string} groupId Group ID
     * @param {string} userId User ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupServiceApiInterface
     */
    deleteUserFromGroup(groupId: string, userId: string, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @summary Get a group details
     * @param {string} id Group ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupServiceApiInterface
     */
    getGroupDetails(id: string, options?: AxiosRequestConfig): AxiosPromise<GroupDetailsDTO>;

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
     * @summary Add user to group
     * @param {string} groupId Group ID
     * @param {AddUserGroupRequest} addUserGroupRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupServiceApi
     */
    public addUserGroup(groupId: string, addUserGroupRequest: AddUserGroupRequest, options?: AxiosRequestConfig) {
        return GroupServiceApiFp(this.configuration).addUserGroup(groupId, addUserGroupRequest, options).then((request) => request(this.axios, this.basePath));
    }

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
     * @summary Delete user from a group
     * @param {string} groupId Group ID
     * @param {string} userId User ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupServiceApi
     */
    public deleteUserFromGroup(groupId: string, userId: string, options?: AxiosRequestConfig) {
        return GroupServiceApiFp(this.configuration).deleteUserFromGroup(groupId, userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get a group details
     * @param {string} id Group ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupServiceApi
     */
    public getGroupDetails(id: string, options?: AxiosRequestConfig) {
        return GroupServiceApiFp(this.configuration).getGroupDetails(id, options).then((request) => request(this.axios, this.basePath));
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

