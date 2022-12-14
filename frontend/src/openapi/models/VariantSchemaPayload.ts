/* tslint:disable */
/* eslint-disable */
/**
 * Unleash API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 4.11.0-beta.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface VariantSchemaPayload
 */
export interface VariantSchemaPayload {
    /**
     * 
     * @type {string}
     * @memberof VariantSchemaPayload
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof VariantSchemaPayload
     */
    value: string;
}

export function VariantSchemaPayloadFromJSON(json: any): VariantSchemaPayload {
    return VariantSchemaPayloadFromJSONTyped(json, false);
}

export function VariantSchemaPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): VariantSchemaPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'value': json['value'],
    };
}

export function VariantSchemaPayloadToJSON(value?: VariantSchemaPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'value': value.value,
    };
}

