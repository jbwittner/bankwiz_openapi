/* tslint:disable */
/* eslint-disable */
/**
 * BankWiz API
 * An API for accessing banking functionalities provided by BankWiz
 *
 * The version of the OpenAPI document: 0.2.7
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
  GroupDTO,
  GroupUpdateRequest,
  UpdateUserGroupRequest,
} from '../models/index';
import {
    AddUserGroupRequestFromJSON,
    AddUserGroupRequestToJSON,
    GroupCreationRequestFromJSON,
    GroupCreationRequestToJSON,
    GroupDTOFromJSON,
    GroupDTOToJSON,
    GroupUpdateRequestFromJSON,
    GroupUpdateRequestToJSON,
    UpdateUserGroupRequestFromJSON,
    UpdateUserGroupRequestToJSON,
} from '../models/index';

export interface AddUserToGroupRequest {
    groupId: number;
    addUserGroupRequest: AddUserGroupRequest;
}

export interface CreateGroupRequest {
    groupCreationRequest: GroupCreationRequest;
}

export interface DeleteGroupRequest {
    groupId: number;
}

export interface GetGroupRequest {
    groupId: number;
}

export interface RemoveUserFromGroupRequest {
    groupId: number;
    userId: number;
}

export interface UpdateGroupRequest {
    groupId: number;
    groupUpdateRequest: GroupUpdateRequest;
}

export interface UpdateUserInGroupRequest {
    groupId: number;
    userId: number;
    updateUserGroupRequest: UpdateUserGroupRequest;
}

/**
 * GroupApi - interface
 * 
 * @export
 * @interface GroupApiInterface
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
    addUserToGroupRaw(requestParameters: AddUserToGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupDTO>>;

    /**
     * Add a user to the group
     */
    addUserToGroup(requestParameters: AddUserToGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupDTO>;

    /**
     * 
     * @summary Create a group
     * @param {GroupCreationRequest} groupCreationRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApiInterface
     */
    createGroupRaw(requestParameters: CreateGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupDTO>>;

    /**
     * Create a group
     */
    createGroup(requestParameters: CreateGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupDTO>;

    /**
     * 
     * @summary Delete a group
     * @param {number} groupId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApiInterface
     */
    deleteGroupRaw(requestParameters: DeleteGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete a group
     */
    deleteGroup(requestParameters: DeleteGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Get group information
     * @param {number} groupId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApiInterface
     */
    getGroupRaw(requestParameters: GetGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupDTO>>;

    /**
     * Get group information
     */
    getGroup(requestParameters: GetGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupDTO>;

    /**
     * 
     * @summary Get my groups
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApiInterface
     */
    getGroupsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GroupDTO>>>;

    /**
     * Get my groups
     */
    getGroups(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GroupDTO>>;

    /**
     * 
     * @summary Remove user from a group
     * @param {number} groupId 
     * @param {number} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApiInterface
     */
    removeUserFromGroupRaw(requestParameters: RemoveUserFromGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Remove user from a group
     */
    removeUserFromGroup(requestParameters: RemoveUserFromGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Update group information
     * @param {number} groupId 
     * @param {GroupUpdateRequest} groupUpdateRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApiInterface
     */
    updateGroupRaw(requestParameters: UpdateGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupDTO>>;

    /**
     * Update group information
     */
    updateGroup(requestParameters: UpdateGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupDTO>;

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
    updateUserInGroupRaw(requestParameters: UpdateUserInGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupDTO>>;

    /**
     * Update user in a group
     */
    updateUserInGroup(requestParameters: UpdateUserInGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupDTO>;

}

/**
 * 
 */
export class GroupApi extends runtime.BaseAPI implements GroupApiInterface {

    /**
     * Add a user to the group
     */
    async addUserToGroupRaw(requestParameters: AddUserToGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupDTO>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling addUserToGroup.');
        }

        if (requestParameters.addUserGroupRequest === null || requestParameters.addUserGroupRequest === undefined) {
            throw new runtime.RequiredError('addUserGroupRequest','Required parameter requestParameters.addUserGroupRequest was null or undefined when calling addUserToGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/group/{groupId}/user`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters.groupId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AddUserGroupRequestToJSON(requestParameters.addUserGroupRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupDTOFromJSON(jsonValue));
    }

    /**
     * Add a user to the group
     */
    async addUserToGroup(requestParameters: AddUserToGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupDTO> {
        const response = await this.addUserToGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a group
     */
    async createGroupRaw(requestParameters: CreateGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupDTO>> {
        if (requestParameters.groupCreationRequest === null || requestParameters.groupCreationRequest === undefined) {
            throw new runtime.RequiredError('groupCreationRequest','Required parameter requestParameters.groupCreationRequest was null or undefined when calling createGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/group`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GroupCreationRequestToJSON(requestParameters.groupCreationRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupDTOFromJSON(jsonValue));
    }

    /**
     * Create a group
     */
    async createGroup(requestParameters: CreateGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupDTO> {
        const response = await this.createGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a group
     */
    async deleteGroupRaw(requestParameters: DeleteGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling deleteGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/group/{groupId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters.groupId))),
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
     * Get group information
     */
    async getGroupRaw(requestParameters: GetGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupDTO>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling getGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/group/{groupId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters.groupId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupDTOFromJSON(jsonValue));
    }

    /**
     * Get group information
     */
    async getGroup(requestParameters: GetGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupDTO> {
        const response = await this.getGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get my groups
     */
    async getGroupsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GroupDTO>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/group/groups`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GroupDTOFromJSON));
    }

    /**
     * Get my groups
     */
    async getGroups(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GroupDTO>> {
        const response = await this.getGroupsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Remove user from a group
     */
    async removeUserFromGroupRaw(requestParameters: RemoveUserFromGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling removeUserFromGroup.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling removeUserFromGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
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
     * Remove user from a group
     */
    async removeUserFromGroup(requestParameters: RemoveUserFromGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.removeUserFromGroupRaw(requestParameters, initOverrides);
    }

    /**
     * Update group information
     */
    async updateGroupRaw(requestParameters: UpdateGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupDTO>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling updateGroup.');
        }

        if (requestParameters.groupUpdateRequest === null || requestParameters.groupUpdateRequest === undefined) {
            throw new runtime.RequiredError('groupUpdateRequest','Required parameter requestParameters.groupUpdateRequest was null or undefined when calling updateGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/group/{groupId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters.groupId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: GroupUpdateRequestToJSON(requestParameters.groupUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupDTOFromJSON(jsonValue));
    }

    /**
     * Update group information
     */
    async updateGroup(requestParameters: UpdateGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupDTO> {
        const response = await this.updateGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update user in a group
     */
    async updateUserInGroupRaw(requestParameters: UpdateUserInGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupDTO>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling updateUserInGroup.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling updateUserInGroup.');
        }

        if (requestParameters.updateUserGroupRequest === null || requestParameters.updateUserGroupRequest === undefined) {
            throw new runtime.RequiredError('updateUserGroupRequest','Required parameter requestParameters.updateUserGroupRequest was null or undefined when calling updateUserInGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/group/{groupId}/user/{userId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters.groupId))).replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateUserGroupRequestToJSON(requestParameters.updateUserGroupRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupDTOFromJSON(jsonValue));
    }

    /**
     * Update user in a group
     */
    async updateUserInGroup(requestParameters: UpdateUserInGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupDTO> {
        const response = await this.updateUserInGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
