/* tslint:disable */
/* eslint-disable */
/**
 * BankWiz API
 * An API for accessing banking functionalities provided by BankWiz
 *
 * The version of the OpenAPI document: 0.14.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CreateTransactionRequest,
  TransactionDTO,
} from '../models/index';
import {
    CreateTransactionRequestFromJSON,
    CreateTransactionRequestToJSON,
    TransactionDTOFromJSON,
    TransactionDTOToJSON,
} from '../models/index';

export interface CreateTransactionOperationRequest {
    createTransactionRequest: CreateTransactionRequest;
}

/**
 * TransactionServiceApi - interface
 * 
 * @export
 * @interface TransactionServiceApiInterface
 */
export interface TransactionServiceApiInterface {
    /**
     * 
     * @summary Create a new transaction
     * @param {CreateTransactionRequest} createTransactionRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionServiceApiInterface
     */
    createTransactionRaw(requestParameters: CreateTransactionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionDTO>>;

    /**
     * Create a new transaction
     */
    createTransaction(requestParameters: CreateTransactionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionDTO>;

}

/**
 * 
 */
export class TransactionServiceApi extends runtime.BaseAPI implements TransactionServiceApiInterface {

    /**
     * Create a new transaction
     */
    async createTransactionRaw(requestParameters: CreateTransactionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionDTO>> {
        if (requestParameters.createTransactionRequest === null || requestParameters.createTransactionRequest === undefined) {
            throw new runtime.RequiredError('createTransactionRequest','Required parameter requestParameters.createTransactionRequest was null or undefined when calling createTransaction.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["openid", "profile", "email"]);
        }

        const response = await this.request({
            path: `/transactions`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CreateTransactionRequestToJSON(requestParameters.createTransactionRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionDTOFromJSON(jsonValue));
    }

    /**
     * Create a new transaction
     */
    async createTransaction(requestParameters: CreateTransactionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionDTO> {
        const response = await this.createTransactionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}