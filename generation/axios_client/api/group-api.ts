/* tslint:disable */
/* eslint-disable */
/**
 * BankWiz API
 * An API for accessing banking functionalities provided by BankWiz
 *
 * The version of the OpenAPI document: 0.2.3
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
import { GroupDTO } from '../model';
// @ts-ignore
import { GroupUpdateRequest } from '../model';
// @ts-ignore
import { UpdateUserGroupRequest } from '../model';
/**
 * GroupApi - axios parameter creator
 * @export
 */
export const GroupApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add a user to the group
         * @param {number} groupId 
         * @param {AddUserGroupRequest} addUserGroupRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addUserToGroup: async (groupId: number, addUserGroupRequest: AddUserGroupRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('addUserToGroup', 'groupId', groupId)
            // verify required parameter 'addUserGroupRequest' is not null or undefined
            assertParamExists('addUserToGroup', 'addUserGroupRequest', addUserGroupRequest)
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

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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
         * @summary Delete a group
         * @param {number} groupId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteGroup: async (groupId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('deleteGroup', 'groupId', groupId)
            const localVarPath = `/group/{groupId}`
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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
         * @summary Get group information
         * @param {number} groupId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroup: async (groupId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('getGroup', 'groupId', groupId)
            const localVarPath = `/group/{groupId}`
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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
         * @summary Get my groups
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroups: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
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

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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
         * @summary Remove user from a group
         * @param {number} groupId 
         * @param {number} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeUserFromGroup: async (groupId: number, userId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('removeUserFromGroup', 'groupId', groupId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('removeUserFromGroup', 'userId', userId)
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

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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
         * @summary Update group information
         * @param {number} groupId 
         * @param {GroupUpdateRequest} groupUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateGroup: async (groupId: number, groupUpdateRequest: GroupUpdateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('updateGroup', 'groupId', groupId)
            // verify required parameter 'groupUpdateRequest' is not null or undefined
            assertParamExists('updateGroup', 'groupUpdateRequest', groupUpdateRequest)
            const localVarPath = `/group/{groupId}`
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(groupUpdateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update user in a group
         * @param {number} groupId 
         * @param {number} userId 
         * @param {UpdateUserGroupRequest} updateUserGroupRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUserInGroup: async (groupId: number, userId: number, updateUserGroupRequest: UpdateUserGroupRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('updateUserInGroup', 'groupId', groupId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('updateUserInGroup', 'userId', userId)
            // verify required parameter 'updateUserGroupRequest' is not null or undefined
            assertParamExists('updateUserInGroup', 'updateUserGroupRequest', updateUserGroupRequest)
            const localVarPath = `/group/{groupId}/user/{userId}`
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)))
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateUserGroupRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GroupApi - functional programming interface
 * @export
 */
export const GroupApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GroupApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Add a user to the group
         * @param {number} groupId 
         * @param {AddUserGroupRequest} addUserGroupRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addUserToGroup(groupId: number, addUserGroupRequest: AddUserGroupRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addUserToGroup(groupId, addUserGroupRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create a group
         * @param {GroupCreationRequest} groupCreationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createGroup(groupCreationRequest: GroupCreationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createGroup(groupCreationRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete a group
         * @param {number} groupId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteGroup(groupId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteGroup(groupId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get group information
         * @param {number} groupId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGroup(groupId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroup(groupId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get my groups
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGroups(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GroupDTO>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroups(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Remove user from a group
         * @param {number} groupId 
         * @param {number} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeUserFromGroup(groupId: number, userId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeUserFromGroup(groupId, userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update group information
         * @param {number} groupId 
         * @param {GroupUpdateRequest} groupUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateGroup(groupId: number, groupUpdateRequest: GroupUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateGroup(groupId, groupUpdateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update user in a group
         * @param {number} groupId 
         * @param {number} userId 
         * @param {UpdateUserGroupRequest} updateUserGroupRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateUserInGroup(groupId: number, userId: number, updateUserGroupRequest: UpdateUserGroupRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUserInGroup(groupId, userId, updateUserGroupRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GroupApi - factory interface
 * @export
 */
export const GroupApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GroupApiFp(configuration)
    return {
        /**
         * 
         * @summary Add a user to the group
         * @param {number} groupId 
         * @param {AddUserGroupRequest} addUserGroupRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addUserToGroup(groupId: number, addUserGroupRequest: AddUserGroupRequest, options?: any): AxiosPromise<GroupDTO> {
            return localVarFp.addUserToGroup(groupId, addUserGroupRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create a group
         * @param {GroupCreationRequest} groupCreationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createGroup(groupCreationRequest: GroupCreationRequest, options?: any): AxiosPromise<GroupDTO> {
            return localVarFp.createGroup(groupCreationRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete a group
         * @param {number} groupId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteGroup(groupId: number, options?: any): AxiosPromise<void> {
            return localVarFp.deleteGroup(groupId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get group information
         * @param {number} groupId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroup(groupId: number, options?: any): AxiosPromise<GroupDTO> {
            return localVarFp.getGroup(groupId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get my groups
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroups(options?: any): AxiosPromise<Array<GroupDTO>> {
            return localVarFp.getGroups(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Remove user from a group
         * @param {number} groupId 
         * @param {number} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeUserFromGroup(groupId: number, userId: number, options?: any): AxiosPromise<void> {
            return localVarFp.removeUserFromGroup(groupId, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update group information
         * @param {number} groupId 
         * @param {GroupUpdateRequest} groupUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateGroup(groupId: number, groupUpdateRequest: GroupUpdateRequest, options?: any): AxiosPromise<GroupDTO> {
            return localVarFp.updateGroup(groupId, groupUpdateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update user in a group
         * @param {number} groupId 
         * @param {number} userId 
         * @param {UpdateUserGroupRequest} updateUserGroupRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUserInGroup(groupId: number, userId: number, updateUserGroupRequest: UpdateUserGroupRequest, options?: any): AxiosPromise<GroupDTO> {
            return localVarFp.updateUserInGroup(groupId, userId, updateUserGroupRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GroupApi - interface
 * @export
 * @interface GroupApi
 */
export interface GroupApiInterface {
    /**
     * 
     * @summary Add a user to the group
     * @param {number} groupId 
     * @param {AddUserGroupRequest} addUserGroupRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApiInterface
     */
    addUserToGroup(groupId: number, addUserGroupRequest: AddUserGroupRequest, options?: AxiosRequestConfig): AxiosPromise<GroupDTO>;

    /**
     * 
     * @summary Create a group
     * @param {GroupCreationRequest} groupCreationRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApiInterface
     */
    createGroup(groupCreationRequest: GroupCreationRequest, options?: AxiosRequestConfig): AxiosPromise<GroupDTO>;

    /**
     * 
     * @summary Delete a group
     * @param {number} groupId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApiInterface
     */
    deleteGroup(groupId: number, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @summary Get group information
     * @param {number} groupId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApiInterface
     */
    getGroup(groupId: number, options?: AxiosRequestConfig): AxiosPromise<GroupDTO>;

    /**
     * 
     * @summary Get my groups
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApiInterface
     */
    getGroups(options?: AxiosRequestConfig): AxiosPromise<Array<GroupDTO>>;

    /**
     * 
     * @summary Remove user from a group
     * @param {number} groupId 
     * @param {number} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApiInterface
     */
    removeUserFromGroup(groupId: number, userId: number, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @summary Update group information
     * @param {number} groupId 
     * @param {GroupUpdateRequest} groupUpdateRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApiInterface
     */
    updateGroup(groupId: number, groupUpdateRequest: GroupUpdateRequest, options?: AxiosRequestConfig): AxiosPromise<GroupDTO>;

    /**
     * 
     * @summary Update user in a group
     * @param {number} groupId 
     * @param {number} userId 
     * @param {UpdateUserGroupRequest} updateUserGroupRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApiInterface
     */
    updateUserInGroup(groupId: number, userId: number, updateUserGroupRequest: UpdateUserGroupRequest, options?: AxiosRequestConfig): AxiosPromise<GroupDTO>;

}

/**
 * GroupApi - object-oriented interface
 * @export
 * @class GroupApi
 * @extends {BaseAPI}
 */
export class GroupApi extends BaseAPI implements GroupApiInterface {
    /**
     * 
     * @summary Add a user to the group
     * @param {number} groupId 
     * @param {AddUserGroupRequest} addUserGroupRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public addUserToGroup(groupId: number, addUserGroupRequest: AddUserGroupRequest, options?: AxiosRequestConfig) {
        return GroupApiFp(this.configuration).addUserToGroup(groupId, addUserGroupRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create a group
     * @param {GroupCreationRequest} groupCreationRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public createGroup(groupCreationRequest: GroupCreationRequest, options?: AxiosRequestConfig) {
        return GroupApiFp(this.configuration).createGroup(groupCreationRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete a group
     * @param {number} groupId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public deleteGroup(groupId: number, options?: AxiosRequestConfig) {
        return GroupApiFp(this.configuration).deleteGroup(groupId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get group information
     * @param {number} groupId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public getGroup(groupId: number, options?: AxiosRequestConfig) {
        return GroupApiFp(this.configuration).getGroup(groupId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get my groups
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public getGroups(options?: AxiosRequestConfig) {
        return GroupApiFp(this.configuration).getGroups(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Remove user from a group
     * @param {number} groupId 
     * @param {number} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public removeUserFromGroup(groupId: number, userId: number, options?: AxiosRequestConfig) {
        return GroupApiFp(this.configuration).removeUserFromGroup(groupId, userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update group information
     * @param {number} groupId 
     * @param {GroupUpdateRequest} groupUpdateRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public updateGroup(groupId: number, groupUpdateRequest: GroupUpdateRequest, options?: AxiosRequestConfig) {
        return GroupApiFp(this.configuration).updateGroup(groupId, groupUpdateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update user in a group
     * @param {number} groupId 
     * @param {number} userId 
     * @param {UpdateUserGroupRequest} updateUserGroupRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public updateUserInGroup(groupId: number, userId: number, updateUserGroupRequest: UpdateUserGroupRequest, options?: AxiosRequestConfig) {
        return GroupApiFp(this.configuration).updateUserInGroup(groupId, userId, updateUserGroupRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

