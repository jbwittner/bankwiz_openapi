/* tslint:disable */
/* eslint-disable */
/**
 * BankWiz API
 * An API for accessing banking functionalities provided by BankWiz s
 *
 * The version of the OpenAPI document: 0.11.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BankAccountCreationRequest,
  BankAccountIndexDTO,
  GroupBankAccountIndexDTO,
} from '../models/index';
import {
    BankAccountCreationRequestFromJSON,
    BankAccountCreationRequestToJSON,
    BankAccountIndexDTOFromJSON,
    BankAccountIndexDTOToJSON,
    GroupBankAccountIndexDTOFromJSON,
    GroupBankAccountIndexDTOToJSON,
} from '../models/index';

export interface CreateBankAccountRequest {
    bankAccountCreationRequest: BankAccountCreationRequest;
}

/**
 * BankAccountServiceApi - interface
 * 
 * @export
 * @interface BankAccountServiceApiInterface
 */
export interface BankAccountServiceApiInterface {
    /**
     * 
     * @summary Create a bank account
     * @param {BankAccountCreationRequest} bankAccountCreationRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankAccountServiceApiInterface
     */
    createBankAccountRaw(requestParameters: CreateBankAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BankAccountIndexDTO>>;

    /**
     * Create a bank account
     */
    createBankAccount(requestParameters: CreateBankAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BankAccountIndexDTO>;

    /**
     * 
     * @summary Get all bank account
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankAccountServiceApiInterface
     */
    getAllBankAccountRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GroupBankAccountIndexDTO>>>;

    /**
     * Get all bank account
     */
    getAllBankAccount(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GroupBankAccountIndexDTO>>;

}

/**
 * 
 */
export class BankAccountServiceApi extends runtime.BaseAPI implements BankAccountServiceApiInterface {

    /**
     * Create a bank account
     */
    async createBankAccountRaw(requestParameters: CreateBankAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BankAccountIndexDTO>> {
        if (requestParameters.bankAccountCreationRequest === null || requestParameters.bankAccountCreationRequest === undefined) {
            throw new runtime.RequiredError('bankAccountCreationRequest','Required parameter requestParameters.bankAccountCreationRequest was null or undefined when calling createBankAccount.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["openid", "profile", "email"]);
        }

        const response = await this.request({
            path: `/bankaccount`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BankAccountCreationRequestToJSON(requestParameters.bankAccountCreationRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BankAccountIndexDTOFromJSON(jsonValue));
    }

    /**
     * Create a bank account
     */
    async createBankAccount(requestParameters: CreateBankAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BankAccountIndexDTO> {
        const response = await this.createBankAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all bank account
     */
    async getAllBankAccountRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GroupBankAccountIndexDTO>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["openid", "profile", "email"]);
        }

        const response = await this.request({
            path: `/bankaccount/bankaccounts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GroupBankAccountIndexDTOFromJSON));
    }

    /**
     * Get all bank account
     */
    async getAllBankAccount(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GroupBankAccountIndexDTO>> {
        const response = await this.getAllBankAccountRaw(initOverrides);
        return await response.value();
    }

}
