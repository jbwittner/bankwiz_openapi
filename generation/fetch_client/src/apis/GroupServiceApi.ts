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


import * as runtime from '../runtime';
import type {
  GroupCreationRequest,
  GroupDetailsDTO,
  GroupIndexDTO,
  UserGroupRightDTO,
} from '../models/index';
import {
    GroupCreationRequestFromJSON,
    GroupCreationRequestToJSON,
    GroupDetailsDTOFromJSON,
    GroupDetailsDTOToJSON,
    GroupIndexDTOFromJSON,
    GroupIndexDTOToJSON,
    UserGroupRightDTOFromJSON,
    UserGroupRightDTOToJSON,
} from '../models/index';

export interface AddUserGroupRequest {
    id: string;
}

export interface CreateGroupRequest {
    groupCreationRequest: GroupCreationRequest;
}

export interface GetGroupDetailsRequest {
    id: string;
}

/**
 * GroupServiceApi - interface
 * 
 * @export
 * @interface GroupServiceApiInterface
 */
export interface GroupServiceApiInterface {
    /**
     * 
     * @summary Add user to group
     * @param {string} id User ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupServiceApiInterface
     */
    addUserGroupRaw(requestParameters: AddUserGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserGroupRightDTO>>;

    /**
     * Add user to group
     */
    addUserGroup(requestParameters: AddUserGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserGroupRightDTO>;

    /**
     * 
     * @summary Create a group
     * @param {GroupCreationRequest} groupCreationRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupServiceApiInterface
     */
    createGroupRaw(requestParameters: CreateGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupIndexDTO>>;

    /**
     * Create a group
     */
    createGroup(requestParameters: CreateGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupIndexDTO>;

    /**
     * 
     * @summary Get a group details
     * @param {string} id Group ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupServiceApiInterface
     */
    getGroupDetailsRaw(requestParameters: GetGroupDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupDetailsDTO>>;

    /**
     * Get a group details
     */
    getGroupDetails(requestParameters: GetGroupDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupDetailsDTO>;

    /**
     * 
     * @summary Get all groups of user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupServiceApiInterface
     */
    getUserGroupsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<UserGroupRightDTO>>>;

    /**
     * Get all groups of user
     */
    getUserGroups(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<UserGroupRightDTO>>;

}

/**
 * 
 */
export class GroupServiceApi extends runtime.BaseAPI implements GroupServiceApiInterface {

    /**
     * Add user to group
     */
    async addUserGroupRaw(requestParameters: AddUserGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserGroupRightDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling addUserGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["openid", "profile", "email"]);
        }

        const response = await this.request({
            path: `/group/user/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserGroupRightDTOFromJSON(jsonValue));
    }

    /**
     * Add user to group
     */
    async addUserGroup(requestParameters: AddUserGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserGroupRightDTO> {
        const response = await this.addUserGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a group
     */
    async createGroupRaw(requestParameters: CreateGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupIndexDTO>> {
        if (requestParameters.groupCreationRequest === null || requestParameters.groupCreationRequest === undefined) {
            throw new runtime.RequiredError('groupCreationRequest','Required parameter requestParameters.groupCreationRequest was null or undefined when calling createGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["openid", "profile", "email"]);
        }

        const response = await this.request({
            path: `/group`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GroupCreationRequestToJSON(requestParameters.groupCreationRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupIndexDTOFromJSON(jsonValue));
    }

    /**
     * Create a group
     */
    async createGroup(requestParameters: CreateGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupIndexDTO> {
        const response = await this.createGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a group details
     */
    async getGroupDetailsRaw(requestParameters: GetGroupDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupDetailsDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getGroupDetails.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["openid", "profile", "email"]);
        }

        const response = await this.request({
            path: `/group/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupDetailsDTOFromJSON(jsonValue));
    }

    /**
     * Get a group details
     */
    async getGroupDetails(requestParameters: GetGroupDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupDetailsDTO> {
        const response = await this.getGroupDetailsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all groups of user
     */
    async getUserGroupsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<UserGroupRightDTO>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["openid", "profile", "email"]);
        }

        const response = await this.request({
            path: `/group/groups`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserGroupRightDTOFromJSON));
    }

    /**
     * Get all groups of user
     */
    async getUserGroups(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<UserGroupRightDTO>> {
        const response = await this.getUserGroupsRaw(initOverrides);
        return await response.value();
    }

}
