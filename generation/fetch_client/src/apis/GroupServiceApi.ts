/* tslint:disable */
/* eslint-disable */
/**
 * BankWiz API
 * An API for accessing banking functionalities provided by BankWiz
 *
 * The version of the OpenAPI document: 0.15.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AddUserGroupRequest,
  GroupCreationRequest,
  GroupDetailsDTO,
  GroupIndexDTO,
  UserGroupRightDTO,
} from '../models/index';
import {
    AddUserGroupRequestFromJSON,
    AddUserGroupRequestToJSON,
    GroupCreationRequestFromJSON,
    GroupCreationRequestToJSON,
    GroupDetailsDTOFromJSON,
    GroupDetailsDTOToJSON,
    GroupIndexDTOFromJSON,
    GroupIndexDTOToJSON,
    UserGroupRightDTOFromJSON,
    UserGroupRightDTOToJSON,
} from '../models/index';

export interface AddUserGroupOperationRequest {
    groupId: string;
    addUserGroupRequest: AddUserGroupRequest;
}

export interface CreateGroupRequest {
    groupCreationRequest: GroupCreationRequest;
}

export interface DeleteGroupRequest {
    id: string;
}

export interface DeleteUserFromGroupRequest {
    groupId: string;
    userId: string;
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
     * @param {string} groupId Group ID
     * @param {AddUserGroupRequest} addUserGroupRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupServiceApiInterface
     */
    addUserGroupRaw(requestParameters: AddUserGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserGroupRightDTO>>;

    /**
     * Add user to group
     */
    addUserGroup(requestParameters: AddUserGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserGroupRightDTO>;

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
     * @summary Delete a group
     * @param {string} id Group ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupServiceApiInterface
     */
    deleteGroupRaw(requestParameters: DeleteGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete a group
     */
    deleteGroup(requestParameters: DeleteGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Delete user from a group
     * @param {string} groupId Group ID
     * @param {string} userId User ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupServiceApiInterface
     */
    deleteUserFromGroupRaw(requestParameters: DeleteUserFromGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete user from a group
     */
    deleteUserFromGroup(requestParameters: DeleteUserFromGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

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
    getUserGroupsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GroupIndexDTO>>>;

    /**
     * Get all groups of user
     */
    getUserGroups(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GroupIndexDTO>>;

}

/**
 * 
 */
export class GroupServiceApi extends runtime.BaseAPI implements GroupServiceApiInterface {

    /**
     * Add user to group
     */
    async addUserGroupRaw(requestParameters: AddUserGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserGroupRightDTO>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling addUserGroup.');
        }

        if (requestParameters.addUserGroupRequest === null || requestParameters.addUserGroupRequest === undefined) {
            throw new runtime.RequiredError('addUserGroupRequest','Required parameter requestParameters.addUserGroupRequest was null or undefined when calling addUserGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["openid", "profile", "email"]);
        }

        const response = await this.request({
            path: `/group/{groupId}/user`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters.groupId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AddUserGroupRequestToJSON(requestParameters.addUserGroupRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserGroupRightDTOFromJSON(jsonValue));
    }

    /**
     * Add user to group
     */
    async addUserGroup(requestParameters: AddUserGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserGroupRightDTO> {
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
     * Delete a group
     */
    async deleteGroupRaw(requestParameters: DeleteGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["openid", "profile", "email"]);
        }

        const response = await this.request({
            path: `/group/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a group
     */
    async deleteGroup(requestParameters: DeleteGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteGroupRaw(requestParameters, initOverrides);
    }

    /**
     * Delete user from a group
     */
    async deleteUserFromGroupRaw(requestParameters: DeleteUserFromGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling deleteUserFromGroup.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling deleteUserFromGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["openid", "profile", "email"]);
        }

        const response = await this.request({
            path: `/group/{groupId}/user/{userId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters.groupId))).replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete user from a group
     */
    async deleteUserFromGroup(requestParameters: DeleteUserFromGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteUserFromGroupRaw(requestParameters, initOverrides);
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
    async getUserGroupsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GroupIndexDTO>>> {
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

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GroupIndexDTOFromJSON));
    }

    /**
     * Get all groups of user
     */
    async getUserGroups(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GroupIndexDTO>> {
        const response = await this.getUserGroupsRaw(initOverrides);
        return await response.value();
    }

}
