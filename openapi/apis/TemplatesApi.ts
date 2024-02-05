/* tslint:disable */
/* eslint-disable */
/**
 * Template Service
 * This is a Template YAML For Microservices
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ErrorResponse,
  Template,
  TemplateFull,
  TemplateListResponse,
  TemplateResponse,
} from '../models/index';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    TemplateFromJSON,
    TemplateToJSON,
    TemplateFullFromJSON,
    TemplateFullToJSON,
    TemplateListResponseFromJSON,
    TemplateListResponseToJSON,
    TemplateResponseFromJSON,
    TemplateResponseToJSON,
} from '../models/index';

export interface CreateTemplateRequest {
    template: Template;
}

export interface DeleteTemplateRequest {
    id: number;
}

export interface GetTemplateRequest {
    id: number;
}

export interface UpdateTemplateRequest {
    id: number;
    templateFull: TemplateFull;
}

/**
 * 
 */
export class TemplatesApi extends runtime.BaseAPI {

    /**
     * This is a template description
     * This is a template post method
     */
    async createTemplateRaw(requestParameters: CreateTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TemplateResponse>> {
        if (requestParameters.template === null || requestParameters.template === undefined) {
            throw new runtime.RequiredError('template','Required parameter requestParameters.template was null or undefined when calling createTemplate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/templates`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TemplateToJSON(requestParameters.template),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TemplateResponseFromJSON(jsonValue));
    }

    /**
     * This is a template description
     * This is a template post method
     */
    async createTemplate(requestParameters: CreateTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TemplateResponse> {
        const response = await this.createTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This is a template description
     * This is a template delete method
     */
    async deleteTemplateRaw(requestParameters: DeleteTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteTemplate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/templates/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This is a template description
     * This is a template delete method
     */
    async deleteTemplate(requestParameters: DeleteTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteTemplateRaw(requestParameters, initOverrides);
    }

    /**
     * This is a template description
     * This is a template get by id method
     */
    async getTemplateRaw(requestParameters: GetTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TemplateResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getTemplate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/templates/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TemplateResponseFromJSON(jsonValue));
    }

    /**
     * This is a template description
     * This is a template get by id method
     */
    async getTemplate(requestParameters: GetTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TemplateResponse> {
        const response = await this.getTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This is a template description
     * This is a template get all method
     */
    async getTemplatesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TemplateListResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/templates`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TemplateListResponseFromJSON(jsonValue));
    }

    /**
     * This is a template description
     * This is a template get all method
     */
    async getTemplates(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TemplateListResponse> {
        const response = await this.getTemplatesRaw(initOverrides);
        return await response.value();
    }

    /**
     * This is a template description
     * This is a template put method
     */
    async updateTemplateRaw(requestParameters: UpdateTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TemplateResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateTemplate.');
        }

        if (requestParameters.templateFull === null || requestParameters.templateFull === undefined) {
            throw new runtime.RequiredError('templateFull','Required parameter requestParameters.templateFull was null or undefined when calling updateTemplate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/templates/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TemplateFullToJSON(requestParameters.templateFull),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TemplateResponseFromJSON(jsonValue));
    }

    /**
     * This is a template description
     * This is a template put method
     */
    async updateTemplate(requestParameters: UpdateTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TemplateResponse> {
        const response = await this.updateTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
