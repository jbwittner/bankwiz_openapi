/* tslint:disable */
/* eslint-disable */
/**
 * BankWiz API
 * An API for accessing banking functionalities provided by BankWiz
 *
 * The version of the OpenAPI document: 0.2.5
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
import { TransactionCreationRequest } from '../model';
// @ts-ignore
import { TransactionDTO } from '../model';
// @ts-ignore
import { TransactionUpdateRequest } from '../model';
/**
 * TransactionApi - axios parameter creator
 * @export
 */
export const TransactionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add an transaction
         * @param {TransactionCreationRequest} transactionCreationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addTransaction: async (transactionCreationRequest: TransactionCreationRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionCreationRequest' is not null or undefined
            assertParamExists('addTransaction', 'transactionCreationRequest', transactionCreationRequest)
            const localVarPath = `/transaction`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(transactionCreationRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete a transaction
         * @param {number} transactionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTransaction: async (transactionId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionId' is not null or undefined
            assertParamExists('deleteTransaction', 'transactionId', transactionId)
            const localVarPath = `/transaction/{transactionId}`
                .replace(`{${"transactionId"}}`, encodeURIComponent(String(transactionId)));
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
         * @summary Get a transaction
         * @param {number} transactionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransaction: async (transactionId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionId' is not null or undefined
            assertParamExists('getTransaction', 'transactionId', transactionId)
            const localVarPath = `/transaction/{transactionId}`
                .replace(`{${"transactionId"}}`, encodeURIComponent(String(transactionId)));
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
         * @summary Update the transaction information
         * @param {number} transactionId 
         * @param {TransactionUpdateRequest} transactionUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTransaction: async (transactionId: number, transactionUpdateRequest: TransactionUpdateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionId' is not null or undefined
            assertParamExists('updateTransaction', 'transactionId', transactionId)
            // verify required parameter 'transactionUpdateRequest' is not null or undefined
            assertParamExists('updateTransaction', 'transactionUpdateRequest', transactionUpdateRequest)
            const localVarPath = `/transaction/{transactionId}`
                .replace(`{${"transactionId"}}`, encodeURIComponent(String(transactionId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(transactionUpdateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TransactionApi - functional programming interface
 * @export
 */
export const TransactionApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TransactionApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Add an transaction
         * @param {TransactionCreationRequest} transactionCreationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addTransaction(transactionCreationRequest: TransactionCreationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addTransaction(transactionCreationRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete a transaction
         * @param {number} transactionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteTransaction(transactionId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTransaction(transactionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get a transaction
         * @param {number} transactionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTransaction(transactionId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTransaction(transactionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update the transaction information
         * @param {number} transactionId 
         * @param {TransactionUpdateRequest} transactionUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateTransaction(transactionId: number, transactionUpdateRequest: TransactionUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTransaction(transactionId, transactionUpdateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TransactionApi - factory interface
 * @export
 */
export const TransactionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TransactionApiFp(configuration)
    return {
        /**
         * 
         * @summary Add an transaction
         * @param {TransactionCreationRequest} transactionCreationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addTransaction(transactionCreationRequest: TransactionCreationRequest, options?: any): AxiosPromise<TransactionDTO> {
            return localVarFp.addTransaction(transactionCreationRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete a transaction
         * @param {number} transactionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTransaction(transactionId: number, options?: any): AxiosPromise<void> {
            return localVarFp.deleteTransaction(transactionId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get a transaction
         * @param {number} transactionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransaction(transactionId: number, options?: any): AxiosPromise<TransactionDTO> {
            return localVarFp.getTransaction(transactionId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update the transaction information
         * @param {number} transactionId 
         * @param {TransactionUpdateRequest} transactionUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTransaction(transactionId: number, transactionUpdateRequest: TransactionUpdateRequest, options?: any): AxiosPromise<TransactionDTO> {
            return localVarFp.updateTransaction(transactionId, transactionUpdateRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TransactionApi - interface
 * @export
 * @interface TransactionApi
 */
export interface TransactionApiInterface {
    /**
     * 
     * @summary Add an transaction
     * @param {TransactionCreationRequest} transactionCreationRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApiInterface
     */
    addTransaction(transactionCreationRequest: TransactionCreationRequest, options?: AxiosRequestConfig): AxiosPromise<TransactionDTO>;

    /**
     * 
     * @summary Delete a transaction
     * @param {number} transactionId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApiInterface
     */
    deleteTransaction(transactionId: number, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @summary Get a transaction
     * @param {number} transactionId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApiInterface
     */
    getTransaction(transactionId: number, options?: AxiosRequestConfig): AxiosPromise<TransactionDTO>;

    /**
     * 
     * @summary Update the transaction information
     * @param {number} transactionId 
     * @param {TransactionUpdateRequest} transactionUpdateRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApiInterface
     */
    updateTransaction(transactionId: number, transactionUpdateRequest: TransactionUpdateRequest, options?: AxiosRequestConfig): AxiosPromise<TransactionDTO>;

}

/**
 * TransactionApi - object-oriented interface
 * @export
 * @class TransactionApi
 * @extends {BaseAPI}
 */
export class TransactionApi extends BaseAPI implements TransactionApiInterface {
    /**
     * 
     * @summary Add an transaction
     * @param {TransactionCreationRequest} transactionCreationRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApi
     */
    public addTransaction(transactionCreationRequest: TransactionCreationRequest, options?: AxiosRequestConfig) {
        return TransactionApiFp(this.configuration).addTransaction(transactionCreationRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete a transaction
     * @param {number} transactionId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApi
     */
    public deleteTransaction(transactionId: number, options?: AxiosRequestConfig) {
        return TransactionApiFp(this.configuration).deleteTransaction(transactionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get a transaction
     * @param {number} transactionId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApi
     */
    public getTransaction(transactionId: number, options?: AxiosRequestConfig) {
        return TransactionApiFp(this.configuration).getTransaction(transactionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update the transaction information
     * @param {number} transactionId 
     * @param {TransactionUpdateRequest} transactionUpdateRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApi
     */
    public updateTransaction(transactionId: number, transactionUpdateRequest: TransactionUpdateRequest, options?: AxiosRequestConfig) {
        return TransactionApiFp(this.configuration).updateTransaction(transactionId, transactionUpdateRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

