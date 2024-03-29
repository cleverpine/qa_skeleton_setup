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

import { exists, mapValues } from '../runtime';
import type { ErrorData } from './ErrorData';
import {
    ErrorDataFromJSON,
    ErrorDataFromJSONTyped,
    ErrorDataToJSON,
} from './ErrorData';
import type { TemplateFull } from './TemplateFull';
import {
    TemplateFullFromJSON,
    TemplateFullFromJSONTyped,
    TemplateFullToJSON,
} from './TemplateFull';

/**
 * 
 * @export
 * @interface TemplateListResponse
 */
export interface TemplateListResponse {
    /**
     * 
     * @type {Array<TemplateFull>}
     * @memberof TemplateListResponse
     */
    data?: Array<TemplateFull>;
    /**
     * 
     * @type {ErrorData}
     * @memberof TemplateListResponse
     */
    error?: ErrorData;
}

/**
 * Check if a given object implements the TemplateListResponse interface.
 */
export function instanceOfTemplateListResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateListResponseFromJSON(json: any): TemplateListResponse {
    return TemplateListResponseFromJSONTyped(json, false);
}

export function TemplateListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(TemplateFullFromJSON)),
        'error': !exists(json, 'error') ? undefined : ErrorDataFromJSON(json['error']),
    };
}

export function TemplateListResponseToJSON(value?: TemplateListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(TemplateFullToJSON)),
        'error': ErrorDataToJSON(value.error),
    };
}

