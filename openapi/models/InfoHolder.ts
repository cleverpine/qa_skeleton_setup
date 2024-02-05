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
/**
 * This is a object holding the version information
 * @export
 * @interface InfoHolder
 */
export interface InfoHolder {
    /**
     * 
     * @type {string}
     * @memberof InfoHolder
     */
    appBuildVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof InfoHolder
     */
    appBuildTime?: string;
}

/**
 * Check if a given object implements the InfoHolder interface.
 */
export function instanceOfInfoHolder(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InfoHolderFromJSON(json: any): InfoHolder {
    return InfoHolderFromJSONTyped(json, false);
}

export function InfoHolderFromJSONTyped(json: any, ignoreDiscriminator: boolean): InfoHolder {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appBuildVersion': !exists(json, 'appBuildVersion') ? undefined : json['appBuildVersion'],
        'appBuildTime': !exists(json, 'appBuildTime') ? undefined : json['appBuildTime'],
    };
}

export function InfoHolderToJSON(value?: InfoHolder | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appBuildVersion': value.appBuildVersion,
        'appBuildTime': value.appBuildTime,
    };
}

