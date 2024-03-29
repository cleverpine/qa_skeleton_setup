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
 * @interface TemplateResponse
 */
export interface TemplateResponse {
    /**
     * 
     * @type {TemplateFull}
     * @memberof TemplateResponse
     */
    data?: TemplateFull;
    /**
     * 
     * @type {ErrorData}
     * @memberof TemplateResponse
     */
    error?: ErrorData;
}

/**
 * Check if a given object implements the TemplateResponse interface.
 */
export function instanceOfTemplateResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateResponseFromJSON(json: any): TemplateResponse {
    return TemplateResponseFromJSONTyped(json, false);
}

export function TemplateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : TemplateFullFromJSON(json['data']),
        'error': !exists(json, 'error') ? undefined : ErrorDataFromJSON(json['error']),
    };
}

export function TemplateResponseToJSON(value?: TemplateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': TemplateFullToJSON(value.data),
        'error': ErrorDataToJSON(value.error),
    };
}

